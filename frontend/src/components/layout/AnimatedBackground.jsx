import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030014]">
      
      {/* 1. The Deep Nebula Layer */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e293b_0%,#030014_100%)]"
      />

      {/* 2. Moving 3D Perspective Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), 
                            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 10%, transparent 100%)',
        }}
      />

      {/* 3. Cinematic "Hero Blue" Glow */}
      <motion.div
        animate={{
          x: [-20, 40, -20],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[800px] h-[800px] bg-blue-600/15 blur-[120px] rounded-full -top-40 -left-40"
      />

      {/* 4. Cinematic "Accent Orange" Glow */}
      <motion.div
        animate={{
          x: [20, -40, 20],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[700px] h-[700px] bg-orange-500/10 blur-[120px] rounded-full -bottom-40 -right-40"
      />

      {/* 5. Twinkling Stars Effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              boxShadow: '0 0 10px rgba(255,255,255,0.8)',
            }}
          />
        ))}
      </div>

      {/* 6. Subtle Noise Overlay for Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default AnimatedBackground;