import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Award,
  Briefcase,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Code2,
  Rocket,
  Zap
} from "lucide-react";

import {
  DiJava,
  DiLinux
} from "react-icons/di";

import {
  FaDatabase
} from "react-icons/fa";

import {
  SiSpring,
  SiOracle
} from "react-icons/si";
import { VscLayers } from "react-icons/vsc";

const skillIcons: Record<string, React.ElementType> = {
  Java: DiJava,
  "Spring Boot": SiSpring,
  Microservices: VscLayers,
  "PL/SQL": FaDatabase,
  Oracle: SiOracle,
  Linux: DiLinux
};


const gradientStyle = {
  backgroundSize: "400% 400%",
  animation: "gradientBG 20s ease infinite"
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-slate-100 overflow-hidden">
      {/* Animated grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Dark animated gradient mesh background */}
      <div 
        className="fixed inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 211, 238, 0.08) 0%, transparent 50%),
                       radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                       linear-gradient(135deg, #000000 0%, #0a0a0f 50%, #000000 100%)`
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      {/* Subtle floating orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold tracking-wider relative group"
            >
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">&lt;AB /&gt;</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.h1>
            
            <nav className="hidden md:flex gap-8 text-slate-300 text-sm">
              {[
                { name: "About", id: "about" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "projects" },
                { name: "Skills", id: "certifications" },
                { name: "Contact", id: "contact" }
              ].map((item, i) => (
                <motion.a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative hover:text-cyan-400 transition-colors group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Hero Section */}
        <section id="about" className="min-h-[90vh] flex flex-col justify-center items-center text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p 
              className="text-cyan-400 tracking-widest text-sm mb-4 flex items-center justify-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={16} />
              Hi, my name is
            </motion.p>
            
            <motion.h1 
              className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Ayush Banik
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-3xl md:text-4xl text-slate-300 font-semibold"
            >
              Software Developer
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 max-w-2xl text-slate-300 text-lg"
            >
              Building scalable solutions with Java, Spring Boot & Modern Web Technologies
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-10 flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium flex items-center gap-2 shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] transition-all"
            >
              View My Work 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 backdrop-blur-sm transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div 
            className="mt-14 flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="https://github.com/ayushgitacc"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all cursor-pointer group"
            >
              <Github className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ayush-banik-6a4907191/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all cursor-pointer group"
            >
              <Linkedin className="text-slate-400 group-hover:text-blue-400 transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:ayushbanik@gmail.com"
              whileHover={{ y: -4, scale: 1.1 }}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-400/50 hover:bg-red-400/10 transition-all cursor-pointer group"
            >
              <Mail className="text-slate-400 group-hover:text-red-400 transition-colors" />
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1 h-2 bg-cyan-400 rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        <SectionDivider />

        {/* Projects Section */}
        <motion.section
          id="projects"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16"
        >
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-slate-200">Featured</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            <FeaturedProjectCard
              emoji="🤖"
              title="Diabetes Prediction Model"
              description="Machine learning project focused on early diabetes diagnosis using highly unbalanced datasets. Incorporated 13 different ML algorithms for binary classification."
              achievements={[
                "Improved model accuracy by up to 33% using preprocessing, hyperparameter tuning, ensemble techniques, and shared learning strategies",
                "Achieved strong performance on unseen datasets with minimal resources",
                "Published findings at 2022 IEEE 2nd Mysore Sub Section International Conference"
              ]}
              tech={["Python", "Machine Learning", "Scikit-learn", "Data Preprocessing", "Ensemble Methods"]}
            />

            <FeaturedProjectCard
              emoji="✍️"
              title="Learning Management System"
              description="Comprehensive online learning platform with microservices architecture enabling course management, enrollment tracking, and assessment workflows."
              achievements={[
                "Built scalable microservices architecture for modular functionality",
                "Implemented full CRUD operations for admin and instructor roles",
                "Integrated video content management and automated assessment systems"
              ]}
              tech={["Spring Boot", "Microservices", "React", "REST APIs", "MySQL"]}
            />
          </motion.div>
        </motion.section>

        <SectionDivider />

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16"
        >
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="text-4xl font-bold flex items-center gap-3 mb-4">
              <Award className="text-yellow-400" /> Certifications
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
          </motion.div>
          
          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            <CertCard
              title="Java Programming: Solving Problems with Software"
              provider="Coursera"
              date="2023"
              link="https://www.coursera.org/account/accomplishments/verify/GTVDZMCKD64F"
            />
            <CertCard
              title="Java Programming: Arrays, Lists, and Structured Data"
              provider="Coursera"
              date="2023"
              link="https://www.coursera.org/account/accomplishments/verify/UH209OJCCEPK"
            />
          </motion.div>
        </motion.section>

        <SectionDivider />

        {/* Experience Section */}
        <motion.section
          id="experience"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-200px" }}
          className="py-16"
        >
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-white-500">Work</span>{" "}
              <span style={{background: 'linear-gradient(to right, #ff0000, #880080)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',backgroundClip: 'text',color: 'transparent',fontWeight: 'bold' }}>
                Experience
                </span>
            </h2>
            <span style={{display:'flex',height:'4px',width:'96px',background:'linear-gradient(to right, #ff0000, #880080)',borderRadius: '9999px'}} />
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-8">
            <ExperienceBlock
              role="Software Developer"
              org="🏦"
              time="Sept 2024 – Present"
              skills={["Java", "Spring Boot", "Microservices", "PL/SQL", "Oracle", "Linux"]}
              points={[
                "Developed Java Spring Boot microservices for core banking systems",
                "Built custom APIs for IRM and ORM trade modules",
                "Reduced API latency by ~50%",
                "Automated workflows reducing manual effort by ~30%",
                "Improved reporting efficiency by ~40%",
                "Ensured banking compliance and security"
              ]}
            />

            <ExperienceBlock
              role="Graduate Engineer Trainee"
              org="🏦"
              time="July 2023 – Aug 2024"
              skills={["Java", "Spring Boot", "Microservices", "PL/SQL", "Oracle", "Linux"]}
              points={[
                "Worked on core banking Finacle customizations",
                "Developed backend scripts and utilities in Java",
                "Assisted in API integrations with internal banking systems",
                "Supported production issues and root cause analysis",
                "Gained strong exposure to trade finance and banking workflows"
              ]}
            />
          </motion.div>
        </motion.section>

        <SectionDivider />

        {/* Contact Section */}
        <motion.section
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 md:py-28"
        >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          {/* Section Header */}
          <div className="mb-14 md:mb-20 flex items-center gap-4 sm:gap-8">
            <span className="text-xs sm:text-sm tracking-widest text-emerald-400 font-semibold">
              CONTACT
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* LEFT CONTENT */}
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Let’s build
                <br />
                <span className="text-emerald-400">something meaningful</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-400 max-w-xl">
                Whether you have a role, a project, or an idea worth exploring,
                I’m always open to conversations that create impact.
              </p>

              <div className="pt-4 sm:pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                  <Mail className="text-emerald-400 shrink-0" />
                  <span className="break-all">ayushbanik100000@gmail.com</span>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="relative">
              {/* vertical divider only on large screens */}
              <div className="hidden lg:block absolute -left-8 top-0 h-full w-px bg-white/10" />

              <div className="lg:pl-12">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </motion.section>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-10 text-center text-slate-400 backdrop-blur-xl bg-black/90">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Ayush Banik · 🚀 React · 🎨 Tailwind · 🎥 Framer Motion
        </motion.p>
      </footer>

      <style jsx>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:ayushbanik100000@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mt-16 max-w-2xl mx-auto relative"
    >
      {/* External glow */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.95
        }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-1 bg-gradient-to-br from-emerald-400/30 via-green-500/30 to-emerald-400/30 rounded-3xl blur-xl"
      />
      
      <form onSubmit={handleSubmit} className="relative bg-black border border-white/10 hover:border-emerald-400/30 rounded-3xl p-12 transition-all duration-500">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.01 }}
            className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 focus:border-emerald-400/50 focus:bg-black/70 transition-all outline-none placeholder:text-slate-500 text-slate-100"
            placeholder="Your Name"
          />
          <motion.input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.01 }}
            className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 focus:border-emerald-400/50 focus:bg-black/70 transition-all outline-none placeholder:text-slate-500 text-slate-100"
            placeholder="Your Email"
          />
        </div>
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.005 }}
          className="mt-6 w-full bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 focus:border-emerald-400/50 focus:bg-black/70 transition-all outline-none placeholder:text-slate-500 resize-none text-slate-100"
          rows={5}
          placeholder="Your Message"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 text-black py-4 font-bold shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] transition-all"
        >
          <Send size={18} /> Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}

function SectionDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="h-px my-16 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent origin-center"
    />
  );
}

function FeaturedProjectCard({ emoji, title, description, achievements, tech }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={scaleIn}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="group relative"
    >
      {/* External glow - only visible on hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.95
        }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-1 bg-gradient-to-br from-cyan-400/40 via-blue-500/40 to-purple-500/40 rounded-2xl blur-xl"
      />
      
      {/* Card content - no internal background glow */}
      <div 
        className="relative bg-black border border-white/10 group-hover:border-cyan-400/30 rounded-2xl p-8 transition-all duration-500"
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Top accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
        />

        <div className="flex items-center gap-3 mb-5">
          <motion.span
            animate={{ 
              rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.5 }}
            className="text-4xl drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            style={{ transform: "translateZ(40px)" }}
          >
            {emoji}
          </motion.span>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>
        
        <p className="text-slate-300 mb-6 leading-relaxed text-[15px]">{description}</p>

        <div className="space-y-1 mb-6">
          <p className="font-semibold text-slate-100 flex items-center gap-2 mb-3">
            <Zap size={16} className="text-cyan-400" />
            Key Achievements:
          </p>
          <div className="space-y-3">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 group/item"
              >
                <Rocket size={14} className="text-cyan-400 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                <span className="text-slate-300 text-sm leading-relaxed">{a}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 border border-cyan-400/20 hover:border-cyan-400/50 transition-all cursor-default"
              style={{ transform: "translateZ(30px)" }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CertCard({ title, provider, date, link }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.a
      ref={cardRef}
      variants={scaleIn}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group relative block"
    >
      {/* External glow */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.95
        }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-1 bg-gradient-to-br from-yellow-400/40 via-orange-500/40 to-yellow-400/40 rounded-2xl blur-xl"
      />
      
      {/* Card content */}
      <div 
        className="relative bg-black border border-white/10 group-hover:border-yellow-400/30 rounded-2xl p-8 transition-all duration-500"
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Top accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"
        />

        <div className="flex items-start gap-3 mb-5">
          <Award 
            className="text-yellow-400 flex-shrink-0 mt-1 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" 
            size={28}
            style={{ transform: "translateZ(40px)" }}
          />
          <h3 className="text-xl font-bold leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>

        <div className="space-y-3 text-slate-300 mb-6">
          <p className="flex items-center gap-2 text-sm">
            <span className="text-yellow-400">🌐</span>
            <span className="text-yellow-300 font-semibold">{provider}</span>
          </p>
          <p className="text-sm flex items-center gap-2">
            <span className="text-yellow-400">📅</span>
            Completed: <span className="text-slate-200 font-medium">{date}</span>
          </p>
        </div>

        <motion.div
          animate={{ x: isHovered ? 5 : 0 }}
          className="flex items-center gap-2 text-yellow-300 font-semibold text-sm"
          style={{ transform: "translateZ(30px)" }}
        >
          View Certificate <ExternalLink size={16} />
        </motion.div>
      </div>
    </motion.a>
  );
}

function ExperienceBlock({ role, org, time, points, skills }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={scaleIn}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="group relative"
    >
      {/* External glow */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.95
        }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-1 bg-gradient-to-br from-red-500/40 via-red-600/40 to-purple-500/40 rounded-2xl blur-xl"
      />
      
      {/* Card content */}
      <div 
        className="relative bg-black border border-white/10 group-hover:border-red-600/30 rounded-2xl p-8 transition-all duration-500"
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Top accent line */}
        <motion.span
  initial={{ width: 0 }}
  animate={{ width: isHovered ? "100%" : "0%" }}
  style={{
    position: 'absolute',    // absolute
    left: 0,                 // inset-x-0
    right: 0,                // inset-x-0
    top: 0,                  // top-0
    height: '2px',           // h-0.5
    background: 'linear-gradient(to right, #ff0000, #800080)', // from-red-500 to-red-600
    display: 'block'         // ensures it behaves like a line
  }}
/>
        
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4">
            <motion.span
              animate={{ 
                rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
              className="text-4xl "
              style={{ transform: "translateZ(40px)" }}
            >
              🏦
            </motion.span>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-2">
                {role}
              </h3>
              <p className="font-bold text-lg flex items-center gap-2">
                <Briefcase size={18} />
                <h4 style={{color:'red'}}>Axis Bank</h4> 
              </p>
            </div>
          </div>
          <motion.span
            animate={{ 
              rotate: isHovered ? [0, 10, -10, 0] : 0,
              scale: isHovered ? 1.2 : 1
            }}
            transition={{ duration: 0.6 }}
            className="text-red-500 text-2xl font-bold"
            style={{ transform: "translateZ(35px)" }}
          >
            <Code2 />
          </motion.span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '19px' }}>
          {[
            { icon: "📅", label: time },
            { icon: "📌", label: "Mumbai" }
          ].map((item, i, arr) => (
            <React.Fragment key={i}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                <span style={{ color: '#ff0000' }}>{item.icon}</span>
                {item.label}
              </div>
              {/* Only show separator if it's not the last item */}
              {i < arr.length - 1 && (
                <span style={{ color: '#ff0000', fontWeight: 'bold',fontSize:'15px' }}>|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="space-y-3 mb-8">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 group/item"
            >
              <span style={{color:'red'}}>
                <Rocket size={14} className="mt-1.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
              </span>
              <span
                className="text-white-200 leading-relaxed text-sm"
                dangerouslySetInnerHTML={{
                  __html: p.replace(/(\d+%?)/g, '<span style="color:red;font-weight:700;">$1</span>')
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => {
            const Icon = skillIcons[s];
            return (
              <motion.div
                  key={i}

                  animate={{
                    y: [0, -6, 0],   // continuous floating
                  }}

                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.10
                  }}

                  whileHover={{
                    y: -15          // jump on hover
                  }}

                  style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 0.7rem",
                  borderRadius: "0.4rem",
                  cursor: "pointer",
                  position: "relative",
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(13, 12, 33, 0.05)",
                  backgroundImage: "linear-gradient(90deg, #ff0000, #ff0000, #880080)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",
                  backgroundSize: "100% 2px",
                  border: "1px solid rgba(255, 255, 255, 0.15)"
                }}

                >
                {Icon && <Icon size={16}/>}
                <span className="text-sm font-semibold text-slate-200">{s}</span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
}