'use client';

import { useState, useEffect } from 'react';

export default function ImageWithFallback({ 
  src, 
  alt, 
  fallbackSrc, 
  className 
}: { 
  src: string; 
  alt: string; 
  fallbackSrc: string; 
  className?: string; 
}) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  return (
    <img
      src={imgSrc || fallbackSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (!hasError) {
          setHasError(true);
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
}
