import { motion } from 'motion/react';

export function Vision() {
  const quote = "Every important problem left to solve will eventually run on software. We want to be the team that builds the tools the solvers use.";
  const words = quote.split(' ');

  return (
    <section id="vision" className="py-32 px-6 relative overflow-hidden">
      {/* Large blurred orb background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(120px)',
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8"
        >
          <div className="text-[#3B82F6] text-sm uppercase tracking-[0.3em] font-medium">
            Our Vision
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <blockquote
            className="text-4xl md:text-[42px] text-white leading-relaxed"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 300, lineHeight: 1.4 }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                viewport={{ once: true }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />
          <p className="text-[#6B7280] text-sm">
            — Devloom Technologies, 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
