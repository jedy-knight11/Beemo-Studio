export const Team = () => {
  const team = [
    {
      name: "Jonathan Miranda",
      role: "Fundador | Director Ejecutivo",
      image: (import.meta as any).env.BASE_URL + 'team/juanjose.jpg', // SWAPPED IMAGE
    },
    {
      name: "Juan José",
      role: "Fundador | Productor Ejecutivo",
      image: (import.meta as any).env.BASE_URL + 'team/jonathan.jpg', // SWAPPED IMAGE
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase heading-font mb-6 leading-none">
              QUIÉNES<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">SOMOS</span>
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">Beemo nació para agencias y marcas que buscan una solución a un dilema moderno: necesitan contenido inmediato, pero no están dispuestas a sacrificar la calidad, el cuidado y la visión personalizada que una verdadera historia amerita.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {team.map((member, i) => (
            <div key={i} className="group relative flex flex-col">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#111] mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight heading-font mb-2">
                  {member.name}
                </h3>
                <p className="text-[#083eeb] font-bold tracking-widest text-sm uppercase">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
