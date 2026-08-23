import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import FeaturedProperties from "./components/home/FeaturedProperties";
import WhyChooseGrihamate from "./components/home/WhyChooseGrihamate";
import AboutSection from "./components/home/AboutSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <WhyChooseGrihamate />
      <AboutSection />
    </>
  );
}

export default App;