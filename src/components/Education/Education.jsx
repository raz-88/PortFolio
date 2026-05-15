import { GraduationCap, Calendar, Award } from "lucide-react";
import "./Education.css";

export default function Education() {
  const education = [
    {
      year: "2022–26",
      degree: "B.Tech in Computer Science Engineering",
      school: "GITAM Deemed to be University, Bangalore",
      detail: "Data Structures, Algorithms, DBMS, Computer Networks, Software Engineering, Web Technologies",
      badge: "Pursuing",
      type: "pursuing",
      icon: "graduation",
    },
    {
      year: "2021",
      degree: "School Leaving Certificate (SLC)",
      school: "National Examination Board",
      badge: "GPA: 3.46 / 4.00",
      type: "gpa",
      icon: "award",
    },
    {
      year: "2019",
      degree: "Secondary Education Examination",
      school: "National Examination Board",
      badge: "GPA: 2.75 / 4.00",
      type: "gpa",
      icon: "award",
    },
  ];

  return (
    <div className="education-page">
      <div className="page-inner">
        <span className="section-tag">Academic</span>
        <h2 className="section-title">Education</h2>
        <p className="section-sub">My academic journey</p>
        <div className="divider"></div>
        <div className="edu-timeline">
          {education.map((item, idx) => (
            <div key={idx} className={`edu-item edu-item-${idx + 1}`}>
              <div className="edu-year-col">
                <div className="edu-year-badge">
                  <Calendar size={14} strokeWidth={2.5} style={{ marginRight: "6px" }} />
                  {item.year}
                </div>
                <div className="edu-dot" style={{ background: idx === 0 ? "var(--accent)" : "var(--accent-mid)" }}></div>
              </div>
              <div className={`edu-card ${idx === 0 ? "current" : ""}`}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                  <div className="edu-icon">
                    {item.icon === "graduation" ? (
                      <GraduationCap size={20} color="#ffffff" strokeWidth={2} />
                    ) : (
                      <Award size={20} color="#ffffff" strokeWidth={2} />
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="edu-degree">{item.degree}</div>
                    <div className="edu-school">{item.school}</div>
                  </div>
                </div>
                {item.detail && <div className="edu-detail"><strong>Relevant Coursework:</strong> {item.detail}</div>}
                <span className={`edu-badge ${item.type}`}>{item.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
