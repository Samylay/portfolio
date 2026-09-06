"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

type ParticlesProps = {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
};

export function Particles({
  className = "",
  quantity = 200,
  staticity = 50,
  ease = 50,
}: ParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!container || !canvas || !context) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const particles: Particle[] = [];
    const mouse = { x: 0, y: 0 };
    const size = { width: 0, height: 0 };
    let frameId = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particleColor = getComputedStyle(container).color;

    const makeParticle = (): Particle => ({
      x: Math.random() * size.width,
      y: Math.random() * size.height,
      translateX: 0,
      translateY: 0,
      size: Math.random() * 1.9 + 0.1,
      alpha: 0,
      targetAlpha: Math.random() * 0.6 + 0.1,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      magnetism: Math.random() * 4 + 0.1,
    });

    const drawParticle = (particle: Particle) => {
      context.save();
      context.translate(particle.translateX, particle.translateY);
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.globalAlpha = particle.alpha;
      context.fillStyle = particleColor;
      context.fill();
      context.restore();
    };

    const clear = () => context.clearRect(0, 0, size.width, size.height);

    const seed = () => {
      particles.length = 0;
      for (let index = 0; index < quantity; index += 1) {
        particles.push(makeParticle());
      }
    };

    const resize = () => {
      size.width = container.offsetWidth;
      size.height = container.offsetHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = size.width * dpr;
      canvas.height = size.height * dpr;
      canvas.style.width = `${size.width}px`;
      canvas.style.height = `${size.height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      particleColor = getComputedStyle(container).color;
      seed();
    };

    const render = (animate: boolean) => {
      clear();

      particles.forEach((particle, index) => {
        const closestEdge = Math.min(
          particle.x + particle.translateX - particle.size,
          size.width - particle.x - particle.translateX - particle.size,
          particle.y + particle.translateY - particle.size,
          size.height - particle.y - particle.translateY - particle.size,
        );
        const edgeOpacity = Math.max(0, Math.min(closestEdge / 20, 1));

        particle.alpha = Math.min(
          particle.targetAlpha * edgeOpacity,
          particle.alpha + 0.02,
        );

        if (animate) {
          particle.x += particle.dx;
          particle.y += particle.dy;
          particle.translateX +=
            (mouse.x / (staticity / particle.magnetism) - particle.translateX) /
            ease;
          particle.translateY +=
            (mouse.y / (staticity / particle.magnetism) - particle.translateY) /
            ease;
        }

        const outside =
          particle.x < -particle.size ||
          particle.x > size.width + particle.size ||
          particle.y < -particle.size ||
          particle.y > size.height + particle.size;

        if (outside) {
          particles[index] = makeParticle();
        } else {
          drawParticle(particle);
        }
      });
    };

    const tick = () => {
      render(true);
      frameId = window.requestAnimationFrame(tick);
    };

    const start = () => {
      window.cancelAnimationFrame(frameId);
      if (motionQuery.matches) {
        particles.forEach((particle) => {
          particle.alpha = particle.targetAlpha;
        });
        render(false);
      } else {
        tick();
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = event.clientX - rect.left - size.width / 2;
      mouse.y = event.clientY - rect.top - size.height / 2;
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      start();
    });
    const mutationObserver = new MutationObserver(() => {
      particleColor = getComputedStyle(container).color;
    });

    resize();
    start();
    resizeObserver.observe(container);
    mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    motionQuery.addEventListener("change", start);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      motionQuery.removeEventListener("change", start);
    };
  }, [ease, quantity, staticity]);

  return (
    <div ref={containerRef} aria-hidden="true" className={className}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
