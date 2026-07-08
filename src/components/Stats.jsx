import Counter from "@/components/Counter";
import { STATS } from "@/data/siteData";

export default function Stats() {
  return (
    <section className="py-20" style={{ background: "var(--chocolate)" }}>
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => <Counter key={s.label} {...s} />)}
      </div>
    </section>
  );
}
