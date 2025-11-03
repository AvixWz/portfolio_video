import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { throttle } from '../utils/performance';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  isExplosion?: boolean;
  life?: number; // lifespan for explosion particles
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.min(120, Math.floor((canvas.width * canvas.height) / 8000));
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          hue: Math.random() * 360,
        });
      }
    };

    const createExplosion = (x: number, y: number) => {
      const count = 15 + Math.floor(Math.random() * 10);
      for (let i = 0; i < count; i++) {
        const angle = (Math.random() * Math.PI * 2);
        const speed = Math.random() * 4 + 2;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 3 + 1,
          opacity: 1,
          hue: Math.random() * 360,
          isExplosion: true,
          life: 60 + Math.random() * 30, // lifespan in frames
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];

        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce edges for normal particles
        if (!particle.isExplosion) {
          if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
          if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
        }

        // Mouse repulsion for normal particles
        if (!particle.isExplosion) {
          const dxMouse = particle.x - mouseRef.current.x;
          const dyMouse = particle.y - mouseRef.current.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          if (distMouse < 100) {
            particle.vx += dxMouse / 2000;
            particle.vy += dyMouse / 2000;
          }
        }

        // Explosion particles fade out
        if (particle.isExplosion) {
          particle.life! -= 1;
          particle.opacity *= 0.95;
          if (particle.life! <= 0) {
            particlesRef.current.splice(i, 1);
            continue;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 60%, ${particle.opacity})`;
        ctx.fill();

        // Draw connections for normal particles
        if (!particle.isExplosion) {
          particlesRef.current.slice(i + 1).forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 120) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `hsla(${particle.hue}, 80%, 60%, ${0.15 * (1 - distance / 120)})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          });
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = throttle((e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }, 20);

    // Random explosions every 2-4 seconds
    const explosionInterval = setInterval(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      createExplosion(x, y);
    }, 2500 + Math.random() * 1500);

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', throttle(() => {
      resizeCanvas();
      createParticles();
    }, 250));

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(explosionInterval);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default ParticleBackground;
