import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-6 bg-[#030014] overflow-hidden">
      
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-4"
          >
            <span className="text-[9px] font-black tracking-[4px] uppercase text-blue-400">Production Ready</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Featured <span className="bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent italic">Works.</span>
          </h2>
        </div>

        {/* Optimized Compact 3D Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt
                perspective={1200}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.1}
                className="h-full"
              >
                <div className="relative h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 flex flex-col transition-all duration-500 hover:border-blue-500/40 shadow-xl overflow-hidden group">
                  
                  {/* Project Image Area (Smaller & Sleek) */}
                  <div className="relative w-full h-40 bg-[#050816] rounded-2xl mb-6 overflow-hidden border border-white/5">

  {project.image ? (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
  ) : (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-[10px] font-mono text-white/10 tracking-[10px] uppercase rotate-12">
        Preview
      </span>
    </div>
  )}

  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

</div>

                  {/* Metadata */}
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-white/20">0{index + 1}</span>
                  </div>

                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Compact Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[8px] font-bold text-gray-500 tracking-wider uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions (Minimalist) */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <a href={project.github} className="text-gray-500 hover:text-white transition-colors">
                      <FaGithub className="text-xl" />
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-[10px] font-black tracking-widest text-blue-400 hover:text-orange-400 transition-all group/link">
                      VIEW LIVE <FaExternalLinkAlt className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Bottom Neon Line */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;