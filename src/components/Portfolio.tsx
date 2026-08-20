import { useState, useRef } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const portfolioItems = [
  {
    id: '1',
    name: 'Orocash TVC',
    category: 'Comerciales',
    description: 'Comercial de televisión para Orocash.',
    video: '/portfolio/Comerciales/Orocash_TVC.mp4'
  },
  {
    id: '2',
    name: 'Mazda CX90',
    category: 'Comerciales',
    description: 'Spot comercial para el nuevo Mazda CX90.',
    video: '/portfolio/Comerciales/Mazda_CX90.mp4'
  },
  {
    id: '3',
    name: 'PedidosYa',
    category: 'Comerciales',
    description: 'Campaña digital para PedidosYa.',
    video: '/portfolio/Comerciales/PedidosYa.mp4'
  },
  {
    id: '4',
    name: 'PeiGo Madre',
    category: 'Comerciales',
    description: 'Spot del día de la madre para PeiGo.',
    video: '/portfolio/Comerciales/PeiGo_Madre.mp4'
  },
  {
    id: '5',
    name: 'Duragas Express Oficina',
    category: 'Institucionales',
    description: 'Video institucional para Duragas Express.',
    video: '/portfolio/Institucionales/Duragas_Oficina.mp4'
  },
  {
    id: '6',
    name: 'Blinseg',
    category: 'Institucionales',
    description: 'Video corporativo sobre procesos de blindaje.',
    video: '/portfolio/Institucionales/Blinseg_Blindaje.mp4'
  },
  {
    id: '7',
    name: 'Duragas Making Of',
    category: 'Coberturas',
    description: 'Detrás de cámaras de la campaña Duragas Express.',
    video: '/portfolio/Coberturas/Duragas_MakingOf.mp4'
  },
  {
    id: '8',
    name: 'Sambolón Event',
    category: 'Coberturas',
    description: 'Cobertura oficial del evento Sambolón.',
    video: '/portfolio/Coberturas/Sambolon.mp4'
  }
];

const ProjectCard = ({ file, onClick }: { file: any, onClick: (f: any) => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative w-[85vw] md:w-[60vw] lg:w-[45vw] shrink-0 snap-center aspect-video bg-white/5 rounded-3xl overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(file)}
    >
      {/* Video Thumbnail (plays on hover) */}
      <video
        ref={videoRef}
        src={`${file.video}#t=0.001`}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
        <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <span className="text-xs uppercase font-bold text-[#083eeb] tracking-[0.2em] mb-3 block">
            {file.category}
          </span>
          <h3 className="font-black text-2xl md:text-3xl text-white leading-tight mb-2 uppercase tracking-tighter heading-font">
            {file.name}
          </h3>
          <p className="text-sm md:text-base text-white/60 line-clamp-2 max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {file.description}
          </p>
        </div>
      </div>

      {/* Play Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 border border-white/20 pointer-events-none">
        <Play size={24} className="text-white ml-1" fill="currentColor" />
      </div>
    </motion.div>
  );
};

export const Portfolio = () => {
  const [filter, setFilter] = useState('Todos');
  const [activeVideo, setActiveVideo] = useState<any | null>(null);
  const categories = ['Todos', 'Comerciales', 'Institucionales', 'Coberturas'];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredFiles = portfolioItems.filter(f => filter === 'Todos' || f.category === filter);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -window.innerWidth * 0.5, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: window.innerWidth * 0.5, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="work" className="py-32 bg-[#0D0D0D]">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col gap-8 mb-16">
            <div className="flex flex-col gap-4">
              <p className="text-[#083eeb] text-xs font-bold uppercase tracking-[0.2em]">Nuestro Trabajo</p>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase heading-font leading-none heading-font">
                Portafolio Destacado
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-3 rounded-full text-[11px] uppercase font-bold tracking-widest transition-all ${
                      filter === cat 
                        ? 'bg-white text-black' 
                        : 'bg-white/5 border border-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Navigation Arrows (Desktop) */}
              <div className="hidden md:flex items-center gap-4">
                <button onClick={scrollLeft} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors focus:outline-none">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={scrollRight} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors focus:outline-none">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Reel */}
        <div className="w-full relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 snap-x snap-mandatory hide-scrollbar"
          >
            <AnimatePresence mode="popLayout">
              {filteredFiles.map((file) => (
                <ProjectCard key={file.id} file={file} onClick={setActiveVideo} />
              ))}
            </AnimatePresence>
            {/* Spacer for the end of scroll */}
            <div className="w-[6px] shrink-0" />
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50"
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-7xl aspect-video bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative border border-white/10"
            >
              <video 
                src={activeVideo.video} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
