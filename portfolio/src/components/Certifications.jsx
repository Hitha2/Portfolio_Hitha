import { motion } from "framer-motion";
import { FaCertificate, FaAward } from "react-icons/fa";
import nptel1 from "../assets/certificates/nptel1.png";
import nptel2 from "../assets/certificates/nptel2.png";
import webdev from "../assets/certificates/webdev.png";
const certifications = [
  {
    title: "Research Methodology and IPR",
    provider: "NPTEL",
    image: nptel1,
  },
  {
    title: "Privacy and Security in Online Social Media",
    provider: "NPTEL",
    image: nptel2,
  },
  {
    title: "Web Development Certification",
    provider: "Kakunje Software Pvt. Ltd.",
    image: webdev,
  },
];

// const achievements = [
//   "Completed MCA with CGPA 8.62",
//   "Completed BCA with CGPA 8.87",
//   "Successfully completed Web Development Internship",
//   "Successfully completed Python Programming Internship",
//   "Developed AI-Based Pneumonia Detection System",
//   "Built Full-Stack MERN E-Commerce Website",
// ];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14">
          Certifications
        </h2>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mb-12 md:mb-16">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-slate-900 p-5 sm:p-6 rounded-2xl text-center shadow-lg"
            >
             <a href={cert.image} target="_blank" rel="noreferrer">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-xl mb-4 hover:scale-105 transition"
              />
            </a>

              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {cert.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-400">
                {cert.provider}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Achievements */}
        {/* <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-5 sm:p-8">

          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 text-blue-500">
            Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

            {achievements.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 bg-slate-800 p-4 rounded-xl"
              >
                <FaAward className="text-blue-500 text-lg sm:text-xl mt-1" />

                <span className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div> */}

      </div>
    </section>
  );
}