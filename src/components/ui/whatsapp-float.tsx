"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppFloatProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppFloat({ phoneNumber, message = "Olá! Gostaria de saber mais sobre os produtos." }: WhatsAppFloatProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Conversar no WhatsApp"
    >
      <div className="relative">
        {/* Floating shadow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
        
        {/* Main button */}
        <div className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-xl shadow-green-500/25 flex items-center justify-center group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 border-2 border-background-primary/20">
          <MessageCircle size={28} className="text-white drop-shadow-lg" />
        </div>

        {/* Floating animation dots */}
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-white/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </a>
  );
}
