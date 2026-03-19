"use client";

import { StatePanel } from "@/components/ui/state-primitives";

interface EmptyStateServerProps {
  title: string;
  description: string;
  icon?: "search" | "package";
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

function normalizeActionLabel(label: string) {
  const normalized = label.trim().toLowerCase();

  if (normalized.includes("limpar")) {
    return "Limpar filtros";
  }

  if (normalized.includes("oferta")) {
    return "Ver oferta";
  }

  if (normalized.includes("explorar") || normalized.includes("ver coleção") || normalized.includes("ver coleções")) {
    return "Explorar";
  }

  return label;
}

export function EmptyStateServer({ title, description, icon = "search", action, secondaryAction }: EmptyStateServerProps) {
  const safeDescription =
    description.trim() || "Não encontramos itens para esta seleção. Limpe os filtros ou explore outras opções.";

  return (
    <StatePanel
      title={title}
      description={safeDescription}
      icon={icon}
      action={action ? { ...action, label: normalizeActionLabel(action.label) } : undefined}
      secondaryAction={
        secondaryAction ? { ...secondaryAction, label: normalizeActionLabel(secondaryAction.label) } : undefined
      }
    />
  );
}