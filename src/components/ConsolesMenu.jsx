import React from 'react';
import { Gamepad2, Eye, Compass, Shield, ArrowUpRight } from 'lucide-react';

const setups = [
  {
    tag: '01 • FLAGSHIP SONY CONSOLE',
    title: 'PlayStation 5 (PS5)',
    description: 'Ultra-high-speed SSD, ray-tracing visuals at 4K 120FPS, and DualSense haptic feedback controllers for unmatched immersion.',
    accent: '4K 120Hz Displays',
    queryText: 'PlayStation 5 Slot Booking'
  },
  {
    tag: '02 • NEXT-GEN MICROSOFT GAMING',
    title: 'Xbox Series Gaming Station',
    description: 'High-performance quick-resume gameplay with massive Xbox Game Pass Ultimate titles, Dolby Vision, and fluid precision controllers.',
    accent: '12 Teraflops Power',
    queryText: 'Xbox Series Slot Booking'
  },
  {
    tag: '03 • FULL 360° IMMERSION',
    title: 'Virtual Reality (VR) Suite',
    description: 'Step directly into the virtual realm with premium VR motion controllers, 3D spatial audio, and exhilarating interactive experiences.',
    accent: 'Spatial 3D Tracking',
    queryText: 'Virtual Reality VR Booking'
  },
  {
    tag: '04 • SIMULATION RACING COCKPIT',
    title: 'Force-Feedback Steering Rig',
    description: 'Professional racing wheel cockpit with responsive paddle shifters, floor pedals, and realistic force feedback for Gran Turismo & Forza.',
    accent: 'TrueForce Wheel & Pedals',
    queryText: 'Racing Steering Rig Booking'
  },
  {
    tag: '05 • PRO MULTIPLAYER SESSIONS',
    title: 'PlayStation 4 (PS4 Pro) Lounges',
    description: 'Cozy party gaming stations perfect for FIFA/EA FC tournaments, WWE, Tekken, and couch co-op multiplayer battles with friends.',
    accent: '4-Player Co-op Ready',
    queryText: 'PS4 Multiplayer Slot Booking'
  },
  {
    tag: '06 • NOSTALGIA ARCHIVES',
    title: 'Retro PlayStation 2 (PS2) Station',
    description: 'Relive classic legendary childhood adventures (SmackDown Here Comes The Pain, San Andreas, Dragon Ball Z) on authentic retro setups.',
    accent: 'Timeless Classics',
    queryText: 'PS2 Retro Gaming Booking'
  }
];

export default function ConsolesMenu() {
  return (
    <section id="consoles" className="py-24 px-6 relative border-t editorial-border-subtle bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold block mb-3">The Hardware Setup</span>
          <h2 className="font-serif text-3xl sm:text-5xl text-slate-100 font-light">
            Engineered setups curated for <span className="serif-italic text-gold-400">elite players</span>.
          </h2>
          <div className="w-24 h-[1px] bg-gold-400/40 mx-auto mt-6"></div>
        </div>

        {/* Luxury Vertical List / Menu Board */}
        <div className="divide-y editorial-border">
          {setups.map((setup, index) => (
            <div
              key={index}
              className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.02] px-4 rounded-xl transition-all duration-300"
            >
              <div className="md:w-5/12">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-bold block mb-1">
                  {setup.tag}
                </span>
                <h3 className="font-serif text-2xl text-slate-100 group-hover:text-gold-300 transition-colors">
                  {setup.title}
                </h3>
                <span className="inline-block text-[11px] text-slate-400 font-mono mt-1">
                  Feature: {setup.accent}
                </span>
              </div>
              <div className="md:w-5/12">
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  {setup.description}
                </p>
              </div>
              <div className="md:w-auto text-right">
                <a
                  href={`https://wa.me/917028838447?text=Hi%20Sunny's%20Game%20Cafe,%20I%20want%20to%20reserve%20a%20slot%20for%20${encodeURIComponent(setup.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs uppercase tracking-widest text-gold-400 hover:text-white font-semibold group-hover:translate-x-1 transition-transform"
                >
                  <span>Book Slot</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
