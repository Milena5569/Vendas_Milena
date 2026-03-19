"use client";

import Link from "next/link";
import { AlertTriangle, Loader2, Package, Search } from "lucide-react";

type StateIcon = "search" | "package" | "error";

interface StateAction {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface StatePanelProps {
  title: string;
  description: string;
  icon?: StateIcon;
  action?: StateAction;
  secondaryAction?: StateAction;
}

function resolveIcon(icon: StateIcon) {
  if (icon === "package") return Package;
  if (icon === "error") return AlertTriangle;
  return Search;
}

export function StatePanel({
  title,
  description,
  icon = "search",
  action,
  secondaryAction,
}: StatePanelProps) {
  const IconComponent = resolveIcon(icon);

  return (
    <div className="text-center py-12 px-4">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-surface-card border border-border-soft rounded-full mb-4 shadow-lg shadow-black/10">
        <IconComponent size={32} className="text-text-secondary" />
      </div>

      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary mb-6 max-w-md mx-auto leading-relaxed">{description}</p>

      {(action || secondaryAction) ? (
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          {action && action.href ? (
            <Link
              href={action.href}
              className="inline-flex items-center gap-2 bg-accent-primary text-background-primary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-accent-primary/20"
            >
              {action.label}
            </Link>
          ) : action && action.onClick ? (
            <button
              onClick={action.onClick}
              className="inline-flex items-center gap-2 bg-accent-primary text-background-primary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-accent-primary/20"
            >
              {action.label}
            </button>
          ) : null}

          {secondaryAction && secondaryAction.href ? (
            <Link
              href={secondaryAction.href}
              className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface-card px-6 py-3 font-semibold text-text-primary transition-colors hover:bg-surface-pink"
            >
              {secondaryAction.label}
            </Link>
          ) : secondaryAction && secondaryAction.onClick ? (
            <button
              onClick={secondaryAction.onClick}
              className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface-card px-6 py-3 font-semibold text-text-primary transition-colors hover:bg-surface-pink"
            >
              {secondaryAction.label}
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

interface LoadingStateProps {
  label?: string;
}

export function LoadingState({ label = "Carregando conteúdo..." }: LoadingStateProps) {
  return (
    <div className="flex min-h-[180px] flex-col items-center justify-center gap-3 rounded-2xl border border-border-soft bg-surface-card/70 p-6 text-center">
      <Loader2 size={24} className="animate-spin text-text-secondary" />
      <p className="text-sm text-text-secondary">{label}</p>
    </div>
  );
}

interface ErrorStateProps {
  title: string;
  description: string;
  action?: StateAction;
}

export function ErrorState({ title, description, action }: ErrorStateProps) {
  return <StatePanel title={title} description={description} icon="error" action={action} />;
}
