import { ReactNode } from "react";
import { StoreFooter } from "@/components/layout/footer";
import { StoreHeader } from "@/components/layout/header";

interface PublicShellProps {
  children: ReactNode;
  contentClassName?: string;
}

const DEFAULT_CONTENT_CLASSNAME = "container mx-auto px-4 py-8";

export function PublicShell({
  children,
  contentClassName = DEFAULT_CONTENT_CLASSNAME,
}: PublicShellProps) {
  return (
    <div className="min-h-screen bg-background-primary">
      <StoreHeader />
      <main className={contentClassName}>{children}</main>
      <StoreFooter />
    </div>
  );
}
