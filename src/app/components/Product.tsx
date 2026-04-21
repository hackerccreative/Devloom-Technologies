import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Product() {
  const features = ['Monaco Editor', 'Real-time Sync', 'AI Assistant', 'Video Calls'];

  return (
    <section id="product" className="py-32 px-6 bg-[#0D1117] relative overflow-hidden">
      {/* Animated liquid background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          background: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(37, 99, 235, 0.15) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <div className="text-[#3B82F6] text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            What We're Building
          </div>
          <h2
            className="text-5xl text-white"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}
          >
            Our flagship product.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="p-10 rounded-2xl relative group overflow-hidden"
          style={{
            background: 'rgba(17, 24, 39, 0.6)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(30, 43, 66, 0.6)',
            boxShadow: '0 0 60px rgba(59, 130, 246, 0.1)',
          }}
        >
          {/* Glass reflection effect */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)',
            }}
          />

          {/* Watery shimmer on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
            style={{
              background: 'linear-gradient(45deg, transparent 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '200% 200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h3
                className="text-4xl text-white"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}
              >
                CodeSync.ai
              </h3>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  color: '#F59E0B',
                }}
              >
                In Development
              </span>
            </div>

            <p className="text-[#9CA3AF] text-lg mb-6">
              Real-time AI-powered collaborative development.
            </p>

            <div className="h-px bg-[#1E2B42] mb-6" />

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    borderColor: '#3B82F6',
                    color: '#FFFFFF',
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)',
                  }}
                  className="px-4 py-2 rounded-lg text-sm transition-all"
                  style={{
                    background: 'rgba(13, 17, 23, 0.8)',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid #1E2B42',
                    color: '#6B7280',
                  }}
                >
                  {feature}
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <p className="text-[#6B7280] leading-relaxed mb-6">
              A single workspace where developers write, collaborate, and build with AI — no tab switching, no merge conflicts, no friction. Just code.
            </p>

            {/* Link */}
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-[#60A5FA] transition-colors group/link"
            >
              <span>codesync.ai</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
