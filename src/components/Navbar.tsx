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
        isScrolled ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 h-[70px]' : 'bg-transparent h-[70px]'
      } flex items-center`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-tighter text-white uppercase flex items-center gap-2">
          BEEMO<span className="text-[#F5A623]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-6 text-[11px] uppercase tracking-[0.15em] font-semibold text-white/60">
            <a href="#work" className="hover:text-[#F5A623] transition-colors cursor-pointer">Trabajo</a>
            <a href="#services" className="hover:text-[#F5A623] transition-colors cursor-pointer">Servicios</a>
            <a href="#process" className="hover:text-[#F5A623] transition-colors cursor-pointer">Equipo</a>
          </div>
          
          <div className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-4">
            <span className="text-white cursor-pointer">EN</span> / ES
          </div>
          <a
            href="#contact"
            className="bg-[#F5A623] text-black px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider hover:brightness-110 transition-all"
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
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/90">Trabajo</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/90">Servicios</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/90">Equipo</a>
            <hr className="border-white/10" />
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#F5A623] text-black text-center px-6 py-3 rounded-full text-base font-bold tracking-wide"
            >
              Iniciar Proyecto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
