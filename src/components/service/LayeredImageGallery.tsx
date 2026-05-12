import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayeredImageGalleryProps {
  images: { src: string; alt: string }[];
  title?: string;
}

const LayeredImageGallery = ({ images, title }: LayeredImageGalleryProps) => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const visibleCount = Math.min(3, images.length);

  const goNext = () => setCurrent((prev) => (prev + 1) % images.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      goNext();
    }
    if (touchStart - touchEnd < -50) {
      // Swiped right
      goPrev();
    }
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(images[(current + i) % images.length]);
    }
    return visible;
  };

  const visibleImages = getVisibleImages();

  return (
    <section className="py-14 md:py-20 pb-28 md:pb-32 bg-secondary">
      <div className="container-custom">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">
              {title}
            </h2>
          </div>
        )}

        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative h-[400px] md:h-[500px] lg:h-[600px] mx-auto max-w-3xl"
        >
          {/* Layered Images Stack - Cascading from top-left downward and rightward */}
          {visibleImages.map((img, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-all duration-500 ease-out"
              style={{
                zIndex: visibleCount - idx,
                transform: `translateY(${idx * 18}px) translateX(${idx * 8}px) scale(${1 - idx * 0.02})`,
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-background">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}

          {/* Navigation Buttons - Below images */}
          <div className="absolute bottom-[-107px] left-1/2 -translate-x-1/2 flex gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={goPrev}
              className="w-12 h-12 p-0 rounded-full border-2 border-foreground/20 hover:border-primary hover:bg-primary/10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={goNext}
              className="w-12 h-12 p-0 rounded-full border-2 border-foreground/20 hover:border-primary hover:bg-primary/10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayeredImageGallery;
