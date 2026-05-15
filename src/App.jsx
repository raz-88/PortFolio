import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import GitHub from "./components/GitHub/GitHub";
import Contact from "./components/Contact/Contact";
import "./styles/global.css";
import "./App.css";

export default function App() {
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const rxRef = useRef(0);
  const ryRef = useRef(0);
  const mxRef = useRef(0);
  const myRef = useRef(0);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mxRef.current = e.clientX;
      myRef.current = e.clientY;
    };

    const animateCursor = () => {
      // Smooth easing for cursor following
      rxRef.current += (mxRef.current - rxRef.current) * 0.1;
      ryRef.current += (myRef.current - ryRef.current) * 0.1;

      // Update cursor dot
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${mxRef.current - 4}px, ${myRef.current - 4}px)`;
      }

      // Update cursor ring with smooth lag
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate(${rxRef.current - 16}px, ${ryRef.current - 16}px) scale(var(--cursor-scale))`;
      }

      animFrameRef.current = requestAnimationFrame(animateCursor);
    };

    // Start cursor animation
    animFrameRef.current = requestAnimationFrame(animateCursor);

    document.addEventListener("mousemove", handleMouseMove);

    const handleHoverStart = () => {
      document.documentElement.style.setProperty("--cursor-scale", "2");
    };

    const handleHoverEnd = () => {
      document.documentElement.style.setProperty("--cursor-scale", "1");
    };

    document.querySelectorAll("a, button, .card, .proj-card, .contact-card-item, .role-badge").forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <Router>
      <div className="grid-bg"></div>
      <div className="grid-glow"></div>
      <div
        ref={cursorDotRef}
        className="cursor-dot"
      ></div>
      <div
        ref={cursorRingRef}
        className="cursor-ring"
      ></div>
      <div className="app-layout">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
