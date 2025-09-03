import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { LocationSection } from "./components/LocationSection";
import { PricingSection } from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactsSection } from "./components/ContactsSection";
import { Footer } from "./components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <LocationSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
