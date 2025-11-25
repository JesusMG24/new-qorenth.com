import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Systems from "./components/Systems";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Systems />
      <Process />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
