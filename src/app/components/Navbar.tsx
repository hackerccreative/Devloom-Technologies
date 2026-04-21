import { useState, useEffect } from 'react';
import { DevloomLogo } from './DevloomLogo';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Product', href: '#product' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-[#1E2B42]' : ''
        }`}
        style={{
          background: 'rgba(8, 11, 18, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Watery gradient overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
          <DevloomLogo size="sm" />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#9CA3AF] hover:text-white transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] left-0 right-0 z-40 md:hidden overflow-hidden"
            style={{
              background: 'rgba(8, 11, 18, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-[#9CA3AF] hover:text-white text-lg transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
