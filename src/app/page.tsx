import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import TrustedVendors from "@/components/TrustedVendors";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Operations from "@/components/Operations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white overflow-x-hidden">
      <Hero />
      <About />
      <Journey />
      <Process />
      <WhyUs />
      <TrustedVendors />
      <Clients />
      <Testimonials />
      <Operations />
      <Contact />
      <Footer />
    </main>
  );
}
