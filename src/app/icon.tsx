import ImageResponse from "next/server";
import favicon from "./public/assets/favicon.png";

export const runtime = "edge";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to bottom right, #0066CC, #0a7cff)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "128px",
        }}
      >
        <div
          style={{
            width: "180px",
            height: "180px",
            background: "#ffffff",
            borderRadius: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Simbol Akunting: Dokumen dengan checklist */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            style={{ color: "#0066CC" }}
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M7 7h10M7 12h10M7 17h6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
