import { Heart } from "lucide-react";
import { PublicShell } from "@/components/layout/public-shell";

export default function FavoritesPage() {
  return (
    <PublicShell>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 bg-surface-card/50 border border-border-soft rounded-full mx-auto mb-4">
            <Heart size={32} className="text-text-secondary" />
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Favoritos</h1>
          <p className="text-text-secondary">Em breve: Sistema de favoritos para salvar seus produtos preferidos.</p>
        </div>
        
        <div className="bg-surface-card border border-border-soft rounded-lg p-6">
          <div className="text-center text-text-secondary">
            <p>Estamos desenvolvendo um sistema de favoritos para que você possa salvar seus produtos preferidos.</p>
            <p className="mt-2">Enquanto isso, explore nossas coleções e categorias para descobrir produtos incríveis.</p>
          </div>
        </div>
      </div>
    </PublicShell>
  );
}