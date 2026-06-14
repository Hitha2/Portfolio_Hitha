import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "St Joseph Engineering & Technology, Mangalore",
    year: "2024 – 2026",
    score: "CGPA: 8.62",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Dr. P. Dayananda Pai-P. Sathisha Pai Government First Grade College,  Mangalore ",
    year: "2021 – 2024",
    score: "CGPA: 8.87",
  },
  {
    degree: "Pre-University Course (PUC)",
    institution: "Shri Venkataramana Swami PU College Bantwal ",
    year: "2019 – 2021",
    score: "87.33%",
  },
  {
    degree: "SSLC",
    institution: "Sri Sharada High School Panemangalore",
    year: "2016 – 2019",
    score: "87.36%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Education
        </h2>

        <div className="relative border-l-2 border-blue-500 ml-4">

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 ml-8"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px]"></div>

              <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">

                <span className="text-blue-400 text-sm">
                  {edu.year}
                </span>

                <h3 className="text-2xl font-semibold mt-2">
                  {edu.degree}
                </h3>

                <h4 className="text-gray-400 mt-2">
                  {edu.institution}
                </h4>

                <p className="mt-3 text-gray-300">
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