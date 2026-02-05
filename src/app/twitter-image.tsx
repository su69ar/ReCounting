import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = "ReCounting | Accounting & Bookkeeping Services in Bali";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FCFCF9 0%, #EEF4FA 60%, #E4F1F0 100%)",
          fontFamily: "Arial, sans-serif",
          color: "#1F2121",
          position: "relative",
          padding: "80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "90px",
            right: "130px",
            width: "240px",
            height: "240px",
            borderRadius: "999px",
            background: "radial-gradient(circle, rgba(0,102,204,0.28), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "70px",
            left: "110px",
            width: "210px",
            height: "210px",
            borderRadius: "999px",
            background: "radial-gradient(circle, rgba(32,140,141,0.25), transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
            maxWidth: "980px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "26px",
              background: "#0066CC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            }}
          >
            <svg
              width="68"
              height="68"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="5" y="4" width="14" height="16" rx="3" stroke="#FCFCF9" strokeWidth="2" />
              <path d="M8 9h8" stroke="#FCFCF9" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 12.5h5" stroke="#FCFCF9" strokeWidth="2" strokeLinecap="round" />
              <path d="m13.5 15.2 1.6 1.6 3-3.4" stroke="#208C8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#208C8D",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              ReCounting
            </div>
            <div style={{ fontSize: "46px", fontWeight: 800, lineHeight: 1.1 }}>
              Accounting & bookkeeping for Bali businesses
            </div>
            <div style={{ fontSize: "24px", color: "#626C71" }}>
              Fast, compliant, English-first support
            </div>
            <div style={{ fontSize: "18px", color: "#626C71" }}>{siteConfig.phone}</div>
          </div>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
