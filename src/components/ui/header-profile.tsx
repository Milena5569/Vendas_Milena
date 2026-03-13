import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";

export function HeaderProfile() {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-accent-primary/15 bg-gradient-to-br from-background-primary via-surface-card to-background-primary p-5 shadow-2xl shadow-black/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,183,5,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(242,183,5,0.08),transparent_30%)]" />

      <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border border-accent-primary/30">
            <Image
              src="/images/profile.jpg"
              alt="Foto de perfil"
              fill
              className="object-cover"
              sizes="80px"
              priority
            />
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.25em] text-accent-primary/80">
              Curadoria premium
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
              Seu Hub de Ofertas
            </h1>
            <p className="max-w-xl text-sm leading-6 text-text-secondary">
              Achados selecionados de Shopee, Shein e TikTok Shop com visual
              premium, navegação rápida e foco total em conversão mobile.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://chat.whatsapp.com/B7RtXNoiRq90LfQnCOPWX0?mode=hqctcla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent-success px-5 py-3 text-sm font-semibold text-background-primary transition hover:scale-102"
          >
            <MessageCircle size={18} />
            Grupo VIP
          </a>

          <a
            href="https://www.instagram.com/click_vendasachadinhos?igsh=MTd1enZxdXZsaWxmbA=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border-soft bg-surface-card px-5 py-3 text-sm font-semibold text-text-primary transition hover:scale-102 hover:border-accent-primary/30"
          >
            <Instagram size={18} />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
