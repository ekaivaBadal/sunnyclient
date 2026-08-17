import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConsolesMenu from './components/ConsolesMenu';
import GamesLibrary from './components/GamesLibrary';
import PricingMenu from './components/PricingMenu';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="relative min-h-screen bg-obsidian text-slate-200 overflow-x-hidden">
      {/* Background Mood Lighting Glows */}
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[650px] h-[650px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-[600px] h-[600px] bg-neonViolet/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-20 left-10 w-[700px] h-[700px] bg-neonCyan/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <Navbar />
      <main>
        <Hero />
        <ConsolesMenu />
        <GamesLibrary />
        <PricingMenu />
        <Testimonials />
        <BookingForm />
        <LocationMap />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
