import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [textColor, setTextColor] = useState("#ffffff");

  useEffect(() => {
    const checkOverlap = () => {
      if (!barRef.current || !textRef.current) return;
      const barRect = barRef.current.getBoundingClientRect();
      const textRect = textRef.current.getBoundingClientRect();
      const textCenter = textRect.left + textRect.width / 2;
      const barRight = barRect.left + barRect.width;
      setTextColor(barRight > textCenter ? "#121724" : "#ffffff");
    };

    checkOverlap();
    const interval = setInterval(checkOverlap, 50);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="absolute top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="relative h-6 bg-accent/60 rounded-full overflow-hidden backdrop-blur-sm border border-gold/20">
        <motion.div
          ref={barRef}
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, hsl(var(--gold-dark)), hsl(var(--gold)), hsl(var(--gold-light)))" }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
        <motion.span
          ref={textRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center text-[11px] font-bold drop-shadow-sm transition-colors duration-200"
          style={{ color: textColor }}
        >
          Criando seu acesso ao Prátice Hub — {progress}%
        </motion.span>
      </div>
    </div>
  );
};

export default ProgressBar;
