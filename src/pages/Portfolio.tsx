import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Volume2, VolumeX } from 'lucide-react';

const projects = [
  {
    "id": 1,
    "client": "OROCASH",
    "category": "Comerciales TV",
    "title": "TVC",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Comerciales TV/Orocash_TVC.mp4',
    "badge": "COMERCIAL TV",
    "headlineLeft": "CONEXIÓN AUTÉNTICA",
    "headlineRight": "Retratar los momentos especiales de la vida donde Orocash está presente como parte de la memoria afectiva de las personas.",
    "challengeLeft": "MOMENTOS QUE PERDURAN EN LA MEMORIA.",
    "challengeRight": "Nuestro objetivo fue crear una conexión auténtica. Seleccionamos una locación con alma, un casting que reflejara verdaderas emociones y una colorización cuidadosa que acentuara la calidez y la nostalgia de cada instante.\n\nEl resultado invita al espectador a reconocer sus propios momentos especiales en cada frame.",
    "quote": "\"Un resultado que invita al espectador a reconocer sus propios momentos especiales en cada frame.\""
  },
  {
    "id": 2,
    "client": "DURAGAS EXPRESS",
    "category": "Comerciales TV",
    "title": "MAKING OF",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Video Casos/Duragas_MakingOf.mp4',
    "badge": "CASO DE ÉXITO",
    "headlineLeft": "SOLUCIÓN INMEDIATA",
    "headlineRight": "Hacer sentir la urgencia cotidiana de quedarse sin gas y posicionar la nueva app como la solución inmediata.",
    "challengeLeft": "TRANSFORMAR EL ESTRÉS EN HISTORIA.",
    "challengeRight": "Para Duragas Express, diseñamos un lenguaje visual que convirtiera el estrés diario en una historia con clímax y alivio.\n\nCon una planificación enfocada, logramos 5 cápsulas narrativas completas en un solo día de producción. Cada una, con una estética cinematográfica y un ritmo pensado para conectar al instante.\n\nEl resultado fue una campaña lista para todos los medios.",
    "quote": "\"Una campaña lista para todos los medios con estética cinematográfica y ritmo pensado para conectar al instante.\""
  },
  {
    "id": 3,
    "client": "DURAGAS EXPRESS",
    "category": "Comerciales TV",
    "title": "HOME",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Comerciales TV/Duragas_Express_Home.mp4',
    "badge": "COMERCIAL",
    "headlineLeft": "HISTORIAS COTIDIANAS",
    "headlineRight": "Conectando al instante con situaciones del día a día en el hogar.",
    "challengeLeft": "RITMO Y CONEXIÓN INMEDIATA.",
    "challengeRight": "Una planificación enfocada con estética cinematográfica y un ritmo pensado para conectar al instante.",
    "quote": "\"El resultado fue una campaña eficiente y de alto impacto.\""
  },
  {
    "id": 4,
    "client": "DURAGAS EXPRESS",
    "category": "Comerciales TV",
    "title": "PARRILLA",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Comerciales TV/Duragas_Express_Parrilla.mp4',
    "badge": "COMERCIAL",
    "headlineLeft": "MOMENTOS EN FAMILIA",
    "headlineRight": "Resaltando la comodidad y rapidez del servicio durante reuniones sociales.",
    "challengeLeft": "DINAMISMO Y FRESCURA VISUAL.",
    "challengeRight": "Cinematografía cálida y dinámica para retratar reuniones familiares y el valor del servicio rápido.",
    "quote": "\"Conexión instantánea con la audiencia.\""
  },
  {
    "id": 5,
    "client": "DURAGAS",
    "category": "Comerciales TV",
    "title": "INSTITUCIONAL",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Comerciales TV/Duragas_Oficina.mp4',
    "badge": "CORPORATIVO",
    "headlineLeft": "TRADICIÓN Y EFICIENCIA",
    "headlineRight": "Comunicando los valores de una marca histórica con una narrativa moderna y eficiente.",
    "challengeLeft": "RENOVAR LA IMAGEN CORPORATIVA.",
    "challengeRight": "Mostramos el interior de sus operaciones resaltando la tecnología y el compromiso de su equipo humano.",
    "quote": "\"El balance perfecto entre escala industrial y factor humano.\""
  },
  {
    "id": 6,
    "client": "MAZDA",
    "category": "Redes",
    "title": "CX90",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Redes/Mazda_CX90.mp4',
    "badge": "AUTOMOTRIZ",
    "headlineLeft": "ELEGANCIA EN MOVIMIENTO",
    "headlineRight": "Lanzamiento del SUV más premium de la marca nipona.",
    "challengeLeft": "RESALTAR EL DISEÑO JAPONÉS.",
    "challengeRight": "Combinamos tomas detalle en estudio con iluminación dinámica para resaltar la pintura artesanal, y tomas de tracking a alta velocidad.",
    "quote": "\"Beemo logró capturar la esencia premium que el nuevo CX-90 demanda.\""
  },
  {
    "id": 7,
    "client": "PEDIDOSYA",
    "category": "Redes",
    "title": "DIGITAL",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Redes/PedidosYa.mp4',
    "badge": "CAMPAÑA DIGITAL",
    "headlineLeft": "VIRALIDAD A LA VELOCIDAD DE UN DELIVERY",
    "headlineRight": "Contenido dinámico, colorido y directo diseñado específicamente para redes.",
    "challengeLeft": "CAPTURAR LA ATENCIÓN EN 3 SEGUNDOS.",
    "challengeRight": "Edición frenética, transiciones invisibles y efectos de sonido para saturar la pantalla con la identidad de la marca.",
    "quote": "\"Entienden perfectamente el lenguaje de redes sociales.\""
  },
  {
    "id": 8,
    "client": "PREMIERPET",
    "category": "Redes",
    "title": "FINAL",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Redes/PremierPet_Final.mp4',
    "badge": "PET CARE",
    "headlineLeft": "NUTRICIÓN Y BIENESTAR",
    "headlineRight": "Resaltando el cuidado y amor por las mascotas a través de cinematografía cálida.",
    "challengeLeft": "CAPTURA DE TALENTO ANIMAL Y HUMANO.",
    "challengeRight": "Dirección especializada para capturar la vitalidad de las mascotas y la confianza de sus dueños.",
    "quote": "\"Una pieza conmovedora con un nivel visual insuperable.\""
  },
  {
    "id": 9,
    "client": "CIUDAD CELESTE",
    "category": "Redes",
    "title": "CÁPSULA",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Redes/CiudadCeleste_Capsula_1.mp4',
    "badge": "INMOBILIARIO",
    "headlineLeft": "ESTILO DE VIDA Y EXCLUSIVIDAD",
    "headlineRight": "Proyectando la tranquilidad, seguridad y amenidades del proyecto residencial.",
    "challengeLeft": "TRANSMITIR EL VALOR DE HOGAR.",
    "challengeRight": "Tomas aéreas y tomas familiares que invitan a formar parte de una comunidad exclusiva.",
    "quote": "\"Capturaron el valor aspiracional de la comunidad a la perfección.\""
  },
  {
    "id": 10,
    "client": "BLINSEG",
    "category": "Redes",
    "title": "BLINDAJE",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Redes/Blinseg_Blindaje.mp4',
    "badge": "SEGURIDAD",
    "headlineLeft": "FORTALEZA Y CONFIANZA",
    "headlineRight": "Contenido robusto y profesional diseñado para transmitir máxima seguridad.",
    "challengeLeft": "DEMOSTRAR SEGURIDAD EN REDES.",
    "challengeRight": "Detalles técnicos, materiales y precisión del blindaje para comunicar ciencia y solidez.",
    "quote": "\"El contenido transmitió la fortaleza y profesionalismo que nos define.\""
  },
  {
    "id": 11,
    "client": "SAMBOLÓN",
    "category": "Redes",
    "title": "EVENTO",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Redes/Sambolon.mp4',
    "badge": "GASTRONOMÍA",
    "headlineLeft": "SABOR EN MOVIMIENTO",
    "headlineRight": "Capturando la esencia y textura de la cultura gastronómica local.",
    "challengeLeft": "DESPERTAR EL APETITO EN SEGUNDOS.",
    "challengeRight": "Iluminación enfocada en texturas y ritmo de edición acelerado con sonido hiperrealista.",
    "quote": "\"La respuesta en redes fue inmediata y contundente.\""
  },
  {
    "id": 12,
    "client": "PEIGO",
    "category": "Post Producción",
    "title": "MADRE",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Madre.mp4',
    "badge": "FINTECH",
    "headlineLeft": "EMOCIÓN SIN FRICCIONES",
    "headlineRight": "Un saludo emotivo que destaca la facilidad de transferir con PeiGo.",
    "challengeLeft": "HUMANIZAR UNA APP FINANCIERA.",
    "challengeRight": "Postproducción cuidada para integrar la interfaz dentro de una narrativa emotiva familiar.",
    "quote": "\"Logramos una conexión genuina con nuestros usuarios.\""
  },
  {
    "id": 13,
    "client": "PEIGO",
    "category": "Post Producción",
    "title": "PAN M 9x16",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Panm.mp4',
    "badge": "POST PRODUCCIÓN",
    "headlineLeft": "MOTION Y RITMO VERTICAL",
    "headlineRight": "Post-producción optimizada para formatos móviles y engagement rápido.",
    "challengeLeft": "INTEGRACIÓN DINÁMICA DE ELEMENTOS UI.",
    "challengeRight": "Composición de pantalla, micro-animaciones y corrección de color de alta gama.",
    "quote": "\"Piezas ágiles que comunican la propuesta de valor sin rodeos.\""
  },
  {
    "id": 14,
    "client": "PEIGO",
    "category": "Post Producción",
    "title": "INTERVIEW 9x16",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Interview.mp4',
    "badge": "POST PRODUCCIÓN",
    "headlineLeft": "CLARIDAD TESTIMONIAL",
    "headlineRight": "Narrativa concisa combinando testimonios y motion graphics.",
    "challengeLeft": "MANTENER LA RETENCIÓN AUDITIVA Y VISUAL.",
    "challengeRight": "Cortes limpios, diseño sonoro puntual y subtitulado dinámico de marca.",
    "quote": "\"Máxima retención en plataformas de video corto.\""
  },
  {
    "id": 15,
    "client": "PEIGO",
    "category": "Post Producción",
    "title": "SUPCINE 9x16",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Supcine.mp4',
    "badge": "POST PRODUCCIÓN",
    "headlineLeft": "ACABADO CINEMATOGRÁFICO EN DIGITAL",
    "headlineRight": "Grading de color y diseño sonoro envolvente.",
    "challengeLeft": "COHERENCIA VISUAL DE MARCA.",
    "challengeRight": "Post-producción integral que eleva la percepción del producto fintech.",
    "quote": "\"La calidad visual destaca en el feed.\""
  },
  {
    "id": 16,
    "client": "PEIGO",
    "category": "Post Producción",
    "title": "WEB 9x16",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Post-Produccion/PeiGo_Web.mp4',
    "badge": "POST PRODUCCIÓN",
    "headlineLeft": "CONVERSIÓN DIGITAL",
    "headlineRight": "Estructura orientada a presentar las funcionalidades clave de la app.",
    "challengeLeft": "SÍNTESIS VISUAL.",
    "challengeRight": "Integración estética entre material grabado y animaciones gráficas.",
    "quote": "\"Excelente trabajo en post-producción.\""
  },
  {
    "id": 17,
    "client": "DURAGAS",
    "category": "Video Casos",
    "title": "MAKING OF",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Video Casos/Duragas_MakingOf.mp4',
    "badge": "VIDEO CASO",
    "headlineLeft": "LA MAGIA DETRÁS DEL SET",
    "headlineRight": "Documentando la dedicación y el trabajo en equipo de una producción de primer nivel.",
    "challengeLeft": "DOCUMENTAR SIN INTERRUMPIR EL RODAJE.",
    "challengeRight": "Pieza ágil que rinde homenaje a todo el equipo involucrado en la filmación.",
    "quote": "\"Un trabajo documental que nos llenó de orgullo.\""
  },
  {
    "id": 18,
    "client": "BANCO GUAYAQUIL",
    "category": "Video Casos",
    "title": "EL MEJOR BANCO",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Video Casos/BG_El_Mejor_Banco_Para_Ti.mp4',
    "badge": "VIDEO CASO",
    "headlineLeft": "CASO DE ÉXITO BANCARIO",
    "headlineRight": "Estructurando los resultados y el impacto de la campaña en una historia cautivadora.",
    "challengeLeft": "SINTETIZAR IMPACTO Y RESULTADOS.",
    "challengeRight": "Montaje cinematográfico de caso de estudio para certámenes y comunicación institucional.",
    "quote": "\"Un caso de éxito narrado con excelencia.\""
  },
  {
    "id": 19,
    "client": "BANCO GUAYAQUIL",
    "category": "Video Casos",
    "title": "NIÑO MOI",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Video Casos/BG_Primero_Nino_Moi.mp4',
    "badge": "VIDEO CASO",
    "headlineLeft": "INSPIRACIÓN Y RESULTADOS",
    "headlineRight": "Documentando el impacto cultural y de marca de la campaña con Niño Moi.",
    "challengeLeft": "EMOCIÓN Y MÉTRICAS EN UN SOLO FORMATO.",
    "challengeRight": "Relato ágil con testimonios, reacciones en medios y métricas de alcance nacional.",
    "quote": "\"Impacto emocional y relevancia cultural inigualable.\""
  },
  {
    "id": 20,
    "client": "BANCO GUAYAQUIL",
    "category": "Video Casos",
    "title": "WRAPPED APP",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Video Casos/BG_Wrapped_App.mp4',
    "badge": "VIDEO CASO",
    "headlineLeft": "INNOVACIÓN DIGITAL",
    "headlineRight": "Presentación del caso de interacción y personalización para usuarios de la app.",
    "challengeLeft": "EXPLICAR LA EXPERIENCIA DE USUARIO.",
    "challengeRight": "Demostración visual de la interfaz combinada con testimoniales y resultados de adopción.",
    "quote": "\"Gran dinamismo para comunicar un logro tecnológico.\""
  },
  {
    "id": 21,
    "client": "TOYOCOSTA",
    "category": "Coberturas",
    "title": "PREMIO PINTADO",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Coberturas/Toyocosta_Premio_Pintado.mp4',
    "badge": "COBERTURA",
    "headlineLeft": "COBERTURA DE PREMIACIÓN",
    "headlineRight": "Capturando los momentos cumbre y la emoción de los galardonados.",
    "challengeLeft": "AGILIDAD EN SITIO.",
    "challengeRight": "Registro cinematográfico multicámara para entrega rápida de resumen de evento.",
    "quote": "\"Capturaron la energía del evento de forma impecable.\""
  },
  {
    "id": 22,
    "client": "RENAULT",
    "category": "Coberturas",
    "title": "KWID HD",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Coberturas/Renault_Kwid_HD.mp4',
    "badge": "COBERTURA",
    "headlineLeft": "LANZAMIENTO AUTOMOTRIZ",
    "headlineRight": "Registro visual del evento de presentación y pruebas de manejo.",
    "challengeLeft": "DINAMISMO EN VIVO.",
    "challengeRight": "Cobertura ágil que resalta el diseño del vehículo y la experiencia de los invitados.",
    "quote": "\"Excelente cobertura de nuestro lanzamiento.\""
  },
  {
    "id": 23,
    "client": "RENAULT",
    "category": "Coberturas",
    "title": "EVENTO RENAULT",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Coberturas/Renault.mp4',
    "badge": "COBERTURA",
    "headlineLeft": "EXPERIENCIA DE MARCA",
    "headlineRight": "Resumen enérgico del evento corporativo y exhibición.",
    "challengeLeft": "RITMO Y CINEMATOGRAFÍA.",
    "challengeRight": "Tomas dinámicas con estabilizadores y edición al ritmo de la música.",
    "quote": "\"Un resumen que revive la emoción del momento.\""
  },
  {
    "id": 24,
    "client": "MUNICIPIO",
    "category": "Coberturas",
    "title": "VERGELES",
    "video": (import.meta as any).env.BASE_URL + 'portfolio/Coberturas/mercado_municpal_vergeles.mp4',
    "badge": "COBERTURA",
    "headlineLeft": "OBRA COMUNITARIA",
    "headlineRight": "Documentando el impacto social y la alegría ciudadana en la inauguración.",
    "challengeLeft": "DOCUMENTAL URBANO.",
    "challengeRight": "Tomas humanas y de infraestructura que reflejan el beneficio real para la comunidad.",
    "quote": "\"Un registro fiel y emocionante de una obra histórica.\""
  }
];

const categories = ['Todos', 'Comerciales TV', 'Redes', 'Post Producción', 'Coberturas', 'Video Casos'];

export const PortfolioPage = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [isPlaying, setIsPlaying] = useState(false);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);

  const filteredProjects = projects.filter(p => activeFilter === 'Todos' || p.category === activeFilter);

    const handlePlayToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (expandedVideoRef.current) {
      if (isPlaying) {
        expandedVideoRef.current.pause();
        setIsPlaying(false);
      } else {
        const promise = expandedVideoRef.current.play();
        if (promise !== undefined) {
          promise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // Ignore AbortError / user interruption
              setIsPlaying(false);
            });
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-[150px] pb-12 md:pb-24">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#083eeb] text-xs font-bold uppercase tracking-[0.2em] mb-6">Nuestro Trabajo</p>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase heading-font leading-[0.9]">IMPACTO.</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-md mt-8">Creamos videos corporativos y comerciales que se sienten como experiencias cinematograficas.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setExpandedId(null);
                setIsPlaying(false);
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
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
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedId === project.id;
              
              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.id} 
                  className="flex flex-col"
                >
                  
                  {/* The Clickable Row */}
                  <div 
                    onClick={() => {
                      setExpandedId(isExpanded ? null : project.id);
                      setIsPlaying(false);
                    }}
                    className={`group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-12 md:py-16 cursor-pointer transition-colors ${isExpanded ? 'opacity-100' : 'hover:opacity-70'} ${index !== 0 ? 'border-t border-white/10' : ''}`}
                  >
                    {/* Left line bullet */}
                    <div className="hidden md:block w-12 h-[3px] bg-white transition-all group-hover:w-24"></div>
                    
                    {/* Video Thumbnail */}
                    <div className="w-24 h-16 md:w-32 md:h-20 shrink-0 overflow-hidden rounded-lg bg-black relative">
                      <video src={`${project.video}#t=0.001`} preload="metadata" muted loop playsInline
                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                      />
                    </div>
                    
                    {/* Title & Badge */}
                    <div className="flex flex-wrap items-center gap-6">
                      <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter heading-font leading-none">
                        {project.client}
                      </h2>
                      <div className="flex items-center justify-center border-2 border-white/20 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-bold text-white uppercase tracking-widest whitespace-nowrap">
                        {project.badge}
                      </div>
                    </div>
                  </div>

                  {/* The Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="bg-[#083eeb] text-white p-6 sm:p-8 md:p-16 lg:p-24 rounded-2xl md:rounded-3xl mb-12 relative flex flex-col gap-12 md:gap-24">
                          
                          {/* Close Button */}
                          <button 
                            onClick={(e) => { e.stopPropagation(); setExpandedId(null); setIsPlaying(false); }}
                            className="absolute top-4 right-4 md:top-12 md:right-12 w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform z-10"
                          >
                            <X size={18} className="font-bold md:w-5 md:h-5" />
                          </button>

                          {/* Top Header inside Expanded */}
                          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 pt-10 md:pt-0 pr-12 md:pr-0">
                            <div className="w-20 h-14 md:w-24 md:h-16 shrink-0 overflow-hidden rounded-lg bg-black">
                              <video src={`${project.video}#t=0.001`} preload="metadata" muted loop playsInline className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter heading-font leading-none break-words w-full">
                              {project.client}
                            </h3>
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

                          {/* Massive Video Player */}
                          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black relative cursor-pointer" onClick={handlePlayToggle}>
                            <video 
    ref={expandedVideoRef}
    src={project.video} 
    className="w-full h-full object-contain bg-black"
    controls
    playsInline
    onPlay={() => setIsPlaying(true)}
    onPause={() => setIsPlaying(false)}
  />
                            
                            <AnimatePresence>
                              {!isPlaying && (
                                <motion.div 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all hover:bg-black/20"
                                >
                                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center pl-1 md:pl-2 hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 md:w-8 md:h-8"><path d="M8 5v14l11-7z"/></svg>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Detail 2-column */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                            <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter heading-font leading-tight">
                              {project.challengeLeft}
                            </h4>
                            <div className="flex flex-col gap-6">
                              {project.challengeRight.split('\n\n').map((paragraph, pIdx) => (
                                <p key={pIdx} className="text-base md:text-lg opacity-80 leading-relaxed font-medium">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>

                          {/* Quote */}
                          <div className="pt-12 md:pt-24 pb-12 text-center max-w-5xl mx-auto w-full">
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
            })}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
