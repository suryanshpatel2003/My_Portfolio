import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAws, FaGitAlt, FaGithub, FaDocker 
} from "react-icons/fa";
import { 
  SiVite, 
  SiTailwindcss, 
  SiExpress, 
  SiJsonwebtokens, 
  SiSocketdotio, 
  SiMongodb, 
  SiMysql, 
  SiPostgresql, 
  SiCloudinary,  
  SiVercel, 
  SiPostman, 

} from "react-icons/si";
import { TbApi, TbShieldLock } from "react-icons/tb";

export const skills = {
  frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  ],

  backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "REST APIs", icon: <TbApi className="text-blue-400" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-[#FB015B]" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
  ],

  database: [
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  ],

  devops_and_cloud: [
    { name: "AWS S3", icon: <FaAws className="text-[#FF9900]" /> },
    { name: "Cloudinary", icon: <SiCloudinary className="text-[#3448C5]" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
  ],

  tools: [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
  ],

  concepts: [
    { name: "OOPS", icon: <TbShieldLock className="text-green-400" /> },
    { name: "API Security", icon: <TbShieldLock className="text-red-400" /> },
  ]
};