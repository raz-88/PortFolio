import { useEffect } from "react";
import { Code2, Palette, Database, Wrench } from "lucide-react";
import "./Skills.css";

export default function Skills() {
  useEffect(() => {
    const bars = document.querySelectorAll(".bar-fill");
    bars.forEach((bar, index) => {
      const width = bar.dataset.width || "0%";
      setTimeout(() => {
        bar.style.width = width;
      }, 100 + index * 100);
    });
  }, []);

  return (
    <div className="skills-page">
      <div className="page-inner">
        <span className="section-tag">Expertise</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-sub">My technical expertise</p>
        <div className="divider"></div>
        <div className="skills-cats">
          <div className="skill-cat skill-cat-1">
            <div className="skill-cat-title">
              <Code2 size={20} color="#1C4D8D" strokeWidth={2} /> Programming Languages
            </div>
            <div className="skill-bar-row">
              <div className="skill-bar-label">
                <span>JavaScript</span>
                <span>85%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" data-width="85%"></div>
              </div>
            </div>
            <div className="skill-bar-row">
              <div className="skill-bar-label">
                <span>Python</span>
                <span>80%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" data-width="80%"></div>
              </div>
            </div>
            <div className="skill-bar-row">
              <div className="skill-bar-label">
                <span>Java</span>
                <span>75%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" data-width="75%"></div>
              </div>
            </div>
            <div className="skill-bar-row">
              <div className="skill-bar-label">
                <span>C++</span>
                <span>70%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" data-width="70%"></div>
              </div>
            </div>
          </div>
          <div className="skill-cat skill-cat-2">
            <div className="skill-cat-title">
              <Palette size={20} color="#1C4D8D" strokeWidth={2} /> Frontend Development
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">HTML5</span>
              <span className="tech-tag">CSS3</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Bootstrap</span>
            </div>
          </div>
          <div className="skill-cat skill-cat-3">
            <div className="skill-cat-title">
              <Code2 size={20} color="#1C4D8D" strokeWidth={2} /> Backend Development
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">REST APIs</span>
              <span className="tech-tag">MongoDB</span>
            </div>
          </div>
          <div className="skill-cat skill-cat-4">
            <div className="skill-cat-title">
              <Database size={20} color="#1C4D8D" strokeWidth={2} /> Database
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">Firebase</span>
              <span className="tech-tag">Database Design</span>
            </div>
          </div>
        </div>
        <div className="card reveal visible skill-tools" style={{ padding: "28px" }}>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: "16px", fontWeight: "600", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <Wrench size={20} color="#1C4D8D" strokeWidth={2} /> Tools &amp; Technologies
          </div>
          <div className="tech-tags">
            <span className="tech-tag">Git</span>
            <span className="tech-tag">GitHub</span>
            <span className="tech-tag">VS Code</span>
            <span className="tech-tag">Postman</span>
            <span className="tech-tag">Linux</span>
          </div>
        </div>
      </div>
    </div>
  );
}
