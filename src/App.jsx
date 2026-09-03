import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import FeaturedProperties from "./components/home/FeaturedProperties";
import WhyChooseGrihamate from "./components/home/WhyChooseGrihamate";
import AboutSection from "./components/home/AboutSection";
import MissionVision from "./components/home/MissionVision";
import ContactSection from "./components/home/ContactSection";
import Footer from "./components/layout/Footer";

import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
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
          }
        />

        {/* Property Details */}
        <Route
          path="/properties/:id"
          element={
            <>
              <Navbar />
              <PropertyDetails />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;