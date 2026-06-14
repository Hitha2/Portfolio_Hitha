import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
    demo: "#",
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
    demo: "#",
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
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg"
            >
              {/* Project Image Placeholder */}
              <div className="h-52 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white text-center px-4">
                  {project.title}
                </h3>
              </div>

              <div className="p-6">

                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a> */}

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}