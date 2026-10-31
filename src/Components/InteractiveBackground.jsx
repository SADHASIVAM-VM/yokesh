import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  // Mouse position for the ambient spotlight
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smooth springs for cursor glow following
  const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Particle network canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Track mouse for canvas interaction
    let mouse = { x: null, y: null, radius: 140 };
    const onCanvasMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onCanvasMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', onCanvasMouseMove, { passive: true });
    window.addEventListener('mouseleave', onCanvasMouseLeave);

    // Initialize particles
    const particleCount = Math.min(Math.floor((width * height) / 26000), 40);
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.baseRadius = Math.random() * 1.5 + 0.8;
        this.radius = this.baseRadius;
        this.isAmber = Math.random() > 0.45;
      }

      update() {
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 1.5;
            this.y -= Math.sin(angle) * force * 1.5;
            this.radius = this.baseRadius * 1.5;
          } else {
            this.radius = this.baseRadius;
          }
        }

        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        if (this.isAmber) {
          ctx.fillStyle = 'rgba(245, 158, 11, 0.32)';
        } else {
          ctx.fillStyle = 'rgba(100, 116, 139, 0.18)';
        }
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect particles with faint lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].isAmber || particles[j].isAmber
              ? `rgba(245, 158, 11, ${alpha * 1.1})`
              : `rgba(148, 163, 184, ${alpha * 0.75})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onCanvasMouseMove);
      window.removeEventListener('mouseleave', onCanvasMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* ========================================================
          WARM SUNLIT AMBIENT GRADIENT SYSTEM (Entire Site Backdrop)
         ======================================================== */}
      {/* 1. Left Peach-Amber Radiant Glow (Top/Hero to Mid) */}
      <div 
        className="absolute -top-16 -left-28 w-[650px] sm:w-[850px] h-[750px] sm:h-[950px] rounded-full blur-[120px] opacity-80"
        style={{
          background: 'radial-gradient(circle, rgba(254, 215, 170, 0.75) 0%, rgba(254, 243, 199, 0.45) 45%, transparent 75%)',
        }}
      />

      {/* 2. Right Warm Golden Sunlight Glow (Top/Hero to Mid) */}
      <div 
        className="absolute -top-16 -right-28 w-[650px] sm:w-[850px] h-[750px] sm:h-[950px] rounded-full blur-[120px] opacity-80"
        style={{
          background: 'radial-gradient(circle, rgba(254, 240, 138, 0.8) 0%, rgba(254, 243, 199, 0.5) 45%, transparent 75%)',
        }}
      />

      {/* 3. Center Warm Sunburst Ambient Vignette */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1200px] h-[600px] sm:h-[800px] rounded-full blur-[140px] opacity-65"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 251, 235, 0.95) 0%, rgba(254, 243, 199, 0.45) 50%, transparent 80%)',
        }}
      />

      {/* 4. Lower-Left Sunlit Amber Orb (Middle/Lower Sections) */}
      <div 
        className="absolute top-[55%] -left-36 w-[600px] sm:w-[800px] h-[700px] sm:h-[900px] rounded-full blur-[130px] opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(254, 240, 138, 0.65) 0%, rgba(254, 243, 199, 0.4) 45%, transparent 75%)',
        }}
      />

      {/* 5. Lower-Right Peach Sunlight Orb (Contact & Footer Area) */}
      <div 
        className="absolute top-[65%] -right-36 w-[600px] sm:w-[800px] h-[700px] sm:h-[900px] rounded-full blur-[130px] opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(254, 215, 170, 0.65) 0%, rgba(254, 243, 199, 0.4) 45%, transparent 75%)',
        }}
      />

      {/* Interactive Cursor Spotlight Glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, rgba(254,215,170,0.035) 35%, transparent 70%)',
        }}
      />

      {/* Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />
    </div>
  );
};

export default InteractiveBackground;
