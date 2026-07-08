import { Toaster } from "sonner";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Signature from "@/components/Signature";
import Gallery from "@/components/Gallery";
import ChefVideo from "@/components/ChefVideo";
import Testimonials from "@/components/Testimonials";
import Reserve from "@/components/Reserve";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Nav />
      <Hero />
      <About />
      <Menu />
      <Signature />
      <Gallery />
      <ChefVideo />
      <Testimonials />
      <Reserve />
      <Stats />
      <Footer />
      <WhatsApp />
      <Toaster position="bottom-center" theme="dark" richColors />
    </div>
  );
}
