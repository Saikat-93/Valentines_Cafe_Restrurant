import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { toast } from "sonner";
import { CATEGORIES, DISHES } from "@/data/siteData";

export default function Menu() {
  const [cat, setCat] = useState("All");
  const list = DISHES.filter((d) => cat === "All" || d.cat === cat);

  return (
    <section id="menu" className="relative py-28 md:py-36" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="script text-2xl text-rustic">From Our Kitchen</span>
          <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold text-coffee">Explore the Menu</h2>
          <p className="mt-4 text-coffee/70">A curated tasting of our most-loved plates, refreshed every season.</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                cat === c
                  ? "bg-rustic text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "bg-soft-white text-coffee hover:bg-rustic/10"
              }`} style={cat === c ? {} : { background: "var(--soft-white)", color: "var(--coffee)" }}>
              {c}
            </button>
          ))}
        </div>

        {cat === "Desserts" ? (
          <div className="mt-12 rounded-3xl bg-soft-white p-16 text-center shadow-[var(--shadow-warm)]">
            <p className="font-display text-3xl font-bold text-coffee">Coming Soon !!!!!</p>
            <p className="mt-4 text-sm text-coffee/70">Our dessert menu is being prepared. Check back soon for sweet treats.</p>
          </div>
        ) : (
          <motion.div layout className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {list.map((d) => (
                <motion.article key={d.name + d.cat}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-3xl bg-soft-white shadow-[var(--shadow-warm)]"
                  style={{ background: "var(--soft-white)" }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={d.img} alt={d.name} loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" />
                    <button className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-soft-white/90 text-rustic backdrop-blur transition hover:bg-rustic hover:text-primary-foreground">
                      <Heart className="h-4 w-4" />
                    </button>
                    <span className="absolute left-3 top-3 rounded-full bg-chocolate/80 px-3 py-1 text-[10px] uppercase tracking-widest text-cream backdrop-blur">{d.cat}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold text-coffee leading-tight" style={{ color: "var(--coffee)" }}>{d.name}</h3>
                      <span className="font-display text-xl font-bold text-rustic">₹{d.price}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "oklch(0.32 0.07 45 / 0.7)" }}>{d.desc}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
