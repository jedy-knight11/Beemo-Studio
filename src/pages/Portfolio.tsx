import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play } from 'lucide-react';

const categories = ["TODOS", "COMERCIALES TV", "REDES", "POST PRODUCCIÓN", "COBERTURAS", "VIDEO CASOS"];

const projects = [
  // --- Comerciales TV ---
  {
    id: 1,
    client: "OROCASH",
    category: "Comerciales TV",
    title: "MOMENTOS INOLVIDABLES",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Comerciales TV/Orocash_TVC.mp4',
    badge: "OROCASH",
    headlineLeft: "CONEXIÓN AUTÉNTICA",
    headlineRight: "Retratar los momentos especiales de la vida donde Orocash está presente como parte de la memoria afectiva de las personas.",
    challengeLeft: "MOMENTOS QUE PERDURAN EN LA MEMORIA.",
    challengeRight: "Nuestro objetivo fue crear una conexión auténtica. Seleccionamos una locación con alma, un casting que reflejara verdaderas emociones y una colorización cuidadosa que acentuara la calidez y la nostalgia de cada instante.\n\nEl resultado invita al espectador a reconocer sus propios momentos especiales en cada frame.",
    quote: "\"Un resultado que invita al espectador a reconocer sus propios momentos especiales en cada frame.\""
  },
  {
    id: 2,
    client: "DURAGAS EXPRESS",
    category: "Comerciales TV",
    title: "¿TE QUEDASTE SIN GAS?",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Comerciales TV/Duragas_Express_Cocina.mp4',
    badge: "DURAGAS EXPRESS",
    headlineLeft: "SOLUCIÓN INMEDIATA",
    headlineRight: "Hacer sentir la urgencia cotidiana de quedarse sin gas y posicionar la nueva app como la solución inmediata.",
    challengeLeft: "TRANSFORMAR EL ESTRÉS EN HISTORIA.",
    challengeRight: "Para Duragas Express, diseñamos un lenguaje visual que convirtiera el estrés diario en una historia con clímax y alivio.\n\nCon una planificación enfocada, logramos 5 cápsulas narrativas completas en un solo día de producción. Cada una, con una estética cinematográfica y un ritmo pensado para conectar al instante.\n\nEl resultado fue una campaña lista para todos los medios.",
    quote: "\"Una campaña lista para todos los medios con estética cinematográfica y ritmo pensado para conectar al instante.\""
  },
  {
    id: 3,
    client: "DURAGAS EXPRESS",
    category: "Comerciales TV",
    title: "CUMPLE DE TU HIJO",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Comerciales TV/Duragas_Express_Home.mp4',
    badge: "DURAGAS EXPRESS",
    headlineLeft: "HISTORIAS COTIDIANAS",
    headlineRight: "Conectando al instante con situaciones del día a día en el hogar.",
    challengeLeft: "RITMO Y CONEXIÓN INMEDIATA.",
    challengeRight: "Una planificación enfocada con estética cinematográfica y un ritmo pensado para conectar al instante.",
    quote: "\"El resultado fue una campaña eficiente y de alto impacto.\""
  },
  {
    id: 4,
    client: "DURAGAS EXPRESS",
    category: "Comerciales TV",
    title: "CILINDRO AMARILLO A UN CLICK",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Comerciales TV/Duragas_Express_Parrilla.mp4',
    badge: "DURAGAS EXPRESS",
    headlineLeft: "MOMENTOS EN FAMILIA",
    headlineRight: "Resaltando la comodidad y rapidez del servicio durante reuniones sociales.",
    challengeLeft: "DINAMISMO Y FRESCURA VISUAL.",
    challengeRight: "Cinematografía cálida y dinámica para retratar reuniones familiares y el valor del servicio rápido.",
    quote: "\"Conexión instantánea con la audiencia.\""
  },

  // --- Redes ---
  {
    id: 5,
    client: "MAZDA",
    category: "Redes",
    title: "MAZDA CX-90",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Redes/Mazda_CX90.mp4',
    badge: "Mazda",
    headlineLeft: "ELEGANCIA EN MOVIMIENTO",
    headlineRight: "Lanzamiento del SUV más premium de la marca nipona.",
    challengeLeft: "RESALTAR EL DISEÑO JAPONÉS.",
    challengeRight: "Combinamos tomas detalle en estudio con iluminación dinámica para resaltar la pintura artesanal, y tomas de tracking a alta velocidad.",
    quote: "\"Beemo logró capturar la esencia premium que el nuevo CX-90 demanda.\""
  },
  {
    id: 6,
    client: "PEDIDOSYA",
    category: "Redes",
    title: "CRÉDITO RUKITO",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Redes/PedidosYa.mp4',
    badge: "PedidosYa",
    headlineLeft: "VIRALIDAD A LA VELOCIDAD DE UN DELIVERY",
    headlineRight: "Contenido dinámico, colorido y directo diseñado específicamente para redes.",
    challengeLeft: "CAPTURAR LA ATENCIÓN EN 3 SEGUNDOS.",
    challengeRight: "Edición frenética, transiciones invisibles y efectos de sonido para saturar la pantalla con la identidad de la marca.",
    quote: "\"Entienden perfectamente el lenguaje de redes sociales.\""
  },
  {
    id: 7,
    client: "BLINSEG",
    category: "Redes",
    title: "VERDADERO BLINDAJE",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Redes/Blinseg_Blindaje.mp4',
    badge: "BLINSEG",
    headlineLeft: "FORTALEZA Y CONFIANZA",
    headlineRight: "Contenido robusto y profesional diseñado para transmitir máxima seguridad.",
    challengeLeft: "DEMOSTRAR SEGURIDAD EN REDES.",
    challengeRight: "Detalles técnicos, materiales y precisión del blindaje para comunicar ciencia y solidez.",
    quote: "\"El contenido transmitió la fortaleza y profesionalismo que nos define.\""
  },
  {
    id: 8,
    client: "SAMBOLÓN",
    category: "Redes",
    title: "NO ES EL LUGAR",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Redes/Sambolon.mp4',
    badge: "SAMBOLÓN",
    headlineLeft: "SABOR EN MOVIMIENTO",
    headlineRight: "Capturando la esencia y textura de la cultura gastronómica local.",
    challengeLeft: "DESPERTAR EL APETITO EN SEGUNDOS.",
    challengeRight: "Iluminación enfocada en texturas y ritmo de edición acelerado con sonido hiperrealista.",
    quote: "\"La respuesta en redes fue inmediata y contundente.\""
  },
  {
    id: 9,
    client: "PREMIER PET",
    category: "Redes",
    title: "PREMIER PET",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Redes/PremierPet_Final.mp4',
    badge: "PremierPet",
    headlineLeft: "NUTRICIÓN Y BIENESTAR",
    headlineRight: "Resaltando el cuidado y amor por las mascotas a través de cinematografía cálida.",
    challengeLeft: "CAPTURA DE TALENTO ANIMAL Y HUMANO.",
    challengeRight: "Dirección especializada para capturar la vitalidad de las mascotas y la confianza de sus dueños.",
    quote: "\"Una pieza conmovedora con un nivel visual insuperable.\""
  },
  {
    id: 10,
    client: "CIUDAD CELESTE",
    category: "Redes",
    title: "CIUDAD CELESTE",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Redes/CiudadCeleste_Capsula_1.mp4',
    badge: "Ciudad Celeste",
    headlineLeft: "ESTILO DE VIDA Y EXCLUSIVIDAD",
    headlineRight: "Proyectando la tranquilidad, seguridad y amenidades del proyecto residencial.",
    challengeLeft: "TRANSMITIR EL VALOR DE HOGAR.",
    challengeRight: "Tomas aéreas y tomas familiares que invitan a formar parte de una comunidad exclusiva.",
    quote: "\"Capturaron el valor aspiracional de la comunidad a la perfección.\""
  },

  // --- Post-Producción ---
  {
    id: 11,
    client: "PEIGO",
    category: "Post Producción",
    title: "HISTORIAS DE CRÉDITO",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Madre.mp4',
    badge: "PeiGo",
    headlineLeft: "EMOCIÓN SIN FRICCIONES",
    headlineRight: "Un saludo emotivo que destaca la facilidad de transferir con PeiGo.",
    challengeLeft: "HUMANIZAR UNA APP FINANCIERA.",
    challengeRight: "Postproducción cuidada para integrar la interfaz dentro de una narrativa emotiva familiar.",
    quote: "\"Logramos una conexión genuina con nuestros usuarios.\""
  },
  {
    id: 12,
    client: "PEIGO",
    category: "Post Producción",
    title: "TARJETA QUE VA CONTIGO",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Panm.mp4',
    badge: "PeiGo",
    headlineLeft: "MOTION Y RITMO VERTICAL",
    headlineRight: "Post-producción optimizada para formatos móviles y engagement rápido.",
    challengeLeft: "INTEGRACIÓN DINÁMICA DE ELEMENTOS UI.",
    challengeRight: "Composición de pantalla, micro-animaciones y corrección de color de alta gama.",
    quote: "\"Piezas ágiles que comunican la propuesta de valor sin rodeos.\""
  },
  {
    id: 13,
    client: "PEIGO",
    category: "Post Producción",
    title: "¿TE ASUSTA UNA TARJETA?",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Interview.mp4',
    badge: "PeiGo",
    headlineLeft: "CLARIDAD TESTIMONIAL",
    headlineRight: "Narrativa concisa combinando testimonios y motion graphics.",
    challengeLeft: "MANTENER LA RETENCIÓN AUDITIVA Y VISUAL.",
    challengeRight: "Cortes limpios, diseño sonoro puntual y subtitulado dinámico de marca.",
    quote: "\"Máxima retención en plataformas de video corto.\""
  },
  {
    id: 14,
    client: "PEIGO",
    category: "Post Producción",
    title: "LA MEJOR OPCIÓN",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Supcine.mp4',
    badge: "PeiGo",
    headlineLeft: "ACABADO CINEMATOGRÁFICO EN DIGITAL",
    headlineRight: "Grading de color y diseño sonoro envolvente.",
    challengeLeft: "COHERENCIA VISUAL DE MARCA.",
    challengeRight: "Post-producción integral que eleva la percepción del producto fintech.",
    quote: "\"La calidad visual destaca en el feed.\""
  },
  {
    id: 15,
    client: "PEIGO",
    category: "Post Producción",
    title: "TARJETA PEIGO",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Web.mp4',
    badge: "PeiGo",
    headlineLeft: "CONVERSIÓN DIGITAL",
    headlineRight: "Estructura orientada a presentar las funcionalidades clave de la app.",
    challengeLeft: "SÍNTESIS VISUAL.",
    challengeRight: "Integración estética entre material grabado y animaciones gráficas.",
    quote: "\"Excelente trabajo en post-producción.\""
  },

  // --- Coberturas ---
  {
    id: 16,
    client: "TOYOCOSTA",
    category: "Coberturas",
    title: "GRAN PREMIO",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Coberturas/Toyocosta_Premio_Pintado.mp4',
    badge: "Toyocosta",
    headlineLeft: "COBERTURA DE PREMIACIÓN",
    headlineRight: "Capturando los momentos cumbre y la emoción de los galardonados.",
    challengeLeft: "AGILIDAD EN SITIO.",
    challengeRight: "Registro cinematográfico multicámara para entrega rápida de resumen de evento.",
    quote: "\"Capturaron la energía del evento de forma impecable.\""
  },
  {
    id: 17,
    client: "RENAULT",
    category: "Coberturas",
    title: "LANZAMIENTO SUV",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Coberturas/Renault_Kwid_HD.mp4',
    badge: "Renault",
    headlineLeft: "LANZAMIENTO AUTOMOTRIZ",
    headlineRight: "Registro visual del evento de presentación y pruebas de manejo.",
    challengeLeft: "DINAMISMO EN VIVO.",
    challengeRight: "Cobertura ágil que resalta el diseño del vehículo y la experiencia de los invitados.",
    quote: "\"Excelente cobertura de nuestro lanzamiento.\""
  },
  {
    id: 18,
    client: "AUTOMOTORES Y NEXOS",
    category: "Coberturas",
    title: "INAUGURACIÓN",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Coberturas/Renault.mp4',
    badge: "Automotores y Nexos",
    headlineLeft: "EXPERIENCIA DE MARCA",
    headlineRight: "Resumen enérgico del evento corporativo y exhibición.",
    challengeLeft: "RITMO Y CINEMATOGRAFÍA.",
    challengeRight: "Tomas dinámicas con estabilizadores y edición al ritmo de la música.",
    quote: "\"Un resumen que revive la emoción del momento.\""
  },
  {
    id: 19,
    client: "GRUPO LUNA",
    category: "Coberturas",
    title: "MERCADO VERGELES",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Coberturas/mercado_municpal_vergeles.mp4',
    badge: "Grupo Luna",
    headlineLeft: "OBRA COMUNITARIA",
    headlineRight: "Documentando el impacto social y la alegría ciudadana en la inauguración.",
    challengeLeft: "DOCUMENTAL URBANO.",
    challengeRight: "Tomas humanas y de infraestructura que reflejan el beneficio real para la comunidad.",
    quote: "\"Un registro fiel y emocionante de una obra histórica.\""
  },

  // --- Video Casos ---
  {
    id: 20,
    client: "DURAGAS",
    category: "Video Casos",
    title: "UN COMPETIDOR INESPERADO",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Video Casos/Duragas_Competidor_Inesperado.mp4',
    badge: "DURAGAS",
    headlineLeft: "UN CASO DE ÉXITO AUDIOVISUAL",
    headlineRight: "Estructurando el caso de estudio comercial y operativo de Duragas.",
    challengeLeft: "IMPACTO Y NARRATIVA ESTRATÉGICA.",
    challengeRight: "Montaje cinematográfico del caso de estudio resaltando el desafío y la efectividad de la campaña.",
    quote: "\"Un trabajo documental de alto impacto.\""
  },
  {
    id: 21,
    client: "BANCO GUAYAQUIL",
    category: "Video Casos",
    title: "EL MEJOR BANCO PARA TI",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Video Casos/BG_El_Mejor_Banco_Para_Ti.mp4',
    badge: "Banco Guayaquil",
    headlineLeft: "CASO DE ÉXITO BANCARIO",
    headlineRight: "Estructurando los resultados y el impacto de la campaña en una historia cautivadora.",
    challengeLeft: "SINTETIZAR IMPACTO Y RESULTADOS.",
    challengeRight: "Montaje cinematográfico de caso de estudio para certámenes y comunicación institucional.",
    quote: "\"Un caso de éxito narrado con excelencia.\""
  },
  {
    id: 22,
    client: "BANCO GUAYAQUIL",
    category: "Video Casos",
    title: "PRIMERO NIÑO MOI",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Video Casos/BG_Primero_Nino_Moi.mp4',
    badge: "Banco Guayaquil",
    headlineLeft: "INSPIRACIÓN Y RESULTADOS",
    headlineRight: "Documentando el impacto cultural y de marca de la campaña con Niño Moi.",
    challengeLeft: "EMOCIÓN Y MÉTRICAS EN UN SOLO FORMATO.",
    challengeRight: "Relato ágil con testimonios, reacciones en medios y métricas de alcance nacional.",
    quote: "\"Impacto emocional y relevancia cultural inigualable.\""
  },
  {
    id: 23,
    client: "BANCO GUAYAQUIL",
    category: "Video Casos",
    title: "WRAPPED",
    video: (import.meta as any).env.BASE_URL + 'portfolio/Video Casos/BG_Wrapped_App.mp4',
    badge: "Banco Guayaquil",
    headlineLeft: "INNOVACIÓN DIGITAL",
    headlineRight: "Presentación del caso de interacción y personalización para usuarios de la app.",
    challengeLeft: "EXPLICAR LA EXPERIENCIA DE USUARIO.",
    challengeRight: "Demostración visual de la interfaz combinada con testimoniales y resultados de adopción.",
    quote: "\"Gran dinamismo para comunicar un logro tecnológico.\""
  }
];

// Expanded Player Component
const ExpandedPlayer = ({ videoSrc }: { videoSrc: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black relative shadow-2xl">
      <video 
        ref={videoRef}
        src={videoSrc} 
        className="w-full h-full object-contain bg-black"
        controls
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
};

// Accordion Row Component
const ProjectRow = ({ 
  project, 
  index, 
  isExpanded, 
  onToggle 
}: { 
  project: any, 
  index: number, 
  isExpanded: boolean, 
  onToggle: () => void 
}) => {
  const thumbnailRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.pause();
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col"
    >
      {/* Clickable Row */}
      <div 
        onClick={onToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 md:py-14 cursor-pointer transition-colors ${isExpanded ? 'opacity-100' : 'hover:opacity-70'} ${index !== 0 ? 'border-t border-white/10' : ''}`}
      >
        {/* Left line bullet */}
        <div className="hidden md:block w-12 h-[3px] bg-white transition-all group-hover:w-24 shrink-0"></div>
        
        {/* Video Thumbnail */}
        <div className="w-24 h-16 md:w-32 md:h-20 shrink-0 overflow-hidden rounded-lg bg-black relative border border-white/10">
          <video 
            ref={thumbnailRef}
            src={`${project.video}#t=0.001`} 
            preload="metadata" 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
          />
        </div>
        
        {/* Title & Badge */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 flex-1 min-w-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter heading-font leading-none">
            {project.title}
          </h2>
          <div className="shrink-0 flex items-center justify-center border border-white/20 rounded-full px-3.5 py-1 text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-widest whitespace-nowrap">
            {project.badge}
          </div>
        </div>
      </div>

      {/* Expanded Drawer */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="bg-[#083eeb] text-white p-6 sm:p-8 md:p-16 lg:p-24 rounded-2xl md:rounded-3xl mb-12 relative flex flex-col gap-12 md:gap-20">
              
              {/* Close Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); onToggle(); }}
                className="absolute top-4 right-4 md:top-12 md:right-12 w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform z-10 cursor-pointer"
                aria-label="Cerrar proyecto"
              >
                <X size={20} className="font-bold text-black" />
              </button>

              {/* Top Header inside Expanded */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 pt-10 md:pt-0 pr-12 md:pr-0">
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter heading-font leading-none break-words">
                    {project.title}
                  </h3>
                  <span className="border border-white/40 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/90 shrink-0">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Intro 2-column */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
                <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tight heading-font leading-tight">
                  {project.headlineLeft}
                </h4>
                <p className="text-lg md:text-2xl font-medium leading-relaxed opacity-90">
                  {project.headlineRight}
                </p>
              </div>

              {/* Massive Dedicated Video Player */}
              <ExpandedPlayer videoSrc={project.video} />

              {/* Detail 2-column */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter heading-font leading-tight">
                  {project.challengeLeft}
                </h4>
                <div className="flex flex-col gap-6">
                  {project.challengeRight.split('\n\n').map((paragraph: string, pIdx: number) => (
                    <p key={pIdx} className="text-base md:text-lg opacity-80 leading-relaxed font-medium">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="pt-8 md:pt-16 pb-8 text-center max-w-5xl mx-auto w-full">
                <h3 className="text-center text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight heading-font leading-tight text-white">
                  {project.quote}
                </h3>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("TODOS");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredProjects = activeFilter === "TODOS" 
    ? projects 
    : projects.filter(p => p.category.toUpperCase() === activeFilter);

  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-[150px] pb-12 md:pb-24">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#083eeb] text-xs font-bold uppercase tracking-[0.2em] mb-6">Nuestro Trabajo</p>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase heading-font leading-[0.9]">IMPACTO.</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-md mt-8">Creamos videos para marcas que buscan experiencias cinematográficas.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setExpandedId(null);
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeFilter === cat 
                  ? 'bg-white text-black' 
                  : 'bg-transparent text-white/50 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="flex flex-col">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={index}
                isExpanded={expandedId === project.id}
                onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
              />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export const PortfolioPage = Portfolio;

