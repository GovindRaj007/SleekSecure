import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { useSliderTouch } from "@/hooks/use-slider-touch";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Visakhapatnam",
    text: "Excellent work! The invisible grills on our balcony are barely noticeable, and we feel much safer knowing our kids can play freely. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    location: "Hyderabad",
    text: "We got invisible grills installed for all our windows. The team was professional, punctual, and the quality is outstanding. Great value for money.",
    rating: 5,
  },
  {
    name: "Venkat Rao",
    location: "Mehboobnagar",
    text: "The ceiling cloth hanger has been a game-changer for our apartment. Saves so much space and looks very neat. Thank you SleekSecure invisible grills!",
    rating: 5,
  },
  {
    name: "Lakshmi Devi",
    location: "Kompally",
    text: "Very impressed with the quality and service. The grills are truly invisible and our apartment looks beautiful. The warranty gives us peace of mind.",
    rating: 5,
  },
  {
    name: "Mohammed Khan",
    location: "Kadapa",
    text: "Invisible grills is very good quality. My family is using it for two year now and no problem is coming. Installation team was very fast and clean work they do.",
    rating: 5,
  },
  {
    name: "Sangeetha Reddy",
    location: "Hyderabad",
    text: "I am very happy with this grills. My daughter is playing in balcony and I am not worried now. Safety is most important for us and they are providing good product.",
    rating: 5,
  },
];

const Testimonials = () => {
  const extendedTestimonials = [...testimonials, ...testimonials];
  const [currentIndex, setCurrentIndex] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const holdingRef = useRef(false);
  
  const setHolding = (v: boolean) => { holdingRef.current = v; };

  const { onTouchStart, onTouchMove, onTouchEnd } = useSliderTouch(
    (updateFn) => {
      setCurrentIndex((prev) => {
        const next = typeof updateFn === 'function' ? updateFn(prev) : updateFn;
        return next;
      });
    },
    extendedTestimonials.length,
    setHolding
  );

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      if (!holdingRef.current) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Handle infinite loop: when reaching duplicate section, snap back to start
  useEffect(() => {
    if (currentIndex >= testimonials.length && divRef.current) {
      // Disable transition before jumping
      divRef.current.style.transition = 'none';
      // Force reflow to apply the style
      void divRef.current.offsetHeight;
      
      // Jump back to start
      setCurrentIndex(0);
      
      // Re-enable transition on next frame
      requestAnimationFrame(() => {
        if (divRef.current) {
          divRef.current.style.transition = 'transform 500ms ease-in-out';
        }
      });
    }
  }, [currentIndex]);

  return (
    <section className="section-padding gradient-dark">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mt-3 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-primary-foreground/60">
            Join 2,500+ satisfied homeowners who trust us for their safety needs.
          </p>
        </div>

        <div
          className="relative overflow-hidden touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={divRef}
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 500ms ease-in-out'
            }}
          >
            {extendedTestimonials.map((t, idx) => (
              <div key={`${t.name}-${idx}`} className="min-w-full px-1">
                <div className="card-gradient-dark rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/90 text-sm md:text-base leading-relaxed mb-6">"{t.text}"</p>
                  <div>
                    <div className="font-semibold text-primary-foreground">{t.name}</div>
                    <div className="text-sm text-primary-foreground/60">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === (currentIndex % testimonials.length) ? "bg-accent w-6" : "bg-primary-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
