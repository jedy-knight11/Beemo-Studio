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
        isScrolled ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 h-[110px]' : 'bg-transparent h-[110px]'
      } flex items-center`}
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/logo_header.png" alt="Beemo Studio Logo" className="h-[96px] w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-6 text-sm uppercase tracking-widest font-semibold text-white/60">
            <a href="/#work" className="hover:text-white transition-colors cursor-pointer">Trabajo</a>
            <a href="/#services" className="hover:text-white transition-colors cursor-pointer">Servicios</a>
            <a href="/#team" className="hover:text-white transition-colors cursor-pointer">Equipo</a>
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0D0D0D] border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl lg:hidden"
          >
            <a href="/#work" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/90">Trabajo</a>
            <a href="/#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/90">Servicios</a>
            <a href="/#team" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/90">Equipo</a>
            <hr className="border-white/10" />
            <a
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#083eeb] text-white text-center px-6 py-3 rounded-full text-base font-bold tracking-wide hover:bg-[#F5A623] hover:text-black transition-all"
            >
              Iniciar Proyecto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
