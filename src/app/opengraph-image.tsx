import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = "ReCounting | Accounting & Bookkeeping Services in Bali";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
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
            top: "80px",
            right: "120px",
            width: "260px",
            height: "260px",
            borderRadius: "999px",
            background: "radial-gradient(circle, rgba(0,102,204,0.3), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "90px",
            width: "220px",
            height: "220px",
            borderRadius: "999px",
            background: "radial-gradient(circle, rgba(32,140,141,0.28), transparent 70%)",
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
              width: "120px",
              height: "120px",
              borderRadius: "28px",
              background: "#0066CC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            }}
          >
            <svg
              width="72"
              height="72"
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
            <div style={{ fontSize: "48px", fontWeight: 800, lineHeight: 1.1 }}>
              Stress-free accounting for Bali businesses
            </div>
            <div style={{ fontSize: "24px", color: "#626C71" }}>
              Bookkeeping · Tax Compliance · Payroll support
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
