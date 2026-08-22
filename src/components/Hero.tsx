import { useState, useRef, useEffect } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = "/hero-video.webm";

  // Force play on mount to bypass autoplay restrictions or bugs
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  // Sync muted state via DOM to avoid React muted prop bugs
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden bg-[#0D0D0D]">
      {/* Background Video/Abstract */}
      <div className="absolute inset-0 z-0">
        {/* Muted Gradient (Darker, emphasizes centered text) */}
        <div className={`absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/80 via-[#0D0D0D]/60 to-[#0D0D0D] z-10 transition-opacity duration-1000 ${isMuted ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Unmuted Gradient (Lighter, bottom heavy) */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent z-10 transition-opacity duration-1000 ${isMuted ? 'opacity-0' : 'opacity-100'}`} />
        
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isMuted ? 'opacity-50' : 'opacity-80'}`}
          src={videoSrc} 
        />
      </div>

      <div className={`relative z-20 w-full h-full w-full max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col transition-all duration-700 ease-in-out pt-20 ${isMuted ? 'justify-center items-center' : 'justify-end items-start pb-24 md:pb-32'}`}>
        <motion.div
          layout
          className={`flex flex-col w-full ${isMuted ? 'max-w-5xl items-center text-center' : 'max-w-3xl items-start text-left'}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AnimatePresence>
            {isMuted && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
              >
                <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Reel 2024</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.h1 layout className={`font-black text-white tracking-tighter heading-font leading-[1.1] transition-all duration-700 ${isMuted ? 'text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6' : 'text-2xl md:text-3xl lg:text-4xl whitespace-nowrap mb-6'}`}>
            IMPACTO VISUAL {isMuted && <br className="hidden md:block" />}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">QUE DEFINE MARCAS.</span>
          </motion.h1>
          
          <AnimatePresence>
            {isMuted && (
              <motion.p
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: 'auto', marginBottom: 32 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
                className="text-white/70 font-light leading-relaxed text-lg md:text-xl max-w-2xl text-center"
              >
                Producimos videos corporativos de alto impacto, comerciales y cobertura de eventos que elevan la narrativa de tu empresa al siguiente nivel.
              </motion.p>
            )}
          </AnimatePresence>
          
          <motion.div layout className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto transition-all duration-700 ${isMuted ? 'justify-center items-center' : 'justify-start items-start'}`}>
            <AnimatePresence>
              {isMuted && (
                <motion.a
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, overflow: 'hidden' }}
                  href="/portafolio"
                  className="bg-white text-black px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#F5A623] hover:text-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap w-full sm:w-auto"
                >
                  <Play size={14} fill="currentColor" />
                  Ver Showreel
                </motion.a>
              )}
            </AnimatePresence>
            <motion.a
              layout
              href="/contacto"
              className="border border-white/20 hover:bg-white/5 px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-colors w-full sm:w-auto flex items-center justify-center whitespace-nowrap"
            >
              Cotizar
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Volume Toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-8 right-8 z-30 group flex items-center bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-full transition-all duration-300"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        <div className="text-white flex items-center justify-center">
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase text-white overflow-hidden max-w-0 group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-in-out whitespace-nowrap opacity-0 group-hover:opacity-100">
          {isMuted ? 'Unmute' : 'Mute'}
        </span>
      </button>
    </section>
  );
};
