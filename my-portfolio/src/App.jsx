import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Scene from "./components/canvas/Scene";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return; // Don't run observer logic while loading

    // Reveal sections as they enter the viewport using IntersectionObserver
    const opts = { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("in-view");
        } else {
          el.classList.remove("in-view");
        }
      });
    }, opts);

    const sections = document.querySelectorAll("main section");
    sections.forEach((s) => {
      s.classList.add("section-anim");
      observer.observe(s);
    });

    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="app-root">
      <Scene />
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Oussama Boutira — Built with React + Vite
      </footer>
    </div>
  );
}

export default App;
