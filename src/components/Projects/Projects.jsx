import { Code2, ShoppingCart, BarChart3, CheckSquare, Globe, GitBranch, ExternalLink } from "lucide-react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      icon: <Code2 size={24} strokeWidth={2.5} />,
      title: "SMART BAG",
      role: "Full-Stack Developer",
      desc: "IoT-enabled smart bag with GPS tracking, weight sensors, and mobile app integration for real-time monitoring and theft prevention.",
      features: "Real-time tracking · Theft prevention · Weight monitoring",
      tags: ["IoT", "React Native", "Node.js", "Arduino"],
      github: "https://github.com/raz-88/smart-bag",
      live: "https://smartbag-demo.com",
      featured: true,
    },
    {
      icon: <ShoppingCart size={24} strokeWidth={2.5} />,
      title: "E-Commerce Platform",
      role: "MERN Stack Developer",
      desc: "Full-stack e-commerce website with user authentication, payment integration, and admin dashboard for inventory management.",
      features: "Secure checkout · Admin panel · Payment gateway",
      tags: ["React.js", "Node.js", "MongoDB", "Stripe API"],
      github: "https://github.com/raz-88/ecommerce-platform",
      live: "https://ecommerce-platform-demo.com",
      featured: false,
    },
    {
      icon: <BarChart3 size={24} strokeWidth={2.5} />,
      title: "Social Media Dashboard",
      role: "Frontend Developer",
      desc: "Analytics dashboard for social media metrics tracking with real-time data visualization and performance insights across multiple platforms.",
      features: "Real-time analytics · Multi-platform sync · Custom reports",
      tags: ["React.js", "Chart.js", "API Integration"],
      github: "https://github.com/raz-88/social-dashboard",
      live: "https://social-dashboard-demo.com",
      featured: false,
    },
    {
      icon: <CheckSquare size={24} strokeWidth={2.5} />,
      title: "Task Management App",
      role: "Full-Stack Developer",
      desc: "Collaborative task management application with real-time updates, team collaboration features, and project organization tools.",
      features: "Team collaboration · Real-time updates · Project tracking",
      tags: ["React.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/raz-88/task-manager",
      live: "https://task-manager-demo.com",
      featured: false,
    },
    {
      icon: <Globe size={24} strokeWidth={2.5} />,
      title: "Weather Forecasting App",
      role: "Full-Stack Developer",
      desc: "Real-time weather application with location-based forecasts, weather alerts, and interactive maps with historical weather data.",
      features: "Real-time updates · Location-based · Weather alerts",
      tags: ["React.js", "OpenWeatherAPI", "Leaflet Maps"],
      github: "https://github.com/raz-88/weather-app",
      live: "https://weather-app-demo.com",
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
      live: "https://rajportfolio-demo.com",
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
