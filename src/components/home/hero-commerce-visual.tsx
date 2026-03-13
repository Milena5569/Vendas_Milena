import React from 'react';

export function HeroCommerceVisual() {
  return (
    <div className="relative">
      {/* Main Commerce Illustration */}
      <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
        {/* Floating Product Cards */}
        <div className="absolute top-0 left-0 w-20 h-14 md:w-24 md:h-16 bg-surface-card border border-border-soft rounded-xl shadow-lg shadow-black/10 opacity-90 transform rotate-[-5deg]"></div>
        <div className="absolute top-4 right-0 w-16 h-12 md:w-20 md:h-14 bg-surface-card border border-border-soft rounded-xl shadow-lg shadow-black/10 opacity-80 transform rotate-[3deg]"></div>
        <div className="absolute bottom-0 left-4 w-24 h-16 md:w-28 md:h-18 bg-surface-card border border-border-soft rounded-xl shadow-lg shadow-black/10 opacity-85 transform rotate-[-2deg]"></div>
        
        {/* Central Shopping Bag Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg width="80" height="80" viewBox="0 0 96 96" fill="none" className="drop-shadow-lg">
            {/* Bag Body */}
            <rect x="16" y="28" width="64" height="44" rx="8" fill="#171A21" stroke="#232730" strokeWidth="2"/>
            {/* Bag Handle */}
            <path d="M28 28 C28 20 36 16 44 16 C52 16 60 20 60 28" stroke="#232730" strokeWidth="3" fill="none"/>
            {/* Price Tag */}
            <circle cx="56" cy="48" r="12" fill="#F2B705" opacity="0.8"/>
            <circle cx="56" cy="48" r="10" fill="#171A21" stroke="#232730" strokeWidth="2"/>
            <text x="56" y="52" textAnchor="middle" className="text-xs font-bold fill-text-primary" fontSize="8">R$</text>
            
            {/* Cursor/Click Indicator */}
            <path d="M12 20 L24 32 L18 38 L30 50" stroke="#9AA3B2" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <circle cx="30" cy="50" r="4" fill="#F2B705" opacity="0.9"/>
            
            {/* Favorite Heart */}
            <path d="M72 32 C76 28 80 32 80 36 C80 40 76 44 72 40 C68 44 64 40 64 36 C64 32 68 28 72 32 Z" fill="#4CAF6A" opacity="0.8" stroke="#232730" strokeWidth="2"/>
            
            {/* Small Package Box */}
            <rect x="36" y="60" width="24" height="16" rx="4" fill="#171A21" stroke="#232730" strokeWidth="2"/>
            <path d="M36 68 L60 68" stroke="#232730" strokeWidth="2"/>
            <path d="M48 60 L48 76" stroke="#232730" strokeWidth="2"/>
          </svg>
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 w-6 h-6 md:w-8 md:h-8 bg-accent-primary/20 border border-border-soft rounded-full flex items-center justify-center">
          <span className="text-xs">⭐</span>
        </div>
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-8 h-5 md:w-10 md:h-6 bg-surface-card border border-border-soft rounded-full flex items-center justify-center text-xs text-text-secondary">
          +100
        </div>
        
        {/* Subtle Glow Background */}
        <div className="absolute inset-0 bg-gradient-radial from-accent-primary/5 to-transparent rounded-full"></div>
      </div>
      
      {/* Caption */}
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Descubra Ofertas
        </h3>
        <p className="text-text-secondary text-sm">
          Shopping inteligente com curadoria premium
        </p>
      </div>
    </div>
  );
}