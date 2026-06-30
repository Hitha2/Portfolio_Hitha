import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold text-xl text-white">
          Hithaishi
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>
          <a href="#education" className="hover:text-cyan-400">
            Education
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-6 py-4 flex flex-col space-y-4 text-white">
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#education" onClick={() => setIsOpen(false)}>
            Education
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}