import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GALLERY } from "@/data/siteData";

export default function Gallery() {
  const [lb, setLb] = useState(null);

  return (
    <section id="gallery" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="script text-2xl text-rustic">Moments</span>
          <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">From the dining room</h2>
        </div>
        <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-5 [column-fill:_balance]">
          {GALLERY.map((g, i) => (
            <motion.button key={i} onClick={() => setLb(g.src)}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className={`mb-5 block w-full overflow-hidden rounded-2xl group relative`}>
              <img src={g.src} alt="" loading="lazy"
                className={`w-full object-cover transition duration-700 group-hover:scale-110 ${g.h === "tall" ? "aspect-[3/4]" : "aspect-square"}`} />
              <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/40 transition flex items-end p-4">
                <span className="text-cream opacity-0 group-hover:opacity-100 transition script text-xl">view</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lb && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLb(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-chocolate/90 backdrop-blur-xl p-6">
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={lb} alt=""
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-[var(--shadow-glow)]" />
            <button className="absolute top-6 right-6 text-cream" onClick={() => setLb(null)}><X /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
