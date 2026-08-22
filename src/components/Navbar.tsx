import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 h-[80px] md:h-[110px]' : 'bg-transparent h-[80px] md:h-[110px]'
      } flex items-center`}
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="/logo_header.png" alt="Beemo Studio Logo" className="h-[48px] md:h-[96px] w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-6 text-sm uppercase tracking-widest font-semibold text-white/60">
            <a href="/portafolio" className="hover:text-white transition-colors cursor-pointer">Trabajo</a>
            <a href="/servicios" className="hover:text-white transition-colors cursor-pointer">Servicios</a>
          </div>
          
          <div className="text-xs uppercase font-bold tracking-widest text-white/40 ml-4">
            <span className="text-white cursor-pointer">EN</span> / ES
          </div>
          <a
            href="/contacto"
            className="bg-[#083eeb] text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#F5A623] hover:text-black transition-all"
          >
            Iniciar Proyecto
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#0D0D0D] z-40 lg:hidden flex flex-col pt-[120px] pb-12 px-6 overflow-hidden"
          >
            <div className="flex-1 flex flex-col justify-center gap-6">
              {['TRABAJO', 'SERVICIOS'].map((item, i) => (
                <motion.a
                  key={item}
                  href={item === 'TRABAJO' ? '/portafolio' : '/servicios'}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tighter heading-font leading-none"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-full mt-auto"
            >
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40 mb-8">
                <span className="text-white">EN</span> / ES
              </div>
              <a
                href="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-white text-black text-center py-5 rounded-full text-lg font-black uppercase tracking-tighter heading-font"
              >
                INICIAR PROYECTO
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
