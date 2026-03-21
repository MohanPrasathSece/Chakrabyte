import { useState, useRef, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean; // For above-the-fold images
  sizes?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  webpSrc,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  loading = priority ? 'eager' : 'lazy',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check WebP support
  useEffect(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    if (webpSrc && checkWebPSupport()) {
      setCurrentSrc(webpSrc);
    } else {
      setCurrentSrc(src);
    }
  }, [src, webpSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    // Fallback to original src if WebP fails
    if (currentSrc === webpSrc && src) {
      setCurrentSrc(src);
    } else {
      onError?.();
    }
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      }
    );

    const img = imgRef.current;
    if (img) {
      observer.observe(img);
    }

    return () => {
      if (img) {
        observer.unobserve(img);
      }
    };
  }, [priority, loading]);

  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
      >
        <span className="text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <Skeleton 
          className="absolute inset-0 w-full h-full"
          style={{ width, height }}
        />
      )}
      <picture>
        {webpSrc && (
          <source
            srcSet={webpSrc}
            type="image/webp"
            sizes={sizes}
          />
        )}
        <img
          ref={imgRef}
          src={priority || loading === 'eager' ? currentSrc : undefined}
          data-src={!priority && loading === 'lazy' ? currentSrc : undefined}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            width: '100%', 
            height: 'auto',
            aspectRatio: width && height ? `${width}/${height}` : undefined
          }}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
