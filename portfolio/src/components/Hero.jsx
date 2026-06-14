import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../assets/profile.jpg";
import resume from "../assets/Hithaishi.pdf";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          <p className="text-blue-400 font-medium mb-4">
            Welcome to my Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-500">
              Hithaishi Kulal
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mt-6">
            MCA Graduate | Aspiring Software Engineer |
            Full-Stack Web Developer
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Enthusiastic MCA graduate with hands-on experience in
            Full-Stack Web Development using the MERN Stack,
            Python, React.js, Node.js, Express.js, MongoDB,
            and MySQL.

            Passionate about building scalable web applications,
            RESTful APIs, and AI-powered solutions that solve
            real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-medium transition"
            >
              View Projects
            </a>

            <div className="flex flex-wrap gap-4">

            {/* View Resume */}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-medium transition"
            >
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href={resume}
              download="Hithaishi_Kulal_Resume.pdf"
              className="border border-slate-600 hover:border-blue-500 px-8 py-3 rounded-xl font-medium transition"
            >
              Download Resume
            </a>

          </div>

          </div>

          <div className="flex gap-6 mt-8 text-2xl">

            <a
              href="https://github.com/Hitha2"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/hithaishi-kulal"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>


          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

          <img
            src={profile}
            alt="Hithaishi Kulal"
            className="relative w-80 h-80 md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.5)]"
          />

        </motion.div>

      </div>
    </section>
  );
}