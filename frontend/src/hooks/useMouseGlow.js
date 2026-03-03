import { useEffect } from "react";
import { useSpring, useMotionValue, useVelocity, useTransform } from "framer-motion";

const useMouseGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Velocity track karne ke liye (Speed of mouse)
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);
  
  // Speed ke basis par size aur scale change karne ke liye logic
  const speed = useTransform(
    [velocityX, velocityY],
    ([latestX, latestY]) => Math.sqrt(Math.pow(latestX, 2) + Math.pow(latestY, 2))
  );

  // Jab mouse fast chale toh glow thoda stretch (scale) ho jaye
  const scaleX = useTransform(speed, [0, 3000], [1, 1.5]);
  const scaleY = useTransform(speed, [0, 3000], [1, 0.8]);

  // Smooth trail effect physics (Physics ko thoda 'heavy' kiya hai cinematic feel ke liye)
  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset values updated for better centering
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return { smoothX, smoothY, scaleX, scaleY };
};

export default useMouseGlow;