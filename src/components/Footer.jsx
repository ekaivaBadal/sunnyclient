import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t editorial-border-subtle bg-obsidian">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="font-serif text-2xl text-slate-100">
            SUNNY'S <span className="serif-italic text-gold-400 font-normal">Game Cafe</span>
          </span>
          <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">London Street • Khamla • Nagpur</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-slate-400 font-medium">
          <a href="#home" className="hover:text-gold-400 transition-colors">Home</a>
          <a href="#consoles" className="hover:text-gold-400 transition-colors">Consoles</a>
          <a href="#games" className="hover:text-gold-400 transition-colors">Games</a>
          <a href="#rates" className="hover:text-gold-400 transition-colors">Rates</a>
          <a href="#reviews" className="hover:text-gold-400 transition-colors">Reviews</a>
          <a href="#location" className="hover:text-gold-400 transition-colors">Location</a>
        </div>

        <div className="text-xs text-slate-500 text-center md:text-right">
          <p>© 2026 SUNNY'S Game Cafe. All Rights Reserved.</p>
          <p className="text-[10px] mt-0.5 text-slate-600">Built with Luxury Editorial Design & React.</p>
        </div>
      </div>
    </footer>
  );
}
