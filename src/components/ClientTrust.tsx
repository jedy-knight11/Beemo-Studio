import { motion } from 'motion/react';

export const ClientTrust = () => {
  const clients = [
    (import.meta as any).env.BASE_URL + 'logos/duragas.webp',
    (import.meta as any).env.BASE_URL + 'logos/toyocosta.webp',
    (import.meta as any).env.BASE_URL + 'logos/sambolon.webp',
    (import.meta as any).env.BASE_URL + 'logos/ucg.webp',
    (import.meta as any).env.BASE_URL + 'logos/renault_1.webp',
    (import.meta as any).env.BASE_URL + 'logos/ciudad.webp',
    (import.meta as any).env.BASE_URL + 'logos/ayn.webp',
    (import.meta as any).env.BASE_URL + 'logos/ya.webp',
    (import.meta as any).env.BASE_URL + 'logos/new_client.webp',
    (import.meta as any).env.BASE_URL + 'logos/peigo.webp',
    (import.meta as any).env.BASE_URL + 'logos/renault_2.webp'
  ];

  return (
    <section className="py-16 bg-[#0D0D0D] border-b border-white/5 overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-6 mb-12 text-center">
        <p className="text-[#083eeb] text-xs font-bold uppercase tracking-[0.2em]">Confiado por Líderes Empresariales</p>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {/* Group 1 */}
          <div className="flex gap-16 md:gap-24 items-center px-8 md:px-12 min-w-max">
            {clients.map((clientPath, idx) => {
              const isJpg = clientPath.endsWith('.jpg') || clientPath.endsWith('.jpeg');
              return (
                <div key={`g1-${idx}`} className="shrink-0 flex items-center justify-center w-36 md:w-56 h-20 md:h-24">
                  <img src={clientPath} alt="Client Logo" className={`w-full h-full object-contain transition-all duration-300 ${isJpg ? 'grayscale invert mix-blend-screen opacity-40 hover:opacity-100' : 'brightness-0 invert opacity-30 hover:opacity-100'}`} />
                </div>
              );
            })}
          </div>
          {/* Group 2 */}
          <div className="flex gap-16 md:gap-24 items-center px-8 md:px-12 min-w-max">
            {clients.map((clientPath, idx) => {
              const isJpg = clientPath.endsWith('.jpg') || clientPath.endsWith('.jpeg');
              return (
                <div key={`g2-${idx}`} className="shrink-0 flex items-center justify-center w-36 md:w-56 h-20 md:h-24">
                  <img src={clientPath} alt="Client Logo" className={`w-full h-full object-contain transition-all duration-300 ${isJpg ? 'grayscale invert mix-blend-screen opacity-40 hover:opacity-100' : 'brightness-0 invert opacity-30 hover:opacity-100'}`} />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
