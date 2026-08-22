import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Video, Megaphone, CalendarDays, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'COMERCIALES & SPOTS',
    icon: <Megaphone size={40} className="text-[#083eeb]" />,
    description: 'Campanas visuales de alto impacto creadas para digital y television. Desde la conceptualizacion creativa hasta el master final, producimos piezas dinamicas enfocadas puramente en la retencion de audiencia y la conversion.',
    deliverables: [
      'Spots para TV (15s, 30s, 60s)',
      'Campanas Digitales (Reels, TikTok)',
      'Product Films',
      'Branded Content'
    ],
    video: '/portfolio/Comerciales/Mazda_CX90.mp4'
  },
  {
    id: '02',
    title: 'INSTITUCIONALES',
    icon: <Video size={40} className="text-[#083eeb]" />,
    description: 'Historias de marca, manifiestos corporativos y comunicacion interna disenados para generar confianza. Mostramos la escala, la infraestructura y el factor humano detras de las grandes empresas.',
    deliverables: [
      'Videos Corporativos',
      'Videos de Induccion y Capacitacion',
      'Manifiestos de Marca',
      'Recorridos Industriales (Dron & FPV)'
    ],
    video: '/portfolio/Institucionales/Duragas_Oficina.mp4'
  },
  {
    id: '03',
    title: 'COBERTURA EVENTOS',
    icon: <CalendarDays size={40} className="text-[#083eeb]" />,
    description: 'Resumenes cinematograficos y cobertura en vivo de cumbres corporativas, festivales y lanzamientos. Capturamos la energia del momento sin interrumpir la experiencia de los asistentes.',
    deliverables: [
      'Aftermovies Cinematograficos',
      'Resumenes para Redes Sociales (Mismo dia)',
      'Entrevistas en Sitio',
      'Fotografia Corporativa de Eventos'
    ],
    video: '/portfolio/Coberturas/Sambolon.mp4'
  },
  {
    id: '04',
    title: 'CASOS DE EXITO',
    icon: <TrendingUp size={40} className="text-[#083eeb]" />,
    description: 'Testimoniales estilo documental que ofrecen validacion social para marcas B2B y B2C. Entrevistas intimas con iluminacion cinematografica que elevan la percepcion de tus mejores clientes.',
    deliverables: [
      'Entrevistas Testimoniales',
      'Documentales Cortos',
      'Casos de Estudio B2B',
      'Micro-capsulas de clientes'
    ],
    video: '/portfolio/Comerciales/Orocash_TVC.mp4'
  }
];

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-[150px] pb-12 md:pb-24">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <p className="text-[#083eeb] text-xs font-bold uppercase tracking-[0.2em] mb-6">Nuestro Expertise</p>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase heading-font leading-[0.9]">LO QUE HACEMOS.</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mt-8 leading-relaxed">No somos simplemente operadores de camara. Somos una agencia de produccion integral enfocada en resolver problemas de negocio a traves del lenguaje cinematografico.</p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-24 md:gap-40">
          {services.map((service, index) => (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start group">
              
              {/* Sticky Left Column (Title & Deliverables) */}
              <div className="order-last lg:order-first lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#083eeb]/10 border border-[#083eeb]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <span className="text-xl font-bold text-white/30 heading-font">{service.id}</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter heading-font leading-none">
                  {service.title}
                </h2>
                
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="pt-8 border-t border-white/10 mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Entregables Principales</h4>
                  <ul className="flex flex-col gap-4">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-white/90 font-medium">
                        <ArrowRight size={16} className="text-[#083eeb]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column (Massive Video Showcase) */}
              <div className="lg:col-span-7">
                <div className="w-full aspect-video lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-black relative shadow-2xl">
                  <video 
                    src={service.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60" />
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
