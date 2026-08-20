import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const Contact = () => {
  const [formStep, setFormStep] = useState(1);
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');

  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-[150px] pb-24 relative overflow-hidden">
      {/* Giant Background text for texture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none heading-font select-none">
        CONTACTO
      </div>

      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col relative z-10">
        {/* Massive Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] md:text-[8vw] font-black text-white tracking-tighter uppercase heading-font leading-none mb-12 md:mb-16"
        >
          HABLEMOS.
        </motion.h1>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8">
          
          {/* Left Column: Direct Contact */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="xl:col-span-5 flex flex-col gap-8 lg:gap-12"
          >
            <div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#083eeb] mb-4">NUESTRO EMAIL</p>
              <a href="mailto:hola@beemostudio.com" className="text-lg md:text-xl font-black text-white hover:text-white/60 transition-colors uppercase tracking-tighter heading-font leading-[1.1] md:leading-[1.1]">
                HOLA@<br className="hidden md:block"/>BEEMOSTUDIO.COM
              </a>
            </div>
            
            <div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#083eeb] mb-4">TELEFONO</p>
              <a href="tel:+593999999999" className="text-lg md:text-xl font-black text-white hover:text-white/60 transition-colors uppercase tracking-tighter heading-font">
                +593 99 999 9999
              </a>
            </div>

            <div className="pt-12 border-t border-white/10">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-6">NUESTRAS REDES</p>
              <div className="flex flex-wrap gap-8">
                <a href="#" className="text-xl font-bold text-white hover:text-[#083eeb] transition-colors uppercase tracking-widest">Instagram</a>
                <a href="#" className="text-xl font-bold text-white hover:text-[#083eeb] transition-colors uppercase tracking-widest">Vimeo</a>
                <a href="#" className="text-xl font-bold text-white hover:text-[#083eeb] transition-colors uppercase tracking-widest">LinkedIn</a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="xl:col-span-7 xl:pl-24 flex flex-col min-h-[500px]"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#083eeb]" 
                  initial={{ width: '33%' }}
                  animate={{ width: `${(formStep / 3) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
              <span className="text-sm font-bold tracking-widest text-white/40">0{formStep}/03</span>
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
                    className="flex-1 flex flex-col justify-center gap-8"
                  >
                    <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter heading-font leading-[1.1]">QUE TIPO DE PROYECTO TIENES EN MENTE?</h3>
                    <div className="flex flex-col gap-4 mt-4">
                      {['INSTITUCIONAL', 'COMERCIAL / SPOT', 'COBERTURA DE EVENTOS', 'OTRO'].map((type) => (
                        <button 
                          key={type}
                          onClick={() => setProjectType(type)}
                          className={`text-left px-6 py-4 rounded-2xl border-2 ${projectType === type ? 'border-[#083eeb] bg-[#083eeb]/10 text-white' : 'border-white/10 hover:border-white/30 text-white/70 hover:text-white'} transition-all text-lg md:text-xl font-bold tracking-wider uppercase`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-end">
                      <button 
                        disabled={!projectType}
                        onClick={() => setFormStep(2)}
                        className="flex items-center gap-6 group cursor-pointer disabled:opacity-30"
                      >
                        <span className="text-lg md:text-2xl font-black uppercase tracking-tighter heading-font text-white group-hover:text-[#083eeb] transition-colors">SIGUIENTE</span>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#083eeb] group-hover:text-white transition-all group-hover:scale-110">
                          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
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
                    className="flex-1 flex flex-col justify-center gap-8"
                  >
                    <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter heading-font leading-[1.1]">CUAL ES TU PRESUPUESTO ESTIMADO?</h3>
                    <div className="flex flex-col gap-4 mt-4">
                      {['< $2,000', '$2,000 - $5,000', '$5,000+'].map((type) => (
                        <button 
                          key={type}
                          onClick={() => setBudget(type)}
                          className={`text-left px-6 py-4 rounded-2xl border-2 ${budget === type ? 'border-[#083eeb] bg-[#083eeb]/10 text-white' : 'border-white/10 hover:border-white/30 text-white/70 hover:text-white'} transition-all text-lg md:text-xl font-bold tracking-wider uppercase`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                      <button 
                        onClick={() => setFormStep(1)}
                        className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/20 hover:border-white transition-colors text-white cursor-pointer"
                      >
                        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                      </button>
                      <button 
                        disabled={!budget}
                        onClick={() => setFormStep(3)}
                        className="flex items-center gap-6 group cursor-pointer disabled:opacity-30"
                      >
                        <span className="text-lg md:text-2xl font-black uppercase tracking-tighter heading-font text-white group-hover:text-[#083eeb] transition-colors">SIGUIENTE</span>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#083eeb] group-hover:text-white transition-all group-hover:scale-110">
                          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
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
                    className="flex-1 flex flex-col justify-center gap-8"
                  >
                    <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter heading-font leading-[1.1]">CASI LISTO. CUENTANOS MAS.</h3>
                    <div className="flex flex-col gap-12 mt-4">
                      <div className="flex flex-col relative group">
                        <input 
                          type="text" 
                          placeholder="TU NOMBRE O EMPRESA"
                          className="w-full bg-transparent border-b-2 border-white/20 pb-4 text-lg md:text-xl font-bold text-white placeholder-white/20 focus:outline-none focus:border-[#083eeb] transition-colors uppercase tracking-tight"
                        />
                      </div>
                      <div className="flex flex-col relative">
                        <input 
                          type="email" 
                          placeholder="TU CORREO ELECTRONICO"
                          className="w-full bg-transparent border-b-2 border-white/20 pb-4 text-lg md:text-xl font-bold text-white placeholder-white/20 focus:outline-none focus:border-[#083eeb] transition-colors uppercase tracking-tight"
                        />
                      </div>
                      <div className="flex flex-col relative">
                        <textarea 
                          placeholder="CUENTANOS SOBRE TU PROYECTO..."
                          rows={2}
                          className="w-full bg-transparent border-b-2 border-white/20 pb-4 text-lg md:text-xl font-bold text-white placeholder-white/20 focus:outline-none focus:border-[#083eeb] transition-colors uppercase tracking-tight resize-none"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between items-center">
                      <button 
                        onClick={() => setFormStep(2)}
                        className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/20 hover:border-white transition-colors text-white cursor-pointer"
                      >
                        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                      </button>
                      <button className="flex items-center gap-6 group cursor-pointer">
                        <span className="text-lg md:text-2xl font-black uppercase tracking-tighter heading-font text-white group-hover:text-[#083eeb] transition-colors">ENVIAR MENSAJE</span>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#083eeb] text-white flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                      </button>
                    </div>
                  </motion.div>
                )}
                
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};