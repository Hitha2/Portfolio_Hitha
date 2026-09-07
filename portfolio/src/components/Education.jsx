import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution:
      "St Joseph Engineering & Technology, Mangalore",
    year: "2024 – 2026",
    score: "CGPA: 8.58",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution:
      "Dr. P. Dayananda Pai-P. Sathisha Pai Government First Grade College, Mangalore",
    year: "2021 – 2024",
    score: "CGPA: 8.87",
  },
  {
    degree: "Pre-University Course (PUC)",
    institution:
      "Shri Venkataramana Swami PU College, Bantwal",
    year: "2019 – 2021",
    score: "87.33%",
  },
  {
    degree: "SSLC",
    institution:
      "Sri Sharada High School, Panemangalore",
    year: "2016 – 2019",
    score: "87.36%",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-blue-500 ml-3 sm:ml-4">

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-8 md:mb-12 ml-6 sm:ml-8"
            >
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full -left-[30px] sm:-left-[38px]"></div>

              {/* Card */}
              <div className="bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
                <span className="text-blue-400 text-xs sm:text-sm">
                  {edu.year}
                </span>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                  {edu.degree}
                </h3>

                <h4 className="text-gray-400 text-sm sm:text-base mt-2 leading-relaxed">
                  {edu.institution}
                </h4>

                <p className="mt-3 text-sm sm:text-base text-gray-300">
                  {edu.score}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}