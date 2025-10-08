import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "JavaScript", icon: "🟨" },
        { name: "TypeScript", icon: "🔷" },
        { name: "HTML/CSS", icon: "🎨" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Material UI", icon: "🎨" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "Next.js", icon: "▲" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "MongoDB", icon: "🍃" },
        { name: "JWT", icon: "🔐" },
        { name: "Socket.io", icon: "⚡" },
        { name: "RESTful APIs", icon: "🔗" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "🌿" },
        { name: "Vercel", icon: "🔺" },
        { name: "VS Code", icon: "💙" },
        { name: "npm/yarn", icon: "📦" },
        { name: "Vite", icon: "⚡" },
        { name: "Prisma", icon: "🔷" },
      ],
    },
  ];

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

  return (
    <section id="skills" className="py-20 px-6">
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
              <span className="text-[#F5F5F5]">Skills &</span>{" "}
              <span className="text-[#3FA7D6]">Technologies</span>
            </h2>
            <div className="w-20 h-1 bg-[#3FA7D6] mx-auto rounded-full mb-6"></div>
            <p className="text-[#B0B0B0] max-w-2xl mx-auto">
              Here are the technologies and tools I use to bring ideas to life.
              I'm always learning and expanding my skill set.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-[#1A1D26] rounded-xl p-8 border border-[#3FA7D6]/10 hover:border-[#3FA7D6]/30 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-6 text-center">
                  {category.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      className="flex items-center space-x-3 p-4 bg-[#15171E] rounded-lg hover:bg-[#15171E]/80 transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-[#E0E0E0] font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-[#F5F5F5] mb-8">
              Always Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "GraphQL",
                "Docker",
                "AWS",
                "PostgreSQL",
                "Redis",
                "Testing (Jest)",
                "CI/CD",
                "Microservices",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-[#3FA7D6]/10 text-[#3FA7D6] rounded-full border border-[#3FA7D6]/20 hover:bg-[#3FA7D6]/20 transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
