import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      
      {/* Background Cinematic Text */}
      <div className="absolute top-20 right-[-5%] text-[12rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter hidden lg:block">
        Story
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-400 text-xs font-bold tracking-[5px] uppercase mb-4 block">Introduction</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white">
            Driven by <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-orange-500 bg-clip-text text-transparent">
              Logic & Code
            </span>
          </h2>

          <div className="space-y-6 max-w-xl">
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              I’m a final-year Computer Science Engineering student and a passionate Full Stack Developer currently gaining real-world experience through my internship.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed font-light">
              I specialize in building scalable backend architectures and modern frontend experiences using the MERN stack. From authentication systems and admin dashboards to real-time features and payment integrations — I focus on writing clean, production-ready code.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed font-light">
              My strength lies in system thinking — I don’t just build features, I design structured solutions. I enjoy breaking down complex problems, optimizing performance, and building applications that are reliable, maintainable, and future-proof.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE – STATS GRID + FIXED FLOATING CARD */}
        <div className="relative flex flex-col gap-8">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 relative z-10">
            {[
              { number: "10+", label: "Projects Delivered" },
              { number: "15+", label: "Technologies Used" },
              { number: "Full Stack", label: "Primary Focus" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} className="h-full">
                  <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 text-center hover:border-blue-500/30 transition-all duration-500 shadow-xl">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                      {item.number}
                    </h3>
                    <p className="text-gray-500 text-[10px] uppercase tracking-[2px] font-bold">
                      {item.label}
                    </p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>

          {/* FIXED: ATTRACIVE FLOATING CODE TERMINAL */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block self-end lg:-mr-12"
          >
            <div className="bg-[#050816]/80 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] text-gray-600 font-mono tracking-widest">BUILD_LOG.SYS</span>
              </div>
              
              {/* Code Content */}
              <div className="font-mono text-xs md:text-sm space-y-1">
                <p className="text-blue-400">const <span className="text-purple-400">Dev</span> = {' {'}</p>
                <p className="ml-4 text-white/80 italic">status: <span className="text-orange-400">'Building'</span>,</p>
                <p className="ml-4 text-white/80 italic">precision: <span className="text-blue-300">'High'</span>,</p>
                <p className="ml-4 text-white/80 italic">location: <span className="text-orange-400">'Portfolio'</span></p>
                <p className="text-blue-400">{' };'}</p>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-all" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;