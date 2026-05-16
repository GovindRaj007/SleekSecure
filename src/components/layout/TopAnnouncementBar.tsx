import { useEffect, useRef, useState } from 'react';

const TopAnnouncementBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const announcementHeight = 40; // Single source of truth

  const announcements = [
    "Free on-site inspection & consultation",
    "Premium SS316 marine-grade stainless steel grills",
    "Child-safe 25mm mesh spacing — ISO 13126 certified",
    "10-year warranty on every installation",
    "8+ years of trusted expertise",
    "Invisible grills that preserve your home's look",
    "Ceiling cloth hangers — smart space-saving solution",
    "Serving across Hyderabad, Telangana & Andhra Pradesh",
  ];

  // Horizontal scrolling animation
  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      
      if (scrollPosition >= content.scrollWidth) {
        scrollPosition = 0;
      }

      container.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const pauseAnimation = () => cancelAnimationFrame(animationFrameId);
    const resumeAnimation = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    container.addEventListener('mouseenter', pauseAnimation);
    container.addEventListener('mouseleave', resumeAnimation);
    container.addEventListener('touchstart', pauseAnimation);
    container.addEventListener('touchend', resumeAnimation);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', pauseAnimation);
      container.removeEventListener('mouseleave', resumeAnimation);
      container.removeEventListener('touchstart', pauseAnimation);
      container.removeEventListener('touchend', resumeAnimation);
    };
  }, []);

  // Handle scroll - both announcement and navbar move together
  useEffect(() => {
    const handleScroll = () => {
      // Limit scroll offset to announcement height
      const offset = Math.min(window.scrollY, announcementHeight);
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="w-full overflow-hidden fixed left-0 right-0 z-40"
      style={{
        background: "#1a1a1a",
        height: `${announcementHeight}px`,
        display: 'flex',
        alignItems: 'center',
        top: 0,
        transform: `translateY(-${scrollOffset}px)`,
      }}
    >
      <div
        ref={containerRef}
        className="w-full overflow-x-auto scrollbar-hide"
        style={{
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'auto'
        }}
      >
        <div
          ref={contentRef}
          className="flex gap-8 py-0 whitespace-nowrap min-w-max px-4 md:px-6"
        >
          {[...announcements, ...announcements].map((text, idx) => (
            <div
              key={idx}
              className="text-xs md:text-sm font-medium text-white/80 flex items-center gap-2"
              style={{ minWidth: 'max-content' }}
            >
              <span
                className="flex-shrink-0 rounded-full"
                style={{
                  width: '5px',
                  height: '5px',
                  backgroundColor: '#ffffff',
                }}
              />
              {text}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TopAnnouncementBar;
