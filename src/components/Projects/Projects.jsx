import { Code2, Trophy, Leaf, CheckSquare, Globe, BookOpen, GitBranch, ExternalLink } from "lucide-react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      icon: <Trophy size={24} strokeWidth={2.5} />,
      title: "Namma Sportika",
      role: "Full-Stack Developer",
      desc: "Sports management and event organization platform for GITAM community with tournament scheduling, team management, and live updates.",
      features: "Tournament management · Team tracking · Event scheduling",
      tags: ["React.js", "Node.js", "Firebase"],
      github: "",
      live: "https://namma-sportika.gitam.edu/",
      featured: true,
    },
    {
      icon: <Leaf size={24} strokeWidth={2.5} />,
      title: "Raj and Dip Ekikrita Krishi Firm",
      role: "Full-Stack Developer",
      desc: "Agricultural business website showcasing farming solutions, products, and services with e-commerce integration.",
      features: "Product catalog · E-commerce · Service booking",
      tags: ["React.js", "Node.js", "Firebase"],
      github: "",
      live: "https://rajanddipekf.com.np",
      featured: false,
    },
    {
      icon: <Code2 size={24} strokeWidth={2.5} />,
      title: "Portfolio Website",
      role: "Full-Stack Developer",
      desc: "Modern, responsive portfolio website showcasing projects with smooth animations, dark mode support, and optimized performance.",
      features: "Responsive design · Dark mode · Smooth animations",
      tags: ["React.js", "Tailwind CSS", "Vite"],
      github: "https://github.com/raz-88/portfolio",
      live: "https://rajnandanyadav.com.np",
      featured: false,
    },
    {
      icon: <Globe size={24} strokeWidth={2.5} />,
      title: "IEEE STB GITAM Bengaluru",
      role: "Full-Stack Developer",
      desc: "Web application for IEEE Student Branch at GITAM Bengaluru with event management, member portal, and announcements.",
      features: "Event management · Member portal · News & updates",
      tags: ["React.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/raz-88/ieee-stb-gitam.git",
      live: "https://ieee-stb-gitam.web.app/",
      featured: false,
    },
    {
      icon: <CheckSquare size={24} strokeWidth={2.5} />,
      title: "Todo App",
      role: "Full-Stack Developer",
      desc: "Collaborative task management application with real-time updates, team collaboration features, and project organization tools.",
      features: "Task management · Real-time sync · Progress tracking",
      tags: ["React.js", "Firebase", "Tailwind CSS"],
      github: "",
      live: "",
      featured: false,
    },
    {
      icon: <Trophy size={24} strokeWidth={2.5} />,
      title: "Tourney Pro",
      role: "Full-Stack Developer",
      desc: "Tournament management platform for organizing and managing sports tournaments with bracket generation, scoring, and live results.",
      features: "Bracket management · Live scoring · Team management",
      tags: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/raz-88/TourneyPro.git",
      live: "https://tourney-pro-f3c97.web.app",
      featured: false,
    },
    {
      icon: <BookOpen size={24} strokeWidth={2.5} />,
      title: "Course Enrollment System",
      role: "Full-Stack Developer",
      desc: "Educational platform for managing course enrollment, registration, and student information with admin dashboard and course management.",
      features: "Course registration · Student management · Admin dashboard",
      tags: ["HTML", "CSS", "Firebase"],
      github: "https://github.com/raz-88/Course_Enrollment_System.git",
      live: "https://learning-engagement-enroll.vercel.app/auth.html",
      featured: false,
    },
  ];

  return (
    <div className="projects-page">
      <div className="page-inner">
        <span className="section-tag">Work</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">My creative work</p>
        <div className="divider"></div>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className={`proj-card proj-card-${idx} ${project.featured ? "featured" : ""}`}>
              <div className="proj-header">
                <div className="proj-icon">{project.icon}</div>
                {project.featured && <span className="proj-featured-badge">Featured</span>}
              </div>
              <div className="proj-title">{project.title}</div>
              <div className="proj-role">{project.role}</div>
              <div className="proj-desc">{project.desc}</div>
              {project.features && <div className="proj-features"><strong>Features:</strong> {project.features}</div>}
              <div className="proj-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="proj-links">
                <a className="proj-link github-btn" href={project.github} target="_blank" rel="noopener noreferrer" title="View on GitHub">
                  <GitBranch size={16} />
                  GitHub
                </a>
                <a className="proj-link live-btn" href={project.live} target="_blank" rel="noopener noreferrer" title="View Live">
                  <ExternalLink size={16} />
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
