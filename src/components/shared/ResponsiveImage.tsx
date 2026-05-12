import React from 'react';

interface ResponsiveImageProps {
  webp: string;
  jpg: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * ResponsiveImage Component
 * 
 * Automatically serves WebP to modern browsers, falls back to JPEG
 * for better performance and compression
 * 
 * Usage:
 * <ResponsiveImage 
 *   webp="/path/to/image.webp"
 *   jpg="/path/to/image.jpg"
 *   alt="Description"
 *   className="w-full h-auto"
 *   loading="lazy"
 * />
 */
export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  webp,
  jpg,
  alt,
  className = '',
  loading = 'lazy'
}) => {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={jpg}
        alt={alt}
        className={className}
        loading={loading}
      />
    </picture>
  );
};

export default ResponsiveImage;
