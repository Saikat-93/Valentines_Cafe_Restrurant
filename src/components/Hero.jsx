import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FloatingBeans from "@/components/FloatingBeans";
import { hero } from "@/data/siteData";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <motion.img src={hero} alt="Cozy cafe interior at golden hour" className="absolute inset-0 h-full w-full object-cover"
        style={{ y, scale: 1.1 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-chocolate/40 via-chocolate/55 to-chocolate" />
      <FloatingBeans />

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="script text-3xl md:text-4xl" style={{ color: "var(--beige)" }}>
          Welcome to Valentine's Café & Restaurant
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-4 max-w-5xl text-balance font-display text-5xl font-black leading-[1.05] text-cream md:text-7xl lg:text-8xl"
          style={{ color: "var(--cream)" }}>
          Good Food. <span className="italic" style={{ color: "var(--beige)" }}>Good</span> Mood.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="mt-6 max-w-2xl text-balance text-base md:text-lg" style={{ color: "oklch(0.93 0.04 70 / 0.85)" }}>
          Every dish is crafted with love, served with passion, and designed to create
          unforgettable memories at your table.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#menu" className="group inline-flex items-center gap-2 rounded-full bg-rustic px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] shine">
            Explore Menu <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#reserve" className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 backdrop-blur-md px-7 py-3.5 text-sm font-semibold text-cream hover:bg-cream/15 transition">
            Book a Table
          </a>
        </motion.div>

        {/* Steam */}
        <div className="pointer-events-none absolute bottom-28 left-1/2 -translate-x-1/2 hidden md:block">
          {[0, 0.7, 1.4].map((d, i) => (
            <span key={i} className="steam-puff absolute h-2 w-2 rounded-full bg-cream/40 blur-sm"
              style={{ left: `${i * 12 - 12}px`, animationDelay: `${d}s` }} />
          ))}
        </div>
      </motion.div>

      <motion.div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/60"
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <div className="h-10 w-6 rounded-full border border-cream/40 p-1">
          <div className="h-2 w-1 mx-auto rounded-full bg-cream/70" />
        </div>
      </motion.div>
    </section>
  );
}
