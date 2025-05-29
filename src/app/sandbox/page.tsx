"use client";
import TemplatePage from "../TemplatePage";
import { useEffect, useState } from "react";

export default function SandboxPage() {
  const [referrer, setReferrer] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReferrer(document.referrer);
    }
  }, []);

  return (
    <TemplatePage>
      <iframe
        src={`http://localhost:5173${
          referrer ? `?from=${encodeURIComponent(referrer)}` : ""
        }`}
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
