import React, { useEffect, useRef } from "react";

function SmokeCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];

    // Particle class for smoke
    class Particle {
      constructor(x, y) {
        this.x = x + Math.random() * 3 - 1.5; 
        this.y = y + Math.random() * 3 - 1.5;
        this.size = Math.random() * 4 + 1; 
        this.speedX = Math.random() * 0.09 - 0.045; 
        this.speedY = Math.random() * -0.25 - 0.1;
        this.opacity = 0.35; 
        this.life = Math.random() * 280 + 280; 
        this.color = `rgba(220, 220, 220, ${this.opacity})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 1;
        this.opacity = this.life / 550; 
        this.size *= 0.97;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;

        ctx.filter = 'blur(2px)';

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.filter = 'none'; 

        ctx.restore();
      }
    }

    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;

      for (let i = 0; i < 6; i++) {
        particlesArray.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.life <= 0 || particle.size <= 0.1) {
          particlesArray.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-30">
      </canvas>
  );
}

export default SmokeCursor;

