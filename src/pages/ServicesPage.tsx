import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Megaphone, Smartphone, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    title: 'SPOTS PUBLICITARIOS',
    icon: <Megaphone size={40} className="text-[#083eeb]" />,
    description: 'Nos apasiona construir spots donde la creatividad y la estrategia se encuentran. Trabajamos codo a codo con agencias y clientes para potenciar cada idea, llevándola al siguiente nivel y construyendo juntos piezas memorables que generan resultados tangibles.',
    video: (import.meta as any).env.BASE_URL + 'portfolio/Comerciales TV/Orocash_TVC.mp4'
  },
  {
    id: '02',
    title: 'CONTENIDO PARA REDES',
    icon: <Smartphone size={40} className="text-[#083eeb]" />,
    description: 'Piezas audiovisuales dinámicas creadas específicamente para digital y redes sociales. Desde la conceptualización creativa hasta la edición final, producimos contenido enfocado en la retención de audiencia y conversión.',
    video: (import.meta as any).env.BASE_URL + 'portfolio/Redes/PedidosYa.mp4'
  },
  {
    id: '03',
    title: 'COBERTURA DE EVENTOS',
    icon: <CalendarDays size={40} className="text-[#083eeb]" />,
    description: 'Eventos que importan. Momentos que merecen ser contados. Estamos ahí para capturarlos con mirada cinematográfica y la agilidad que necesitas para que lleguen a redes y a piezas formales.',
    video: (import.meta as any).env.BASE_URL + 'portfolio/Coberturas/Renault_Kwid_HD.mp4'
  }
];

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-[150px] pb-12 md:pb-24">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <p className="text-[#083eeb] text-xs font-bold uppercase tracking-[0.2em] mb-6">Nuestro Expertise</p>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase heading-font leading-[0.9]">PIEZAS CON INTENCIÓN.</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mt-8 leading-relaxed">En Beemo, cada proyecto es una construcción nueva. Entendemos que detrás de cada video hay un negocio, una marca y una historia que merece ser contada con intención.</p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-24 md:gap-40">
          {services.map((service, index) => (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start group">
              
              {/* Left Column (Title & Description) */}
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

                <div className="pt-4">
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-3 bg-[#083eeb] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-colors"
                  >
                    Cotizar este servicio →
                  </Link>
                </div>
              </div>

              {/* Right Column: Looping Video */}
              <div className="lg:col-span-7 rounded-2xl md:rounded-3xl overflow-hidden aspect-video bg-black border border-white/10 relative shadow-2xl">
                <video 
                  src={`${service.video}#t=0.001`}
                  preload="metadata"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
