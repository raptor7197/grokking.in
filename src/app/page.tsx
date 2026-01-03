import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries"; // Now "Cool AI Stuff"
import { Benefits } from "@/components/sections/Benefits";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Industries /> {/* Cool AI Stuff */}
      <Services />   {/* Process / Magic Steps */}
      <Benefits />
      <CallToAction />
      <Footer />
    </main>
  );
}
