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
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-blue-500 mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-slate-800 p-4 rounded-xl"
                  >
                    <span className="text-2xl text-blue-400">
                      {skill.icon}
                    </span>

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

        {/* Soft Skills + Manual Testing */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-500">
            Soft Skills & Testing
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
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
                className="bg-slate-800 px-5 py-3 rounded-full border border-slate-700 hover:border-blue-500 transition"
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