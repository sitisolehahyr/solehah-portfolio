import { ImageResponse } from "next/og";
import siteData from "@/data/siteData.json";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const { personal } = siteData;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #ffffff 0%, #f0fdfa 55%, #e0f2fe 100%)",
          color: "#0f172a",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "10px 16px",
              borderRadius: 999,
              background: "rgba(10, 102, 194, 0.10)",
              border: "1px solid rgba(10, 102, 194, 0.25)",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase"
            }}
          >
            Portfolio
          </div>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05 }}>{personal.name}</div>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#0a66c2" }}>{personal.title}</div>
          <div style={{ fontSize: 26, lineHeight: 1.35, color: "#334155" }}>{personal.tagline}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#0f172a" }}>{personal.location}</div>
            <div style={{ fontSize: 20, color: "#475569" }}>{personal.email}</div>
          </div>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 28,
              background: "linear-gradient(135deg, rgba(10,102,194,0.18), rgba(16,185,129,0.14))",
              border: "1px solid rgba(15, 23, 42, 0.08)"
            }}
          />
        </div>
      </div>
    ),
    size
  );
}

