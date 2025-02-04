import { useState } from "react";
import "./App.css";
import BlurText from "./components/title.jsx";
import RotatingText from "./components/rotate.jsx";
import DecryptedText from "./components/DecryptedText.jsx";
import Shiny from "./components/shiny.jsx";
import Shiny2 from "./components/shiny2.jsx";
import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard.jsx";
import ContactForm from "./components/Email.jsx";
import SocialDock from "./components/socialDock.jsx";

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    "JavaScript",
    "C++",
    "C",
    "Python",
    "Java",
    "TypeScript",
    "Golang",
    "SQL",
    "HTML",
    "CSS",
    "ReactJS",
    "NextJS",
    "Tailwind CSS",
    "Firebase",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "REST APIs",
    "Vercel",
    "Pandas",
    "Numpy",
    "TensorFlow",
    "Git",
    "Postman",
    "VS Code",
    "Figma",
    "Leaflet Maps",
    "Render",
    "Bootstrap",
    "ShadCN",
    "Material",
  ];

  const skills2 = [
    "Computer Networks",
    "Operating Systems",
    "DBMS",
    "DSA",
    "OOPs",
  ];

  const educationData = [
    {
      year: "2019",
      title: "10th Standard",
      institution: "St. Joseph Vaz Vidya Niketan",
    },
    {
      year: "2021",
      title: "12th Standard",
      institution: "Kendriya Vidyalaya",
    },
    {
      year: "2022-26",
      title: "Bachelor of Technology (CSE)",
      institution: "Indian Institute Of Information Technology(IIIT), Kota",
    },
  ];

  return (
    <div className="overflow-x-hidden scroll-smooth">
      <SocialDock />
      {/* Hero Section with Navbar at the Top */}
      <div className="min-h-screen w-screen flex flex-col items-center justify-center gap-4 relative bg-[url(/bg.svg)] bg-cover bg-center">
        {/* Navbar */}
        <nav className="w-full absolute top-0 left-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src="/logo.svg" width={50} alt="Logo" />
            </div>
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6">
              <li>
                <a href="#about" className="text-white hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white hover:text-blue-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#academia" className="text-white hover:text-blue-400">
                  Academia
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
            {/* Hamburger Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-black bg-opacity-75">
              <ul className="flex flex-col items-center space-y-4 py-4">
                <li>
                  <a
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-blue-400"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-blue-400"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-blue-400"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#academia"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-blue-400"
                  >
                    Academia
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-blue-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col gap-0 items-center mt-20 px-4 text-center">
          <div className="font-bold bg-gradient-to-b from-[#404040] to-[#303030] bg-clip-text text-transparent text-4xl md:text-6xl">
            Hello I am
          </div>
          <BlurText
            text="Aman Khare"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-6xl mb-8 font-bold text-white"
          />
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="text-2xl sm:text-3xl text-white mb-2 font-medium">
              Passionate
            </div>
            <RotatingText
              texts={["<Developer/>", "<Designer/>", "<Problem Solver/>"]}
              mainClassName="px-4 py-3 bg-gradient-to-b from-[#f0f0f0] to-[#ffffff] text-2xl sm:text-3xl text-[#111111] overflow-hidden rounded-lg"
              staggerFrom="last"
              rotationInterval={2000}
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12"
      >
        <div className="text-3xl md:text-6xl font-bold bg-gradient-to-b from-[#ffffff] to-[#a1a1a1] bg-clip-text text-transparent text-center">
          About me
        </div>
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-5 mt-10">
          <DecryptedText
            text="👋 Hey there! I'm Aman Khare, a tech enthusiast, problem solver, and full-stack developer with a knack for turning ideas into interactive, user-friendly applications. From building smart web apps with Next.js to diving deep into AI and machine learning, I love pushing the boundaries of what’s possible."
            animateOn="view"
            revealDirection="center"
            speed={100}
            className="text-white text-base md:text-3xl text-center font-mono"
            encryptedClassName="text-white text-base md:text-3xl text-center font-mono"
            maxIterations={10}
          />
          <DecryptedText
            text="When I’m not coding, you’ll probably find me leading tech workshops, designing cool interfaces, or solving complex algorithms just for fun! 🚀 Always up for a challenge and excited to build the next big thing. Let’s connect and create something amazing together!"
            animateOn="view"
            revealDirection="center"
            speed={100}
            className="text-white text-base md:text-3xl text-center font-mono"
            encryptedClassName="text-white text-base md:text-3xl text-center font-mono"
            maxIterations={10}
          />
        </div>
      </div>

      {/* Skills Section */}
      <div
        id="skills"
        className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-bold bg-gradient-to-b from-[#ffffff] to-[#a1a1a1] bg-clip-text text-transparent text-center"
        >
          My Skills
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 p-6 w-full max-w-5xl"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Shiny text={skill} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 p-6 w-full max-w-5xl mt-[-30px]"
        >
          {skills2.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Shiny2 text={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Projects Section */}
      <div
        id="projects"
        className="w-full flex flex-col items-center justify-center py-12 px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-bold bg-gradient-to-b from-[#ffffff] to-[#a1a1a1] bg-clip-text text-transparent text-center mb-10 leading-[1.2] pb-2"
        >
          My Projects
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6 max-w-7xl w-full"
        >
          {[
            {
              title: "Polly",
              image: "/polly.svg",
              techStack: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
              github: "https://github.com/AmanKhare28/Polly_Backend",
              liveDemo: "https://polly-frontend.vercel.app/",
            },
            {
              title: "TripShare",
              image: "/tripshare.svg",
              techStack: ["NextJS", "Firebase", "Leaflet Maps", "Geoapify"],
              github: "https://github.com/AmanKhare28/TripShareCabs",
              liveDemo: "https://trip-share-cabs.vercel.app/",
            },
            {
              title: "Taskly",
              image: "/todo.svg",
              techStack: ["GoLang", "Command Line Interface"],
              github: "https://github.com/AmanKhare28/Taskly",
              liveDemo: "",
            },
            {
              title: "Clima",
              image: "/clima.svg",
              techStack: ["RapidAPI", "HTML", "CSS", "JavaScript"],
              github: "https://github.com/AmanKhare28/Clima",
              liveDemo: "https://amankhare28.github.io/Clima/",
            },
            {
              title: "Portfolio",
              image: "/logo.svg",
              techStack: [
                "ReactJS",
                "ReactBits",
                "TailwindCSS",
                "Framer Motion",
              ],
              github: "",
              liveDemo: "",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Academic Journey Section */}
      <div
        id="academia"
        className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-bold bg-gradient-to-b from-[#ffffff] to-[#a1a1a1] bg-clip-text text-transparent text-center mb-10 leading-[1.2] pb-2"
        >
          Academic Journey
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative border-l-4 border-white w-full max-w-3xl"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="ml-6 mb-8"
            >
              <div className="absolute w-5 h-5 bg-white rounded-full -left-2.5" />
              <div className="bg-[#1c1c1c] border border-[#424242] p-4 sm:p-6 shadow-xl rounded-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5a5a5a]">
                  {item.institution}
                </p>
                <span className="text-sm sm:text-xl text-[#323232] font-bold">
                  {item.year}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Me Section */}
      <div
        id="contact"
        className="min-h-screen w-full flex flex-col items-center justify-center bg-[#1c1c1c] py-12 px-4"
      >
        <h1 className="text-white text-2xl md:text-4xl mb-8">Contact Me</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
