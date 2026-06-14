import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm <span className="text-blue-500 font-semibold">Hithaishi Kulal</span>,
            an MCA graduate and aspiring Software Engineer with a strong
            interest in Full-Stack Web Development and modern software technologies.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Through internships and academic projects, I have gained
            hands-on experience in React.js, Node.js, Express.js,
            MongoDB, MySQL, JavaScript, and Python. I enjoy building
            responsive web applications, RESTful APIs, and database-driven solutions.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I am passionate about continuous learning, problem-solving,
            and creating technology that delivers real value to users.
            My goal is to grow as a Full-Stack Developer and contribute
            to innovative software products.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-500">2+</h3>
            <p className="text-gray-400 mt-2">Projects</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-500">2</h3>
            <p className="text-gray-400 mt-2">Internships</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-500">10+</h3>
            <p className="text-gray-400 mt-2">Technologies</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-500">8.62</h3>
            <p className="text-gray-400 mt-2">MCA CGPA</p>
          </div>

        </div>

      </div>
    </section>
  );
}