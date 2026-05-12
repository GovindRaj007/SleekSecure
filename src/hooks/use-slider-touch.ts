import { useRef, useCallback } from "react";

export function useSliderTouch(
  setCurrent: React.Dispatch<React.SetStateAction<number>>,
  total: number,
  setHolding: (holding: boolean) => void
) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    setHolding(true);
  }, [setHolding]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(() => {
    setHolding(false);
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left → next
        setCurrent((prev) => (prev + 1) % total);
      } else {
        // Swipe right → prev
        setCurrent((prev) => (prev - 1 + total) % total);
      }
    }
  }, [setCurrent, total, setHolding]);

  return { onTouchStart, onTouchMove, onTouchEnd };
}
