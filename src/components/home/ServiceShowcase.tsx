import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import thumbnailImg from "@/assets/hero-balcony-invisible-grills.jpg";
import wireImg from "@/assets/invisible-grill-wire.jpg";
import heroImg from "@/assets/hero-luxury-balcony.jpg";
import elegantImg from "@/assets/showcase-elegant-view.jpg";
import familySafeImg from "@/assets/showcase-family-safe-balcony.jpg";
import childrenSafetyImg from "@/assets/showcase-children-safety.jpg";
import petSafetyImg from "@/assets/showcase-pet-safety.jpg";
import outerProtectionImg from "@/assets/showcase-outer-protection.jpg";
import weatherProofImg from "@/assets/showcase-weather-proof.jpg";

type AnimKey = "slideRight" | "slideLeft" | "slideDown" | "slideUp" | "fadeIn";

const showcaseSlides: { image: string; badge: string; animation: AnimKey }[] = [
  { image: heroImg, badge: "Invisible Grills", animation: "slideRight" },
  { image: elegantImg, badge: "Elegant Protection", animation: "slideDown" },
  { image: familySafeImg, badge: "Keep Your Family Safe", animation: "slideLeft" },
  { image: childrenSafetyImg, badge: "Children's Protection", animation: "slideUp" },
  { image: petSafetyImg, badge: "Pets Safety", animation: "fadeIn" },
  { image: outerProtectionImg, badge: "Outer Protection", animation: "slideRight" },
  { image: weatherProofImg, badge: "Weather Proof", animation: "slideDown" },
];

const animationVariants = {
  slideRight: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
  slideDown: {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  },
  slideUp: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
};

const features = [
  "Child & Pet Safe",
  "Rust-Proof SS316",
  "Transparent View",
  "Easy Maintenance",
];

const ServiceShowcase = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playbackIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Handle auto-play slideshow
  useEffect(() => {
    if (!isPlaying) return;

    playbackIntervalRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = prev + 1;
        if (next >= showcaseSlides.length) {
          // Playback complete - reset
          setIsPlaying(false);
          return 0;
        }
        return next;
      });
    }, 3000);

    return () => {
      if (playbackIntervalRef.current) clearInterval(playbackIntervalRef.current);
    };
  }, [isPlaying]);

  const active = showcaseSlides[current];
  const variant = animationVariants[active.animation];

  return (
    <section className="py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Invisible Grills Showcase</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Premium Invisible Grills in Action
          </h2>
          <p className="text-muted-foreground">
            Experience the perfect blend of safety and aesthetics — see how our invisible grills seamlessly protect your family's life.
          </p>
        </div>

        {/* Showcase and Features Side by Side for Large Screens */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Premium Interactive Video-Style Card */}
          <div className="relative">
            {/* Left Decorative Background with Dot Pattern */}
            <div className="hidden lg:block absolute -left-32 top-1/2 -translate-y-1/2 w-48 h-96 bg-blue-100/40 rounded-4xl -z-10" />
            <div className="hidden lg:block absolute -left-28 top-1/2 -translate-y-1/2 w-40 h-80">
              <div className="grid grid-cols-4 gap-3 opacity-30">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-slate-400" />
                ))}
              </div>
            </div>

            {/* Main Premium Card - Base Layer */}
            <div style={{ borderRadius: "1rem", overflow: "hidden" }} className="relative shadow-2xl bg-foreground">
              {/* Main Image Container */}
              <div className="relative aspect-[3/3] md:aspect-[5/3] lg:aspect-[1/1] bg-foreground">
                <AnimatePresence mode="sync">
                  {!isPlaying ? (
                    // Initial thumbnail image before play
                    <motion.div
                      key="initial"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={thumbnailImg}
                        alt="Invisible Grills Showcase"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                    </motion.div>
                  ) : (
                    // Showcase slides when playing
                    <motion.div
                      key={current}
                      initial={variant.initial}
                      animate={variant.animate}
                      exit={variant.exit}
                      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                      className="absolute inset-0"
                    >
                      <img
                        src={active.image}
                        alt={active.badge}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Overlay Badge - Top Right */}
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-4 right-4 z-20"
                  >
                    <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md shadow-lg border border-white/30">
                      <span className="text-sm md:text-base font-semibold text-white">{active.badge}</span>
                    </div>
                  </motion.div>
                )}

                {/* Play Button - Center Overlay */}
                {!isPlaying && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center z-30 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-all"
                    >
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-accent fill-accent ml-1" />
                    </motion.div>
                  </motion.button>
                )}
              </div>
            </div>

            {/* Experience Badge - Floating Outside Card (only when not playing) */}
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute -top-4 right-[0.5rem] md:-top-6 md:-right-6 z-40"
              >
                <div className="px-5 py-3 rounded-full border-2 border-dashed border-slate-800/60 bg-white/95 backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-800 font-heading font-bold text-lg">8+</span>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-700 font-semibold leading-tight">Years of</span>
                      <span className="text-xs text-slate-700 font-semibold leading-tight">Experience</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Secondary Image - Floating Outside Card (only when not playing) */}
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="absolute -bottom-6 md:-bottom-8 right-[0.5rem] md:-right-8 z-40"
              >
                <div className="w-[8rem] h-[10rem] md:w-40 md:h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300">
                  <img
                    src={wireImg}
                    alt="Invisible Grill Wire Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>

          {/* Features & Content Section */}
          <div className="rounded-2xl overflow-hidden shadow-lg card-gradient-dark p-6 md:p-8 lg:p-8 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-3">
              Why Choose Invisible Grills?
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed text-sm md:text-base mb-6">
              {BUSINESS.name} delivers premium invisible grills engineered with marine-grade SS316 stainless steel. Our installations provide uncompromising security without obstructing your beautiful views, keeping your family protected while maintaining the aesthetic appeal of your home.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 px-3 py-2 backdrop-blur-sm"
                >
                  <div className="w-4 h-4 text-accent shrink-0">✓</div>
                  <span className="text-xs md:text-sm font-medium text-primary-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
