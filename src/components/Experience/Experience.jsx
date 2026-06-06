import { Briefcase, Building2, Clock } from "lucide-react";
import "./Experience.css";

export default function Experience() {
  const experience = [
    
    {
      year: "2026–Present",
      role: "Webmaster",
      org: "IEEE STB GITAM Bengaluru",
      tags: ["Web Development", "Content Management", "Digital"],
    },
    {
      year: "March 2026",
      role: "Technology Head",
      org: "Namma Sportika",
      tags: ["Leadership", "Project Management", "Technology"],
    },
    
    {
      year: "2026",
      role: "Organizing Committee Member",
      org: "ICTIEE International Conference",
      tags: ["Event Management", "Conference", "Organization"],
    },
    {
      year: "2025–2026",
      role: "GSC (Operation, Design, and Media)",
      org: "GITAM Sports",
      tags: ["Sports Management", "Event Organization", "Coordination"],
    },  
    {
      year: "2024–2026",
      role: "Volunteer",
      org: "NSS (National Service Scheme)",
      tags: ["Community Service", "Volunteering", "Social Impact"],
    },
  ];

  return (
    <div className="experience-page">
      <div className="page-inner">
        <span className="section-tag">Leadership</span>
        <h2 className="section-title">Leadership &amp; Roles</h2>
        <p className="section-sub">My organizational contributions</p>
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
