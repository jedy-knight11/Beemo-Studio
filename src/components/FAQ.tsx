import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cuál es el tiempo promedio de producción de un video comercial?",
      answer: "El tiempo puede variar dependiendo de la complejidad del proyecto, pero en promedio, un comercial estándar toma de 3 a 5 semanas desde la etapa de pre-producción hasta la entrega final."
    },
    {
      question: "¿Realizan filmaciones fuera de la ciudad o en el extranjero?",
      answer: "Sí, nuestro equipo tiene la capacidad y el equipo necesario para realizar producciones en cualquier parte del mundo. Evaluamos los costos logísticos en cada cotización."
    },
    {
      question: "¿Ofrecen servicios de fotografía además de video?",
      answer: "Absolutamente. Contamos con fotógrafos especializados en producto, corporativo y cobertura de eventos que pueden integrarse a las producciones de video o trabajar proyectos fotográficos independientes."
    },
    {
      question: "¿En qué formatos entregan el material final?",
      answer: "Entregamos piezas masterizadas en formatos de alta calidad (4K, ProRes) y realizamos adaptaciones nativas (9:16, 1:1, 4:5) optimizadas para todas las plataformas digitales y redes sociales."
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
              className="border border-white/10 rounded-2xl overflow-hidden bg-[zinc-900]/50 hover:bg-[zinc-900] transition-colors"
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
