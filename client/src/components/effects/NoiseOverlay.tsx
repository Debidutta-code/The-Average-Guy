"use client";

export default function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03]">
      <svg className="h-full w-full">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
