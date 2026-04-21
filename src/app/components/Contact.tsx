import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Loader2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mlgawped', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please check your connection.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-[#080B12] border-t border-[#1E2B42] relative overflow-hidden"
    >
      {/* Watery gradient background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
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
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(37, 99, 235, 0.1) 100%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl mb-6 text-white"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}
            >
              Let's talk.
            </h2>
            <p className="text-[#9CA3AF] text-lg mb-8 leading-relaxed">
              We're early. We're building. We'd love to hear from you.
            </p>

            <div className="space-y-6">
              <motion.a
                href="mailto:hello@devloom.tech"
                whileHover={{ color: '#60A5FA' }}
                className="text-[#3B82F6] text-xl inline-block transition-colors hover:underline"
              >
                hello@devloom.tech
              </motion.a>

              <div className="flex items-center gap-4 pt-4">
                {[
                  { Icon: Github, href: '#' },
                  { Icon: Linkedin, href: '#' }
                ].map(({ Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    whileHover={{ scale: 1.1, color: '#3B82F6' }}
                    className="text-[#3E4E6A] transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-xl text-center"
                style={{
                  background: 'rgba(17, 24, 39, 0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                }}
              >
                <div className="text-[#3B82F6] text-2xl mb-4">
                  ✦ Message received.
                </div>
                <p className="text-[#9CA3AF]">
                  We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-xl space-y-5"
                style={{
                  background: 'rgba(17, 24, 39, 0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(30, 43, 66, 0.6)',
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-[#E8EDF5] text-sm mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#1E2B42] text-white focus:border-[#3B82F6] focus:outline-none transition-colors"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#E8EDF5] text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#1E2B42] text-white focus:border-[#3B82F6] focus:outline-none transition-colors"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#E8EDF5] text-sm mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#1E2B42] text-white focus:border-[#3B82F6] focus:outline-none transition-colors"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#E8EDF5] text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#1E2B42] text-white focus:border-[#3B82F6] focus:outline-none transition-colors resize-none"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  />
                </div>

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm"
                  >
                    {errorMessage}
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className="w-full px-8 py-3 rounded-lg text-white font-medium relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                  }}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
