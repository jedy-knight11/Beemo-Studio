const fs = require('fs');

let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// 1. Remove budget state
content = content.replace(/const \[budget, setBudget\] = useState\(''\);\n/, '');

// 2. Change progress bar denominator from 3 to 2, and text from 03 to 02
content = content.replace(/animate=\{\{ width: `\$\{\(formStep \/ 3\) \* 100\}%` \}\}/, 'animate={{ width: `${(formStep / 2) * 100}%` }}');
content = content.replace(/<span className="text-xs font-bold tracking-widest text-white\/40">0\{formStep\}\/03<\/span>/, '<span className="text-xs font-bold tracking-widest text-white/40">0{formStep}/02</span>');

// 3. Fix step 1
content = content.replace(/QUA% TIPO DE PROYECTO TIENES EN MENTE\?/, '¿QUÉ TIPO DE PROYECTO TIENES EN MENTE?');
content = content.replace(/\{ \['INSTITUCIONAL', 'COMERCIAL \/ SPOT', 'COBERTURA DE EVENTOS', 'OTRO'\]\.map/, "{ ['VIDEO INSTITUCIONAL/CORPORATIVO', 'CONTENIDO PARA REDES', 'COBERTURA DE EVENTOS', 'FOTOGRAFÍA'].map");

// 4. Remove step 2 completely
content = content.replace(/\{formStep === 2 && \([\s\S]*?\{formStep === 3 && \(/, '{formStep === 2 && (');

// 5. Update step 3 (which is now step 2)
content = content.replace(/CASI LISTO\. CUA%NTANOS MA\?S\./, 'CASI LISTO. CUÉNTANOS MÁS.');
content = content.replace(/key="step3"/, 'key="step2"');
content = content.replace(/onClick=\{\(\) => setFormStep\(2\)\}/, 'onClick={() => setFormStep(1)}');

// Insert the number field
const budgetField = `
                        <div className="flex flex-col relative">
                          <input type="number" placeholder="¿PRESUPUESTO ESTIMADO? (OPCIONAL)" className="w-full bg-transparent border-b border-white/20 pb-3 text-lg font-bold text-white placeholder-white/30 focus:outline-none focus:border-[#083eeb] transition-colors uppercase tracking-tight" />
                        </div>
                        <div className="flex flex-col relative">
                          <textarea`;
content = content.replace(/<div className="flex flex-col relative">\s*<textarea/, budgetField);

// Fix the corrupted Spanish text in the Right Block of contact page view
content = content.replace(/PRE-PRODUCCION/g, 'PRE-PRODUCCIÓN');
content = content.replace(/planificacion/g, 'planificación');
content = content.replace(/exito/g, 'éxito');
content = content.replace(/PRODUCCION/g, 'PRODUCCIÓN');
content = content.replace(/Ejecucion/g, 'Ejecución');
content = content.replace(/ultima/g, 'última');
content = content.replace(/POST-PRODUCCION/g, 'POST-PRODUCCIÓN');
content = content.replace(/Edicion/g, 'Edición');
content = content.replace(/colorizacion/g, 'colorización');
content = content.replace(/diseno/g, 'diseño');
content = content.replace(/perfeccion/g, 'perfección');
content = content.replace(/adaptacion/g, 'adaptación');
content = content.replace(/multiples/g, 'múltiples');
content = content.replace(/maximo/g, 'máximo');

// Fix left block testimony Spanish texts
content = content.replace(/TRANSFORMO/g, 'TRANSFORMÓ');
content = content.replace(/VISION/g, 'VISIÓN');
content = content.replace(/SUPERO/g, 'SUPERÓ');

// Fix footer link texts
content = content.replace(/Metodologia/g, 'Metodología');
content = content.replace(/prA3ximo/g, 'próximo');

fs.writeFileSync('src/components/Footer.tsx', content, 'utf8');
console.log('Footer updated.');

