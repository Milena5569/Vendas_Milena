import { EmptyStateServer } from "./empty-state-server";

interface EmptyStateWrapperProps {
  title: string;
  description: string;
  icon?: "search" | "package";
  action?: {
    label: string;
    href?: string;
  };
}

export function EmptyStateWrapper({ title, description, icon, action }: EmptyStateWrapperProps) {
  return (
    <EmptyStateServer 
      title={title}
      description={description}
      icon={icon}
      action={action}
    />
  );
}