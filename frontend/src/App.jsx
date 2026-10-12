import React, { useState, useEffect } from 'react';
import './App.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import { AppProvider } from './context/AppContext';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import Showcase from './components/Showcase';
import Craftsmanship from './components/Craftsmanship';
import TraditionModern from './components/TraditionModern';
import WhyUs from './components/WhyUs';
import CustomFurniture from './components/CustomFurniture';
import RequirementForm from './components/RequirementForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import QuickViewModal from './components/QuickViewModal';

function FurnitureAppContent() {
  const [selectedItem, setSelectedItem] = useState(null);

  // Initialize Scroll Reveal IntersectionObserver
  useScrollReveal([]);

  // Reset scroll to top on every refresh / initial load
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="furniture-app">
      {/* Top Navbar with Language and Dark Mode toggles */}
      <Navbar />

      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Brand Story / About Section */}
        <About />

        {/* 3. Curated Collections Showcase */}
        <Collections onSelectItem={(item) => setSelectedItem(item)} />?

        {/* 4. Full-Width Editorial Billboard Showcase */}
        <Showcase />

        {/* 5. Craftsmanship Pillars */}
        <Craftsmanship />

        {/* 6. Tradition Meets Contemporary Living */}
        <TraditionModern />

        {/* 7. Why Discerning Homeowners Choose Us */}
        <WhyUs />

        {/* 8. Bespoke Atelier & Custom Furniture */}
        <CustomFurniture />

        {/* 9. Direct Requirement Form -> WhatsApp */}
        <RequirementForm />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Consultation Button */}
      <WhatsAppFloating />

      {/* 13. Interactive Quick View Modal */}
      {selectedItem && (
        <QuickViewModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <FurnitureAppContent />
    </AppProvider>
  );
}