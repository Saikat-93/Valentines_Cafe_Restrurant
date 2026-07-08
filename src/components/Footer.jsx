import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/Logo.png";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border" style={{ background: "var(--chocolate)" }}>
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10" style={{ color: "var(--cream)" }}>
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-rustic overflow-hidden">
              <img src={logo} alt="Valentine's logo" className="h-10 w-10 object-cover" />
            </span>
            <span className="script text-2xl" style={{ color: "var(--beige)" }}>Valentine's</span>
          </div>
          <p className="mt-4 text-sm" style={{ color: "oklch(0.93 0.04 70 / 0.7)" }}>
            A neighbourhood café and restaurant — crafted plates, warm light, the
            kind of evening you remember.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Twitter].map((I, k) => (
              <a key={k} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 hover:bg-rustic hover:border-rustic transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg">Visit</h4>
          <ul className="mt-4 space-y-2 text-sm" style={{ color: "oklch(0.93 0.04 70 / 0.7)" }}>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-rustic" />Panskura Station Rd, Panskura, West Bengal 721152</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-rustic" />91+ 8116375655</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-rustic" />hello@valentines.cafe</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg">Hours</h4>
          <ul className="mt-4 space-y-1.5 text-sm" style={{ color: "oklch(0.93 0.04 70 / 0.7)" }}>
            <li className="flex justify-between"><span>Mon – Thu</span><span>10 – 23:30</span></li>
            <li className="flex justify-between"><span>Fri – Sat</span><span>10 – 23:30</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>11 – 23:30</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg">Newsletter</h4>
          <p className="mt-4 text-sm" style={{ color: "oklch(0.93 0.04 70 / 0.7)" }}>Seasonal menus and small-batch events.</p>
          <form onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed ✓"); }}
            className="mt-3 flex">
            <input type="email" required placeholder="hello@valentines.cafe"
              className="flex-1 rounded-l-full bg-cream/10 px-4 py-2.5 text-sm placeholder:text-cream/40 outline-none border border-cream/15 focus:border-rustic transition" />
            <button className="rounded-r-full bg-rustic px-4 text-sm font-semibold text-primary-foreground"><ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs flex flex-col md:flex-row gap-2 justify-between" style={{ color: "oklch(0.93 0.04 70 / 0.5)" }}>
          <span>© {new Date().getFullYear()} Valentine's Café & Restaurant. Crafted with care.</span>
          <span>@ Saikat With Code</span>
        </div>
      </div>
    </footer>
  );
}
