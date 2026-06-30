import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900 p-5 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-lg text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-5 text-blue-500">
            Get In Touch
          </h3>

          <p className="text-sm sm:text-base text-gray-400 mb-8 md:mb-10 leading-relaxed">
            I'm actively seeking opportunities in Software Development,
            Full-Stack Development, and Web Development. Feel free to
            connect with me for job opportunities, collaborations, or
            professional networking.
          </p>

          {/* Contact Details */}
          <div className="space-y-5 mb-8 md:mb-10">

            <div className="flex items-center justify-center gap-3">
              <FaEnvelope className="text-blue-500 text-lg sm:text-xl flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-300 break-all">
                kulalhithaishi@gmail.com
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <FaPhone className="text-blue-500 text-lg sm:text-xl flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-300">
                +91 7411606762
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-blue-500 text-lg sm:text-xl flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-300 text-center">
                Mangalore, Karnataka, India
              </span>
            </div>

          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 sm:gap-8 text-2xl sm:text-3xl">

            <a
              href="https://github.com/Hitha2"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/hithaishi-kulal"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}