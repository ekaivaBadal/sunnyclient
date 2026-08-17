import React, { useState } from 'react';
import { Send, Clock, Sparkles, MessageCircle } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    setupType: 'PlayStation 5 (PS5)',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '6:00 PM',
    playersCount: '2 Players',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let message = `*SUNNY'S Game Cafe - Slot Reservation Request*\n\n`;
    message += `👤 *Gamer Name:* ${formData.name}\n`;
    message += `📞 *Phone / WhatsApp:* ${formData.phone}\n`;
    message += `🎮 *Station/Setup:* ${formData.setupType}\n`;
    message += `👥 *Number of Players:* ${formData.playersCount}\n`;
    message += `📅 *Date:* ${formData.date}\n`;
    message += `⏰ *Estimated Time:* ${formData.timeSlot}\n`;
    if (formData.notes) {
      message += `📝 *Preferred Games / Notes:* ${formData.notes}\n`;
    }
    message += `\n_Submitted via SUNNY'S Game Cafe Website_`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/917028838447?text=${encoded}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 px-6 relative border-t editorial-border-subtle bg-surface/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold block mb-3">Instant Slot Reservation</span>
          <h2 className="font-serif text-3xl sm:text-5xl text-slate-100 font-light">
            Book your throne via <span className="serif-italic text-emerald-400">WhatsApp</span>.
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mt-4">
            Select your preferred setup and time. Your details will be formatted directly into a WhatsApp reservation sent to Sunny's desk.
          </p>
        </div>

        <div className="glass-panel p-8 sm:p-12 rounded-3xl border editorial-border shadow-2xl relative overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Badal Ramteke"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-obsidian/70 border editorial-border-subtle rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-obsidian/70 border editorial-border-subtle rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">Gaming Setup *</label>
                <select
                  value={formData.setupType}
                  onChange={(e) => setFormData({ ...formData, setupType: e.target.value })}
                  className="w-full bg-obsidian/70 border editorial-border-subtle rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors"
                >
                  <option value="PlayStation 5 (PS5)">PlayStation 5 (PS5)</option>
                  <option value="Xbox Series Console">Xbox Series Console</option>
                  <option value="Virtual Reality (VR)">Virtual Reality (VR)</option>
                  <option value="Steering Wheel Racing Rig">Steering Wheel Racing Rig</option>
                  <option value="PlayStation 4 (PS4)">PlayStation 4 (PS4)</option>
                  <option value="Retro PS2 Station">Retro PS2 Station</option>
                  <option value="Console Home Rental Inquiry">Console Home Rental Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">Players *</label>
                <select
                  value={formData.playersCount}
                  onChange={(e) => setFormData({ ...formData, playersCount: e.target.value })}
                  className="w-full bg-obsidian/70 border editorial-border-subtle rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors"
                >
                  <option value="1 Player (Solo)">1 Player (Solo)</option>
                  <option value="2 Players (Duo)">2 Players (Duo)</option>
                  <option value="3-4 Players (Squad)">3-4 Players (Squad)</option>
                  <option value="5+ Group / Party">5+ Group / Party</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">Reservation Date *</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-obsidian/70 border editorial-border-subtle rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">Preferred Specific Games or Special Requests (Optional)</label>
              <textarea
                rows="3"
                placeholder="e.g. GTA V, Tekken 8 multiplayer tournament with friends..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-obsidian/70 border editorial-border-subtle rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-gold-400 transition-colors"
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-between border-t editorial-border-subtle">
              <div className="text-xs text-slate-400 flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>Open daily from <strong>8:00 AM – 12:00 AM Midnight</strong></span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300 glow-emerald flex items-center justify-center space-x-3 shadow-lg cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send WhatsApp Reservation</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
