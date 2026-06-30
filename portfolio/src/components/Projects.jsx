import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI-Based Pneumonia Detection",
    description:
      "Developed an AI-powered healthcare solution that detects pneumonia from chest X-ray images using Deep Learning and Convolutional Neural Networks (CNN).",
    technologies: [
      "Python",
      "TensorFlow",
      "CNN",
      "Machine Learning",
    ],
    github: "https://github.com/Hitha2",
  },

  {
    title: "Sarathi Furniture E-Commerce Website",
    description:
      "Built a full-stack MERN e-commerce platform with authentication, product management, shopping cart, order tracking, and responsive UI.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/Hitha2",
  },

  {
    title: "Music Academy Website",
    description:
      "Designed and developed a responsive website for student registration, inquiry management, and academy information management.",
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Hitha2",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14">
          Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              className="bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg"
            >
              {/* Project Header */}
              <div className="h-40 sm:h-48 md:h-52 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center px-4">
                  {project.title}
                </h3>
              </div>

              <div className="p-5 sm:p-6">

                <p className="text-sm sm:text-base text-gray-400 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-center sm:justify-start">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm sm:text-base transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}