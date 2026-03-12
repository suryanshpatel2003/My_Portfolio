import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaPaperPlane, FaRocket, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const payload = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.current.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        const data = await response.json();
        alert(data.message || "Failed to send message ❌");
      }
    } catch (error) {
      alert("Server Error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-[#030014] overflow-hidden">
      {/* 1. Refined Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_10%,#1e293b,transparent)] opacity-30" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 blur-[100px] rounded-full" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content - Sharper & More Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-10 bg-blue-500" />
            <span className="text-blue-400 font-bold tracking-[4px] uppercase text-[10px]">
              Available for Hire
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tighter">
            Have a <br /> 
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent italic">
              Vision?
            </span>
          </h2>
          
          <p className="text-gray-400 text-base max-w-sm mb-8 leading-relaxed">
            I help brands build fast, high-quality digital products. 
            Drop a line if you're looking for a partner in code.
          </p>

          <div className="flex flex-col gap-4 text-xs font-mono text-gray-500 tracking-wider">
            <p className="flex items-center gap-3">
              <span className="text-blue-500">→</span> RESPONSE_TIME: &lt; 24H
            </p>
            <p className="flex items-center gap-3">
              <span className="text-blue-500">→</span> CURRENT_ZONE: UTC+5:30
            </p>
          </div>
        </motion.div>

        {/* Right Content - The Form Card */}
        <div className="relative group perspective-1000">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-700" />

          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={true}
            glareMaxOpacity={0.05}
            className="z-20 relative"
          >
            <div className="bg-[#0b0f24]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-3xl">
              
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="relative group/field">
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder=" "
                    className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder-transparent"
                  />
                  <label className="absolute left-4 top-3 text-gray-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:bg-[#0b0f24] peer-focus:px-2 peer-focus:text-blue-400 uppercase font-bold tracking-widest">
                    Name
                  </label>
                </div>

                <div className="relative group/field">
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder=" "
                    className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder-transparent"
                  />
                  <label className="absolute left-4 top-3 text-gray-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:bg-[#0b0f24] peer-focus:px-2 peer-focus:text-blue-400 uppercase font-bold tracking-widest">
                    Email
                  </label>
                </div>

                <div className="relative group/field pt-2">
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder=" "
                    className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none placeholder-transparent"
                  />
                  <label className="absolute left-4 top-5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:left-2 peer-focus:bg-[#0b0f24] peer-focus:px-2 peer-focus:text-blue-400 uppercase font-bold tracking-widest">
                    Message
                  </label>
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold tracking-[2px] uppercase text-xs relative overflow-hidden shadow-[0_10px_20px_rgba(37,99,235,0.2)]"
                >
                  <span className="flex items-center justify-center gap-3">
                    {loading ? "Sending..." : <>Send Message <FaPaperPlane className="text-[10px]" /></>}
                  </span>
                </motion.button>
              </form>

              <AnimatePresence>
                {status === "SUCCESS" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-[#0b0f24] rounded-[2rem] z-30 p-8 text-center"
                  >
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                        <FaCheckCircle className="text-3xl text-green-500" />
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-widest uppercase">
                        Message Sent
                      </h3>
                      <p className="text-gray-400 text-xs">
                        Transmission received. I'll get back to you shortly.
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