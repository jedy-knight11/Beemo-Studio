import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

const steps = [
  { 
    num: "01", 
    title: "Entender", 
    tag: "PRE-PRODUCCIÓN & ESTRATEGIA",
    desc: "Primero interiorizamos lo que necesitas comunicar. Nos sumergimos en tu marca, tus objetivos y el mensaje que quieres transmitir para encontrar la manera más clara y poderosa de convertirlo en una historia visual.",
    image: (import.meta as any).env.BASE_URL + 'team/methodology_step1.jpg',
    label: "BEEMO • PLANIFICACIÓN & ESTRATEGIA"
  },
  { 
    num: "02", 
    title: "Crear", 
    tag: "RODAJE & DIRECCIÓN CINEMATOGRÁFICA",
    desc: "Pasamos de la idea a la ejecución. Planificamos cada detalle y trabajamos con el equipo especializado que el proyecto necesita para construir tu historia con los más altos estándares técnicos.",
    image: (import.meta as any).env.BASE_URL + 'team/methodology_step2.jpg',
    label: "BEEMO EN SET • RODAJE & DIRECCIÓN"
  },
  { 
    num: "03", 
    title: "Convertir", 
    tag: "POST-PRODUCCIÓN & COLOR",
    desc: "En postproducción, cada elemento encuentra su lugar. Editamos, afinamos y construimos la pieza final para que la historia se sienta clara, atractiva y coherente para tu audiencia.",
    image: (import.meta as any).env.BASE_URL + 'team/methodology_step3.jpg',
    label: "BEEMO SUITE • POST-PRODUCCIÓN & COLOR"
  }
];

const StepIndicator = ({ i, scrollYProgress }: { i: number, scrollYProgress: MotionValue<number> }) => {
  const p = i * (1 / (steps.length - 1));
  const indicatorOpacity = useTransform(scrollYProgress, 
    [Math.max(0, p - 0.2), p, Math.min(1, p + 0.2)], 
    [0.3, 1, 0.3]
  );

  return (
    <div className="relative text-xs font-bold font-mono text-white/30">
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

const StepCardDesktop = ({ step, i, scrollYProgress }: { step: any, i: number, scrollYProgress: MotionValue<number> }) => {
  const p = i * (1 / (steps.length - 1));
  
  let input, opacityOut, yOut;
  
  if (i === 0) {
    input = [0, 0.15, 1];
    opacityOut = [1, 0, 0];
    yOut = [0, -30, -30];
  } else if (i === steps.length - 1) {
    input = [0, 0.85, 1];
    opacityOut = [0, 0, 1];
    yOut = [30, 30, 0];
  } else {
    input = [0, p - 0.15, p, p + 0.15, 1];
    opacityOut = [0, 0, 1, 0, 0];
    yOut = [30, 30, 0, -30, -30];
  }

  const opacity = useTransform(scrollYProgress, input, opacityOut) as any;
  const y = useTransform(scrollYProgress, input, yOut) as any;

  return (
    <motion.div
      className="hidden lg:flex flex-col gap-4 absolute top-1/2 left-0 right-0 w-full -translate-y-1/2"
      style={{ opacity, y }}
    >
      <div className="flex items-center gap-4">
        <span className="text-[#083eeb] text-lg font-bold tracking-widest block">
          PASO {step.num}
        </span>
        <span className="text-white/50 text-xs font-mono font-bold uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
          {step.tag}
        </span>
      </div>
      
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter heading-font leading-none">
        {step.title}
      </h3>
      
      <p className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
        {step.desc}
      </p>

      {/* Production Photo Card - Reaching Full Right Edge with Balanced Height */}
      <div className="w-full aspect-[16/9] max-h-[340px] xl:max-h-[380px] 2xl:max-h-[420px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl mt-1 group">
        <img 
          src={step.image} 
          alt={`Beemo Studio ${step.title}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/90 pointer-events-none">
          <span>{step.label}</span>
          <span>ESTUDIO AUDIOVISUAL</span>
        </div>
      </div>
    </motion.div>
  );
};

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="process" className="relative bg-[#0D0D0D] border-t border-white/5">
      
      {/* MOBILE LAYOUT */}
      <div className="lg:hidden py-20 px-6 md:px-12 w-full max-w-[1800px] mx-auto">
        <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tighter uppercase heading-font mb-6 leading-[0.9] break-words">
          Nuestra<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Metodología</span>
        </h2>
        <p className="text-white/50 text-base md:text-lg mb-12">
          Nuestra Metodología parte de una simple premisa. Cada proyecto es una construcción nueva y en todo el camino, priorizamos una comunicación clara y directa. Esa es nuestra fórmula para crear resultados que nos llenan de orgullo a todos.
        </p>

        <div className="flex flex-col gap-16">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4 relative pl-6 border-l-2 border-white/10">
              <div className="absolute top-0 left-[-2px] h-full w-[2px] bg-gradient-to-b from-[#083eeb] to-transparent" />
              <div className="flex items-center gap-3">
                <span className="text-[#083eeb] text-lg font-bold tracking-widest block">
                  PASO {step.num}
                </span>
                <span className="text-white/40 text-[10px] font-mono font-bold uppercase tracking-widest border border-white/10 px-2.5 py-0.5 rounded-full">
                  {step.tag}
                </span>
              </div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter heading-font leading-tight">
                {step.title}
              </h3>
              <p className="text-base text-white/60 font-light leading-relaxed">
                {step.desc}
              </p>
              
              {/* Full Color Photo per Step on Mobile */}
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 relative shadow-xl mt-2">
                <img 
                  src={step.image} 
                  alt={`Beemo Studio ${step.title}`} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-widest text-white/90 pointer-events-none">
                  {step.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP LAYOUT (Sticky Scroll Animation with Unique Photos) */}
      <div ref={containerRef} className="hidden lg:block relative h-[300vh]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left: Sticky Section Title & Progress - Aligned Left with Site Hierarchy */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center pr-0 xl:pr-4">
              <p className="text-[#083eeb] text-xs font-bold uppercase tracking-[0.2em] mb-6">Nuestro Proceso</p>
              <h2 className="text-5xl md:text-[72px] lg:text-[72px] font-black text-white tracking-tighter uppercase heading-font mb-8 leading-[0.9]">
                NUESTRA<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">METODOLOGÍA</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
                Nuestra Metodología parte de una simple premisa. Cada proyecto es una construcción nueva y en todo el camino, priorizamos una comunicación clara y directa. Esa es nuestra fórmula para crear resultados que nos llenan de orgullo a todos.
              </p>
              
              <div className="relative h-[2px] w-full max-w-lg bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 bottom-0 bg-[#083eeb]"
                  style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                />
              </div>
              
              {/* Step Indicators */}
              <div className="flex gap-8 mt-6 max-w-lg">
                {steps.map((_, i) => (
                  <StepIndicator key={i} i={i} scrollYProgress={scrollYProgress} />
                ))}
              </div>
            </div>

            {/* Right: Scrolling Steps - Full Width Expanded Column */}
            <div className="col-span-12 lg:col-span-7 relative h-[85vh] flex items-center justify-start w-full">
               {steps.map((step, i) => (
                 <StepCardDesktop key={i} step={step} i={i} scrollYProgress={scrollYProgress} />
               ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
