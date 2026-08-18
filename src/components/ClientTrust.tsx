import { motion } from 'motion/react';

export const ClientTrust = () => {
  const clients = ['DURAGAS', 'RENAULT', 'TOYOCOSTA', 'UCG', 'BANCO BOLIVARIANO', 'CHRYSLER'];

  return (
    <section className="py-16 bg-[#0D0D0D] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Confiado por Líderes Empresariales</p>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10"></div>
        
        {/* Simple CSS marquee effect can also be used, but we'll use motion if preferred, or just a flex row for now */}
        <motion.div 
          className="flex gap-16 md:gap-32 items-center whitespace-nowrap min-w-full px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {/* Double the list for infinite scroll illusion */}
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div key={idx} className="text-2xl md:text-3xl font-black text-white/20 tracking-tighter uppercase transition-colors hover:text-white/40 cursor-default">
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
