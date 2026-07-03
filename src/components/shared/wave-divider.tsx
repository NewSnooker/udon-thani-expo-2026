/** Signature organic wetland-water divider used between key sections. */
export function WaveDivider({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`h-16 w-full md:h-20 ${flip ? "-scale-y-100" : ""}`}
      >
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,80 L0,80 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
