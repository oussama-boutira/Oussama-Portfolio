import React, { useEffect, useRef } from "react";

export default function BackgroundPattern({ className = "" }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let w = 0;
    let h = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    function resize() {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const particles = [];
    const count = Math.max(60, Math.floor(window.innerWidth / 10));

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          length: 6 + Math.random() * 36,
          speed: 0.2 + Math.random() * 0.9,
          hue: 120 + Math.random() * 60, // greenish
          alpha: 0.06 + Math.random() * 0.5,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      // subtle dark background overlay handled by CSS; here we draw small horizontal bars
      for (let p of particles) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = `hsla(${p.hue}, 80%, 58%, ${p.alpha})`;
        ctx.lineCap = "round";
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.length, p.y);
        ctx.stroke();

        // move downward/diagonally
        p.y += p.speed;
        p.x += Math.sin(p.y * 0.002 + p.speed) * 0.3;
        if (p.y > h + 10) {
          p.y = -10;
          p.x = Math.random() * w;
        }
      }
    }

    function loop() {
      draw();
      rafRef.current = requestAnimationFrame(loop);
    }

    function onResize() {
      resize();
      initParticles();
    }

    resize();
    initParticles();
    loop();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className={`home-bg ${className}`}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}
