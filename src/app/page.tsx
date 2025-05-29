"use client";
import TemplatePage from "./TemplatePage";

export default function Home() {
  return (
    <TemplatePage>
      <iframe
        src="http://localhost:5173"
        title="openweb-ui sandbox"
        width="100%"
        height="100%"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
          display: "block",
          background: "#f4f4f4",
        }}
      />
    </TemplatePage>
  );
}
