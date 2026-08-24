import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import FeaturedProperties from "./components/home/FeaturedProperties";
import WhyChooseGrihamate from "./components/home/WhyChooseGrihamate";
import AboutSection from "./components/home/AboutSection";
import MissionVision from "./components/home/MissionVision";
import ContactSection from "./components/home/ContactSection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <WhyChooseGrihamate />
      <AboutSection />
      <MissionVision />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;