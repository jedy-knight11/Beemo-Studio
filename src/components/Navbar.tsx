import { Link } from 'react-router-dom';
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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/10 h-[80px] md:h-[110px]' : 'bg-transparent h-[80px] md:h-[110px]'
      } flex items-center`}
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between relative z-50">
        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
          <img src={(import.meta as any).env.BASE_URL + '/logo_header.png'.substring(1)} alt="Beemo Studio Logo" className="h-[48px] md:h-[96px] w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-6 text-sm uppercase tracking-widest font-semibold text-white/60">
            <Link to="/portafolio" className="hover:text-white transition-colors cursor-pointer">Trabajo</Link>
            <Link to="/servicios" className="hover:text-white transition-colors cursor-pointer">Servicios</Link>
          </div>
          
          <div className="text-xs uppercase font-bold tracking-widest text-white/40 ml-4">
            <span className="text-white cursor-pointer">EN</span> / ES
          </div>
          <Link
            to="/contacto"
            className="bg-[#083eeb] text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#F5A623] hover:text-black transition-all cursor-pointer"
          >
            Iniciar Proyecto
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-white p-3 -mr-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#0D0D0D] z-40 lg:hidden flex flex-col pt-[100px] pb-10 px-6 sm:px-12 overflow-y-auto"
          >
            {/* Nav Links */}
            <div className="flex-1 flex flex-col justify-center gap-8 my-auto">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl sm:text-6xl font-black text-white hover:text-[#083eeb] transition-colors uppercase tracking-tighter heading-font leading-none"
              >
                INICIO
              </Link>
              <Link
                to="/portafolio"
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl sm:text-6xl font-black text-white hover:text-[#083eeb] transition-colors uppercase tracking-tighter heading-font leading-none"
              >
                TRABAJO
              </Link>
              <Link
                to="/servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl sm:text-6xl font-black text-white hover:text-[#083eeb] transition-colors uppercase tracking-tighter heading-font leading-none"
              >
                SERVICIOS
              </Link>
            </div>
            
            {/* Bottom Actions */}
            <div className="w-full mt-auto pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
                <span className="text-white">EN</span> / ES
              </div>
              <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-[#083eeb] hover:bg-white hover:text-black transition-colors text-white text-center py-4 rounded-full text-base font-black uppercase tracking-wider heading-font"
              >
                INICIAR PROYECTO
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
