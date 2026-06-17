import React, { useEffect, useRef, useMemo } from 'react';

interface ImageSequenceProps {
  progress: number;
}

const ImageSequence: React.FC<ImageSequenceProps> = ({ progress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameCount = 99;

  const currentFrame = (index: number) =>
    `/assets/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

  const preloadImages = useMemo(() => {
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      if (i === 1) {
        img.onload = () => {
          drawImage(0);
        };
      }
      images.push(img);
    }
    return images;
  }, []);

  useEffect(() => {
    imagesRef.current = preloadImages;
    // Attempt to draw initial frame in case it's already cached
    if (preloadImages[0] && preloadImages[0].complete) {
      drawImage(0);
    }
  }, [preloadImages]);

  const drawImage = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = imagesRef.current[index] || preloadImages[index];

    if (canvas && ctx && img && img.complete) {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.width;
      const imgHeight = img.height;

      const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const newWidth = imgWidth * ratio;
      const newHeight = imgHeight * ratio;
      const x = (canvasWidth - newWidth) / 2;
      const y = (canvasHeight - newHeight) / 2;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, x, y, newWidth, newHeight);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Redraw on resize
        const frameIndex = Math.floor(progress * (frameCount - 1));
        drawImage(frameIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const frameIndex = Math.floor(progress * (frameCount - 1));
    requestAnimationFrame(() => drawImage(frameIndex));
  }, [progress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full object-cover -z-10"
    />
  );
};

export default ImageSequence;
