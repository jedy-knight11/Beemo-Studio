import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Video, Smartphone, Calendar, Camera } from 'lucide-react';

const casesData = [
  {
    id: 'duragas',
    title: 'Duragas Express',
    desc: 'El reto era hacer sentir la urgencia cotidiana de quedarse sin gas y posicionar la nueva app como la solución inmediata. Para Duragas Express, diseñamos un lenguaje visual que convirtiera el estrés diario en una historia con clímax y alivio. Con una planificación enfocada, logramos 5 cápsulas narrativas completas en un solo día de producción. Cada una, con una estética cinematográfica y un ritmo pensado para conectar al instante. El resultado fue una campaña lista para todos los medios.',
    video: (import.meta as any).env.BASE_URL + 'portfolio/Video Casos/Duragas_MakingOf.mp4'
  },
  {
    id: 'orocash',
    title: 'Orocash TVC',
    desc: 'El desafío era emotivo: retratar los momentos especiales de la vida donde Orocash está presente, no como un producto, sino como parte de la memoria afectiva de las personas. Nuestro objetivo fue crear una conexión auténtica. Seleccionamos una locación con alma, un casting que reflejara verdaderas emociones y una colorización cuidadosa que acentuara la calidez y la nostalgia de cada instante. El resultado invita al espectador a reconocer sus propios momentos especiales en cada frame.',
    video: (import.meta as any).env.BASE_URL + 'portfolio/Comerciales TV/Orocash_TVC.mp4'
  }
];

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = casesData[activeIndex];
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section id="services" className="py-32 bg-[#050505]">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-[#083eeb] text-xs font-bold uppercase tracking-[0.2em] mb-4">Nuestro Trabajo en Acción</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white uppercase leading-none heading-font break-words">
            Casos de Éxito
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Stacked Names */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {casesData.map((cs, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={cs.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left group w-full p-6 rounded-3xl border transition-all duration-500 flex items-center justify-between ${
                    isActive 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                  }`}
                >
                  <h3 className={`text-2xl md:text-3xl font-bold uppercase transition-colors duration-500 heading-font ${isActive ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>
                    {cs.title}
                  </h3>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-500 ${isActive ? 'border-[#083eeb] text-[#083eeb]' : 'border-transparent text-transparent group-hover:text-white/30'}`}>
                    <Play size={12} fill="currentColor" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Explanation, and Video */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-8"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl md:text-5xl font-bold text-white uppercase heading-font">
                    {activeCase.title}
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed max-w-3xl font-light">
                    {activeCase.desc}
                  </p>
                </div>
                
                {/* Dynamic Video */}
                <div 
                  className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group cursor-pointer bg-[#0D0D0D]"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <video
                    ref={videoRef}
                    src={`${activeCase.video}#t=0.001`}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                  
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500 border border-white/20">
                      <Play size={32} className="text-white ml-2" fill="currentColor" />
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>

        {/* Condensed Services Section */}
        <div className="w-full border-t border-white/10 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white uppercase heading-font shrink-0">
              Servicios <br className="hidden md:block"/>Adicionales
            </h3>
            
            <div className="flex flex-wrap gap-4 md:gap-8 justify-start md:justify-end">
                            {[
                { name: 'Video Institucional', icon: Video },
                { name: 'Contenido para Redes', icon: Smartphone },
                { name: 'Cobertura de Eventos', icon: Calendar },
                { name: 'Fotografía', icon: Camera }
              ].map((srv, i) => {
                const Icon = srv.icon;
                return (
                  <div key={i} className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white/80 font-bold uppercase tracking-widest text-xs">
                    <Icon size={16} />
                    <span>{srv.name}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="shrink-0 mt-4 md:mt-0">
              <Link 
                to="/contacto" 
                className="inline-block bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#F5A623] transition-colors"
              >
                Cotizar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};