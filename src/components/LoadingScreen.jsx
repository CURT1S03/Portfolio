import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Engineer", "Build", "Deploy"];

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    const duration = 2700;
    let rafId;

    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => onComplete(), 400);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-12">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs text-muted uppercase tracking-[0.3em]">Portfolio</span>
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-foreground/80"
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="flex justify-end">
        <span className="text-6xl md:text-8xl lg:text-9xl font-display text-foreground tabular-nums">
          {String(count).padStart(3, "0")}
        </span>
      </div>

      <div className="h-[3px] bg-stroke/50 mt-6">
        <div
          className="h-full accent-gradient"
          style={{
            transform: `scaleX(${count / 100})`,
            transformOrigin: 'left',
            boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
            transition: 'transform 0.1s',
          }}
        />
      </div>
    </div>
  );
}
