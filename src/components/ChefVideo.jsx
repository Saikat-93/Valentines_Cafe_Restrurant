import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { chef } from "@/data/siteData";

export default function ChefVideo() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
      <img src={chef} alt="Chef" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-chocolate/70" />
      <div className="relative z-10 grid h-full place-items-center text-center px-6">
        <div>
          <span className="script text-2xl" style={{ color: "var(--beige)" }}>Behind the Pass</span>
          <h2 className="mt-2 font-display text-4xl md:text-6xl font-bold max-w-3xl mx-auto text-balance" style={{ color: "var(--cream)" }}>
            Watch our chefs build a Sunday service.
          </h2>
          <button onClick={() => setOpen(true)}
            className="group mt-10 inline-flex items-center gap-4 text-cream">
            <span className="relative grid h-20 w-20 place-items-center rounded-full bg-rustic shadow-[var(--shadow-glow)]">
              <span className="absolute inset-0 rounded-full bg-rustic animate-ping opacity-40" />
              <Play className="h-7 w-7 translate-x-0.5" />
            </span>
            <span className="font-display text-xl">Play the film</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-chocolate/95 p-6" onClick={() => setOpen(false)}>
            <div className="aspect-video w-full max-w-4xl rounded-2xl bg-black overflow-hidden grid place-items-center text-cream/60">
              Video preview coming soon
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
