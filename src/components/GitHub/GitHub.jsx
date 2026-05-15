import { useEffect } from "react";
import "./GitHub.css";

export default function GitHub() {
  useEffect(() => {
    buildStreak();
  }, []);

  const buildStreak = () => {
    const grid = document.getElementById("streak-grid");
    if (!grid || grid.children.length > 0) return;
    const colors = ["#eee", "#c5b8ff", "#9d8fff", "#6c63ff"];
    for (let i = 0; i < 364; i++) {
      const c = document.createElement("div");
      c.className = "streak-cell";
      const r = Math.random();
      c.style.background =
        r < 0.4 ? colors[0] : r < 0.65 ? colors[1] : r < 0.85 ? colors[2] : colors[3];
      grid.appendChild(c);
    }
  };

  const repos = [
    {
      name: "Smart-Bag-IoT",
      desc: "IoT enabled smart bag with security features and mobile app integration.",
      lang: "JavaScript",
      stars: 5,
    },
    {
      name: "Ecommerce-Platform",
      desc: "Full-stack e-commerce solution with React and Node.js.",
      lang: "JavaScript",
      stars: 3,
    },
  ];

  const learning = [
    { title: "☁️ Cloud Computing", sub: "AWS Services, Docker, Kubernetes", percent: 60 },
    { title: "📱 Mobile Development", sub: "React Native, Flutter", percent: 45 },
    { title: "🤖 Machine Learning", sub: "Python, TensorFlow, Scikit-learn", percent: 30 },
  ];

  return (
    <div className="github-page">
      <div className="page-inner">
        <span className="section-tag">Open Source</span>
        <h2 className="section-title">GitHub Profile</h2>
        <p className="section-sub">My coding journey and contributions</p>
        <div className="divider"></div>
        <div className="github-stats">
          <div className="gh-stat-card reveal visible">
            <div className="gh-stat-num">2+</div>
            <div className="gh-stat-lbl">Public Repositories</div>
          </div>
          <div className="gh-stat-card reveal visible">
            <div className="gh-stat-num">8</div>
            <div className="gh-stat-lbl">Stars Earned</div>
          </div>
          <div className="gh-stat-card reveal visible">
            <div className="gh-stat-num">Active</div>
            <div className="gh-stat-lbl">Profile Status</div>
          </div>
        </div>
        <div className="streak-wrap reveal visible">
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: "16px", fontWeight: "600", marginBottom: "4px" }}>
            GitHub Contributions
          </div>
          <div style={{ fontSize: "13px", color: "var(--text3)", marginBottom: "8px" }}>
            Activity overview
          </div>
          <div className="streak-grid" id="streak-grid"></div>
          <div className="streak-legend">
            <span>Less</span>
            <div className="streak-legend-cell" style={{ background: "#eee" }}></div>
            <div className="streak-legend-cell" style={{ background: "#c5b8ff" }}></div>
            <div className="streak-legend-cell" style={{ background: "#9d8fff" }}></div>
            <div className="streak-legend-cell" style={{ background: "#6c63ff" }}></div>
            <span>More</span>
          </div>
        </div>
        <div className="gh-repos">
          {repos.map((repo, idx) => (
            <div key={idx} className="gh-repo reveal visible">
              <div className="gh-repo-name">
                <span>📦</span>
                <a href={`https://github.com/raz-88/${repo.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
                <span style={{ fontSize: "11px", background: "var(--accent-light)", color: "var(--accent)", padding: "2px 8px", borderRadius: "10px", fontWeight: "600" }}>
                  Public
                </span>
              </div>
              <div className="gh-repo-desc">{repo.desc}</div>
              <div className="gh-repo-meta">
                <span>
                  <div className="gh-dot" style={{ background: "#f1e05a" }}></div> {repo.lang}
                </span>
                <span>⭐ {repo.stars}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <a
            className="btn btn-outline"
            href="https://github.com/raz-88"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full GitHub Profile →
          </a>
        </div>
        <div className="learn-grid">
          {learning.map((item, idx) => (
            <div key={idx} className="learn-card reveal visible">
              <div className="learn-title">{item.title}</div>
              <div className="learn-sub">{item.sub}</div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${item.percent}%`, background: "linear-gradient(90deg,#6c63ff,#a59dff)" }}></div>
              </div>
              <div style={{ fontSize: "12px", color: "var(--accent)", marginTop: "6px", fontWeight: "600" }}>
                {item.percent}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
