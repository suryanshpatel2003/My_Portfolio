import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeClick = () => {
    fetch("http://localhost:5000/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "resume_view" }),
    });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl transition-all duration-500 ${
        scrolled ? "scale-95" : "scale-100"
      }`}
    >
      <div className="relative p-[1px] rounded-2xl overflow-hidden group">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 animate-[move_5s_linear_infinite]"
          style={{ backgroundSize: "200% 100%" }}
        />

        <div className="relative flex justify-between items-center px-8 py-4 rounded-2xl bg-[#030014]/70 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          
          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-xl font-black tracking-tighter cursor-pointer"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Suryansh
            </span>
            <span className="text-white">.dev</span>
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  setActive(link.href);
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-orange-500/20 border border-white/10 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </button>
            ))}

            {/* Resume Button Styled Properly */}
            <div className="ml-4 pl-4 border-l border-white/10">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/UPDATED_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeClick}
                className="relative px-5 py-2 text-xs font-bold tracking-widest text-white rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 shadow-lg transition-all duration-300"
              >
                RESUME
              </motion.a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.div
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
            <motion.div
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
            <motion.div
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes move {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;