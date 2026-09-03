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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/10 h-[80px] md:h-[110px]' : 'bg-transparent h-[80px] md:h-[110px]'
        } flex items-center`}
      >
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center">
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

          {/* Mobile Open Button */}
          <button
            className="lg:hidden text-white p-3 -mr-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={28} className="text-white" />
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#0D0D0D] w-full h-[100dvh] flex flex-col justify-between px-6 sm:px-12 py-6 overflow-y-auto lg:hidden"
          >
            {/* Top Bar inside Mobile Menu */}
            <div className="w-full flex items-center justify-between h-[60px] shrink-0 border-b border-white/10 pb-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                <img src={(import.meta as any).env.BASE_URL + '/logo_header.png'.substring(1)} alt="Beemo Studio Logo" className="h-[44px] w-auto object-contain" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-3 -mr-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer focus:outline-none"
                aria-label="Cerrar menú"
              >
                <X size={26} className="text-white" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col justify-center gap-6 my-auto py-8">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl sm:text-5xl font-black text-white hover:text-[#083eeb] transition-colors uppercase tracking-tighter heading-font leading-none"
              >
                INICIO
              </Link>
              <Link
                to="/portafolio"
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl sm:text-5xl font-black text-white hover:text-[#083eeb] transition-colors uppercase tracking-tighter heading-font leading-none"
              >
                TRABAJO
              </Link>
              <Link
                to="/servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl sm:text-5xl font-black text-white hover:text-[#083eeb] transition-colors uppercase tracking-tighter heading-font leading-none"
              >
                SERVICIOS
              </Link>
              <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl sm:text-5xl font-black text-white hover:text-[#083eeb] transition-colors uppercase tracking-tighter heading-font leading-none"
              >
                CONTACTO
              </Link>
            </div>

            {/* Bottom Actions */}
            <div className="w-full shrink-0 pt-6 border-t border-white/10">
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
    </>
  );
};
