import { motion, useScroll, useSpring } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] origin-left z-50"
      style={{
        scaleX,
        boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
      }}
    />
  );
}
