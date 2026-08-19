import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const funnyMessages = [
  "Acomodando las luces...",
  "Gritándole a los actores...",
  "Buscando la claqueta...",
  "Arreglándolo en post-producción...",
  "Exportando en 4K (esperamos)...",
  "Sirviendo el café del director..."
];

export const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Cycle through funny messages every 1.5 seconds
    const interval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % funnyMessages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Hide the loader either when the window fully loads (including videos/images)
    // or after a max timeout so users aren't stuck forever.
    const handleLoad = () => {
      setTimeout(() => onLoadingComplete(), 800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    const maxTimeout = setTimeout(() => {
      onLoadingComplete();
    }, 4500);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(maxTimeout);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0D0D0D]"
    >
      <motion.div
        animate={{ 
          scale: [0.95, 1.05, 0.95],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ 
          duration: 1.5, 
          ease: "easeInOut",
          repeat: Infinity 
        }}
        className="w-32 md:w-48 h-auto mb-12"
      >
        <img src="/logo.png" alt="Beemo Studio Loading" className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(8,62,235,0.5)]" />
      </motion.div>
      
      <div className="h-8 relative flex items-center justify-center w-full max-w-sm overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute text-white/60 text-sm md:text-base font-medium tracking-wide text-center"
          >
            {funnyMessages[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2 mt-8">
        <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-[#083eeb]" />
        <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-[#083eeb]" />
        <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-[#083eeb]" />
      </div>
    </motion.div>
  );
};
