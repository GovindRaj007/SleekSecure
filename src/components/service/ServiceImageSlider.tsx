import { useState, useEffect, useRef } from "react";
import { BUSINESS } from "@/lib/constants";
import { useSliderTouch } from "@/hooks/use-slider-touch";

interface ServiceImageSliderProps {
  images: string[];
  serviceTitle: string;
  features: string[];
}

const ServiceImageSlider = ({ images, serviceTitle, features }: ServiceImageSliderProps) => {
  const [current, setCurrent] = useState(0);
  const holdingRef = useRef(false);

  const setHolding = (v: boolean) => { holdingRef.current = v; };
  const { onTouchStart, onTouchMove, onTouchEnd } = useSliderTouch(setCurrent, images.length, setHolding);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!holdingRef.current) {
        setCurrent((prev) => (prev + 1) % images.length);
      }
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] md:aspect-auto md:h-80 touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img src={img} alt={`${serviceTitle} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xs">S</span>
              </div>
              <span className="text-primary-foreground font-heading font-semibold text-sm">{BUSINESS.name}</span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-accent/90 text-accent-foreground text-[10px] md:text-xs font-semibold uppercase tracking-wider">
              {features[i % features.length]}
            </span>
          </div>
        </div>
      ))}
      <div className="absolute top-3 right-3 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-accent w-5" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceImageSlider;
