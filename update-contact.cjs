const fs = require('fs');
const file = 'src/pages/Contact.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove budget state
content = content.replace(/const \[budget, setBudget\] = useState\(''\);\n/, '');

// 2. Update step 1 question and options
content = content.replace(
  /<h3 className="text-lg md:text-xl font-black uppercase tracking-tighter heading-font leading-\[1.1\]">QUE TIPO DE PROYECTO TIENES EN MENTE\?<\/h3>/g,
  '<h3 className="text-lg md:text-xl font-black uppercase tracking-tighter heading-font leading-[1.1]">¿QUÉ TIPO DE PROYECTO TIENES EN MENTE?</h3>'
);

content = content.replace(
  /\{ \['INSTITUCIONAL', 'COMERCIAL \/ SPOT', 'COBERTURA DE EVENTOS', 'OTRO'\]\.map/,
  "{ ['VIDEO INSTITUCIONAL/CORPORATIVO', 'CONTENIDO PARA REDES', 'COBERTURA DE EVENTOS', 'FOTOGRAFÍA'].map"
);

// 3. Remove step 2 (budget) entirely
content = content.replace(/\{formStep === 2 && \([\s\S]*?\{formStep === 3 && \(/, '{formStep === 2 && (');

// 4. Update step 3 (which is now step 2) question and back button
content = content.replace(
  /<h3 className="text-lg md:text-xl font-black uppercase tracking-tighter heading-font leading-\[1.1\]">CASI LISTO\. CUENTANOS MAS\.<\/h3>/g,
  '<h3 className="text-lg md:text-xl font-black uppercase tracking-tighter heading-font leading-[1.1]">CASI LISTO. CUÉNTANOS MÁS.</h3>'
);

// Change the back button in the final step to go to step 1
content = content.replace(
  /onClick=\{\(\) => setFormStep\(2\)\}\s*className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full/g,
  'onClick={() => setFormStep(1)}\n                        className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full'
);

// 5. Add budget input field to the final step
const newInputs = `
                      <div className="flex flex-col relative">
                        <input 
                          type="text" 
                          placeholder="¿PRESUPUESTO ESTIMADO? (OPCIONAL)"
                          className="w-full bg-transparent border-b-2 border-white/20 pb-4 text-lg md:text-xl font-bold text-white placeholder-white/20 focus:outline-none focus:border-[#083eeb] transition-colors uppercase tracking-tight"
                        />
                      </div>
                      <div className="flex flex-col relative">
                        <textarea `;
content = content.replace(/<div className="flex flex-col relative">\s*<textarea /g, newInputs);


// Replace step3 keys with step2
content = content.replace(/key="step3"/g, 'key="step2"');


fs.writeFileSync(file, content);
console.log('Contact.tsx updated');
