import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import heroImage from "../../assets/hero.webp";
// Icons import (Make sure you have react-icons installed)
import { SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiMongodb } from "react-icons/si";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const spotlightY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax for floating icons
  const iconX = useTransform(mouseX, [0, 2000], [20, -20]);
  const iconY = useTransform(mouseY, [0, 1000], [20, -20]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-6 bg-[#030014]">
      
      {/* 1. Dynamic Interactive Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(3,0,20,1))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Floating Tech Icons in Background */}
        <motion.div style={{ x: iconX, y: iconY }} className="absolute inset-0 pointer-events-none opacity-20 hidden lg:block">
            <SiReact className="absolute top-[20%] left-[15%] text-6xl text-blue-400 animate-pulse" />
            <SiNodedotjs className="absolute bottom-[25%] left-[10%] text-5xl text-green-500 animate-bounce" style={{animationDuration: '4s'}} />
            <SiJavascript className="absolute top-[15%] right-[20%] text-4xl text-yellow-400" />
            <SiTailwindcss className="absolute bottom-[30%] right-[15%] text-6xl text-cyan-400 animate-pulse" />
            <SiMongodb className="absolute top-[50%] right-[5%] text-5xl text-green-600" />
        </motion.div>

        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/10 blur-[140px] rounded-full"
        />
      </div>

      {/* 2. Interactive Mouse Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-40"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) => `radial-gradient(650px circle at ${x}px ${y}px, rgba(59,130,246,0.15), transparent 80%)`
          ),
        }}
      />

      <div className="relative z-20 max-w-7xl w-full grid md:grid-cols-2 items-center gap-12 lg:gap-24">
        
        {/* LEFT CONTENT BLOCK */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-[3px] uppercase mb-6 backdrop-blur-md">
              Available for Innovation
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter mb-6">
              <span className="block text-white">Suryansh</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent italic">
                Patel
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
              Architecting <span className="text-white font-medium italic underline decoration-blue-500 underline-offset-4">unforgettable digital journeys</span> through high-performance code and 3D design.
            </p>

            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
              <a href="#contact" className="relative group px-10 py-4 bg-white text-black rounded-xl font-bold transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors uppercase tracking-widest text-xs">Start a Project</span>
              </a>

              <a href="#projects" className="group px-10 py-4 rounded-xl font-bold border border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 uppercase tracking-widest text-xs">
                Explore Work
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT CONTENT BLOCK (Enhanced Floating Matrix) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-1 md:order-2 relative flex justify-center"
        >
          {/* Floating UI Card 1: System Status */}
          <motion.div 
            animate={{ y: [-10, 10, -10], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-12 -left-12 z-40 p-5 rounded-2xl bg-[#030014]/80 backdrop-blur-2xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] hidden lg:block w-48"
          >
             <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
                <div className="text-[10px] text-gray-400 font-mono tracking-tighter">SERVER_STATUS: ONLINE</div>
             </div>
             <div className="space-y-2">
                <div className="h-1.5 w-full bg-blue-500/10 rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: "90%" }} transition={{ duration: 2 }} className="h-full bg-blue-500" />
                </div>
                <div className="h-1.5 w-2/3 bg-orange-500/10 rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 2, delay: 0.5 }} className="h-full bg-orange-500" />
                </div>
             </div>
          </motion.div>

          {/* Floating UI Card 2: Code Snippet */}
          <motion.div 
            animate={{ y: [15, -15, 15] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute top-1/2 -right-16 z-40 p-4 rounded-xl bg-[#030014]/90 backdrop-blur-xl border border-white/10 shadow-2xl hidden xl:block font-mono text-[9px]"
          >
             <div className="text-orange-400">const</div> <div className="text-blue-400 inline">dev</div> = {"{"} <br />
             &nbsp;&nbsp;name: <div className="text-green-400 inline">'Suryansh'</div>, <br />
             &nbsp;&nbsp;skills: [<div className="text-yellow-400 inline">'React'</div>, <div className="text-yellow-400 inline">'Node'</div>] <br />
             {"}"};
          </motion.div>

          {/* Floating UI Card 3: Metrics */}
          <motion.div 
            animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -bottom-10 left-0 z-40 p-4 rounded-2xl bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl hidden lg:block"
          >
             <div className="text-[10px] text-gray-500 font-bold mb-2 uppercase tracking-widest">Load Velocity</div>
             <div className="flex items-end gap-1.5 h-10">
                {[40, 80, 50, 95, 60, 85].map((h, i) => (
                    <motion.div 
                        key={i}
                        animate={{ height: [`${h}%`, '100%', `${h}%`] }}
                        transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}
                        className="w-2 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                    />
                ))}
             </div>
          </motion.div>

          {/* Main 3D Image with Glow */}
          <Tilt
            perspective={1500}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.2}
            className="relative z-30"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-[2.5rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <img
              src={heroImage}
              alt="Suryansh Patel"
              className="relative w-[280px] md:w-[380px] lg:w-[450px] rounded-[2.5rem] border border-white/20 object-cover shadow-2xl"
            />
          </Tilt>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent z-20" />
    </section>
  );
};

export default Hero;