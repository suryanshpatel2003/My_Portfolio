import car from "../assets/car.webp";
import Infratech from "../assets/infra.webp";
import test from "../assets/test.png";
import job from "../assets/job.png";
import series from "../assets/series.jpg";
import bihar from "../assets/bihar.jfif";

export const projects = [
  {
    title: "Driver Booking Platform (Uber-like Model)",
    description:
      "Built a real-time MERN stack driver booking platform with booking lifecycle (ACCEPTED → ON_THE_WAY → COMPLETED), live location tracking, in-app chat, wallet & payout system, surge pricing, and Razorpay payment integration. Implemented JWT authentication and role-based dashboards (User / Driver / Admin). Solves real-world mobility use case.",
    image: car,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Razorpay",
      "Cloudinary"
    ],
    github: "#",
    live: "https://our-driver-booking.vercel.app/",
  },

  {
    title: "Test Series Management System (Microservice Architecture)",
    description:
      "Developed a scalable test series microservice currently used for UPSC/BPSC preparation platform. Students can purchase test series and attempt timed exams, while Admin can create test series, manage questions, evaluate results, and track performance analytics. Designed with role-based authentication and modular architecture so it can be integrated into any ed-tech platform.",
    image: series,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Role-Based Access Control",
      "REST APIs"
    ],
    github: "#",
    live: "https://thebrilliantbihar.com/batch-details/answer-writing-development-programme",
  },

  {
    title: "Infratech – Corporate Website",
    description:
      "Developed a premium corporate MERN website with secure admin dashboard to manage projects, events, and gallery content. Implemented client enquiry/contact system for lead management and built a fully responsive professional UI.",
    image: Infratech,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "JWT"
    ],
    github: "#",
    live: "#",
  },

  {
    title: "The Brilliant Bihar –UPSC/BPSC Learning Platform (Contributor)",
    description:
      "Contributed to a live ed-tech platform by developing the Resource Module (Mock Interviews, PYQ, NCERT, Magazines). Structured chapter-wise notes, learning resources, and test modules for UPSC/BPSC aspirants.",
    image: bihar,
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "REST APIs"
    ],
    github: "#",
    live: "https://thebrilliantbihar.com/",
  },

  {
    title: "Employee Monitoring System",
    description:
      "Developed a comprehensive monitoring solution using MERN stack and Python. The system tracks employee activity, productivity metrics, and work logs in real-time. Integrated Python scripts for data analysis and background activity tracking to provide actionable insights to administrators through a centralized dashboard.",
    image: test,
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Python",
      "JWT",
      "Data Analytics"
    ],
    github: "#",
    live: "#",
  },

  {
    title: "Keeper App (MERN)",
    description:
      "Developed a note management application supporting CRUD operations with authentication. Implemented responsive UI and efficient state management. Designed a scalable architecture ensuring maintainability and smooth performance.",
    image: job,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT"
    ],
    github: "#",
    live: "https://keeper-app-beryl-sigma.vercel.app/",
  },

  // {
  //   title: "AI-Based Job Prediction Platform",
  //   description:
  //     "Built an AI-powered MERN platform that predicts suitable job roles based on user education and skills. Implemented profile creation, resume upload, and automated job recommendations with ranked confidence scores for career guidance.",
  //   image: job,
  //   tech: [
  //     "React.js",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Machine Learning Integration",
  //     "JWT"
  //   ],
  //   github: "#",
  //   live: "#",
  // },
];