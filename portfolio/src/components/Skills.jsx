import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPhp,
  FaKey,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "PHP", icon: <FaPhp /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "JWT Authentication", icon: <FaKey /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-5">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 sm:gap-3 bg-slate-800 p-3 sm:p-4 rounded-xl"
                  >
                    <span className="text-xl sm:text-2xl text-blue-400">
                      {skill.icon}
                    </span>

                    <span className="text-sm sm:text-base">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 text-blue-500">
            Soft Skills & Testing
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Problem Solving",
              "Communication",
              "Team Collaboration",
              "Time Management",
              "Adaptability",
              "Critical Thinking",
              "Quick Learner",
              "Leadership",
              "Manual Testing",
              "Bug Tracking",
              "API Testing (Postman)",
            ].map((skill) => (
              <span
                key={skill}
                className="text-sm sm:text-base bg-slate-800 px-4 py-2 sm:px-5 sm:py-3 rounded-full border border-slate-700 hover:border-blue-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}