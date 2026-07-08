import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/siteData";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-28" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="script text-2xl text-rustic">Kind Words</span>
        <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold text-coffee">From our regulars</h2>
        <div className="relative mt-12 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.figure key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-soft-white p-10 shadow-[var(--shadow-warm)]"
              style={{ background: "var(--soft-white)" }}>
              <div className="flex justify-center gap-1 text-rustic">
                {Array.from({ length: TESTIMONIALS[i].rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl md:text-2xl leading-relaxed text-coffee text-balance"
                style={{ color: "var(--coffee)" }}>
                "{TESTIMONIALS[i].text}"
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-semibold text-coffee" style={{ color: "var(--coffee)" }}>{TESTIMONIALS[i].name}</div>
                <div className="text-xs uppercase tracking-widest text-rustic">{TESTIMONIALS[i].role}</div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button key={k} onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-rustic" : "w-3 bg-coffee/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
