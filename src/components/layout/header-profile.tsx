"use client";

import { User, Star, Shield } from "lucide-react";

interface HeaderProfileProps {
  username?: string;
  avatarUrl?: string;
  isVip?: boolean;
}

export function HeaderProfile({ 
  username = "Usuário", 
  avatarUrl, 
  isVip = false
}: HeaderProfileProps) {
  return (
    <div className="bg-surface-card border border-border-soft rounded-2xl p-4 shadow-lg shadow-black/10">
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="relative">
          <div className={`w-12 h-12 rounded-full border-2 ${isVip ? 'border-yellow-400/50 bg-gradient-to-br from-yellow-400 to-orange-500' : 'border-border-soft bg-background-primary'} flex items-center justify-center relative overflow-hidden`}>
            {avatarUrl ? (
              <img 
                src={avatarUrl} 
                alt={username}
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={24} className="text-text-secondary" />
            )}
          </div>
          
          {/* VIP Badge */}
          {isVip && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400/20 border-2 border-background-primary rounded-full flex items-center justify-center">
              <Star size={12} className="text-yellow-300" />
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-text-primary truncate">{username}</h3>
            {isVip && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/15 border border-yellow-400/30 rounded-full text-xs text-yellow-300 font-medium">
                <Shield size={12} />
                VIP
              </span>
            )}
          </div>
          <p className="text-xs text-text-secondary">Membro premium</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border-soft">
        <div className="text-center flex-1">
          <div className="text-lg font-bold text-text-primary">24</div>
          <div className="text-xs text-text-secondary">Produtos</div>
        </div>
        <div className="text-center flex-1">
          <div className="text-lg font-bold text-text-primary">1.2K</div>
          <div className="text-xs text-text-secondary">Vendas</div>
        </div>
        <div className="text-center flex-1">
          <div className="text-lg font-bold text-text-primary">4.8</div>
          <div className="text-xs text-text-secondary">Avaliação</div>
        </div>
      </div>
    </div>
  );
}
