const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[#1A1D26]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#F5F5F5]">Featured</span>{" "}
            <span className="text-[#3FA7D6]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#3FA7D6] mx-auto rounded-full mb-6"></div>
          <p className="text-[#B0B0B0] max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {/* Project 1 - Travel Guide */}
          <div className="bg-[#15171E] rounded-xl border border-[#3FA7D6]/10 hover:border-[#3FA7D6]/30 transition-all duration-300 overflow-hidden">
            {/* Project Image */}
            <div className="aspect-video bg-gradient-to-br from-[#3FA7D6]/20 to-[#15171E] flex items-center justify-center relative overflow-hidden">
              <img
                src="/travel-guide.webp"
                alt="Travel Guide App"
                className="w-full h-full object-cover absolute inset-0"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="text-[#3FA7D6] text-6xl opacity-50 hidden">
                ✈️
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#F5F5F5] mb-4">
                Travel Guide App
              </h3>
              <p className="text-[#B0B0B0] leading-relaxed mb-6">
                AI-powered travel guide application with destination search,
                budget planning, and personalized recommendations using modern
                web technologies.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "React",
                  "TypeScript",
                  "Vite",
                  "Tailwind CSS",
                  "Vercel KV",
                  "AI Integration",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-[#3FA7D6]/10 text-[#3FA7D6] rounded-full border border-[#3FA7D6]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex space-x-4">
                <a
                  href="https://travel-guide-drab.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3FA7D6] text-[#15171E] px-4 py-2 rounded-lg hover:bg-[#3FA7D6]/90 transition-colors duration-300 font-medium"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/tomrud88/ai-travel-itinerary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#3FA7D6] text-[#3FA7D6] px-4 py-2 rounded-lg hover:bg-[#3FA7D6] hover:text-[#15171E] transition-all duration-300 font-medium"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 - Silicon Shelf */}
          <div className="bg-[#15171E] rounded-xl border border-[#3FA7D6]/10 hover:border-[#3FA7D6]/30 transition-all duration-300 overflow-hidden">
            {/* Project Image */}
            <div className="aspect-video bg-gradient-to-br from-[#3FA7D6]/20 to-[#15171E] flex items-center justify-center relative overflow-hidden">
              <img
                src="/Silicon-Shelf.webp"
                alt="Silicon Shelf E-commerce"
                className="w-full h-full object-cover absolute inset-0"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="text-[#3FA7D6] text-6xl opacity-50 hidden">
                🛒
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#F5F5F5] mb-4">
                Silicon Shelf - E-commerce Store
              </h3>
              <p className="text-[#B0B0B0] leading-relaxed mb-6">
                Full-stack e-commerce platform for computer hardware with user
                authentication, shopping cart, order management, and admin
                dashboard built with Next.js and Prisma.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Prisma",
                  "PostgreSQL",
                  "NextAuth",
                  "Tailwind CSS",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-[#3FA7D6]/10 text-[#3FA7D6] rounded-full border border-[#3FA7D6]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex space-x-4">
                <a
                  href="https://silicon-shelf.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3FA7D6] text-[#15171E] px-4 py-2 rounded-lg hover:bg-[#3FA7D6]/90 transition-colors duration-300 font-medium"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/tomrud88/silicon-shelf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#3FA7D6] text-[#3FA7D6] px-4 py-2 rounded-lg hover:bg-[#3FA7D6] hover:text-[#15171E] transition-all duration-300 font-medium"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 - Mommy Blog */}
          <div className="bg-[#15171E] rounded-xl border border-[#3FA7D6]/10 hover:border-[#3FA7D6]/30 transition-all duration-300 overflow-hidden">
            {/* Project Image */}
            <div className="aspect-video bg-gradient-to-br from-[#3FA7D6]/20 to-[#15171E] flex items-center justify-center relative overflow-hidden">
              <img
                src="/Blog-Mama.webp"
                alt="Mommy Blog"
                className="w-full h-full object-cover absolute inset-0"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="text-[#3FA7D6] text-6xl opacity-50 hidden">
                🏠
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#F5F5F5] mb-4">
                Mommy Blog
              </h3>
              <p className="text-[#B0B0B0] leading-relaxed mb-6">
                Family blog platform with user authentication, post management,
                rich text editing with React Quill, and MongoDB database
                storage.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Next.js",
                  "React",
                  "MongoDB",
                  "React Quill",
                  "Authentication",
                  "CSS",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-[#3FA7D6]/10 text-[#3FA7D6] rounded-full border border-[#3FA7D6]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex space-x-4">
                <a
                  href="https://mommy-blog.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3FA7D6] text-[#15171E] px-4 py-2 rounded-lg hover:bg-[#3FA7D6]/90 transition-colors duration-300 font-medium"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/tomrud88/mommy-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#3FA7D6] text-[#3FA7D6] px-4 py-2 rounded-lg hover:bg-[#3FA7D6] hover:text-[#15171E] transition-all duration-300 font-medium"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 - Real Estate */}
          <div className="bg-[#15171E] rounded-xl border border-[#3FA7D6]/10 hover:border-[#3FA7D6]/30 transition-all duration-300 overflow-hidden">
            {/* Project Image */}
            <div className="aspect-video bg-gradient-to-br from-[#3FA7D6]/20 to-[#15171E] flex items-center justify-center relative overflow-hidden">
              <img
                src="/real-estate.png"
                alt="Real Estate Platform"
                className="w-full h-full object-cover absolute inset-0"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="text-[#3FA7D6] text-6xl opacity-50 hidden">
                🏠
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#F5F5F5] mb-4">
                Real Estate Platform
              </h3>
              <p className="text-[#B0B0B0] leading-relaxed mb-6">
                Modern real estate platform with React, Node.js, MongoDB, and
                Socket.io for real-time chat functionality.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Node.js", "MongoDB", "Socket.io", "JWT"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-[#3FA7D6]/10 text-[#3FA7D6] rounded-full border border-[#3FA7D6]/20"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              {/* Project Links */}
              <div className="flex space-x-4">
                <a
                  href="https://real-estate-peach-one.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3FA7D6] text-[#15171E] px-4 py-2 rounded-lg hover:bg-[#3FA7D6]/90 transition-colors duration-300 font-medium"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/tomrud88/real-estate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#3FA7D6] text-[#3FA7D6] px-4 py-2 rounded-lg hover:bg-[#3FA7D6] hover:text-[#15171E] transition-all duration-300 font-medium"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 - Inter Milan */}
          <div className="bg-[#15171E] rounded-xl border border-[#3FA7D6]/10 hover:border-[#3FA7D6]/30 transition-all duration-300 overflow-hidden">
            {/* Project Image */}
            <div className="aspect-video bg-gradient-to-br from-[#3FA7D6]/20 to-[#15171E] flex items-center justify-center relative overflow-hidden">
              <img
                src="/inter-milan.png"
                alt="Inter Milan Website"
                className="w-full h-full object-cover absolute inset-0"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="text-[#3FA7D6] text-6xl opacity-50 hidden">
                ⚽
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#F5F5F5] mb-4">
                Inter Milan Website
              </h3>
              <p className="text-[#B0B0B0] leading-relaxed mb-6">
                Interactive football club website with modern design, player
                profiles, match schedules, and responsive layout.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "React",
                  "Firebase",
                  "Material-UI",
                  "HTML",
                  "CSS",
                  "JavaScript",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-[#3FA7D6]/10 text-[#3FA7D6] rounded-full border border-[#3FA7D6]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex space-x-4">
                <a
                  href="https://inter-website.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3FA7D6] text-[#15171E] px-4 py-2 rounded-lg hover:bg-[#3FA7D6]/90 transition-colors duration-300 font-medium"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/tomrud88/inter-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#3FA7D6] text-[#3FA7D6] px-4 py-2 rounded-lg hover:bg-[#3FA7D6] hover:text-[#15171E] transition-all duration-300 font-medium"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
