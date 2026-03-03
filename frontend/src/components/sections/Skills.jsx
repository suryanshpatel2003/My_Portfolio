import { motion } from "framer-motion";
import { skills } from "../../data/skills.jsx";

const Skills = () => {
  return (
    <section id="skills" className="relative pt-24 pb-20 bg-[#010107] overflow-hidden">
      {/* Subtle Depth Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(30,50,150,0.1),transparent_70%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Minimalist Header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="text-blue-500 text-[10px] font-bold tracking-[0.3em] uppercase">Technical Arsenal</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 italic">Stack.</span>
          </h2>
        </div>

        {/* Skill Rows */}
        <div className="flex flex-col gap-12">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={category} className="relative">
              
              {/* Category Sub-label */}
              <div className="flex items-center gap-4 mb-4 opacity-40">
                 <span className="text-[10px] font-mono text-white uppercase tracking-widest">
                   {category.replace('_', ' ')}
                 </span>
                 <div className="h-[1px] flex-grow bg-white/10" />
              </div>

              {/* Seamless Stream */}
              <div 
                className="flex overflow-hidden relative group"
                style={{
                  maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                  perspective: "800px"
                }}
              >
                <motion.div 
                  animate={{ x: idx % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                  transition={{ 
                    duration: 40, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="flex gap-4 md:gap-6 whitespace-nowrap py-4"
                >
                  {[...items, ...items].map((skill, i) => (
                    <motion.div
                      key={`${category}-${i}`}
                      whileHover={{ 
                        y: -5,
                        scale: 1.02,
                        rotateX: 5,
                        borderColor: "rgba(59, 130, 246, 0.5)"
                      }}
                      className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-300 group/item"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Scaled Down Icon */}
                      <div className="text-xl md:text-2xl transition-transform duration-300 group-hover/item:scale-110">
                        {skill.icon}
                      </div>
                      
                      {/* Clean Text */}
                      <span className="text-sm md:text-base font-medium text-white/70 group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>

                      {/* 3D "Glass Edge" Highlight */}
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;