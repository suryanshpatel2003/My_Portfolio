import { motion } from "framer-motion";

export const LeftPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -150, rotateY: 30 }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        rotateY: 0,
        y: [0, -20, 0] // Floating effect
      }}
      transition={{ 
        duration: 1.5,
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      }}
      className="hidden xl:block absolute left-8 top-40 w-80 z-20"
    >
      <div className="relative group p-[1px] rounded-2xl bg-gradient-to-b from-blue-500/30 to-transparent">
        <div className="bg-[#030014]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          
          {/* Terminal Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 bg-red-500/60 rounded-full" />
              <div className="w-2.5 h-2.5 bg-yellow-500/60 rounded-full" />
              <div className="w-2.5 h-2.5 bg-green-500/60 rounded-full" />
            </div>
            <span className="text-[9px] font-mono text-blue-400/50 tracking-widest uppercase">System.Core</span>
          </div>

          {/* Animated Code Lines */}
          <div className="space-y-3 font-mono text-[10px]">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: "100%" }} 
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="h-1.5 bg-blue-500/20 rounded-full" 
            />
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: "70%" }} 
              transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
              className="h-1.5 bg-blue-400/10 rounded-full" 
            />
            <div className="flex gap-2">
              <div className="h-1.5 w-1/3 bg-orange-500/20 rounded-full" />
              <div className="h-1.5 w-1/2 bg-blue-500/20 rounded-full" />
            </div>
          </div>

          {/* Visual Graph Area */}
          <div className="mt-8 h-32 relative bg-gradient-to-br from-blue-600/10 to-transparent rounded-xl border border-white/5 flex items-end p-4 gap-1.5">
             {[40, 70, 45, 90, 65, 80].map((h, i) => (
               <motion.div
                 key={i}
                 animate={{ height: [`${h}%`, `${h+10}%`, `${h}%`] }}
                 transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                 className="flex-1 bg-blue-500/40 rounded-t-sm shadow-[0_0_15px_rgba(59,130,246,0.3)]"
               />
             ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export const RightPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 150, rotateY: -30 }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        rotateY: 0,
        y: [0, 20, 0] // Floating effect (opposite direction)
      }}
      transition={{ 
        duration: 1.5,
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
      className="hidden xl:block absolute right-8 bottom-40 w-80 z-20"
    >
      <div className="relative group p-[1px] rounded-2xl bg-gradient-to-t from-orange-500/30 to-transparent">
        <div className="bg-[#030014]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[3px]">Analytics Overview</span>
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
          </div>

          {/* Circular Progress (SVG) */}
          <div className="flex justify-center items-center py-4 relative">
             <svg className="w-24 h-24 transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/5" />
                <motion.circle 
                  cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="4" fill="transparent" 
                  strokeDasharray="251.2"
                  initial={{ strokeDashoffset: 251.2 }}
                  animate={{ strokeDashoffset: 251.2 - (251.2 * 0.75) }}
                  transition={{ duration: 2, delay: 1 }}
                  className="text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.5)]" 
                />
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-black text-white">75%</span>
                <span className="text-[8px] text-gray-500 uppercase tracking-widest">Efficiency</span>
             </div>
          </div>

          {/* Status Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-[8px] font-bold px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5 uppercase tracking-widest">Scalability: High</span>
            <span className="text-[8px] font-bold px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5 uppercase tracking-widest">Latency: 24ms</span>
          </div>

        </div>
      </div>
    </motion.div>
  );
};