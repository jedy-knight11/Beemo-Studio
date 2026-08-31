const fs = require('fs');

const content = `import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

const steps = [
  { num: "01", title: "Entender", desc: "Primero interiorizamos lo que necesitas comunicar. Nos sumergimos en tu marca, tus objetivos y el mensaje que quieres transmitir para encontrar la manera más clara y poderosa de convertirlo en una historia visual." },
  { num: "02", title: "Crear", desc: "Pasamos de la idea a la ejecución. Planificamos cada detalle y trabajamos con el equipo especializado que el proyecto necesita para construir tu historia." },
  { num: "03", title: "Convertir", desc: "En postproducción, cada elemento encuentra su lugar. Editamos, afinamos y construimos la pieza final para que la historia se sienta clara, atractiva y coherente." }
];

const StepIndicator = ({ i, scrollYProgress }: { i: number, scrollYProgress: MotionValue<number> }) => {
  const p = i * (1 / (steps.length - 1));
  const isActive = useTransform(scrollYProgress, 
    [Math.max(0, p - 0.1), p, Math.min(1, p + 0.1)], 
    [0, 1, 0]
  );
  
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

  const opacity = useTransform(scrollYProgress, input, opacityOut) as any;
  const y = useTransform(scrollYProgress, input, yOut) as any;

  return (
    <motion.div
      className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2"
      style={{ opacity, y }}
    >
      <span className="text-[#083eeb] text-2xl font-normal tracking-widest mb-6 block">
        PASO {step.num}
      </span>
      <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter heading-font mb-6 leading-tight">
        {step.title}
      </h3>
      <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-xl">
        {step.desc}
      </p>
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
      
      {/* MOBILE LAYOUT (Normal flow, NO sticky) */}
      <div className="lg:hidden py-24 px-6 md:px-12 w-full max-w-[1800px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase heading-font mb-6 leading-[0.9] break-words">
          Nuestra<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Metodología</span>
        </h2>
        <p className="text-white/50 text-lg mb-16">
          Nuestra Metodología parte de una simple premisa. Cada proyecto es una construcción nueva y en todo el camino, priorizamos una comunicación clara y directa. Esa es nuestra fórmula para crear resultados que nos llenan de orgullo a todos.
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

      {/* DESKTOP LAYOUT (Sticky Scroll Fade Animation) */}
      <div ref={containerRef} className="hidden lg:block relative h-[300vh]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          <div className="w-full max-w-[1800px] mx-auto px-12 xl:px-24 grid grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-center">
            
            {/* Left: Sticky Section Title & Progress */}
            <div className="col-span-5 flex flex-col justify-center">
              <h2 className="text-7xl font-black text-white tracking-tighter uppercase heading-font mb-6 leading-[0.9] break-words">
                Nuestra<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Metodología</span>
              </h2>
              <p className="text-white/50 text-xl max-w-sm mb-12">
                Nuestra Metodología parte de una simple premisa. Cada proyecto es una construcción nueva y en todo el camino, priorizamos una comunicación clara y directa. Esa es nuestra fórmula para crear resultados que nos llenan de orgullo a todos.
              </p>
              
              <div className="relative h-[2px] w-full max-w-sm bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 bottom-0 bg-[#083eeb]"
                  style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                />
              </div>
              
              {/* Step Indicators */}
              <div className="flex gap-8 mt-6 max-w-sm">
                {steps.map((_, i) => (
                  <StepIndicator key={i} i={i} scrollYProgress={scrollYProgress} />
                ))}
              </div>
            </div>

            {/* Right: Scrolling Steps Fading */}
            <div className="col-span-6 col-start-7 relative h-[60vh] flex items-center justify-start">
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
`;

fs.writeFileSync('src/components/Process.tsx', content, 'utf8');
console.log('Process.tsx updated with correct encoding and improved spacing.');
