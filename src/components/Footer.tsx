export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#050505] pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="rounded-3xl bg-[#F5A623] p-10 text-black flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-60">Inicia una conversación</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-tight">
                ¿Tienes un proyecto<br/>en mente?<br/>Hablemos hoy.
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

          <div className="bg-zinc-900 border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="Nombre" className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#F5A623] transition-colors" />
                <input type="email" placeholder="Correo electrónico" className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#F5A623] transition-colors" />
              </div>
              
              <select defaultValue="" className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white/80 focus:outline-none focus:border-[#F5A623] transition-colors appearance-none">
                <option value="" disabled>Tipo de Proyecto</option>
                <option value="institucional">Institucional / Corporativo</option>
                <option value="comercial">Comercial / Spot</option>
                <option value="cobertura">Cobertura de Evento</option>
                <option value="otro">Otro</option>
              </select>

              <select defaultValue="" className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white/80 focus:outline-none focus:border-[#F5A623] transition-colors appearance-none">
                <option value="" disabled>Presupuesto Estimado</option>
                <option value="small">&lt; $2,000</option>
                <option value="medium">$2,000 - $5,000</option>
                <option value="large">$5,000+</option>
              </select>
              
              <textarea placeholder="Cuéntanos sobre tu proyecto..." rows={4} className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#F5A623] transition-colors resize-none"></textarea>
              
              <button className="bg-white text-black font-bold uppercase tracking-widest text-sm py-4 rounded-xl hover:bg-[#F5A623] transition-colors mt-2">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Beemo Studio. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Instagram</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Vimeo</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
