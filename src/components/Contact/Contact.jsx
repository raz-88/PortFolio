import { useState, useEffect } from "react";
import { ArrowUpRight, Clock3, Code, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill Name, Email and Message.");
      return;
    }

    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_4igtco8";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ky3utwb";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "cOleDM4F6G6YXsbBS";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
      timestamp: new Date().toLocaleString(),
    };

    // Send email via EmailJS (client-side). Replace VITE_ vars in your .env.
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setIsSending(false);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('Email send error', err);
        setIsSending(false);
        alert('Unable to send message right now. Please try again later.');
      });
  };

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const idx = els.indexOf(el) >= 0 ? els.indexOf(el) : 0;
          const delayMs = idx * 110; // stagger
          setTimeout(() => el.classList.add('visible'), delayMs);
          observer.unobserve(el);
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-orb contact-orb-a" />
      <div className="contact-orb contact-orb-b" />
      <div className="page-inner">
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-sub">I usually reply within 24 hours and I’m open to projects, internships, and collaborations.</p>
        <div className="divider"></div>
        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-intro card reveal">
              <div className="contact-intro-kicker">
                <Sparkles size={14} />
                Let’s build something useful
              </div>
              <p>
                I’m always open to discussing new opportunities, project ideas, freelance work, and collaborations.
                If you have a product vision or a technical challenge, send a message and I’ll respond quickly.
              </p>

              <div className="contact-response-row">
                <span>
                  <Clock3 size={14} />
                  Reply within 24 hours
                </span>
                <span>
                  <ArrowUpRight size={14} />
                  Available for new work
                </span>
              </div>
            </div>

            <div className="contact-info-list">
              <a className="contact-card-item reveal contact-card-1" href="mailto:rajnandan.ydv88@gmail.com">
                <div className="contact-icon"><Mail size={22} color="var(--accent)" /></div>
                <div className="contact-copy">
                  <div className="contact-lbl">Email</div>
                  <div className="contact-val">contact@rajnandanyadav.com.np</div>
                </div>
                <ArrowUpRight size={16} className="contact-card-arrow" />
              </a>

              <a className="contact-card-item reveal contact-card-2" href="tel:+919122879242">
                <div className="contact-icon"><Phone size={22} color="var(--accent)" /></div>
                <div className="contact-copy">
                  <div className="contact-lbl">Phone</div>
                  <div className="contact-val">+91 9122879242</div>
                </div>
                <ArrowUpRight size={16} className="contact-card-arrow" />
              </a>

              <div className="contact-card-item reveal contact-card-3">
                <div className="contact-icon"><MapPin size={22} color="var(--accent)" /></div>
                <div className="contact-copy">
                  <div className="contact-lbl">Location</div>
                  <div className="contact-val">Bangalore, India</div>
                </div>
              </div>

              <a className="contact-card-item reveal contact-card-4" href="https://github.com/raz-88" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon"><Code size={22} color="var(--accent)" /></div>
                <div className="contact-copy">
                  <div className="contact-lbl">GitHub</div>
                  <div className="contact-val">github.com/raz-88</div>
                </div>
                <ArrowUpRight size={16} className="contact-card-arrow" />
              </a>

              <a className="contact-card-item reveal contact-card-5" href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </div>
                <div className="contact-copy">
                  <div className="contact-lbl">LinkedIn</div>
                  <div className="contact-val">linkedin.com/in/rajnandan-yadav</div>
                </div>
                <ArrowUpRight size={16} className="contact-card-arrow" />
              </a>
            </div>
          </div>

          <div className="contact-form card reveal">
            {!submitted ? (
              <div id="form-area" className={isSending ? "contact-form-loading" : ""}>
                <div className="contact-form-head">
                  <p className="contact-form-kicker">Quick message</p>
                  <h3>Start the conversation</h3>
                  <p>Tell me about the role, project, or idea you want to explore.</p>
                </div>

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
                  <label className="form-label">Phone (with country code)</label>
                  <input
                    className="form-input"
                    id="phone"
                    placeholder="+91 9122879242"
                    type="tel"
                    value={formData.phone}
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
                  {isSending ? <span className="form-btn-spinner" /> : <Send size={16} />}
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </div>
            ) : (
              <div className="form-success">
                <div className="success-orb" />
                <div className="success-icon">✓</div>
                <div className="success-title">Message Sent</div>
                <div className="success-text">I’ll get back to you within 24 hours.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
