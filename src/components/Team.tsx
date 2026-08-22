import { motion } from 'motion/react';

export const Team = () => {
  const team = [
    {
      name: "Colombia Cañarte",
      role: "Fundador & Productor General",
      image: (import.meta as any).env.BASE_URL + '/team/colombia.webp'.substring(1),
      span: "col-span-1",
    },
    {
      name: "Jonathan Miranda",
      role: "Director Creativo",
      image: (import.meta as any).env.BASE_URL + '/team/jonathan.webp'.substring(1),
      span: "col-span-1",
    },
    {
      name: "Andrea Wong",
      role: "Camarógrafa",
      image: (import.meta as any).env.BASE_URL + '/team/andrea.webp'.substring(1),
      span: "col-span-1",
    }
  ];

  return (
    <section id="team" className="py-32 bg-[#050505] border-t border-white/5">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase heading-font mb-6 leading-[0.9]">
            El Equipo
          </h2>
          <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed">
            Especialistas visuales obsesionados con la perfección técnica y la narrativa emocional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-3xl bg-[zinc-900] ${member.span} aspect-[4/5] lg:aspect-auto lg:min-h-[600px]`}
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 lg:opacity-60 lg:group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <div className="translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-[#083eeb] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
                    {member.role}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter heading-font">
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
