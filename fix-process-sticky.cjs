const fs = require('fs');

const content = `import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const steps = [
  { num: "01", title: "Entender", desc: "Primero interiorizamos lo que necesitas comunicar. Nos sumergimos en tu marca, tus objetivos y el mensaje que quieres transmitir para encontrar la manera más clara y poderosa de convertirlo en una historia visual." },
  { num: "02", title: "Crear", desc: "Pasamos de la idea a la ejecución. Planificamos cada detalle y trabajamos con el equipo especializado que el proyecto necesita para construir tu historia." },
  { num: "03", title: "Convertir", desc: "En postproducción, cada elemento encuentra su lugar. Editamos, afinamos y construimos la pieza final para que la historia se sienta clara, atractiva y coherente." }
];

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate the horizontal translation.
  // We have a flex container that is 300% wide. To see the last item, we slide it by -66.6666%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6666%"]) as any;
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) as any;

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

      {/* DESKTOP LAYOUT (Horizontal Scroll Animation) */}
      <div ref={containerRef} className="hidden lg:block relative h-[300vh]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <div className="w-full max-w-[1800px] mx-auto px-24 grid grid-cols-12 gap-24 items-center">
            
            {/* Left: True Sticky Section Title & Progress */}
            <div className="col-span-5 flex flex-col justify-center">
              <h2 className="text-7xl font-black text-white tracking-tighter uppercase heading-font mb-6 leading-[0.9]">
                Nuestra<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Metodología</span>
              </h2>
              <p className="text-white/50 text-xl max-w-sm mb-12">
                Nuestra Metodología parte de una simple premisa. Cada proyecto es una construcción nueva y en todo el camino, priorizamos una comunicación clara y directa. Esa es nuestra fórmula para crear resultados que nos llenan de orgullo a todos.
              </p>
              
              <div className="relative h-[2px] w-full max-w-md bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 bottom-0 bg-[#083eeb] transition-none"
                  style={{ width: progressWidth }}
                />
              </div>
            </div>

            {/* Right: Scrolling Steps Mask */}
            <div className="col-span-7 overflow-hidden relative h-[60vh]">
              <motion.div style={{ x }} className="flex h-full w-[300%]">
                {steps.map((step, i) => (
                  <div key={i} className="w-1/3 h-full shrink-0 flex flex-col justify-center border-l-2 border-[#083eeb] pl-16">
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
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
`;

fs.writeFileSync('src/components/Process.tsx', content, 'utf8');
console.log('Process.tsx layout updated to True Sticky Left Column.');
