import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

const steps = [
  { num: "01", title: "Pre-producción", desc: "Convertimos ideas en un plan sólido. Desarrollo de concepto, guion técnico, scouting de locaciones y casting. Preparamos cada detalle al milímetro." },
  { num: "02", title: "Producción", desc: "El momento de la acción. Dirigimos equipos técnicos y artísticos con cámaras de cine digital y óptica premium para capturar la esencia exacta de la marca." },
  { num: "03", title: "Post-producción", desc: "Donde surge la magia. Edición rítmica impecable, diseño sonoro envolvente, color grading cinematográfico y efectos visuales de alta gama." },
  { num: "04", title: "Entrega", desc: "Exportamos piezas maestras. Masterización y adaptación de formatos nativos para múltiples plataformas, asegurando el máximo impacto visual en todas las pantallas." },
];

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate the horizontal translation.
  // 4 items, we want to slide them so the last item reaches the left edge of the viewport.
  // Using -75% will slide a 400vw container to its end (since 400vw * 0.75 = 300vw moved left).
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]) as any;

  return (
    <section id="process" className="relative bg-[#0D0D0D] border-t border-white/5">
      
      {/* MOBILE LAYOUT (Normal flow, NO sticky) */}
      <div className="lg:hidden py-24 px-6 md:px-12 w-full max-w-[1800px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase heading-font mb-6 leading-[0.9] break-words">
          Nuestra<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Metodología</span>
        </h2>
        <p className="text-white/50 text-lg mb-16">
          Un proceso riguroso diseñado para transformar una visión en realidad cinematográfica.
        </p>
        
        <div className="flex flex-col gap-16">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col relative pl-6 border-l-2 border-white/10">
              <div className="absolute top-0 left-[-2px] h-full w-[2px] bg-gradient-to-b from-[#083eeb] to-transparent" />
              <span className="text-[#083eeb] text-xl font-normal tracking-widest mb-4 block">
                PASO {step.num}
              </span>
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter heading-font mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP LAYOUT (Horizontal Scroll Animation) */}
      <div ref={containerRef} className="hidden lg:block relative h-[400vh]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex w-[400vw] h-full">
            {steps.map((step, i) => (
              <div key={i} className="w-[100vw] h-full flex items-center justify-center px-24">
                <div className="grid grid-cols-12 w-full max-w-[1800px] gap-24">
                  {/* Left: Sticky Section Title & Progress (duplicated visually per slide or split) */}
                  <div className="col-span-5 flex flex-col justify-center">
                    <h2 className="text-7xl font-black text-white tracking-tighter uppercase heading-font mb-6 leading-[0.9]">
                      Nuestra<br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Metodología</span>
                    </h2>
                    <p className="text-white/50 text-xl max-w-sm mb-12">
                      Un proceso riguroso diseñado para transformar una visión en realidad cinematográfica.
                    </p>
                    
                    <div className="relative h-[2px] w-full max-w-md bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 bottom-0 bg-[#083eeb] transition-all duration-300"
                        style={{ width: `${(i / (steps.length - 1)) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Right: The Step Content */}
                  <div className="col-span-7 flex flex-col justify-center border-l-2 border-[#083eeb] pl-16">
                    <span className="text-[#083eeb] text-2xl font-normal tracking-widest mb-6 block">
                      PASO {step.num}
                    </span>
                    <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter heading-font mb-6 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
