import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated watery background blobs */}
      <div className="absolute inset-0 bg-[#080B12]">
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #1E2B42 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Animated glass orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.12, 0.08],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(30, 58, 95, 0.2) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: 'rgba(13, 17, 23, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(30, 43, 66, 0.5)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)',
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"
          />
          <span className="text-[#6B7280] text-sm">✦ Software for Builders</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-6xl md:text-7xl mb-6"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, lineHeight: 1.1 }}
        >
          <div className="text-white mb-2">We build tools</div>
          <div className="text-[#3B82F6] mb-2 relative inline-block">
            that builders
            <motion.div
              className="absolute -inset-2 rounded-lg opacity-20"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
              }}
              animate={{
                x: [-200, 200],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          <div className="text-white">rely on.</div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-[#6B7280] max-w-2xl mx-auto mb-10"
          style={{ lineHeight: 1.7 }}
        >
          Devloom Technologies crafts software products — from collaborative IDEs to AI-powered workflows — built with precision, for the people shaping what comes next.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#product"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#product')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-lg text-white font-medium relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
            }}
          >
            <span className="relative z-10">See Our Work</span>
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.3) 0%, transparent 100%)',
              }}
            />
          </motion.a>

          <motion.a
            href="#vision"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#vision')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.02, borderColor: '#3B82F6' }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-lg text-white font-medium transition-all relative overflow-hidden group"
            style={{
              background: 'rgba(17, 24, 39, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #1E2B42',
            }}
          >
            <span className="relative z-10 group-hover:text-[#3B82F6] transition-colors">Our Vision</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-[#3B82F6]" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
