import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-16 pb-8 overflow-hidden bg-transparent">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        
        <div className="relative group bg-[#030014]/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 md:p-10 overflow-hidden shadow-2xl">
          
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-colors duration-700" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full group-hover:bg-orange-500/20 transition-colors duration-700" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 leading-[1.1]">
                Ready to launch your <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-orange-500 bg-clip-text text-transparent">
                  next big idea?
                </span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-md mb-6 font-light">
                Whether it's a scalable backend or a cinematic frontend, let's build something that stands out.
              </p>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -5 }}
                className="flex items-center gap-2 text-xs font-bold tracking-[3px] uppercase text-blue-400 hover:text-white transition-colors"
              >
                <FaArrowUp /> Back to top
              </motion.button>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: <FaGithub />, 
                  label: "Github", 
                  link: "https://github.com/suryanshpatel2003", 
                  color: "hover:text-white" 
                },
                { 
                  icon: <FaLinkedin />, 
                  label: "LinkedIn", 
                  link: "https://www.linkedin.com/in/-patel-b2suryanshb59321b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZnIO3xmASOKJXRBm55iBRg%3D%3D", 
                  color: "hover:text-blue-400" 
                },
                { 
                  icon: <FaEnvelope />, 
                  label: "Email", 
                  link: "mailto:suryansh30patel@gmail.com", 
                  color: "hover:text-orange-400" 
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group/card"
                >
                  <div className="text-2xl text-gray-500 group-hover/card:text-white transition-colors">
                    {social.icon}
                  </div>
                  <span className={`text-xs font-bold tracking-widest uppercase text-gray-400 ${social.color}`}>
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-500/20">
                 S
               </div>
               <div>
                 <h3 className="font-bold text-white tracking-tight">Suryansh Patel</h3>
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest">Full Stack Developer</p>
               </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {["React", "Node.js", "Framer Motion", "Three.js"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-gray-500 border border-white/5 rounded-full bg-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-[5px]">
            © {new Date().getFullYear()} Designed & Developed with passion — Built for the future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;