import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Kakunje Software Pvt. Ltd.",
    duration: "Feb 2026 – May 2026",
    description: (
      <ul className="list-disc pl-5 mt-3 text-gray-300 space-y-2">
        <li>Developed responsive web applications using React.js and Tailwind CSS.</li>
        <li>Built RESTful APIs using Node.js and Express.js.</li>
        <li>Integrated MongoDB and MySQL databases.</li>
        <li>Implemented authentication and authorization features.</li>
        <li>Performed testing, debugging, and application maintenance.</li>
        <li>Collaborated with mentors and team members in project development.</li>
      </ul>
    ),
  },

  {
    role: "Python Programmer Intern",
    company: "InternPe",
    duration: "Jun 2025 – Jul 2025",
    description: (
      <ul className="list-disc pl-5 mt-3 text-gray-300 space-y-2">
        <li>Developed interactive Python applications and games.</li>
        <li>Applied object-oriented programming concepts.</li>
        <li>Debugged and optimized application performance.</li>
        <li>Strengthened problem-solving and analytical skills.</li>
        <li>Gained hands-on experience in software development practices.</li>
      </ul>
    ),
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-blue-500 ml-3 sm:ml-4">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 md:mb-12 ml-6 sm:ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full -left-[30px] sm:-left-[38px]"></div>

              {/* Card */}
              <div className="bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
                <span className="text-blue-400 text-xs sm:text-sm">
                  {exp.duration}
                </span>

                <h3 className="text-xl sm:text-2xl font-semibold mt-2">
                  {exp.role}
                </h3>

                <h4 className="text-gray-400 text-sm sm:text-base mb-3">
                  {exp.company}
                </h4>

                <div className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {exp.description}
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}