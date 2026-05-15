import { Target, GraduationCap, Building2, MapPin, Globe, Mail, MessageSquare } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="page-inner">
        <span className="section-tag">Who I Am</span>
        <h2 className="section-title">About Me</h2>
        <p className="section-sub">Get to know me better</p>
        <div className="divider"></div>
        <div className="about-grid">
          <div className="about-objective card">
            <h3 style={{ fontFamily: "'Poppins',sans-serif", fontSize: "16px", fontWeight: "600", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Target size={20} color="var(--accent)" /> Objective
            </h3>
            <p style={{ fontSize: "14px", color: "var(--text2)", lineHeight: "1.9", textAlign: "justify" }}>
              <span style={{ display: "inline-block", marginRight: "24px" }}>Seeking opportunities to apply my technical skills in software development while continuously learning and contributing to innovative projects. Passionate about creating efficient, scalable solutions and collaborating with experienced professionals.</span>
              <span style={{ display: "inline-block", marginRight: "24px" }}>I am dedicated to building robust applications that solve real-world problems and deliver value. With a strong foundation in computer science and a keen interest in emerging technologies, I strive to grow as a developer and make a meaningful impact in the tech industry.</span>
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div className="about-info-list">
              <div className="about-info-row">
                <div className="about-info-icon"><GraduationCap size={24} color="#ffffff" strokeWidth={2} /></div>
                <div>
                  <div className="about-info-label">Degree</div>
                  <div className="about-info-val">B.Tech in Computer Science Engineering</div>
                </div>
              </div>
              <div className="about-info-row">
                <div className="about-info-icon"><Building2 size={24} color="#ffffff" strokeWidth={2} /></div>
                <div>
                  <div className="about-info-label">University</div>
                  <div className="about-info-val">GITAM Deemed to be University, Bangalore</div>
                </div>
              </div>
              <div className="about-info-row">
                <div className="about-info-icon"><MapPin size={24} color="#ffffff" strokeWidth={2} /></div>
                <div>
                  <div className="about-info-label">Location</div>
                  <div className="about-info-val">Bangalore, India</div>
                </div>
              </div>
              <div className="about-info-row">
                <div className="about-info-icon"><Globe size={24} color="#ffffff" strokeWidth={2} /></div>
                <div>
                  <div className="about-info-label">Origin</div>
                  <div className="about-info-val">Nepal</div>
                </div>
              </div>
              <div className="about-info-row">
                <div className="about-info-icon"><Mail size={24} color="#ffffff" strokeWidth={2} /></div>
                <div>
                  <div className="about-info-label">Email</div>
                  <div className="about-info-val">rajnandan.ydv88@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card reveal visible" style={{ padding: "28px", marginTop: "40px", marginBottom: "0px", background: "linear-gradient(135deg, var(--white) 0%, #f8fbff 100%)" }}>
          <h3 style={{ fontFamily: "'Poppins',sans-serif", fontSize: "18px", fontWeight: "700", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px", color: "#1C4D8D" }}>
            <MessageSquare size={24} color="#0A66C2" strokeWidth={2} /> Languages
          </h3>
          <div className="lang-grid">
            <span className="lang-pill lang-pill-1">Nepali</span>
            <span className="lang-pill lang-pill-2">English</span>
            <span className="lang-pill lang-pill-3">Hindi</span>
            <span className="lang-pill lang-pill-4">Bhojpuri</span>
            <span className="lang-pill lang-pill-5">Maithili</span>
          </div>
        </div>
      </div>
    </div>
  );
}
