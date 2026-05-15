import { useState } from "react";
import { Mail, Phone, MapPin, Code } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="page-inner">
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-sub">I'll respond within 24 hours</p>
        <div className="divider"></div>
        <div className="contact-grid">
          <div>
            <p style={{ fontSize: "16px", color: "var(--text2)", lineHeight: "1.85", marginBottom: "28px" }}>
              I'm always open to discussing new opportunities, projects, and ideas. Feel free to reach out!
            </p>
            <div className="contact-info-list">
              <div className="contact-card-item reveal visible">
                <div className="contact-icon"><Mail size={24} color="var(--accent)" /></div>
                <div>
                  <div className="contact-lbl">Email</div>
                  <div className="contact-val">rajnandan.ydv88@gmail.com</div>
                </div>
              </div>
              <div className="contact-card-item reveal visible">
                <div className="contact-icon"><Phone size={24} color="var(--accent)" /></div>
                <div>
                  <div className="contact-lbl">Phone</div>
                  <div className="contact-val">+91 9122879242</div>
                </div>
              </div>
              <div className="contact-card-item reveal visible">
                <div className="contact-icon"><MapPin size={24} color="var(--accent)" /></div>
                <div>
                  <div className="contact-lbl">Location</div>
                  <div className="contact-val">Bangalore, India</div>
                </div>
              </div>
              <div className="contact-card-item reveal visible" onClick={() => window.open("https://github.com/raz-88", "_blank")} style={{ cursor: "pointer" }}>
                <div className="contact-icon"><Code size={24} color="var(--accent)" /></div>
                <div>
                  <div className="contact-lbl">GitHub</div>
                  <div className="contact-val">github.com/raz-88</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form reveal visible">
            {!submitted ? (
              <div id="form-area">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    className="form-input"
                    id="name"
                    placeholder="Rajnandan Yadav"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    className="form-input"
                    id="email"
                    placeholder="you@email.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-input"
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button className="form-btn" onClick={handleSubmit}>
                  <span>📨</span> Send Message
                </button>
              </div>
            ) : (
              <div className="form-success">
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>✅</div>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: "20px", fontWeight: "700", marginBottom: "6px" }}>
                  Message Sent!
                </div>
                <div style={{ color: "var(--text2)" }}>I'll get back to you within 24 hours.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
