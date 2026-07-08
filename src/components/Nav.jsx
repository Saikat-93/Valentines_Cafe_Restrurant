import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, ArrowRight } from "lucide-react";
import { NAV } from "@/data/siteData";
import logo from "@/assets/Logo.png";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 40);
    onS();
    window.addEventListener("scroll", onS);
    return () => window.removeEventListener("scroll", onS);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-chocolate/70 backdrop-blur-xl border-b border-beige/15 py-3" : "bg-transparent py-6"
    }`}>
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-cream">
          <span className="overflow-hidden rounded-full bg-rustic/90 h-10 w-10">
            <img src={logo} alt="Valentine's Cafe logo" className="h-full w-full object-cover" />
          </span>
          <span className="leading-tight">
            <span className="block script text-2xl text-beige">Valentine's</span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-cream/70">Café & Restaurant</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`}
              className="group relative text-sm font-medium text-cream/80 hover:text-cream transition">
              {n}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-rustic transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href="#reserve" className="hidden md:inline-flex items-center gap-2 rounded-full bg-rustic px-5 py-2.5 text-sm font-semibold text-primary-foreground shine transition hover:shadow-[var(--shadow-glow)]">
          Book a Table <ArrowRight className="h-4 w-4" />
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-cream" aria-label="Menu">
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-chocolate/95 backdrop-blur-xl">
            <div className="flex flex-col px-6 py-6 gap-4">
              {NAV.map((n) => (
                <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}
                  className="text-cream/90 py-2 border-b border-beige/10">{n}</a>
              ))}
              <a href="#reserve" onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-rustic px-5 py-3 text-center font-semibold text-primary-foreground">Book a Table</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
