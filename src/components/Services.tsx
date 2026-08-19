import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Video, Megaphone, CalendarDays, TrendingUp } from 'lucide-react';

const servicesData = [
  {
    id: 'institucionales',
    title: 'Institucionales & Corporativos',
    desc: 'Historias de marca, manifiestos y comunicación interna diseñados para generar confianza y comunicar la escala empresarial.',
    icon: <Video size={24} />,
    image: '/services/institucional.webp'
  },
  {
    id: 'comerciales',
    title: 'Comerciales & Spots',
    desc: 'Campañas visuales de alto impacto creadas para digital y televisión. Dinámicas y enfocadas en conversión.',
    icon: <Megaphone size={24} />,
    image: '/services/comercial.webp'
  },
  {
    id: 'cobertura',
    title: 'Cobertura de Eventos',
    desc: 'Resúmenes cinematográficos y cobertura en vivo de cumbres corporativas, festivales y lanzamientos.',
    icon: <CalendarDays size={24} />,
    image: '/services/eventos.webp'
  },
  {
    id: 'casos',
    title: 'Casos de Éxito',
    desc: 'Testimoniales estilo documental que ofrecen validación social para marcas B2B y B2C.',
    icon: <TrendingUp size={24} />,
    image: '/services/casos.webp'
  }
];

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  return (
    <section id="services" className="py-32 bg-[#050505]">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-[#083eeb] text-xs font-bold uppercase tracking-[0.2em] mb-4">Nuestras Especialidades</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white uppercase leading-none heading-font">
            Especialidades & Disciplinas
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Stacked Names with Icons */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {servicesData.map((srv, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left group w-full p-5 md:p-6 rounded-3xl border transition-all duration-500 flex items-center gap-4 ${
                    isActive 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                  }`}
                >
                  <div className={`shrink-0 transition-colors duration-500 ${isActive ? 'text-[#083eeb]' : 'text-white/30 group-hover:text-white/50'}`}>
                    {srv.icon}
                  </div>
                  <h3 className={`text-xl md:text-2xl font-bold uppercase transition-colors duration-500 heading-font ${isActive ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>
                    {srv.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Column: Image, Explanation, and CTA */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-6 lg:gap-8"
              >
                {/* Dynamic Image */}
                <div className="relative aspect-video lg:aspect-[21/9] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Text Title, Text, and CTA (Below the image) */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <div className="flex flex-col gap-3 max-w-2xl">
                    <h3 className="text-3xl md:text-5xl font-bold text-white uppercase heading-font">
                      {activeService.title}
                    </h3>
                    <p className="text-lg text-white/60 leading-relaxed">
                      {activeService.desc}
                    </p>
                  </div>
                  
                  <div className="shrink-0 pb-2">
                    <a 
                      href="#contact" 
                      className="inline-block bg-[#083eeb] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#F5A623] hover:text-black transition-all duration-500 ease-out shadow-lg"
                    >
                      Cotizar Proyecto
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
};