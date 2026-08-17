import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function LocationMap() {
  return (
    <section id="location" className="py-24 px-6 relative border-t editorial-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold block mb-3">Central Khamla Hub</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-100 font-light leading-snug">
                Located on <span className="serif-italic text-gold-400">London Street</span>.
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gold-500/10 border editorial-border text-gold-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-1">Lounge Address</h4>
                  <p className="text-sm text-slate-200 leading-relaxed font-light">
                    PLOT NO. 5, JAITALA MINI RING ROAD,<br />
                    Jetwan Housing Society, Above WTF Cafe,<br />
                    Shastri Layout, Khamla, Nagpur 440025
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gold-500/10 border editorial-border text-gold-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-1">Operating Hours</h4>
                  <p className="text-sm text-slate-200 leading-relaxed font-light">
                    Monday – Sunday: <strong>8:00 AM – 12:00 AM Midnight</strong><br />
                    <span className="text-gold-400 text-xs">Open 7 Days a Week</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gold-500/10 border editorial-border text-gold-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-1">Call & WhatsApp</h4>
                  <p className="text-sm text-slate-200 leading-relaxed font-light">
                    <a href="tel:+917028838447" className="hover:text-gold-400 transition-colors font-medium">
                      +91 70288 38447
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJQx1PATC_1DsRibHWzrqC-XY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-6 py-3.5 bg-gold-500/10 hover:bg-gold-500/20 text-gold-400 border editorial-border rounded-full text-xs font-semibold uppercase tracking-widest transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-3 rounded-3xl border editorial-border overflow-hidden glow-gold">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-slate-900">
                <iframe
                  title="SUNNY'S Game Cafe Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.189498263158!2d79.052601!3d21.104781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf30014f1d43%3A0x76f982ba6ed6b126!2sSUNNY&#39;S%20Game%20Cafe!5e0!3m2!1sen!2sin!4v1723820000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-4 left-4 right-4 bg-obsidian/90 backdrop-blur-md p-4 rounded-xl border editorial-border-subtle flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">SUNNY'S Game Cafe</div>
                    <div className="text-[11px] text-slate-400">Jaitala Mini Ring Road, Khamla</div>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/?q=place_id:ChIJQx1PATC_1DsRibHWzrqC-XY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gold-500 hover:bg-gold-400 text-obsidian text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
