import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Video, Smartphone, CalendarDays, Camera, ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'VIDEO INSTITUCIONAL / CORPORATIVO',
    icon: <Video size={40} className="text-[#083eeb]" />,
    description: 'Historias de marca, manifiestos corporativos y comunicación interna diseñados para generar confianza. Mostramos la escala, la infraestructura y el factor humano detrás de las grandes empresas.',
    deliverables: [
      'Videos Corporativos',
      'Videos de Inducción y Capacitación',
      'Manifiestos de Marca',
      'Recorridos Industriales (Dron & FPV)'
    ],
    video: (import.meta as any).env.BASE_URL + '/portfolio/Comerciales TV/Duragas_Oficina.mp4'.substring(1)
  },
  {
    id: '02',
    title: 'CONTENIDO PARA REDES',
    icon: <Smartphone size={40} className="text-[#083eeb]" />,
    description: 'Piezas audiovisuales dinámicas creadas específicamente para digital y redes sociales. Desde la conceptualización creativa hasta el formato vertical, producimos contenido enfocado en la retención de audiencia y conversión.',
    deliverables: [
      'Campañas Digitales (Reels, TikTok)',
      'Product Films',
      'Branded Content',
      'Anuncios para Meta y YouTube'
    ],
    video: (import.meta as any).env.BASE_URL + '/portfolio/Redes/Mazda_CX90.mp4'.substring(1)
  },
  {
    id: '03',
    title: 'COBERTURA DE EVENTOS',
    icon: <CalendarDays size={40} className="text-[#083eeb]" />,
    description: 'Resúmenes cinematográficos y cobertura de cumbres corporativas, festivales y lanzamientos. Capturamos la energía del momento con agilidad para redes y piezas formales posteriores.',
    deliverables: [
      'Aftermovies Cinematográficos',
      'Resúmenes para Redes Sociales (Mismo día)',
      'Entrevistas en Sitio',
      'Micro-cápsulas del Evento'
    ],
    video: (import.meta as any).env.BASE_URL + '/portfolio/Redes/Sambolon.mp4'.substring(1)
  },
  {
    id: '04',
    title: 'FOTOGRAFÍA',
    icon: <Camera size={40} className="text-[#083eeb]" />,
    description: 'Desarrollamos proyectos de fotografía publicitaria, corporativa, de producto y contenido para redes, adaptando la producción y el equipo a lo que cada proyecto necesita.',
    deliverables: [
      'Fotografía Publicitaria y Comercial',
      'Fotografía Corporativa y Retratos',
      'Fotografía de Producto',
      'Fotografía de Eventos'
    ],
    video: (import.meta as any).env.BASE_URL + '/portfolio/Video Casos/Duragas_MakingOf.mp4'.substring(1)
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
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mt-8 leading-relaxed">No somos simplemente operadores de cámara. Somos una agencia de producción integral enfocada en resolver problemas de negocio a través del lenguaje cinematografico.</p>
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
