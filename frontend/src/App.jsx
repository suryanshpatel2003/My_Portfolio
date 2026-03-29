import { motion } from "framer-motion";
import { useEffect } from "react";
import Home from "./pages/Home";
import useMouseGlow from "./hooks/useMouseGlow";
import AnimatedBackground from "./components/layout/AnimatedBackground";
const CursorGlow = () => {
  const { smoothX, smoothY, scaleX, scaleY } = useMouseGlow();

  return (
    <motion.div
      style={{
        translateX: smoothX,
        translateY: smoothY,
        scaleX: scaleX,
        scaleY: scaleY,
      }}
      className="fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-[9999] rounded-full overflow-visible"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-cyan-400/20 to-orange-500/30 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-[2px] opacity-50" />
      <div className="absolute inset-[-50px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
    </motion.div>
  );
};

function App() {

  /* ===============================
     🔥 Track Portfolio Visit (Once)
  =============================== */
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/track`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "visit" }),
    });
  }, []);

  return (
    <div className="relative bg-[#030014] min-h-screen">

      <CursorGlow />
      <AnimatedBackground />

      <main className="relative z-10">
        <Home />
      </main>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background: #030014;
          cursor: none;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #030014;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #fb923c);
          border-radius: 10px;
        }
        ::selection {
          background: rgba(59, 130, 246, 0.3);
          color: #fff;
        }
      `}</style>
    </div>
  );
}

export default App;