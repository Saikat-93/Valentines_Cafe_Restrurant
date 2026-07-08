import { useState, useEffect, useRef } from "react";

export default function Counter({ value, label, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1600;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold" style={{ color: "var(--beige)" }}>
        {n.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.25em]" style={{ color: "oklch(0.93 0.04 70 / 0.6)" }}>{label}</div>
    </div>
  );
}
