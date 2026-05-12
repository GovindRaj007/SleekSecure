import { useRef, useState } from "react";

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({ beforeImg, afterImg, beforeLabel = "Before", afterLabel = "After" }: BeforeAfterSliderProps) => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-2xl shadow-xl select-none touch-none"
      onMouseMove={(e) => e.buttons === 1 && updateFromClientX(e.clientX)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
      onClick={(e) => updateFromClientX(e.clientX)}
    >
      {/* After (full) */}
      <img src={afterImg} alt={afterLabel} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <span className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-[11px] font-semibold uppercase tracking-wide">{afterLabel}</span>

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={beforeImg}
          alt={beforeLabel}
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
          loading="lazy"
        />
        <span className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-foreground/80 text-background text-[11px] font-semibold uppercase tracking-wide">{beforeLabel}</span>
      </div>

      {/* Divider */}
      <div className="absolute top-0 bottom-0 z-10 pointer-events-none" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
        <div className="w-0.5 h-full bg-primary-foreground shadow-[0_0_12px_rgba(0,0,0,0.4)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground shadow-lg flex items-center justify-center">
          <div className="flex items-center gap-0.5 text-primary">
            <span className="text-xs">◀</span>
            <span className="text-xs">▶</span>
          </div>
        </div>
      </div>

      {/* Range input for accessibility */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Before / After comparison slider"
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
      />
    </div>
  );
};

export default BeforeAfterSlider;
