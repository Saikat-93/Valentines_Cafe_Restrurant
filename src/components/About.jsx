import { motion } from "framer-motion";
import { Leaf, ChefHat, Heart, Sparkles } from "lucide-react";
import { interior, chef } from "@/data/siteData";

const FEATURES = [
  { icon: Leaf, t: "Fresh Ingredients", d: "Sourced daily from local farms and trusted growers." },
  { icon: ChefHat, t: "Crafted Menu", d: "Each plate built by our master chefs with intention." },
  { icon: Heart, t: "Made with Love", d: "A family recipe in every bowl — for fourteen years." },
  { icon: Sparkles, t: "Cozy Ambience", d: "Warm lights, rustic woods, conversations that linger." },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-warm)]">
            <img src={interior} alt="Cafe interior" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-10 -right-6 hidden md:block aspect-square w-56 overflow-hidden rounded-2xl border-8 border-background shadow-[var(--shadow-warm)]">
            <img src={chef} alt="Chef plating" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -top-6 -left-6 grid h-24 w-24 place-items-center rounded-full bg-rustic text-primary-foreground shadow-[var(--shadow-glow)]">
            <div className="text-center leading-tight">
              <div className="font-display text-2xl font-bold">1</div>
              <div className="text-[9px] uppercase tracking-widest">Years</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="script text-2xl text-rustic">Our Story</span>
          <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold leading-tight text-balance">
            A neighbourhood table, <em className="text-rustic not-italic">brewed</em> with intention.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Valentine's began as a four-table corner café and grew into the city's
            most-loved dining room — without losing the smell of cardamom, the clink
            of porcelain, or the way regulars are greeted by name.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <motion.div key={f.t} whileHover={{ y: -6 }}
                className="group rounded-2xl border border-border bg-card p-5 transition hover:shadow-[var(--shadow-warm)]">
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-rustic/10 text-rustic transition group-hover:bg-rustic group-hover:text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
