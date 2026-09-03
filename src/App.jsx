import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import FeaturedProperties from "./components/home/FeaturedProperties";
import WhyChooseGrihamate from "./components/home/WhyChooseGrihamate";
import AboutSection from "./components/home/AboutSection";
import MissionVision from "./components/home/MissionVision";
import ContactSection from "./components/home/ContactSection";
import Footer from "./components/layout/Footer";
import ScrollToHash from "./components/layout/ScrollToHash";

import PropertyDetails from "./pages/PropertyDetails";


function HashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.substring(1);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
     <ScrollToHash />
     <HashScroll />
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