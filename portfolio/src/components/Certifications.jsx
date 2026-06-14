import { motion } from "framer-motion";
import { FaCertificate, FaAward } from "react-icons/fa";

const certifications = [
  {
    title: "Research Methodology and IPR",
    provider: "NPTEL",
    icon: <FaCertificate />,
  },
  {
    title: "Privacy and Security in Online Social Media",
    provider: "NPTEL",
    icon: <FaCertificate />,
  },
  {
    title: "Web Development Certification",
    provider: "Kakunje Software Pvt. Ltd.",
    icon: <FaCertificate />,
  },
];

const achievements = [
  "Completed MCA with CGPA 8.62",
  "Completed BCA with CGPA 8.87",
  "Successfully completed Web Development Internship",
  "Successfully completed Python Programming Internship",
  "Developed AI-Based Pneumonia Detection System",
  "Built Full-Stack MERN E-Commerce Website",
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Certifications & Achievements
        </h2>

        {/* Certifications */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-slate-900 p-6 rounded-2xl text-center shadow-lg"
            >
              <div className="text-4xl text-blue-500 mb-4 flex justify-center">
                {cert.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {cert.title}
              </h3>

              <p className="text-gray-400">
                {cert.provider}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Achievements */}
        <div className="bg-slate-900 rounded-3xl p-8">

          <h3 className="text-3xl font-bold text-center mb-8 text-blue-500">
            Achievements
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {achievements.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl"
              >
                <FaAward className="text-blue-500 text-xl" />

                <span className="text-gray-300">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}