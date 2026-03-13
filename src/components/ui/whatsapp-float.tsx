"use client";

import { MessageCircle } from "lucide-react";

const CLICKVENDAS_WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/B7RtXNoiRq90LfQnCOPWX0?mode=hqctcla";

export function WhatsAppFloat() {
  return (
    <a
      href={CLICKVENDAS_WHATSAPP_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed z-40 inline-flex items-center gap-2 rounded-full border border-[#F2D4DE] bg-[#F7B6CC] px-3 py-3 text-[#1D1D20] shadow-[0_10px_28px_rgba(236,143,177,0.28)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#EC8FB1] hover:shadow-[0_14px_34px_rgba(236,143,177,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7B6CC] focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary sm:px-4"
      style={{
        right: "max(1.25rem, env(safe-area-inset-right, 0px))",
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
      }}
      aria-label="Entrar no grupo do WhatsApp ClickVendas"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/25">
        <MessageCircle size={22} className="text-[#1D1D20]" aria-hidden="true" />
      </span>
      <span className="hidden text-sm font-semibold tracking-wide text-white sm:inline">
        Entrar no grupo
      </span>
    </a>
  );
}
