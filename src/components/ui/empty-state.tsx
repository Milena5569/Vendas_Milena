"use client";

import { Search, Package } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: "search" | "package";
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ title, description, icon = "search", action }: EmptyStateProps) {
  const IconComponent = icon === "search" ? Search : Package;

  return (
    <div className="text-center py-12 px-4">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-surface-card border border-border-soft rounded-full mb-4 shadow-lg shadow-black/10">
        <IconComponent size={32} className="text-text-secondary" />
      </div>
      
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary mb-6 max-w-md mx-auto leading-relaxed">
        {description}
      </p>
      
      {action && (
        <button
          onClick={action.onClick}
          className="inline-flex items-center gap-2 bg-accent-primary text-background-primary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-accent-primary/20"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
