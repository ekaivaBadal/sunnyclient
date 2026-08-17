import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    quote: "Superb place! Pocket friendly, great ambience and highly suggested for gamers. The owner is also very friendly and kind. 10 out of 10 place in Nagpur!",
    author: "Verified Gamer",
    tag: "Regular Patron",
    rating: 5
  },
  {
    quote: "If you're tired of crowded, dusty cyber cafes, Sunny's gaming cafe is the level up you've been looking for. Latest PS5, PS4, VR, and Steering console for the best relaxation.",
    author: "Console Enthusiast",
    tag: "VR & Cockpit Review",
    rating: 5,
    highlight: true
  },
  {
    quote: "Best gaming cafe ever, great games library, and unlimited switching between games makes the experience even better. Brilliant visibility and seating arrangement!",
    author: "Multiplayer Squad",
    tag: "Tournament Player",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 px-6 relative border-t editorial-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold block mb-3">Player Testimonials</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-slate-100 font-light">
              Voices of the <span className="serif-italic text-gold-400">Nagpur gaming community</span>.
            </h2>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-3 text-slate-300 text-sm">
            <div className="flex text-gold-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-gold-400" />
              ))}
            </div>
            <span className="font-semibold text-white">5.0 / 5.0 Rating</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 text-xs uppercase tracking-wider">Verified Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                rev.highlight
                  ? 'glass-panel-gold glow-gold border editorial-border'
                  : 'glass-panel border editorial-border-subtle hover:border-gold-500/30'
              }`}
            >
              <div>
                <div className="flex text-gold-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current text-gold-400" />
                  ))}
                </div>
                <p className="text-slate-200 text-sm font-light leading-relaxed mb-6">
                  “{rev.quote}”
                </p>
              </div>
              <div className="pt-4 border-t editorial-border-subtle flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-200 font-semibold block">{rev.author}</span>
                  <span className="text-[11px] text-slate-500">{rev.tag}</span>
                </div>
                <span className="text-[10px] text-gold-400 uppercase tracking-widest font-mono">Google Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
