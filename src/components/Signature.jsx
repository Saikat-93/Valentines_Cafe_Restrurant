import { DISHES } from "@/data/siteData";

export default function Signature() {
  const items = DISHES.slice(0, 6);
  const dup = [...items, ...items];

  return (
    <section className="relative py-24 overflow-hidden bg-chocolate" style={{ background: "var(--chocolate)" }}>
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="script text-2xl" style={{ color: "var(--beige)" }}>Signature Plates</span>
        <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold" style={{ color: "var(--cream)" }}>
          The dishes we're known for
        </h2>
      </div>
      <div className="mt-14 relative">
        <div className="flex gap-6 animate-[marquee_40s_linear_infinite]"
          style={{ width: "max-content" }}>
          {dup.map((d, i) => (
            <div key={i} className="w-[320px] shrink-0 rounded-3xl overflow-hidden bg-coffee/40 border border-beige/10 backdrop-blur-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold" style={{ color: "var(--cream)" }}>{d.name}</h3>
                <p className="mt-1 text-sm" style={{ color: "oklch(0.79 0.09 75 / 0.8)" }}>{d.cat} · ₹{d.price}</p>
              </div>
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee { to { transform: translateX(-50%); } }`}</style>
      </div>
    </section>
  );
}
