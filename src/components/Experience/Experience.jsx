import { Briefcase, Building2, Clock } from "lucide-react";
import "./Experience.css";

export default function Experience() {
  const experience = [
    {
      year: "2024",
      role: "Full-Stack Developer",
      org: "Personal Projects & Freelance",
      tags: ["React.js", "Node.js", "MongoDB"],
    },
    {
      year: "2024",
      role: "Analyst",
      org: "Google Analytics",
      tags: ["Data Analysis", "Web Analytics"],
    },
    {
      year: "2021–23",
      role: "Sales Representative",
      org: "IME Digital Nepal",
      tags: ["Sales", "Customer Service"],
    },
    {
      year: "2020–21",
      role: "Stock Analyst",
      org: "Financial Market Analysis",
      tags: ["Financial Analysis", "Market Research"],
    },
    {
      year: "Various",
      role: "Volunteer",
      org: "Community Service & Support",
      tags: ["Community", "Support"],
    },
  ];

  return (
    <div className="experience-page">
      <div className="page-inner">
        <span className="section-tag">Journey</span>
        <h2 className="section-title">Training &amp; Experience</h2>
        <p className="section-sub">My professional journey</p>
        <div className="divider"></div>
        <div className="exp-timeline">
          {experience.map((item, idx) => (
            <div key={idx} className={`exp-item exp-item-${idx + 1}`}>
              <div className="exp-year-col">
                <div className="exp-year-text">
                  <Clock size={14} strokeWidth={2.5} style={{ marginRight: "6px", display: "inline" }} />
                  {item.year}
                </div>
                <div className="exp-dot"></div>
              </div>
              <div className="exp-card">
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "10px" }}>
                  <div className="exp-icon">
                    <Briefcase size={20} color="#ffffff" strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="exp-role">{item.role}</div>
                    <div className="exp-org">
                      <Building2 size={13} strokeWidth={2.5} style={{ marginRight: "5px", display: "inline", verticalAlign: "middle" }} />
                      {item.org}
                    </div>
                  </div>
                </div>
                <div className="exp-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className={`tag tag-${i + 1}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
