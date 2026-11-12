import { useRef, useState, type PointerEvent } from "react";

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
}

/** Movement (px) before a touch gesture is classified as a horizontal slide or a vertical scroll. */
const GESTURE_THRESHOLD = 8;

const BeforeAfterSlider = ({ beforeImg, afterImg, beforeLabel = "Before", afterLabel = "After" }: BeforeAfterSliderProps) => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<{ id: number; x: number; y: number; sliding: boolean } | null>(null);

  const updateFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") {
      if (e.button !== 0) return;
      drag.current = { id: e.pointerId, x: e.clientX, y: e.clientY, sliding: true };
      e.currentTarget.setPointerCapture(e.pointerId);
      updateFromClientX(e.clientX);
      return;
    }
    // Touch / pen: don't move the bar yet; wait to see which way the finger goes.
    drag.current = { id: e.pointerId, x: e.clientX, y: e.clientY, sliding: false };
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    if (!d.sliding) {
      const dx = Math.abs(e.clientX - d.x);
      const dy = Math.abs(e.clientY - d.y);
      if (dx < GESTURE_THRESHOLD && dy < GESTURE_THRESHOLD) return;
      if (dy >= dx) {
        // Vertical gesture: leave it to the browser so the page scrolls (touch-action: pan-y).
        drag.current = null;
        return;
      }
      d.sliding = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    updateFromClientX(e.clientX);
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    if (drag.current?.id === e.pointerId) drag.current = null;
  };

  return (
    <div
      ref={ref}
      // pan-y: the browser handles vertical scrolling natively; horizontal drags come to us.
      className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-2xl shadow-xl select-none touch-pan-y cursor-ew-resize has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary has-[:focus-visible]:ring-offset-2"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {/* After (full) */}
      <img
        src={afterImg}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      <span className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-[11px] font-semibold uppercase tracking-wide">{afterLabel}</span>

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={beforeImg}
          alt={beforeLabel}
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${(100 / Math.max(pos, 0.01)) * 100}%`, maxWidth: "none" }}
          loading="lazy"
          decoding="async"
          draggable={false}
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

      {/* Keyboard / screen-reader control (arrow keys). Pointer input is handled by the container. */}
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Before / After comparison slider"
        className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
      />
    </div>
  );
};

export default BeforeAfterSlider;
