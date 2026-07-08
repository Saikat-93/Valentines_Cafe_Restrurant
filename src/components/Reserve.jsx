import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import Field from "@/components/Field";

export default function Reserve() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Reservation requested! We'll confirm by email.");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="reserve" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="script text-2xl text-rustic">Reservations</span>
          <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold text-balance">
            Hold a table by candlelight.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Walk-ins welcome, but the corner banquette goes fast on Friday nights.
            Reserve below and we'll have your favourite drink waiting.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-rustic" /> Open daily 10:00 – 23:30</div>
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-rustic" /> Panskura Station Rd, Panskura, West Bengal 721152</div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-rustic" /> +91 8116375655</div>
          </div>
        </div>
       {/* <motion.form onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-warm)]">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" className="sm:col-span-2" required />
            <Field label="Guests" name="guests" type="number" min={1} max={20} defaultValue={2} />
            <Field label="Date" name="date" type="date" required />
            <Field label="Time" name="time" type="time" className="sm:col-span-2" required />
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Special request</label>
              <textarea name="note" rows={3}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-rustic transition" />
            </div>
          </div>
          <button type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rustic py-3.5 font-semibold text-primary-foreground shine transition hover:shadow-[var(--shadow-glow)]">
            {submitted ? "Reservation sent ✓" : "Reserve my table"}
          </button>
        </motion.form>  */}
      </div>
    </section>
  );
}
