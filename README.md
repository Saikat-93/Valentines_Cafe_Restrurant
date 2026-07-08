# Velvet Bistro Showcase — React + JavaScript

This is a plain **React + JavaScript** (Vite) version of the Velvet Bistro / Valentine's Café showcase site.

## What changed from the original

The original project was a **TypeScript** app built on **TanStack Start** (SSR framework with file-based routing, `.tsx` route files, `routeTree.gen.ts`, server functions, etc.), plus a large `src/components/ui` folder of shadcn/ui components.

This version:
- Converts every `.tsx` file to plain `.jsx` — all TypeScript types, interfaces, and generics removed.
- Drops the TanStack Start/router/server machinery (the site is a single-page landing page, so it didn't need SSR routing). It's now a standard client-rendered Vite + React SPA.
- Removes the unused `src/components/ui` (shadcn) folder, `lib/`, and `hooks/` — none of those were actually used by the page itself, only images, `framer-motion`, `lucide-react`, and `sonner` were.
- Keeps all visuals, animations, copy, and Tailwind styling (`styles.css`) identical to the original.

Everything used to live in one big `App.jsx`. It's now split into one file per section, so you can open exactly the piece you want to change:

```
index.html
vite.config.js
src/
  main.jsx              # React root render
  App.jsx               # just lays out the sections in order
  styles.css            # Tailwind v4 theme + custom CSS (unchanged)
  assets/               # images
  data/
    siteData.js         # all the content: nav links, dishes, testimonials, stats, gallery images
  components/
    Nav.jsx              # top navigation bar + mobile menu
    Hero.jsx             # full-screen hero section
    FloatingBeans.jsx     # decorative animated beans (used inside Hero)
    About.jsx            # "Our Story" section
    Menu.jsx             # menu grid with category filter
    Signature.jsx        # scrolling "Signature Plates" marquee
    Gallery.jsx           # photo grid + lightbox
    ChefVideo.jsx         # "Behind the Pass" video teaser section
    Testimonials.jsx      # rotating testimonial cards
    Reserve.jsx           # reservation form section
    Field.jsx             # small reusable input field (used inside Reserve)
    Stats.jsx             # stats bar
    Counter.jsx           # animated number counter (used inside Stats)
    Footer.jsx            # footer with links + newsletter form
    WhatsApp.jsx          # floating WhatsApp button
```

**How to find what you want to edit:**
- Want to change the menu items, prices, or dish photos? → `src/data/siteData.js`
- Want to change how the menu section looks/behaves? → `src/components/Menu.jsx`
- Want to change nav links? → `NAV` array in `src/data/siteData.js`
- Want to change colors/fonts globally? → `src/styles.css`

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```
