import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
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

  // FIXED SCROLLING LOGIC
  const handleNavClick = (e, href) => {
    e.preventDefault(); // Default anchor behavior roko
    setActive(href);
    setMenuOpen(false); // Mobile menu band karo
    
    // Thoda delay taaki menu band hone ka animation smooth ho jaye
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = 100; // Navbar ki height ke hisaab se offset
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 300); 
  };

  const handleResumeClick = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "resume_view" }),
    });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] md:w-[90%] max-w-5xl transition-all duration-500 ${
        scrolled ? "scale-95" : "scale-100"
      }`}
    >
      <div className="relative p-[1px] rounded-2xl overflow-hidden group">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 animate-[move_5s_linear_infinite]"
          style={{ backgroundSize: "200% 100%" }}
        />

        <div className="relative flex justify-between items-center px-5 md:px-8 py-3 md:py-4 rounded-2xl bg-[#030014]/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-lg md:text-xl font-black tracking-tighter cursor-pointer"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Suryansh
            </span>
            <span className="text-white">.dev</span>
          </motion.h1>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === link.href ? "text-white" : "text-gray-400 hover:text-white"
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

            <div className="ml-4 pl-4 border-l border-white/10">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeClick}
                className="relative px-5 py-2 text-xs font-bold tracking-widest text-white rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 shadow-lg"
              >
                RESUME
              </motion.a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.div animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="w-6 h-0.5 bg-white rounded-full origin-center" />
            <motion.div animate={{ opacity: menuOpen ? 0 : 1 }} className="w-6 h-0.5 bg-white rounded-full" />
            <motion.div animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="w-6 h-0.5 bg-white rounded-full origin-center" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 overflow-hidden rounded-2xl bg-[#030014]/95 backdrop-blur-3xl border border-white/10"
          >
            <div className="flex flex-col p-4 gap-2">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`w-full text-left px-4 py-4 rounded-xl transition-all ${
                    active === link.href ? "bg-white/10 text-blue-400" : "text-gray-400"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center mt-2 px-4 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 text-white font-bold text-sm tracking-widest"
                onClick={() => {
                  setMenuOpen(false);
                  handleResumeClick();
                }}
              >
                RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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