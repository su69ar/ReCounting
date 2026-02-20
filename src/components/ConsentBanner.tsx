"use client";

import { useCallback, useEffect, useState } from "react";

type ConsentValue = "granted" | "denied";

const CONSENT_KEY = "ga-consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const consentPayload = (value: ConsentValue) => ({
  ad_storage: value,
  analytics_storage: value,
  ad_user_data: value,
  ad_personalization: value,
});

const applyConsent = (value: ConsentValue) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const payload = consentPayload(value);

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", payload);
    return;
  }

  window.dataLayer.push(["consent", "update", payload]);
};

function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CONSENT_KEY) as ConsentValue | null;
}

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored === null) {
      setVisible(true);
    } else {
      applyConsent(stored);
    }
  }, []);

  const handleChoice = useCallback((value: ConsentValue) => {
    localStorage.setItem(CONSENT_KEY, value);
    applyConsent(value);
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-lg backdrop-blur md:inset-x-auto md:right-6 md:max-w-md">
      <p className="text-sm text-neutral-700">
        We use cookies for analytics to improve the site experience. You can accept or reject analytics cookies.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          className="btn btn-primary-new"
          onClick={() => handleChoice("granted")}
        >
          Accept
        </button>
        <button
          type="button"
          className="btn btn-secondary-new"
          onClick={() => handleChoice("denied")}
        >
          Reject
        </button>
      </div>
    </div>
  );
}
