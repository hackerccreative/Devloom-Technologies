import { motion } from 'motion/react';

export function About() {
  const stats = [
    {
      label: '01 / Founded',
      text: '2026 — built from a real problem, not a pitch.'
    },
    {
      label: '02 / Focus',
      text: 'Developer tools, AI workflows, collaborative platforms.'
    },
    {
      label: '03 / Philosophy',
      text: 'Ship things that last. Build for builders.'
    }
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Watery background effect */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-[#3B82F6] text-sm uppercase tracking-[0.3em] mb-6 font-medium">
              Who We Are
            </div>

            <h2
              className="text-5xl mb-8 text-white"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, lineHeight: 1.2 }}
            >
              A small team with an obsession for craft.
            </h2>

            <div className="space-y-6 text-[#9CA3AF] text-[17px] leading-relaxed">
              <p>
                Devloom Technologies is an early-stage software company built by developers, for developers. We're not chasing trends — we're solving the problems we've faced ourselves: fragmented tools, broken collaboration, and the friction between an idea and its execution.
              </p>

              <p>
                We build with precision. We ship with purpose. And we believe the best software quietly becomes the infrastructure others build on top of.
              </p>
            </div>
          </motion.div>

          {/* Right column - stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                }}
                className="p-6 rounded-xl relative group overflow-hidden"
                style={{
                  background: 'rgba(17, 24, 39, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(30, 43, 66, 0.5)',
                  borderLeftWidth: '2px',
                  borderLeftColor: '#3B82F6',
                }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                  }}
                  animate={{
                    x: [-200, 200],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10">
                  <div className="text-[#3B82F6] text-sm font-medium mb-2">
                    {stat.label}
                  </div>
                  <div className="text-[#E8EDF5] leading-relaxed">
                    {stat.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
