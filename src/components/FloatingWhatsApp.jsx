import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/917028838447?text=Hello%20Sunny's%20Game%20Cafe,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20slot."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Message"
        className="flex items-center justify-center w-14 h-14 bg-whatsapp hover:bg-emerald-500 text-white rounded-full shadow-2xl glow-emerald transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </aside>
  );
}
