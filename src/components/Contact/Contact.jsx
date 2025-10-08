import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Your Name", // Replace with your name
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsSubmitting(false);
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rthomas8827@gmail.com",
      href: "mailto:rthomas8827@gmail.com",
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
    <section id="contact" className="py-20 px-6 bg-[#1A1D26]">
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
              <span className="text-[#F5F5F5]">Get In</span>{" "}
              <span className="text-[#3FA7D6]">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-[#3FA7D6] mx-auto rounded-full mb-6"></div>
            <p className="text-[#B0B0B0] max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations.
              Let's discuss how we can work together!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information - Centered */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-8">
                Let's start a conversation
              </h3>

              <p className="text-[#B0B0B0] leading-relaxed mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I'd love to hear from you. Feel free to reach
                out through the form below or email me directly.
              </p>

              {/* Contact Methods - Horizontal Layout */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="flex items-center space-x-3 px-6 py-4 bg-[#15171E] rounded-lg border border-[#3FA7D6]/10 hover:border-[#3FA7D6]/30 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[#3FA7D6]/10 rounded-lg flex items-center justify-center group-hover:bg-[#3FA7D6]/20 transition-colors">
                      <item.icon className="w-5 h-5 text-[#3FA7D6]" />
                    </div>
                    <div className="text-left">
                      <div className="text-[#F5F5F5] font-medium text-sm">
                        {item.label}
                      </div>
                      <div className="text-[#B0B0B0] text-sm">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form - Centered and Wider */}
            <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
              <div className="bg-[#15171E] rounded-xl p-8 border border-[#3FA7D6]/10">
                <h3 className="text-xl font-semibold text-[#F5F5F5] mb-6 text-center">
                  Send me a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[#F5F5F5] font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#15171E] border border-[#3FA7D6]/20 rounded-lg focus:border-[#3FA7D6] focus:outline-none text-[#E0E0E0] transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[#F5F5F5] font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#15171E] border border-[#3FA7D6]/20 rounded-lg focus:border-[#3FA7D6] focus:outline-none text-[#E0E0E0] transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[#F5F5F5] font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#15171E] border border-[#3FA7D6]/20 rounded-lg focus:border-[#3FA7D6] focus:outline-none text-[#E0E0E0] transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[#F5F5F5] font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-[#15171E] border border-[#3FA7D6]/20 rounded-lg focus:border-[#3FA7D6] focus:outline-none text-[#E0E0E0] transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#3FA7D6] text-[#15171E] px-8 py-4 rounded-lg font-semibold hover:bg-[#3FA7D6]/90 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-[#15171E]/30 border-t-[#15171E] rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-[#3FA7D6] font-medium"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-red-400 font-medium"
                    >
                      Sorry, there was an error sending your message. Please try
                      again or email me directly.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
