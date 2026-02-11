'use client';

import { useEffect, useState } from 'react';
import { colors } from '@/lib/design';

type ToastType = 'success' | 'error';

interface ToastProps {
  type: ToastType;
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ type, message, isVisible, onClose }: ToastProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!shouldRender) return null;

  const isSuccess = type === 'success';
  const bgColor = isSuccess ? colors.semantic.success : colors.semantic.error;
  const icon = isSuccess ? (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ) : (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );

  return (
    <div className="fixed top-4 right-4 z-[9999] animate-slide-down">
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white"
        style={{ backgroundColor: bgColor }}
      >
        <span className="flex-shrink-0">{icon}</span>
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={() => {
            setShouldRender(false);
            onClose();
          }}
          className="ml-2 flex-shrink-0 hover:opacity-70 transition-opacity"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
