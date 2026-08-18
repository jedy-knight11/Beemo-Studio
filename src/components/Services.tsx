import { Video, Megaphone, CalendarDays, TrendingUp } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Institucionales & Corporativos",
      desc: "Historias de marca, manifiestos y comunicación interna diseñados para generar confianza y comunicar la escala empresarial.",
      icon: <Video size={24} className="text-[#F5A623]" />
    },
    {
      title: "Comerciales & Spots",
      desc: "Campañas visuales de alto impacto creadas para digital y televisión. Dinámicas y enfocadas en conversión.",
      icon: <Megaphone size={24} className="text-[#F5A623]" />
    },
    {
      title: "Cobertura de Eventos",
      desc: "Resúmenes cinematográficos y cobertura en vivo de cumbres corporativas, festivales y lanzamientos.",
      icon: <CalendarDays size={24} className="text-[#F5A623]" />
    },
    {
      title: "Casos de Éxito",
      desc: "Testimoniales estilo documental que ofrecen validación social para marcas B2B y B2C.",
      icon: <TrendingUp size={24} className="text-[#F5A623]" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6">Especialidades & Disciplinas</h2>
          <p className="text-white/60 font-light text-lg">Combinamos cinematografía de alto nivel con narrativa estratégica para resolver desafíos de negocio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((srv, i) => (
            <div key={i} className="rounded-2xl bg-zinc-800/50 border border-white/5 p-6 hover:bg-zinc-800 transition-colors group flex flex-col h-full cursor-pointer">
              <div className="w-12 h-12 bg-zinc-700/50 rounded-lg flex items-center justify-center mb-6 border border-white/5 group-hover:border-[#F5A623]/30 transition-colors shrink-0">
                {srv.icon}
              </div>
              <h3 className="font-bold text-sm text-white mb-2 tracking-tight">{srv.title}</h3>
              <p className="text-[10px] text-white/40 leading-relaxed mb-6 flex-grow">{srv.desc}</p>
              
              <a href="#contact" className="inline-flex items-center text-[#F5A623] text-[9px] font-bold tracking-widest uppercase group/link mt-auto">
                Cotizar <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
