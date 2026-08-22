import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Volume2, VolumeX } from 'lucide-react';

const projects = [
  {
    id: 1,
    client: "OROCASH",
    category: "Comerciales",
    title: "TVC",
    video: "/portfolio/Comerciales/Orocash_TVC.mp4",
    badge: "COMERCIAL TV",
    headlineLeft: "CONFIANZA A NIVEL NACIONAL",
    headlineRight: "Una campana televisiva disenada para generar credibilidad inmediata y conectar con las familias ecuatorianas.",
    challengeLeft: "COMO COMUNICAR TRANSPARENCIA EN 30 SEGUNDOS.",
    challengeRight: `El mercado del oro y las joyas requiere un alto nivel de confianza. Orocash necesitaba un spot comercial que se sintiera cercano, seguro y sumamente profesional.\n\nUtilizamos iluminacion calida, talento local muy expresivo y un tono de voz familiar para transmitir el mensaje principal: tu inversion esta en buenas manos.\n\nEl comercial se emitio en cadena nacional durante horario prime.`,
    quote: "\"Un resultado espectacular que consolido nuestra imagen de marca a nivel pais.\""
  },
  {
    id: 2,
    client: "MAZDA",
    category: "Comerciales",
    title: "CX90",
    video: "/portfolio/Comerciales/Mazda_CX90.mp4",
    badge: "AUTOMOTRIZ",
    headlineLeft: "ELEGANCIA EN MOVIMIENTO",
    headlineRight: "Asi es como se lanza el SUV mas premium de la marca nipona. Un balance perfecto entre poder y sofisticacion.",
    challengeLeft: "RESALTAR EL DISENO JAPONES EN SU MAXIMA EXPRESION.",
    challengeRight: `El nuevo Mazda CX-90 no es solo un auto, es una declaracion de principios de la marca buscando entrar al segmento de lujo. Necesitabamos que el video reflejara esa ambicion.\n\nNos enfocamos en el concepto del "Jinba Ittai" (jinete y caballo como uno solo). Combinamos tomas detalle en estudio con iluminacion dinamica para resaltar la pintura artesanal, y tomas de tracking a alta velocidad.\n\nLa pieza final respira lujo y minimalismo japones en cada fotograma.`,
    quote: "\"Beemo logro capturar la esencia premium que el nuevo CX-90 demanda. Un trabajo de nivel internacional.\""
  },
  {
    id: 3,
    client: "PEDIDOSYA",
    category: "Comerciales",
    title: "DIGITAL",
    video: "/portfolio/Comerciales/PedidosYa.mp4",
    badge: "CAMPANA DIGITAL",
    headlineLeft: "VIRALIDAD A LA VELOCIDAD DE UN DELIVERY",
    headlineRight: "Contenido dinamico, colorido y directo disenado especificamente para el algoritmo y el scroll infinito.",
    challengeLeft: "CAPTURAR LA ATENCION EN LOS PRIMEROS 3 SEGUNDOS.",
    challengeRight: `En el mundo del delivery, la guerra se gana en redes sociales. PedidosYa buscaba una serie de videos que conectaran con la Gen-Z usando humor, ritmo rapido y sus caracteristicos colores vibrantes.\n\nImplementamos una edicion frenetica, transiciones invisibles y efectos de sonido exagerados. El rojo de la marca satura la pantalla, creando una identidad visual inconfundible.\n\nEl rendimiento de los anuncios (ROAS) supero las expectativas del cliente en un 150%.`,
    quote: "\"Entienden perfectamente el lenguaje de redes. El contenido funciono increiblemente bien.\""
  },
  {
    id: 4,
    client: "PEIGO",
    category: "Comerciales",
    title: "DIA DE LA MADRE",
    video: "/portfolio/Comerciales/PeiGo_Madre.mp4",
    badge: "STORYTELLING",
    headlineLeft: "EMOCION QUE CONECTA",
    headlineRight: "Una historia conmovedora sobre la maternidad moderna y la independencia financiera.",
    challengeLeft: "MOSTRAR TECNOLOGIA A TRAVES DE LAS EMOCIONES.",
    challengeRight: `Como una billetera digital, PeiGo necesitaba salir de los mensajes transaccionales y hablar desde el corazon por el Dia de la Madre.\n\nCreamos un guion emotivo centrado en el esfuerzo diario de una madre emprendedora. La camara sigue su dia a dia, usando una paleta de colores calida e intima.\n\nLa tecnologia se mostro como un facilitador silencioso, logrando que la audiencia se identificara profundamente con los personajes.`,
    quote: "\"Nos hicieron llorar a todos en la presentacion. Un storytelling brillante.\""
  },
  {
    id: 5,
    client: "DURAGAS",
    category: "Institucionales",
    title: "OFICINA",
    video: "/portfolio/Institucionales/Duragas_Oficina.mp4",
    badge: "INSTITUCIONAL",
    headlineLeft: "INNOVACION DETRAS DE LA LLAMA",
    headlineRight: "Mostrando el motor corporativo de una de las empresas de energia mas grandes del pais.",
    challengeLeft: "HUMANIZAR UNA EMPRESA INDUSTRIAL.",
    challengeRight: `Duragas Express queria mostrar sus nuevas instalaciones y la cultura corporativa detras de su servicio. A menudo, las empresas industriales se perciben como frias y distantes.\n\nDecidimos hacer un recorrido fluido usando estabilizadores Ronin y drones de interiores, mostrando la energia de las oficinas y las sonrisas del equipo humano.\n\nEl video se utiliza como pieza principal de reclutamiento y en presentaciones a inversores.`,
    quote: "\"Transmitieron exactamente la energia renovada y moderna que vivimos hoy en la empresa.\""
  },
  {
    id: 6,
    client: "BLINSEG",
    category: "Institucionales",
    title: "BLINDAJE",
    video: "/portfolio/Institucionales/Blinseg_Blindaje.mp4",
    badge: "CORPORATIVO",
    headlineLeft: "SEGURIDAD MILIMETRICA",
    headlineRight: "Documentando los rigurosos procesos de ingenieria en blindaje automotriz de alta gama.",
    challengeLeft: "MOSTRAR UN PROCESO INVISIBLE.",
    challengeRight: `El buen blindaje no se nota. Blinseg necesitaba mostrar a sus clientes corporativos el nivel de ingenieria destructiva y reconstructiva que sufren los vehiculos en sus talleres.\n\nUtilizamos iluminacion dura e industrial para resaltar la resistencia de los materiales (Kevlar, acero balistico). Tomas macro evidencian la perfeccion de las costuras y los remaches.\n\nEl resultado es un video que transmite autoridad, seguridad y extrema precision tecnica.`,
    quote: "\"Espectacular. Muestra nuestro trabajo pesado con un toque de elegancia industrial.\""
  },
  {
    id: 7,
    client: "DURAGAS M-OF",
    category: "Coberturas",
    title: "MAKING OF",
    video: "/portfolio/Coberturas/Duragas_MakingOf.mp4",
    badge: "BEHIND THE SCENES",
    headlineLeft: "LA MAGIA DETRAS DE CAMARAS",
    headlineRight: "Un vistazo rapido a la logistica, el equipo humano y las luces de nuestro propio set de grabacion.",
    challengeLeft: "MOSTRAR EL MUSCULO DE PRODUCCION.",
    challengeRight: `Mas alla del comercial final, era importante documentar la magnitud de la produccion. Grabar a un equipo grabando siempre tiene su encanto caotico.\n\nUsamos una edicion muy picada, con musica upbeat, mostrando rieles, grandes luces, y el trabajo del director en accion.\n\nUna pieza excelente para redes sociales que valida el profesionalismo detras de cada produccion de Beemo.`,
    quote: "\"Nos encanto ver el despliegue tecnico. Son unos verdaderos cracks en el set.\""
  },
  {
    id: 8,
    client: "SAMBOLON",
    category: "Coberturas",
    title: "EVENTO",
    video: "/portfolio/Coberturas/Sambolon.mp4",
    badge: "EVENTOS",
    headlineLeft: "COBERTURA TOTAL",
    headlineRight: "Capturando la energia en vivo de un evento gastronomico masivo.",
    challengeLeft: "ESTAR EN TODAS PARTES AL MISMO TIEMPO.",
    challengeRight: `La cobertura de eventos masivos no tiene toma 2. Si te pierdes el momento, se fue para siempre.\n\nDesplegamos un equipo de 3 camarografos y 1 operador de dron para cubrir el festival desde todos los angulos. Tomas cerradas de la comida humeante contrastando con grandes planos generales de la multitud.\n\nEl after-movie se entrego en tiempo record de 48 horas para aprovechar la conversacion en redes sociales.`,
    quote: "\"Lograron capturar el sabor y la alegria del evento a la perfeccion.\""
  }
];

const categories = ['Todos', 'Comerciales', 'Institucionales', 'Coberturas'];

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
      } else {
        expandedVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
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
                      <video 
                        src={project.video} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
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
                              <video src={project.video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
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
                              className="w-full h-full object-cover"
                              loop
                              playsInline
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
