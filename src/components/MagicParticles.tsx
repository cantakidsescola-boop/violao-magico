import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function MagicParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    const colors = ['#8B5CF6', '#3B82F6', '#FBBF24', '#EC4899', '#FFFFFF'];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createParticle = (x?: number, y?: number): Particle => {
      return {
        x: x ?? Math.random() * canvas.width,
        y: y ?? Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5 - 0.2, // slight upward drift
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.1,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      };
    };

    // Initial particles
    for (let i = 0; i < 100; i++) {
      particles.push(createParticle());
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Add particles on mouse move occasionally
      if (Math.random() > 0.8) {
        particles.push(createParticle(mouseX, mouseY));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Move
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;

        // Fade in/out based on life
        let currentOpacity = p.opacity;
        if (p.life < 20) {
          currentOpacity = p.opacity * (p.life / 20);
        } else if (p.life > p.maxLife - 20) {
          currentOpacity = p.opacity * ((p.maxLife - p.life) / 20);
        }

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, currentOpacity);
        ctx.fill();

        // Add glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;

        // Reset if dead or out of bounds
        if (
          p.life >= p.maxLife ||
          p.y < -10 ||
          p.x < -10 ||
          p.x > canvas.width + 10
        ) {
          particles[i] = createParticle(Math.random() * canvas.width, canvas.height + 10);
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
