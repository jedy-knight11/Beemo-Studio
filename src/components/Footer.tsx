import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contacto';
  
  const [formStep, setFormStep] = useState(1);
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');

  return (
    <footer id="contact" className="bg-[#0D0D0D] text-white pt-16 md:pt-24 pb-12 overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col">
        
        {/* ORIGINAL CONTACT FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left Block */}
          {isContactPage ? (
            <div className="rounded-3xl bg-[#083eeb] p-10 text-white flex flex-col justify-between h-full min-h-[400px]">
              <div>
                <p className="text-[10px] font-normal uppercase tracking-[0.2em] mb-4 opacity-60">TESTIMONIO</p>
                <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase heading-font mb-6 leading-[1.2]">
                  "BEEMO STUDIO TRANSFORMO NUESTRA VISION EN UNA PIEZA AUDIOVISUAL QUE SUPERO TODAS NUESTRAS EXPECTATIVAS."
                </h2>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-white rounded-full"></div>
                <div>
                  <p className="font-bold text-white uppercase text-sm">JUAN PEREZ</p>
                  <p className="text-white/60 text-xs uppercase">DIRECTOR DE MARKETING, MARCA X</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl bg-[#083eeb] p-10 text-white flex flex-col justify-between h-full min-h-[400px]">
              <div>
                <p className="text-[10px] font-normal uppercase tracking-[0.2em] mb-4 opacity-60">INICIA UNA CONVERSACION</p>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase heading-font mb-6 leading-tight">
                  TIENES UN PROYECTO<br/>EN MENTE?<br/>CONTACTANOS HOY.
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
          )}

          {/* Right Block */}
          {isContactPage ? (
            <div className="rounded-3xl bg-[#111111] border border-white/5 p-10 text-white flex flex-col justify-center h-full min-h-[400px]">
              <p className="text-[10px] font-normal uppercase tracking-[0.2em] mb-8 opacity-60">NUESTRA METODOLOGIA</p>
              
              <div className="flex flex-col gap-8">
                <div className="flex gap-6 items-start">
                  <span className="text-2xl font-black text-[#083eeb] heading-font leading-none">01</span>
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-2 tracking-tight">PRE-PRODUCCION</h4>
                    <p className="text-white/50 text-sm">Concepto, guion y planificacion detallada para asegurar el exito del rodaje.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="text-2xl font-black text-[#083eeb] heading-font leading-none">02</span>
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-2 tracking-tight">PRODUCCION</h4>
                    <p className="text-white/50 text-sm">Ejecucion impecable con equipos de ultima generacion y talento especializado.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="text-2xl font-black text-[#083eeb] heading-font leading-none">03</span>
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-2 tracking-tight">POST-PRODUCCION</h4>
                    <p className="text-white/50 text-sm">Edicion, colorizacion y diseno sonoro para pulir la pieza hasta la perfeccion.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="text-2xl font-black text-[#083eeb] heading-font leading-none">04</span>
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-2 tracking-tight">ENTREGA</h4>
                    <p className="text-white/50 text-sm">Masterizacion y adaptacion para multiples plataformas, asegurando el maximo impacto.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#111111] border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col h-full min-h-[400px] relative overflow-hidden">
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#083eeb]" 
                    initial={{ width: '33%' }}
                    animate={{ width: `${(formStep / 3) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
                <span className="text-xs font-bold tracking-widest text-white/40">0{formStep}/03</span>
              </div>

              <form className="flex-1 flex flex-col relative" onSubmit={(e) => e.preventDefault()}>
                <AnimatePresence mode="wait">
                  
                  {formStep === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col justify-center gap-6"
                    >
                      <h3 className="text-2xl font-black uppercase tracking-tight heading-font">QUÉ TIPO DE PROYECTO TIENES EN MENTE?</h3>
                      <div className="flex flex-col gap-3 mt-4">
                        {['INSTITUCIONAL', 'COMERCIAL / SPOT', 'COBERTURA DE EVENTOS', 'OTRO'].map((type) => (
                          <button 
                            key={type}
                            onClick={() => setProjectType(type)}
                            className={`text-left px-6 py-4 rounded-xl border ${projectType === type ? 'border-[#083eeb] bg-[#083eeb]/10' : 'border-white/10 hover:border-white/30'} transition-all text-sm font-bold tracking-wider uppercase`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                      <div className="mt-auto pt-8 flex justify-end">
                        <button 
                          disabled={!projectType}
                          onClick={() => setFormStep(2)}
                          className="flex items-center gap-4 bg-white text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#083eeb] hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black cursor-pointer"
                        >
                          Siguiente <ArrowRight size={16} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {formStep === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col justify-center gap-6"
                    >
                      <h3 className="text-2xl font-black uppercase tracking-tight heading-font">CUÁL ES TU PRESUPUESTO ESTIMADO?</h3>
                      <div className="flex flex-col gap-3 mt-4">
                        {['< $2,000', '$2,000 - $5,000', '$5,000+'].map((type) => (
                          <button 
                            key={type}
                            onClick={() => setBudget(type)}
                            className={`text-left px-6 py-4 rounded-xl border ${budget === type ? 'border-[#083eeb] bg-[#083eeb]/10' : 'border-white/10 hover:border-white/30'} transition-all text-sm font-bold tracking-wider uppercase`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                      <div className="mt-auto pt-8 flex justify-between">
                        <button 
                          onClick={() => setFormStep(1)}
                          className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:border-white transition-colors text-white cursor-pointer"
                        >
                          <ArrowLeft size={16} />
                        </button>
                        <button 
                          disabled={!budget}
                          onClick={() => setFormStep(3)}
                          className="flex items-center gap-4 bg-white text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#083eeb] hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black cursor-pointer"
                        >
                          Siguiente <ArrowRight size={16} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {formStep === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col justify-center gap-6"
                    >
                      <h3 className="text-2xl font-black uppercase tracking-tight heading-font">CASI LISTO. CUÉNTANOS MÁS.</h3>
                      <div className="flex flex-col gap-4 mt-4">
                        <div className="flex flex-col relative">
                          <input type="text" placeholder="NOMBRE" className="w-full bg-transparent border-b border-white/20 pb-3 text-lg font-bold text-white placeholder-white/30 focus:outline-none focus:border-[#083eeb] transition-colors uppercase tracking-tight" />
                        </div>
                        <div className="flex flex-col relative">
                          <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-white/20 pb-3 text-lg font-bold text-white placeholder-white/30 focus:outline-none focus:border-[#083eeb] transition-colors uppercase tracking-tight" />
                        </div>
                        <div className="flex flex-col relative">
                          <textarea rows={2} placeholder="DETALLES DEL PROYECTO..." className="w-full bg-transparent border-b border-white/20 pb-3 text-lg font-bold text-white placeholder-white/30 focus:outline-none focus:border-[#083eeb] transition-colors uppercase tracking-tight resize-none"></textarea>
                        </div>
                      </div>
                      <div className="mt-auto pt-8 flex justify-between items-center">
                        <button 
                          onClick={() => setFormStep(2)}
                          className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:border-white transition-colors text-white cursor-pointer"
                        >
                          <ArrowLeft size={16} />
                        </button>
                        <button 
                          className="flex items-center gap-4 bg-[#083eeb] text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer"
                        >
                          ENVIAR
                        </button>
                      </div>
                    </motion.div>
                  )}
                  
                </AnimatePresence>
              </form>
            </div>
          )}
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
          <a href="/contacto" className="group">
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
              <p className="text-white/50 text-sm font-bold uppercase tracking-[0.2em] mb-2">Social</p>
              <a href="#" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">Instagram</a>
              <a href="#" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">LinkedIn</a>
              <a href="#" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">Vimeo</a>
            </div>
            
            <div className="flex flex-col gap-4">
              <p className="text-white/50 text-sm font-bold uppercase tracking-[0.2em] mb-2">Explora</p>
              <a href="/portafolio" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">Portafolio 2024</a>
              <a href="/servicios" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">Servicios</a>
              <a href="/#process" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">Metodologia</a>
              <a href="/contacto" className="text-lg font-medium hover:text-[#083eeb] transition-colors underline decoration-white/30 underline-offset-[6px]">Contacto</a>
            </div>
          </div>

          {/* Logo */}
          <div className="w-full lg:w-auto flex items-start lg:justify-end">
            <div className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
              <img src={import.meta.env.BASE_URL + '/logo.png'.substring(1)} alt="Beemo Studio Logo" className="w-full h-full object-contain" />
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
