import { useEffect, useState } from "react";
import { Code, TrendingUp, Lightbulb, Mail, Share2, FolderOpen, Download } from "lucide-react";
import rajPhoto from "../../assets/Raj_photo.jpg";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import GitHub from "../GitHub/GitHub";
import Contact from "../Contact/Contact";

export default function Home() {
  const [typed, setTyped] = useState("");
  const roles = ["Developer", "Full-Stack Dev", "Problem Solver", "IoT Enthusiast"];
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Magnetic buttons effect
  useEffect(() => {
    const buttons = document.querySelectorAll('.magnetic-btn');
    buttons.forEach(button => {
      button.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        this.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'translate3d(0, 0, 0)';
      });
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIdx < roles[roleIdx].length) {
          setTyped(roles[roleIdx].slice(0, charIdx + 1));
          setCharIdx(charIdx + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIdx > 0) {
          setTyped(roles[roleIdx].slice(0, charIdx - 1));
          setCharIdx(charIdx - 1);
        } else {
          setIsDeleting(false);
          setRoleIdx((roleIdx + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 90);
    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, roleIdx]);

  return (
    <div style={{ background: 'var(--bg)' }} className="min-h-screen pt-20 relative overflow-hidden transition-colors duration-300">
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(74, 143, 214, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 143, 214, 0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        ></div>
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(74, 143, 214, 0.08) 0%, transparent 70%)',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 49%, 100% { opacity: 1; }
          50%, 99% { opacity: 0; }
        }
        @keyframes smoothCursor {
          0% { transform: translate(0, 0); }
          100% { transform: translate(var(--cursor-x, 0px), var(--cursor-y, 0px)); }
        }
        .floating-card-1 { animation: float 6s ease-in-out infinite; }
        .floating-card-2 { animation: float 6s ease-in-out infinite 2s; }
        .floating-card-3 { animation: float 6s ease-in-out infinite 4s; }
        .avatar-ring { animation: rotate 20s linear infinite; }
        .cursor-blink { animation: blink 1s infinite; }
      `}</style>

      <div id="home" className="relative max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
        
        {/* Left Content */}
        <div className="space-y-6">
          {/* Greeting */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-0.5 bg-[#1C4D8D] rounded"></div>
            <span className="text-sm font-medium text-gray-600">Hello, I'm</span>
          </div>

          {/* Name */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Rajnandan
              <br />
              <span className="text-[#1C4D8D]">Yadav</span>
            </h1>
          </div>

          {/* Role with typing effect */}
          <div className="text-xl md:text-2xl font-semibold text-gray-700">
            I'm a{" "}
            <span className="text-[#1C4D8D]">{typed}</span>
            <span className="cursor-blink inline-block w-0.5 h-7 bg-[#1C4D8D] ml-1 align-middle"></span>
          </div>

          {/* Bio */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md">
            I am a B.Tech Computer Science Engineering student passionate about software development, problem solving, and learning new technologies. I enjoy building projects that make everyday tasks easier and aim to grow as a full-stack developer.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 pt-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="magnetic-btn flex-1 sm:flex-none px-6 sm:px-8 py-2.5 bg-gradient-to-br from-[#0A66C2] via-[#1C4D8D] to-[#062E50] text-white font-semibold text-sm rounded-full hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] sm:min-h-auto whitespace-nowrap border border-blue-400/30 backdrop-blur-sm"
            >
              <Mail size={20} strokeWidth={2} /> Contact Me
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="magnetic-btn flex-1 sm:flex-none px-6 sm:px-8 py-2.5 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 text-white font-semibold text-sm rounded-full hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] sm:min-h-auto whitespace-nowrap border border-purple-400/30 backdrop-blur-sm"
            >
              <FolderOpen size={20} strokeWidth={2} /> View Projects
            </button>
            <a
              href="https://rajnandanyadav.com.np/images/Resume_Rajnandan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn flex-1 sm:flex-none px-6 sm:px-8 py-2.5 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 text-white font-semibold text-sm rounded-full hover:shadow-2xl hover:shadow-green-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] sm:min-h-auto whitespace-nowrap border border-emerald-400/30 backdrop-blur-sm"
            >
              <Download size={20} strokeWidth={2} /> Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rajnandan-yadav"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-50 border-2 border-[#0A66C2] flex items-center justify-center text-[#0A66C2] hover:from-[#0A66C2] hover:to-[#0854a6] hover:text-white hover:shadow-lg hover:shadow-[#0A66C2]/30 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/raz-88"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-50 border-2 border-[#171515] flex items-center justify-center text-[#171515] hover:from-[#171515] hover:to-[#0d0d0d] hover:text-white hover:shadow-lg hover:shadow-[#171515]/30 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/rajnandan_88"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-50 border-2 border-[#1DA1F2] flex items-center justify-center text-[#1DA1F2] hover:from-[#1DA1F2] hover:to-[#1a8cd8] hover:text-white hover:shadow-lg hover:shadow-[#1DA1F2]/30 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.694l-5.245-6.856-6.01 6.856h-3.308l7.73-8.835L2.42 2.25h6.852l4.755 6.236 5.477-6.236zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/14NkvvX7uip/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-50 border-2 border-[#1877F2] flex items-center justify-center text-[#1877F2] hover:from-[#1877F2] hover:to-[#1167d8] hover:text-white hover:shadow-lg hover:shadow-[#1877F2]/30 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:rajnandan4@gmail.com"
              title="Email"
              className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-50 border-2 border-[#EA4335] flex items-center justify-center text-[#EA4335] hover:from-[#EA4335] hover:to-[#d63321] hover:text-white hover:shadow-lg hover:shadow-[#EA4335]/30 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Stats - Hidden on mobile */}
          <div className="hidden md:flex gap-8 pt-8">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#1C4D8D]">3+</div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">Years Learning</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#1C4D8D]">2</div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">Live Projects</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#1C4D8D]">5+</div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">Tech Stacks</div>
            </div>
          </div>
        </div>

        {/* Right Side - Avatar & Cards */}
        <div className="relative flex justify-center items-center h-96 md:h-full">
          
          {/* Floating Card 1 - Developer (Top Left) */}
          <div className="floating-card-1 absolute bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow z-5" style={{ top: '20%', left: '10%' }}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-[#1C4D8D]" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Developer</span>
            </div>
          </div>

          {/* Floating Card 2 - Analyst (Top Right) */}
          <div className="floating-card-2 absolute bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow z-5" style={{ top: '20%', right: '10%' }}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#1C4D8D]" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Analyst</span>
            </div>
          </div>

          {/* Floating Card 3 - Innovator (Bottom Right) */}
          <div className="floating-card-3 absolute bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow z-5" style={{ bottom: '20%', right: '10%' }}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-[#1C4D8D]" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Innovator</span>
            </div>
          </div>

          {/* Avatar Container */}
          <div className="relative w-80 h-80 flex items-center justify-center z-10">
            {/* Rotating Ring with Moving Dot */}
            <div className="avatar-ring absolute inset-0 border-4 border-[#1C4D8D] rounded-full"></div>
            
            {/* Moving Dot on Ring */}
            <style>{`
              .avatar-ring::before {
                content: '';
                position: absolute;
                top: -8px;
                left: 50%;
                transform: translateX(-50%);
                width: 14px;
                height: 14px;
                background: #1C4D8D;
                border-radius: 50%;
                box-shadow: 0 0 15px rgba(28, 77, 141, 0.8);
              }
            `}</style>

            {/* Profile Image */}
            <div className="absolute inset-3 rounded-full overflow-hidden bg-gradient-to-br from-[#1C4D8D] to-[#629FAD] shadow-2xl z-20">
              <img
                src={rajPhoto}
                alt="Rajnandan Yadav"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 20%" }}
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <style>{`
          @keyframes scroll {
            0% { opacity: 1; transform: translateY(-8px); }
            100% { opacity: 0; transform: translateY(2px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          .scroll-indicator {
            position: absolute;
            bottom: 110px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            pointer-events: none;
            background: transparent;
          }
          .mouse {
            width: 24px;
            height: 40px;
            border: 2px solid rgba(74, 143, 214, 0.4);
            border-radius: 12px;
            display: flex;
            justify-content: center;
            padding-top: 8px;
            background: transparent;
          }
          .wheel {
            width: 3px;
            height: 8px;
            background: rgba(74, 143, 214, 0.4);
            border-radius: 2px;
            animation: scroll 2s infinite;
          }
          .scroll-text {
            font-size: 14px;
            font-weight: 500;
            color: rgba(74, 143, 214, 0.4);
            letter-spacing: 0.5px;
            animation: pulse 2s infinite;
            background: transparent;
          }
        `}</style>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p className="scroll-text">Scroll Down</p>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-0">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-0">
        <Skills />
      </section>

      {/* Education Section */}
      <section id="education" className="py-0">
        <Education />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-0">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-0">
        <Projects />
      </section>

      {/* GitHub Section */}
      <section id="github" className="py-0">
        <GitHub />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-0">
        <Contact />
      </section>
      </div>
    </div>
  );
}
