import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="relative h-6 bg-accent/60 rounded-full overflow-hidden backdrop-blur-sm border border-gold/20">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, hsl(var(--gold-dark)), hsl(var(--gold)), hsl(var(--gold-light)))" }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-white transition-opacity duration-200 tracking-wide"
          style={{ textShadow: "0px 1px 3px rgba(0,0,0,0.8)" }}
        >
          Criando seu acesso ao Prátice Hub — {progress}%
        </motion.span>
      </div>
    </div>
  );
};

export default ProgressBar;
