import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import "./Navigation.css";

export default function Navigation() {
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="nav">
      <a className="nav-logo" onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
        <span>R</span>ajnandan Yadav
      </a>
      <div className="nav-links">
        <a
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        >
          Home
        </a>
        <a
          onClick={() => scrollToSection("about")}
          style={{ cursor: "pointer" }}
        >
          About
        </a>
        <a
          onClick={() => scrollToSection("skills")}
          style={{ cursor: "pointer" }}
        >
          Skills
        </a>
        <a
          onClick={() => scrollToSection("education")}
          style={{ cursor: "pointer" }}
        >
          Education
        </a>
        <a
          onClick={() => scrollToSection("experience")}
          style={{ cursor: "pointer" }}
        >
          Experience
        </a>
        <a
          onClick={() => scrollToSection("projects")}
          style={{ cursor: "pointer" }}
        >
          Projects
        </a>
        <a
          onClick={() => scrollToSection("github")}
          style={{ cursor: "pointer" }}
        >
          GitHub
        </a>
        <a
          onClick={() => scrollToSection("contact")}
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
