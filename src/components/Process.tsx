import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

const steps = [
  { num: "01", title: "Pre-producción", desc: "Convertimos ideas en un plan sólido. Desarrollo de concepto, guion técnico, scouting de locaciones y casting. Preparamos cada detalle al milímetro." },
  { num: "02", title: "Producción", desc: "El momento de la acción. Dirigimos equipos técnicos y artísticos con cámaras de cine digital y óptica premium para capturar la esencia exacta de la marca." },
  { num: "03", title: "Post-producción", desc: "Donde surge la magia. Edición rítmica impecable, diseño sonoro envolvente, color grading cinematográfico y efectos visuales de alta gama." },
  { num: "04", title: "Entrega", desc: "Exportamos piezas maestras. Masterización y adaptación de formatos nativos para múltiples plataformas, asegurando el máximo impacto visual en todas las pantallas." },
];

const StepIndicator = ({ i, scrollYProgress }: { i: number, scrollYProgress: MotionValue<number> }) => {
  const p = i * (1 / (steps.length - 1));
  
  let input, output;
  if (i === 0) {
    input = [0, 0.15, 1];
    output = [1, 0, 0];
  } else if (i === steps.length - 1) {
    input = [0, 0.85, 1];
    output = [0, 0, 1];
  } else {
    input = [0, p - 0.15, p, p + 0.15, 1];
    output = [0, 0, 1, 0, 0];
  }
  
  const indicatorOpacity = useTransform(scrollYProgress, input, output);

  return (
    <div className="flex-1 text-[10px] font-bold text-white/30 tracking-widest relative">
      <motion.div
        className="absolute inset-0 text-white"
        style={{ opacity: indicatorOpacity }}
      >
        0{i + 1}
      </motion.div>
      0{i + 1}
    </div>
  );
};

const StepCard = ({ step, i, scrollYProgress }: { step: any, i: number, scrollYProgress: MotionValue<number> }) => {
  const p = i * (1 / (steps.length - 1));
  
  let input, opacityOut, yOut;
  
  if (i === 0) {
    input = [0, 0.15, 1];
    opacityOut = [1, 0, 0];
    yOut = [0, -60, -60];
  } else if (i === steps.length - 1) {
    input = [0, 0.85, 1];
    opacityOut = [0, 0, 1];
    yOut = [60, 60, 0];
  } else {
    input = [0, p - 0.15, p, p + 0.15, 1];
    opacityOut = [0, 0, 1, 0, 0];
    yOut = [60, 60, 0, -60, -60];
  }

  const opacity = useTransform(scrollYProgress, input, opacityOut);
  const y = useTransform(scrollYProgress, input, yOut);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center pointer-events-none"
      style={{ opacity, y }}
    >
      <span className="text-[#083eeb] text-2xl font-normal tracking-widest mb-6 block">
        PASO {step.num}
      </span>
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter heading-font mb-6 leading-tight">
        {step.title}
      </h3>
      <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-xl">
        {step.desc}
      </p>
    </motion.div>
  );
};

export const Process = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} id="process" className="relative bg-[#0D0D0D] h-[400vh] border-t border-white/5">
      <div className="sticky top-0 h-screen w-full flex items-center max-w-[1800px] mx-auto px-6 md:px-12 overflow-hidden">
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left: Sticky Section Title & Progress */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase heading-font mb-6 leading-[0.9]">
              Nuestra<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Metodología</span>
            </h2>
            <p className="text-white/50 text-lg max-w-sm mb-12">
              Un proceso riguroso diseñado para transformar una visión en realidad cinematográfica.
            </p>
            
            <div className="relative h-[2px] w-full max-w-md bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-[#083eeb]"
                style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              />
            </div>
            
            {/* Step Indicators */}
            <div className="flex gap-8 mt-6 max-w-md">
              {steps.map((_, i) => (
                <StepIndicator key={i} i={i} scrollYProgress={scrollYProgress} />
              ))}
            </div>
          </div>

          {/* Right: Scrolling Steps */}
          <div className="lg:col-span-7 relative h-[60vh] flex items-center justify-center lg:justify-start">
             {steps.map((step, i) => (
               <StepCard key={i} step={step} i={i} scrollYProgress={scrollYProgress} />
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};
