import { ImageResponse } from "next/og";
import siteData from "@/data/siteData.json";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function TwitterImage() {
  const { personal } = siteData;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #020617 0%, #0f172a 55%, #1f2937 100%)",
          color: "#ffffff",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.08 }}>{personal.name}</div>
        <div style={{ marginTop: 18, fontSize: 30, fontWeight: 700, color: "rgba(94, 234, 212, 0.95)" }}>
          {personal.title}
        </div>
        <div style={{ marginTop: 16, fontSize: 24, lineHeight: 1.35, color: "rgba(226, 232, 240, 0.92)" }}>
          {personal.tagline}
        </div>
      </div>
    ),
    size
  );
}

