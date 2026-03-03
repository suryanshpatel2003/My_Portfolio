import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaPaperPlane, FaRocket } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);

    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("SUCCESS");
        form.current.reset();
        setTimeout(() => setStatus(""), 4000);
      } else {
        alert(data.message || "Failed to send message ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-[#030014] overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,#1e293b,transparent)] opacity-20" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full" />
      
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <span className="text-blue-400 font-bold tracking-[8px] uppercase text-[10px] mb-6 block">
            Protocol: Secure Connection
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8">
            Let’s <br /> 
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-orange-500 bg-clip-text text-transparent italic">
              Create.
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-md mb-12 leading-relaxed font-light">
            I’m currently available for freelance projects and full-time positions. 
            Send a message and let's build something that matters.
          </p>
        </motion.div>

        <div className="relative group">
          
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />

          <Tilt
            perspective={1200}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
            glarePosition="all"
            className="z-20 relative"
          >
            <div className="bg-[#050816]/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                
                <div className="relative">
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-blue-500 transition-all placeholder-transparent"
                  />
                  <label className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-blue-400 peer-focus:text-xs uppercase font-bold tracking-widest">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-orange-500 transition-all placeholder-transparent"
                  />
                  <label className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-orange-400 peer-focus:text-xs uppercase font-bold tracking-widest">
                    Email Address
                  </label>
                </div>

                <div className="relative pt-4">
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-blue-500 transition-all resize-none placeholder-transparent"
                  />
                  <label className="absolute left-0 top-8 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-8 peer-focus:top-0 peer-focus:text-blue-400 peer-focus:text-xs uppercase font-bold tracking-widest">
                    The Message
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full mt-8 py-5 rounded-full border border-white/20 text-white font-bold tracking-[6px] uppercase text-[10px] relative overflow-hidden group transition-all"
                >
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 group-hover:text-black transition-colors flex items-center justify-center gap-4">
                    {loading ? "Transmitting..." : <>Initiate Project <FaPaperPlane /></>}
                  </span>
                </motion.button>

              </form>

              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-[#050816]/95 rounded-[2.5rem] z-30 p-10 text-center"
                  >
                    <div className="space-y-4">
                      <FaRocket className="text-4xl text-blue-400 mx-auto animate-bounce" />
                      <h3 className="text-xl font-bold text-white tracking-widest uppercase">
                        Transmission Sent
                      </h3>
                      <p className="text-gray-400 text-xs">
                        Your message has reached the orbit. I'll get back to you soon!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default Contact;