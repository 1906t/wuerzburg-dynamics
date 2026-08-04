"use client";

import { useEffect, useRef } from "react";

type ShapeType = "reticle" | "ring" | "dot";

interface Shape {
  x: number;
  y: number;
  size: number;
  speed: number;
  rot: number;
  rotSpeed: number;
  alpha: number;
  type: ShapeType;
  mouseDepth: number;
}

function drawReticle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rot: number,
  alpha: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.strokeStyle = "#7A7A78";
  ctx.lineCap = "round";

  ctx.globalAlpha = alpha * 0.9;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(0, 0, size, 0, Math.PI * 2);
  ctx.stroke();

  ctx.globalAlpha = alpha * 0.6;
  ctx.lineWidth = 0.9;
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.48, 0, Math.PI * 2);
  ctx.stroke();

  const gap = size * 0.52;
  const ext = size * 1.35;
  ctx.globalAlpha = alpha * 0.5;
  ctx.lineWidth = 0.7;
  ctx.beginPath();
  ctx.moveTo(-ext, 0); ctx.lineTo(-gap, 0);
  ctx.moveTo(gap, 0);  ctx.lineTo(ext, 0);
  ctx.moveTo(0, -ext); ctx.lineTo(0, -gap);
  ctx.moveTo(0, gap);  ctx.lineTo(0, ext);
  ctx.stroke();

  const tickInner = size * 0.55;
  const tickOuter = size * 0.85;
  ctx.globalAlpha = alpha * 0.4;
  ctx.lineWidth = 0.6;
  [45, 135, 225, 315].forEach((deg) => {
    const rad = (deg * Math.PI) / 180;
    ctx.beginPath();
    ctx.moveTo(Math.cos(rad) * tickInner, Math.sin(rad) * tickInner);
    ctx.lineTo(Math.cos(rad) * tickOuter, Math.sin(rad) * tickOuter);
    ctx.stroke();
  });

  ctx.globalAlpha = alpha;
  ctx.fillStyle = "#7A7A78";
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.04, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawRing(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rot: number,
  alpha: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.strokeStyle = "#7A7A78";
  ctx.lineCap = "round";

  ctx.globalAlpha = alpha * 0.9;
  ctx.lineWidth = 1.0;
  ctx.beginPath();
  ctx.arc(0, 0, size, 0, Math.PI * 2);
  ctx.stroke();

  ctx.globalAlpha = alpha * 0.45;
  ctx.lineWidth = 0.7;
  [0, 90, 180, 270].forEach((deg) => {
    const rad = (deg * Math.PI) / 180;
    ctx.beginPath();
    ctx.moveTo(Math.cos(rad) * size * 0.82, Math.sin(rad) * size * 0.82);
    ctx.lineTo(Math.cos(rad) * size * 1.22, Math.sin(rad) * size * 1.22);
    ctx.stroke();
  });

  ctx.restore();
}

function drawDot(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  alpha: number
) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = "#7A7A78";
  ctx.beginPath();
  ctx.arc(x, y, size * 0.07, 0, Math.PI * 2);
  ctx.fill();
  // outer faint ring around the dot
  ctx.strokeStyle = "#7A7A78";
  ctx.globalAlpha = alpha * 0.35;
  ctx.lineWidth = 0.7;
  ctx.beginPath();
  ctx.arc(x, y, size * 0.25, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const shapesRef = useRef<Shape[]>([]);
  const scrollYRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const COUNT = 18;

    function pickType(i: number): ShapeType {
      const t = i / COUNT;
      if (t < 0.5) return "reticle";
      if (t < 0.8) return "ring";
      return "dot";
    }

    function makeShapes() {
      shapesRef.current = Array.from({ length: COUNT }, (_, i) => ({
        x: Math.random(),
        y: Math.random() * 1.4 - 0.2,
        size: 50 + Math.random() * 140,
        speed: 0.04 + Math.random() * 0.12,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.00008,
        alpha: 0.14 + Math.random() * 0.12,
        type: pickType(i),
        mouseDepth: 0.1 + Math.random() * 0.9,
      }));
    }

    function resize() {
      const dpr = Math.min(devicePixelRatio, 2);
      canvas!.width = innerWidth * dpr;
      canvas!.height = innerHeight * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onScroll() {
      scrollYRef.current = scrollY;
    }

    function onMouse(e: MouseEvent) {
      mouseRef.current = {
        x: e.clientX / innerWidth,
        y: e.clientY / innerHeight,
      };
    }

    function animate(time: number) {
      ctx!.clearRect(0, 0, innerWidth, innerHeight);

      const scroll = scrollYRef.current;
      const mx = (mouseRef.current.x - 0.5) * 60;
      const my = (mouseRef.current.y - 0.5) * 40;

      for (const r of shapesRef.current) {
        const x = r.x * innerWidth + mx * r.mouseDepth;
        const rawY = r.y * innerHeight + scroll * r.speed;
        const y = ((rawY % (innerHeight + 320)) + innerHeight + 320) % (innerHeight + 320) - 160;
        const py = y + my * r.mouseDepth;
        const rot = r.rot + time * r.rotSpeed;

        if (r.type === "reticle") {
          drawReticle(ctx!, x, py, r.size, rot, r.alpha);
        } else if (r.type === "ring") {
          drawRing(ctx!, x, py, r.size, rot, r.alpha);
        } else {
          drawDot(ctx!, x, py, r.size, r.alpha);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    makeShapes();
    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
