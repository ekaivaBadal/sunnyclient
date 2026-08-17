import React, { useState } from 'react';
import { Gamepad2, MessageCircle, Menu, X, MapPin, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="border-b editorial-border-subtle bg-obsidian/95 backdrop-blur-md py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs tracking-[0.2em] uppercase text-slate-400 font-medium">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emeraldAccent animate-pulse"></span>
            <span>Open Daily: 8:00 AM – 12:00 AM Midnight</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <span><MapPin className="inline w-3.5 h-3.5 text-gold-400 mr-1" /> London Street, Khamla, Nagpur</span>
            <a href="tel:+917028838447" className="hover:text-gold-400 transition-colors">
              <Phone className="inline w-3.5 h-3.5 text-gold-400 mr-1" /> +91 70288 38447
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-obsidian/90 backdrop-blur-xl border-b editorial-border-subtle">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="group flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-bold">Nagpur • Gaming Lounge</span>
            <span className="font-serif text-2xl md:text-3xl text-white tracking-wide group-hover:text-gold-300 transition-colors">
              SUNNY'S <span className="serif-italic text-gold-400 font-normal">Game Cafe</span>
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-semibold text-slate-300">
            <a href="#home" className="hover:text-gold-400 transition-colors py-1">Home</a>
            <a href="#consoles" className="hover:text-gold-400 transition-colors py-1">Consoles & Rigs</a>
            <a href="#games" className="hover:text-gold-400 transition-colors py-1">Games Library</a>
            <a href="#rates" className="hover:text-gold-400 transition-colors py-1">Rates & Rentals</a>
            <a href="#reviews" className="hover:text-gold-400 transition-colors py-1">Reviews</a>
            <a href="#location" className="hover:text-gold-400 transition-colors py-1">Location</a>
          </nav>

          {/* CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="https://wa.me/917028838447?text=Hi%20Sunny's%20Game%20Cafe,%20I%20would%20like%20to%20book%20a%20gaming%20slot."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 glow-emerald shadow-lg transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-gold-400 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-surface border-b editorial-border px-6 py-6 space-y-4 text-xs uppercase tracking-widest font-semibold">
            <a href="#home" onClick={() => setIsOpen(false)} className="block py-2 text-slate-200 hover:text-gold-400">Home</a>
            <a href="#consoles" onClick={() => setIsOpen(false)} className="block py-2 text-slate-200 hover:text-gold-400">Consoles & Rigs</a>
            <a href="#games" onClick={() => setIsOpen(false)} className="block py-2 text-slate-200 hover:text-gold-400">Games Library</a>
            <a href="#rates" onClick={() => setIsOpen(false)} className="block py-2 text-slate-200 hover:text-gold-400">Rates & Rentals</a>
            <a href="#reviews" onClick={() => setIsOpen(false)} className="block py-2 text-slate-200 hover:text-gold-400">Reviews</a>
            <a href="#location" onClick={() => setIsOpen(false)} className="block py-2 text-slate-200 hover:text-gold-400">Location & Hours</a>
            <a
              href="https://wa.me/917028838447?text=Hi%20Sunny's%20Game%20Cafe,%20I%20would%20like%20to%20book%20a%20gaming%20slot."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-emerald-600 text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book on WhatsApp</span>
            </a>
          </div>
        )}
      </header>
    </>
  );
}
