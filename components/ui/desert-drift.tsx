"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface DesertDriftProps {
  className?: string;
}

export const DesertDrift = ({ className }: DesertDriftProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("w-full h-full relative", className)}>
      {/* Loading state – pulsing dot until iframe fires onLoad */}
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#060d0a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#00ff88",
              boxShadow: "0 0 20px #00ff88",
              animation: "spline-pulse 1.2s ease-in-out infinite",
            }}
          />
        </div>
      )}

      <iframe
        src="https://my.spline.design/untitled-k1KQe1bIq5W7lZvLark2ZzGe/"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          pointerEvents: "none",      // don't intercept scroll
          display: "block",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
