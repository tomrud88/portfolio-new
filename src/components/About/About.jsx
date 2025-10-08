import { motion } from "framer-motion";
import { Code, Coffee, Lightbulb } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and approaches",
    },
    {
      icon: Coffee,
      title: "Dedication",
      description: "Passionate about delivering quality results",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#F5F5F5]">About</span>{" "}
              <span className="text-[#3FA7D6]">Me</span>
            </h2>
            <div className="w-20 h-1 bg-[#3FA7D6] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4">
                Full Stack Developer with a passion for innovation
              </h3>

              <p className="text-[#E0E0E0] leading-relaxed">
                I'm a dedicated Full Stack Developer with expertise in modern
                web technologies. My journey in programming started with
                curiosity and has evolved into a passion for creating impactful
                digital solutions.
              </p>

              <p className="text-[#E0E0E0] leading-relaxed">
                I specialize in React, Node.js, MongoDB, and various other
                technologies. I believe in writing clean, efficient code and
                staying up-to-date with the latest industry trends and best
                practices.
              </p>

              <p className="text-[#E0E0E0] leading-relaxed">
                When I'm not coding, you can find me exploring new technologies
                or working on personal projects that challenge me to grow as a
                developer.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 border border-[#3FA7D6]/20 rounded-lg">
                  <div className="text-2xl font-bold text-[#3FA7D6]">4+</div>
                  <div className="text-[#B0B0B0]">Years Experience</div>
                </div>
                <div className="text-center p-4 border border-[#3FA7D6]/20 rounded-lg">
                  <div className="text-2xl font-bold text-[#3FA7D6]">15+</div>
                  <div className="text-[#B0B0B0]">Projects Completed</div>
                </div>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h4 className="text-xl font-semibold text-[#F5F5F5] mb-8">
                What drives me
              </h4>

              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-6 bg-[#1A1D26] rounded-lg border border-[#3FA7D6]/10 hover:border-[#3FA7D6]/30 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3FA7D6]/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#3FA7D6]" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-[#F5F5F5] mb-2">
                      {item.title}
                    </h5>
                    <p className="text-[#B0B0B0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
