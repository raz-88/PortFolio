import { useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="footer-logo">
        <span>R</span>ajnandan Yadav
      </div>
      <div className="footer-copy">© 2025 Rajnandan Yadav. All Rights Reserved.</div>
      <div className="footer-links">
        <a href="https://github.com/raz-88" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:rajnandan.ydv88@gmail.com">Email</a>
        <a onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Home
        </a>
      </div>
    </footer>
  );
}
