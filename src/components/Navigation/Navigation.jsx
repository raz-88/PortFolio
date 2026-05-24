import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import "./Navigation.css";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((current) => !current);
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="nav">
      <a className="nav-logo" onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
        <span>R</span>ajnandan Yadav
      </a>
      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`} id="mobile-navigation">
        <a
          onClick={() => handleNavClick("home")}
          style={{ cursor: "pointer" }}
        >
          Home
        </a>
        <a
          onClick={() => handleNavClick("about")}
          style={{ cursor: "pointer" }}
        >
          About
        </a>
        <a
          onClick={() => handleNavClick("skills")}
          style={{ cursor: "pointer" }}
        >
          Skills
        </a>
        <a
          onClick={() => handleNavClick("education")}
          style={{ cursor: "pointer" }}
        >
          Education
        </a>
        <a
          onClick={() => handleNavClick("experience")}
          style={{ cursor: "pointer" }}
        >
          Experience
        </a>
        <a
          onClick={() => handleNavClick("projects")}
          style={{ cursor: "pointer" }}
        >
          Projects
        </a>
        <a
          onClick={() => handleNavClick("github")}
          style={{ cursor: "pointer" }}
        >
          GitHub
        </a>
        <a
          onClick={() => handleNavClick("contact")}
          style={{ cursor: "pointer" }}
        >
          Contact
        </a>
      </div>
      <div className="nav-right">
        <button 
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          className="nav-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <a
          className="nav-resume"
          href="https://rajnandanyadav.com.np/images/Resume_Rajnandan.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume ↓
        </a>
      </div>
    </nav>
  );
}
