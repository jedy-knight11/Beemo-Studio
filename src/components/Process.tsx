export const Process = () => {
  const steps = [
    { num: "01", title: "Pre-producción", desc: "Concepto, Guion & Scouting" },
    { num: "02", title: "Producción", desc: "Rodaje, Dirección & Cinematografía" },
    { num: "03", title: "Post-producción", desc: "Edición, Color Grading & VFX" },
    { num: "04", title: "Entrega", desc: "Formatos Optimizados & Distribución" },
  ];

  return (
    <section id="process" className="py-24 bg-[#0D0D0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-16 text-center">Nuestra Metodología</h2>
        
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10 text-left">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className={`text-[9px] font-bold uppercase tracking-widest ${i === 0 ? 'text-[#F5A623]' : 'text-white/30'}`}>
                  Paso {step.num}
                </span>
                <h5 className="text-xs font-bold uppercase tracking-tighter text-white/80">{step.title}</h5>
                <p className="text-[10px] text-white/40 mb-2">{step.desc}</p>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  {i === 0 && <div className="h-full w-full bg-[#F5A623]"></div>}
                  {i === 1 && <div className="h-full w-1/3 bg-white/20"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
