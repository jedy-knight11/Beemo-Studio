import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0D0D0D] text-white pt-24 pb-12 overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col">
        
        {/* ORIGINAL CONTACT FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="rounded-3xl bg-[#083eeb] p-10 text-white flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <p className="text-[10px] font-normal uppercase tracking-[0.2em] mb-4 opacity-60">Inicia una conversación</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase heading-font mb-6 leading-tight">
                ¿Tienes un proyecto<br/>en mente?<br/>Contáctanos hoy.
              </h2>
            </div>
            
            <div className="flex flex-col gap-4 mt-auto">
              <a href="mailto:hello@beemostudio.com" className="flex justify-between items-end group">
                <div className="text-sm font-bold underline decoration-2 underline-offset-4">hello@beemostudio.com</div>
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <div className="w-3 h-3 border-t-2 border-r-2 border-white rotate-45 -ml-1"></div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[zinc-900] border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="Nombre" className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#083eeb] transition-colors" />
                <input type="email" placeholder="Correo electrónico" className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#083eeb] transition-colors" />
              </div>
              
              <select defaultValue="" className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white/80 focus:outline-none focus:border-[#083eeb] transition-colors appearance-none">
                <option value="" disabled>Tipo de Proyecto</option>
                <option value="institucional">Institucional / Corporativo</option>
                <option value="comercial">Comercial / Spot</option>
                <option value="cobertura">Cobertura de Evento</option>
                <option value="otro">Otro</option>
              </select>

              <select defaultValue="" className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white/80 focus:outline-none focus:border-[#083eeb] transition-colors appearance-none">
                <option value="" disabled>Presupuesto Estimado</option>
                <option value="small">&lt; $2,000</option>
                <option value="medium">$2,000 - $5,000</option>
                <option value="large">$5,000+</option>
              </select>
              
              <textarea placeholder="Cuéntanos sobre tu proyecto..." rows={4} className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#083eeb] transition-colors resize-none"></textarea>
              
              <button className="bg-white text-black font-bold uppercase tracking-widest text-sm py-4 rounded-xl hover:bg-[#F5A623] hover:text-black transition-all duration-500 ease-out mt-2">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* HUGE OUTLINED TEXT MARQUEE */}
        <div className="w-full flex items-center mb-16 overflow-hidden">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          >
            {[...Array(4)].map((_, i) => (
              <h2 
                key={i}
                className="text-[12vw] md:text-[14vw] font-black uppercase tracking-tighter heading-font leading-none pr-8"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)', color: 'transparent' }}
              >
                BEEMO STUDIO
              </h2>
            ))}
          </motion.div>
        </div>

        {/* TOP DIVIDER & HEADLINE */}
        <div className="border-t border-white/30 py-8 flex justify-between items-center gap-8">
          <a href="mailto:hello@beemostudio.com" className="group">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white/90 underline decoration-white/30 underline-offset-[8px] group-hover:text-[#083eeb] group-hover:decoration-[#083eeb] transition-all">
              Hablemos de tu próximo proyecto audiovisual.
            </h3>
          </a>
          
          {/* Spinning badge */}
          <div className="hidden md:flex relative w-20 h-20 items-center justify-center shrink-0">
             <motion.div 
               animate={{ rotate: 360 }} 
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0"
             >
               <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                 <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                 <text fontSize="10" fontWeight="bold" letterSpacing="3.5" fill="currentColor" className="text-white/60 uppercase">
                   <textPath href="#circlePath" startOffset="0%">
                     BEEMO STUDIO • AUDIOVISUAL •
                   </textPath>
                 </text>
               </svg>
             </motion.div>
             <ArrowRight size={20} className="text-[#083eeb]" />
          </div>
        </div>

        {/* BOTTOM DIVIDER & LINKS */}
        <div className="border-t border-white/30 pt-8 pb-16 flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
          
          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <a href="#work" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">Portafolio 2024</a>
              <a href="#services" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">Servicios</a>
              <a href="#process" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">Metodología</a>
              <a href="#team" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">Conoce a nuestro equipo</a>
            </div>
            
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@beemostudio.com" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">Contacto</a>
              <a href="#" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">Instagram</a>
              <a href="#" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">LinkedIn</a>
              <a href="#" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">Vimeo</a>
            </div>
          </div>

          {/* Logo */}
          <div className="w-full lg:w-auto flex items-start lg:justify-end">
            <div className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
              <img src="/logo.png" alt="Beemo Studio Logo" className="w-full h-full object-contain" />
            </div>
          </div>

        </div>

        {/* BOTTOM CREDITS */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-white/40 text-xs font-medium tracking-wide">
          <p>© {new Date().getFullYear()} Beemo Studio. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">
            Made by the problem solvers at <a href="https://grupecu.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#083eeb] transition-colors underline underline-offset-4">Grupecu</a> ;)
          </p>
        </div>

      </div>
    </footer>
  );
};
