import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Kakunje Software Pvt. Ltd.",
    duration: "Feb 2026 – May 2026",
    description:
      <ul className="list-disc pl-5 mt-4 text-gray-300 space-y-2">
  <li>Developed responsive web applications using React.js and Tailwind CSS.</li>
  <li>Built RESTful APIs using Node.js and Express.js.</li>
  <li>Integrated MongoDB and MySQL databases.</li>
  <li>Implemented authentication and authorization features.</li>
  <li>Performed testing, debugging, and application maintenance.</li>
  <li>Collaborated with mentors and team members in project development.</li>
</ul>,
  },

  {
    role: "Python Programmer Intern",
    company: "InternPe",
    duration: "Jun 2025 – Jul 2025",
    description:
      <ul className="list-disc pl-5 mt-4 text-gray-300 space-y-2">
  <li>Developed interactive Python applications and games.</li>
  <li>Applied object-oriented programming concepts.</li>
  <li>Debugged and optimized application performance.</li>
  <li>Strengthened problem-solving and analytical skills.</li>
  <li>Gained hands-on experience in software development practices.</li>
</ul>,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Experience
        </h2>

        <div className="relative border-l-2 border-blue-500 ml-4">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 ml-8"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px]"></div>

              <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">

                <span className="text-blue-400 text-sm">
                  {exp.duration}
                </span>

                <h3 className="text-2xl font-semibold mt-2">
                  {exp.role}
                </h3>

                <h4 className="text-gray-400 mb-4">
                  {exp.company}
                </h4>

                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}