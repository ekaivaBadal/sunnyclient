import React from 'react';
import { Gamepad2, Sparkles, MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-28 px-6 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Category / Location Tag */}
        <div className="inline-flex items-center space-x-2 border editorial-border px-4 py-1.5 rounded-full bg-surfaceCard backdrop-blur-md mb-8">
          <span className="text-gold-400 text-xs tracking-[0.25em] uppercase font-bold">Premier Gaming Experience</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300 text-xs tracking-wider">Khamla, Nagpur</span>
        </div>

        {/* Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-slate-100 font-light leading-[1.1] tracking-tight mb-8">
          Where next-generation gaming meets <span className="serif-italic text-gold-400 font-normal">unfiltered comfort</span>.
        </h1>

        {/* Lead Paragraph */}
        <p className="text-base sm:text-lg text-slate-300/90 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Step into Nagpur’s premier boutique gaming lounge. Experience <strong>PlayStation 5</strong>, <strong>Xbox Series</strong>, <strong>Virtual Reality</strong>, and precision <strong>Force-Feedback Steering Rigs</strong> with an expansive library of 2025/2026 AAA blockbusters.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#booking"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-obsidian font-semibold text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300 shadow-xl glow-gold flex items-center justify-center space-x-2"
          >
            <span>Reserve Gaming Station</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://www.google.com/maps/place/?q=place_id:ChIJQx1PATC_1DsRibHWzrqC-XY"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 glass-panel hover:bg-white/10 text-white font-medium text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300 border editorial-border-subtle flex items-center justify-center space-x-2"
          >
            <MapPin className="w-4 h-4 text-gold-400" />
            <span>Open in Google Maps</span>
          </a>
        </div>

        {/* Trust Indicators Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b editorial-border py-8 text-center gap-6">
          <div className="border-r editorial-border-subtle pr-4">
            <div className="font-serif text-3xl md:text-4xl text-gold-400 font-medium">5.0 ★</div>
            <div className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">Google & Justdial Rating</div>
          </div>
          <div className="md:border-r editorial-border-subtle pr-4">
            <div className="font-serif text-3xl md:text-4xl text-slate-100 font-medium">4K 120Hz</div>
            <div className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">Ultra HD Visuals</div>
          </div>
          <div className="border-r editorial-border-subtle pr-4">
            <div className="font-serif text-3xl md:text-4xl text-gold-400 font-medium">8 AM–12 AM</div>
            <div className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">Open 7 Days a Week</div>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-4xl text-slate-100 font-medium">Khamla</div>
            <div className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">London Street, Nagpur</div>
          </div>
        </div>
      </div>
    </section>
  );
}
