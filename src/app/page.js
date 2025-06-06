import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Video from "./components/Video";
import Services from "./components/Services";
import FeaturesShowcase from "./components/FeaturesShowcase";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Video />
      <Services />
      <FeaturesShowcase />
      <FAQ />
      <Footer />
    </div>
  );
}
