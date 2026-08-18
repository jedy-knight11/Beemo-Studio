import { useState } from 'react';
import { Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Static mockup data
const portfolioItems = [
  {
    id: '1',
    name: 'Campaña Verano 2024',
    category: 'Comerciales',
    description: 'Spot comercial para televisión y plataformas digitales.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Video Institucional - Banco Central',
    category: 'Institucionales',
    description: 'Recorrido visual por las instalaciones y cultura corporativa.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Festival Indie 2023',
    category: 'Coberturas',
    description: 'Aftermovie oficial del festival de música.',
    image: 'https://images.unsplash.com/photo-1540039155732-d68a18357f00?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Lanzamiento de Producto',
    category: 'Comerciales',
    description: 'Evento de lanzamiento y spot de producto.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Responsabilidad Social Corporativa',
    category: 'Institucionales',
    description: 'Documental sobre iniciativas comunitarias.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Cumbre Tecnológica Anual',
    category: 'Coberturas',
    description: 'Resumen de conferencias y networking.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop'
  }
];

export const Portfolio = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Comerciales', 'Institucionales', 'Coberturas'];

  const filteredFiles = portfolioItems.filter(f => filter === 'Todos' || f.category === filter);

  return (
    <section id="work" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">Portafolio Destacado</h2>
            <p className="text-white/60 max-w-md font-light">Explora nuestras historias visuales más recientes, comerciales y coberturas de eventos.</p>
          </div>
          
          <div className="flex overflow-x-auto md:flex-wrap gap-2 pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 w-full md:w-auto" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-white text-black' 
                    : 'bg-white/5 border border-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredFiles.map((file) => (
              <motion.div
                key={file.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative aspect-video bg-white/5 rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={file.image}
                  alt={file.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] uppercase font-bold text-[#F5A623] tracking-widest mb-1 block">
                      {file.category}
                    </span>
                    <h3 className="font-bold text-sm text-white leading-tight mb-1 line-clamp-1">{file.name}</h3>
                    <p className="text-[10px] text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                      {file.description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <Play size={20} className="text-white ml-1" fill="currentColor" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
