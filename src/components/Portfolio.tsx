import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const portfolioItems = [
  // --- Comerciales TV ---
  {
    "id": "1",
    "name": "MOMENTOS INOLVIDABLES",
    "badge": "OROCASH",
    "category": "Comerciales TV",
    "description": "Comercial de televisión a nivel nacional para Orocash.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Comerciales TV/Orocash_TVC.mp4'
  },
  {
    "id": "2",
    "name": "¿TE QUEDASTE SIN GAS?",
    "badge": "DURAGAS EXPRESS",
    "category": "Comerciales TV",
    "description": "Cápsula narrativa comercial: solución inmediata en la cocina.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Comerciales TV/Duragas_Express_Cocina.mp4'
  },
  {
    "id": "3",
    "name": "CUMPLE DE TU HIJO",
    "badge": "DURAGAS EXPRESS",
    "category": "Comerciales TV",
    "description": "Cápsula comercial en el hogar con estética cinematográfica.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Comerciales TV/Duragas_Express_Home.mp4'
  },
  {
    "id": "4",
    "name": "CILINDRO AMARILLO A UN CLICK",
    "badge": "DURAGAS EXPRESS",
    "category": "Comerciales TV",
    "description": "Cápsula de fin de semana: el alivio de pedir tu gas al instante.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Comerciales TV/Duragas_Express_Parrilla.mp4'
  },

  // --- Redes ---
  {
    "id": "6",
    "name": "MAZDA CX-90",
    "badge": "Mazda",
    "category": "Redes",
    "description": "Spot comercial y contenido dinámico para el nuevo Mazda CX90.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Redes/Mazda_CX90.mp4'
  },
  {
    "id": "7",
    "name": "CRÉDITO RUKITO",
    "badge": "PedidosYa",
    "category": "Redes",
    "description": "Campaña digital dinámica diseñada para el algoritmo y scroll infinito.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Redes/PedidosYa.mp4'
  },
  {
    "id": "8",
    "name": "VERDADERO BLINDAJE",
    "badge": "BLINSEG",
    "category": "Redes",
    "description": "Contenido dinámico para redes sobre blindaje y protección automotriz.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Redes/Blinseg_Blindaje.mp4'
  },
  {
    "id": "9",
    "name": "NO ES EL LUGAR",
    "badge": "SAMBOLÓN",
    "category": "Redes",
    "description": "Contenido gastronómico dinámico y apetitoso para redes sociales.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Redes/Sambolon.mp4'
  },
  {
    "id": "10",
    "name": "PREMIER PET",
    "badge": "PremierPet",
    "category": "Redes",
    "description": "Producción comercial de alta calidad para alimentos premium de mascotas.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Redes/PremierPet_Final.mp4'
  },
  {
    "id": "11",
    "name": "CIUDAD CELESTE",
    "badge": "Ciudad Celeste",
    "category": "Redes",
    "description": "Cápsula audiovisual de estilo de vida y desarrollo inmobiliario.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Redes/CiudadCeleste_Capsula_1.mp4'
  },

  // --- Post Producción ---
  {
    "id": "12",
    "name": "HISTORIAS DE CRÉDITO",
    "badge": "PeiGo",
    "category": "Post Producción",
    "description": "Post-producción emotiva para campaña del Día de la Madre.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Madre.mp4'
  },
  {
    "id": "13",
    "name": "TARJETA QUE VA CONTIGO",
    "badge": "PeiGo",
    "category": "Post Producción",
    "description": "Edición y motion graphics en formato vertical para PeiGo.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Panm.mp4'
  },
  {
    "id": "14",
    "name": "¿TE ASUSTA UNA TARJETA?",
    "badge": "PeiGo",
    "category": "Post Producción",
    "description": "Edición de entrevistas dinámicas para canales digitales.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Interview.mp4'
  },
  {
    "id": "15",
    "name": "LA MEJOR OPCIÓN",
    "badge": "PeiGo",
    "category": "Post Producción",
    "description": "Masterización y adaptación audiovisual para campañas digitales de PeiGo.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Supcine.mp4'
  },
  {
    "id": "16",
    "name": "TARJETA PEIGO",
    "badge": "PeiGo",
    "category": "Post Producción",
    "description": "Pieza de post-producción adaptada para web y aplicaciones móviles.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Web.mp4'
  },

  // --- Coberturas ---
  {
    "id": "17",
    "name": "GRAN PREMIO",
    "badge": "Toyocosta",
    "category": "Coberturas",
    "description": "Cobertura y producción audiovisual de evento Toyocosta.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Coberturas/Toyocosta_Premio_Pintado.mp4'
  },
  {
    "id": "18",
    "name": "LANZAMIENTO SUV",
    "badge": "Renault",
    "category": "Coberturas",
    "description": "Lanzamiento y cobertura de evento automotriz.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Coberturas/Renault_Kwid_HD.mp4'
  },
  {
    "id": "19",
    "name": "INAUGURACIÓN",
    "badge": "Automotores y Nexos",
    "category": "Coberturas",
    "description": "Inauguración y evento corporativo automotriz.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Coberturas/Renault.mp4'
  },
  {
    "id": "20",
    "name": "MERCADO VERGELES",
    "badge": "Grupo Luna",
    "category": "Coberturas",
    "description": "Cobertura institucional y comunitaria para Grupo Luna.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Coberturas/mercado_municpal_vergeles.mp4'
  },

  // --- Video Casos ---
  {
    "id": "21",
    "name": "UN COMPETIDOR INESPERADO",
    "badge": "DURAGAS",
    "category": "Video Casos",
    "description": "Caso de éxito audiovisual de campaña Duragas.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Video Casos/Duragas_Competidor_Inesperado.mp4'
  },
  {
    "id": "22",
    "name": "EL MEJOR BANCO PARA TI",
    "badge": "Banco Guayaquil",
    "category": "Video Casos",
    "description": "Video caso de campaña estratégica para Banco Guayaquil.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Video Casos/BG_El_Mejor_Banco_Para_Ti.mp4'
  },
  {
    "id": "23",
    "name": "PRIMERO NIÑO MOI",
    "badge": "Banco Guayaquil",
    "category": "Video Casos",
    "description": "Video caso emotivo con el embajador de marca Moisés Caicedo.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Video Casos/BG_Primero_Nino_Moi.mp4'
  },
  {
    "id": "24",
    "name": "WRAPPED",
    "badge": "Banco Guayaquil",
    "category": "Video Casos",
    "description": "Video caso dinámico sobre la funcionalidad Wrapped de la app.",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Video Casos/BG_Wrapped_App.mp4'
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 lg:opacity-60 lg:group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
        <div className="translate-y-0 lg:translate-y-6 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <span className="text-xs uppercase font-bold text-[#083eeb] tracking-[0.2em] mb-3 block">
            {file.category}
          </span>
          <h3 className="font-black text-2xl md:text-3xl text-white leading-tight mb-2 uppercase tracking-tighter heading-font">
            {file.name}
          </h3>
          <p className="text-sm md:text-base text-white/60 line-clamp-2 max-w-xl opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
            {file.description}
          </p>
        </div>
      </div>

      {/* Play Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 scale-100 lg:scale-75 lg:group-hover:scale-100 border border-white/20 pointer-events-none">
        <Play size={24} className="text-white ml-1" fill="currentColor" />
      </div>
    </motion.div>
  );
};

export const Portfolio = () => {
  const [filter, setFilter] = useState('Comerciales TV');
  const [activeVideo, setActiveVideo] = useState<any | null>(null);
  const categories = ['Comerciales TV', 'Redes', 'Post Producción', 'Coberturas', 'Video Casos'];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredFiles = portfolioItems.filter(f => f.category === filter).slice(0, 4);

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

        {/* View Full Portfolio CTA */}
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 mt-6 flex justify-end">
          <Link
            to="/portafolio"
            className="inline-flex items-center gap-3 text-xs uppercase font-bold tracking-widest text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1"
          >
            Ver portafolio completo →
          </Link>
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
