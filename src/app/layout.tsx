import "./globals.css";
import type { Metadata } from "next";
import { Fredoka, Quicksand } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-title",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "ClickVendas — Ofertas selecionadas",
  description: "Hub premium de ofertas com Shopee, Shein e TikTok Shop.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${quicksand.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen bg-background-primary">
        {children}
      </body>
    </html>
  );
}
