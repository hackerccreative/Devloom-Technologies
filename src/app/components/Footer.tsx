import { motion } from 'motion/react';
import { DevloomLogo } from './DevloomLogo';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#080B12] border-t border-[#1E2B42] py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Left column */}
          <div>
            <DevloomLogo size="md" />
            <p className="text-[#6B7280] mt-4 mb-6">
              Building something worth using.
            </p>

            <div className="flex items-center gap-4">
              {[
                { Icon: Github, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' }
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.1, color: '#3B82F6' }}
                  className="text-[#3E4E6A] transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="md:text-right">
            <p className="text-[#6B7280] text-sm">
              © 2026 Devloom Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
