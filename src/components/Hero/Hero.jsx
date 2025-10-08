import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleScroll = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-[#3FA7D6] text-lg md:text-xl mb-4 font-medium"
        >
          Hi there! I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-[#F5F5F5]">Tomasz</span>
          <br />
          <span className="text-[#3FA7D6]">Rudnicki</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-[#B0B0B0] mb-8 font-light"
        >
          Full Stack Developer & Tech Enthusiast
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-[#E0E0E0] max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
        >
          I craft innovative web solutions using modern technologies like React,
          Node.js, and more. Passionate about creating user-friendly
          applications that solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#3FA7D6] text-[#15171E] px-8 py-3 rounded-lg font-semibold hover:bg-[#3FA7D6]/90 transition-colors duration-300"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border-2 border-[#3FA7D6] text-[#3FA7D6] px-8 py-3 rounded-lg font-semibold hover:bg-[#3FA7D6] hover:text-[#15171E] transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/tomrud88",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/tomrud88",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:your.email@example.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-[#E0E0E0] hover:text-[#3FA7D6] transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={handleScroll}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#3FA7D6] hover:text-[#F5F5F5] transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
