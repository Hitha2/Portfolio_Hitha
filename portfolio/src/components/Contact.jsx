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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900 p-10 rounded-3xl shadow-lg text-center"
        >

          <h3 className="text-2xl font-semibold mb-6 text-blue-500">
            Get In Touch
          </h3>

          <p className="text-gray-400 mb-10 leading-relaxed">
            I'm actively seeking opportunities in Software Development,
            Full-Stack Development, and Web Development. Feel free to
            connect with me for job opportunities, collaborations, or
            professional networking.
          </p>

          {/* Contact Details */}
          <div className="space-y-6 mb-10">

            <div className="flex items-center justify-center gap-4">
              <FaEnvelope className="text-blue-500 text-xl" />
              <span className="text-gray-300">
                kulalhithaishi@gmail.com
              </span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <FaPhone className="text-blue-500 text-xl" />
              <span className="text-gray-300">
                +91 7411606762
              </span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
              <span className="text-gray-300">
                Mangalore, Karnataka, India
              </span>
            </div>

          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 text-3xl mb-10">

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

          {/* Contact Button */}
          {/* <a
            href="mailto:kulalhithaishi@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-medium transition duration-300"
          >
            Send Email
          </a> */}

        </motion.div>

      </div>
    </section>
  );
}