import React, { useState } from 'react';
import { Sparkles, Trophy, Flame, Swords, ShieldAlert } from 'lucide-react';

const categories = ['All Titles', 'Action & Adventure', 'Sports & Racing', 'Fighting & Multiplayer', 'VR Immersion'];

const games = [
  { title: "Grand Theft Auto V", category: "Action & Adventure", badge: "Most Popular", platform: "PS5 / Xbox" },
  { title: "EA Sports FC 25 / FIFA", category: "Sports & Racing", badge: "Tournament Favourite", platform: "PS5 / PS4" },
  { title: "Marvel's Spider-Man 2", category: "Action & Adventure", badge: "4K HDR", platform: "PS5 Exclusive" },
  { title: "Tekken 8", category: "Fighting & Multiplayer", badge: "Competitive", platform: "PS5 / Xbox" },
  { title: "God of War Ragnarök", category: "Action & Adventure", badge: "Masterpiece", platform: "PS5" },
  { title: "Gran Turismo 7", category: "Sports & Racing", badge: "Steering Cockpit", platform: "PS5 Rig" },
  { title: "Mortal Kombat 1", category: "Fighting & Multiplayer", badge: "Versus Co-op", platform: "PS5 / Xbox" },
  { title: "Forza Horizon 5", category: "Sports & Racing", badge: "Open World", platform: "Xbox Series" },
  { title: "Cyberpunk 2077: Phantom Liberty", category: "Action & Adventure", badge: "Ray Tracing", platform: "PS5" },
  { title: "Beat Saber & Horizon VR", category: "VR Immersion", badge: "Full VR", platform: "VR Motion" },
  { title: "Call of Duty: Modern Warfare III", category: "Action & Adventure", badge: "120 FPS", platform: "PS5 / Xbox" },
  { title: "Cricket 24", category: "Sports & Racing", badge: "Co-op & Versus", platform: "PS5 / PS4" },
];

export default function GamesLibrary() {
  const [activeCategory, setActiveCategory] = useState('All Titles');

  const filteredGames = activeCategory === 'All Titles' 
    ? games 
    : games.filter(g => g.category === activeCategory);

  return (
    <section id="games" className="py-24 px-6 relative border-t editorial-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold block mb-3">The Curated Archive</span>
          <h2 className="font-serif text-3xl sm:text-5xl text-slate-100 font-light">
            Unlimited switching across <span className="serif-italic text-gold-400">latest titles</span>.
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-4">
            Switch between games anytime during your session at zero extra fee. Our library includes all 2025/2026 releases and competitive multiplayer hits.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-500 text-obsidian shadow-lg glow-gold'
                  : 'glass-panel text-slate-400 hover:text-white border editorial-border-subtle'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Games Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border editorial-border-subtle hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-gold-400">{game.platform}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] text-[10px] text-slate-300 border border-white/10 uppercase tracking-wider">
                    {game.badge}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-slate-100 group-hover:text-gold-300 transition-colors">
                  {game.title}
                </h3>
              </div>
              <div className="mt-6 pt-4 border-t editorial-border-subtle flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-slate-400">{game.category}</span>
                <a
                  href={`https://wa.me/917028838447?text=Hi%20Sunny's%20Game%20Cafe,%20is%20${encodeURIComponent(game.title)}%20available%20to%20play%20today?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gold-400 hover:text-white font-semibold tracking-wider uppercase"
                >
                  Play Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
