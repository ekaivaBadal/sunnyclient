import React from 'react';
import { Tag, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

const ratePackages = [
  {
    title: 'Standard Console Pass',
    price: 'Pocket-Friendly',
    period: 'Hourly Sessions',
    description: 'Perfect for casual single-player campaigns or quick multiplayer sessions.',
    features: ['PS5, PS4, or Xbox Access', 'Full HD & 4K Displays', 'Free Instant Game Switching', 'Comfortable Recliner Seating']
  },
  {
    title: 'VR & Simulator Cockpit',
    price: 'Special Experience',
    period: 'Per Session / Hourly',
    description: 'Dedicated Virtual Reality suite and force-feedback steering wheel racing rig.',
    features: ['VR Motion Headset & Sensors', 'Logitech/Thrustmaster Steering Rig', 'Gran Turismo 7 & Forza Horizon', 'Attendant Guidance Included'],
    popular: true
  },
  {
    title: 'Console Home Rentals',
    price: 'Daily / Weekly',
    period: 'Take Home Packages',
    description: 'Rent PS5 or PS4 consoles with extra controllers for house parties and weekends.',
    features: ['PS5 / PS4 Console Kit', '2 to 4 Wireless Controllers', 'Bundle of Top 5 Games', 'Zero Hassle Pickup & Drop']
  }
];

export default function PricingMenu() {
  return (
    <section id="rates" className="py-24 px-6 relative border-t editorial-border-subtle bg-surface/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold block mb-3">Transparent Rates</span>
          <h2 className="font-serif text-3xl sm:text-5xl text-slate-100 font-light">
            Luxury gaming at <span className="serif-italic text-gold-400">accessible value</span>.
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mt-4">
            Special discounts for group gaming, weekend tournaments, and student happy hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ratePackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'glass-panel-gold glow-gold border editorial-border'
                  : 'glass-panel border editorial-border-subtle hover:border-gold-500/30'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-obsidian text-[10px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full shadow-md">
                  Most Requested
                </span>
              )}
              <div>
                <h3 className="font-serif text-2xl text-slate-100 mb-2">{pkg.title}</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">{pkg.description}</p>
                <div className="py-4 border-y editorial-border-subtle mb-6">
                  <div className="font-serif text-3xl text-gold-400 font-medium">{pkg.price}</div>
                  <span className="text-[11px] text-slate-500 uppercase tracking-widest">{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-3 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emeraldAccent shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/917028838447?text=Hi%20Sunny's%20Game%20Cafe,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-center transition-all duration-300 flex items-center justify-center space-x-2 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-obsidian font-bold glow-gold shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 text-white border editorial-border-subtle'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire Rates</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
