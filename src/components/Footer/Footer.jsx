import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
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
      href: "mailto:tomrud88@example.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#15171E] border-t border-[#3FA7D6]/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              <span className="text-[#F5F5F5]">Tom</span>
              <span className="text-[#3FA7D6]">.</span>
            </motion.div>
            <p className="text-[#B0B0B0] leading-relaxed">
              Full Stack Developer passionate about creating innovative web
              solutions and delivering exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 bg-[#1A1D26] rounded-lg flex items-center justify-center text-[#E0E0E0] hover:text-[#3FA7D6] hover:bg-[#3FA7D6]/10 transition-all duration-300 border border-[#3FA7D6]/10 hover:border-[#3FA7D6]/30"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F5F5F5]">
              Quick Links
            </h3>
            <nav className="flex flex-wrap gap-4">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[#B0B0B0] hover:text-[#3FA7D6] transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F5F5F5]">
              Let's Connect
            </h3>
            <div className="space-y-3 text-[#B0B0B0]">
              <p>Ready to start your next project?</p>
              <motion.a
                href="mailto:tomrud88@example.com"
                whileHover={{ scale: 1.05 }}
                className="inline-block text-[#3FA7D6] hover:text-[#F5F5F5] transition-colors duration-300 font-medium"
              >
                Get in touch →
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#3FA7D6]/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-[#B0B0B0]">
              <span>© {currentYear} Tomasz Rudnicki. Made with</span>
              <Heart size={16} className="text-[#3FA7D6] fill-current" />
              <span>and React</span>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-[#3FA7D6]/10 text-[#3FA7D6] rounded-lg hover:bg-[#3FA7D6]/20 transition-colors duration-300 border border-[#3FA7D6]/20 hover:border-[#3FA7D6]/40"
            >
              Back to top ↑
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
