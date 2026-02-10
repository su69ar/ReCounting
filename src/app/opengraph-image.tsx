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
          <img
            src={`${siteConfig.url}/assets/ReCounting_Logo_Accounting_Services.png`}
            alt="ReCounting Logo"
            width="120"
            height="120"
            style={{
              objectFit: "contain",
            }}
          />
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
