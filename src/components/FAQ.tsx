import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Se encargan también del proceso creativo?",
      answer: "Sí. Nos adaptamos a lo que cada proyecto necesite: desde ejecutar una idea ya definida hasta ayudarte a aterrizarla y encontrar la mejor manera de contarla visualmente."
    },
    {
      question: "¿Cuál es el tiempo promedio de producción de un video para redes?",
      answer: "Depende del alcance y las necesidades de cada proyecto. Como referencia, una producción puede tomar entre 3 y 5 semanas, aunque podemos adaptarnos a tiempos más cortos cuando la urgencia lo requiere."
    },
    {
      question: "¿Cómo conforman el equipo para cada proyecto?",
      answer: "No trabajamos con un equipo cerrado para todos los proyectos. Seleccionamos a las personas y especialistas que mejor se ajustan a las necesidades de cada producción, buscando siempre el mejor resultado posible."
    },
    {
      question: "¿También realizan fotografía?",
      answer: "Sí. Desarrollamos proyectos de fotografía publicitaria, corporativa, de producto y contenido para redes, adaptando la producción y el equipo a lo que cada proyecto necesita."
    },
    {
      question: "¿Pueden trabajar con una idea que ya tenemos?",
      answer: "Sí. Podemos partir desde una idea, un brief o incluso una necesidad concreta y trabajar desde ahí para convertirla en una propuesta audiovisual clara y bien ejecutada."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-[#0D0D0D] border-t border-white/5">
      <div className="w-full max-w-[1000px] mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase heading-font mb-16 text-center">
          Preguntas Frecuentes
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg md:text-xl font-medium text-white pr-8">
                  {faq.question}
                </span>
                <span className="text-[#083eeb] shrink-0">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-white/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
