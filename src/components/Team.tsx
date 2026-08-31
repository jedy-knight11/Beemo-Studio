import { motion } from 'motion/react';

export const Team = () => {
  const team = [
    {
      name: "Jonathan Miranda",
      role: "Fundador | Director Ejecutivo",
      image: (import.meta as any).env.BASE_URL + 'team/jonathan.webp',
    },
    {
      name: "Juan José",
      role: "Fundador | Productor Ejecutivo",
      image: (import.meta as any).env.BASE_URL + 'team/juanjose.webp',
    }
  ];

  return (
    <section id="team" className="py-32 bg-[#050505] border-t border-white/5">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase heading-font mb-6 leading-[0.9]">
            Quiénes Somos
          </h2>
          <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed">
            Beemo nació para agencias y marcas que buscan una solución a un dilema moderno: necesitan contenido inmediato, pero no están dispuestas a sacrificar la calidad, el cuidado y la visión personalizada que una verdadera historia amerita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-3xl bg-[zinc-900] aspect-[4/5] lg:aspect-[3/4]`}
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 lg:opacity-60 lg:group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-[#083eeb] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
                    {member.role}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter heading-font">
                    {member.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
