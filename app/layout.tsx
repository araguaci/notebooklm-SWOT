import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://notebooklm-swot.vercel.app";
const siteName = "🛰️ SWOT: Da Estratégia Empresarial ao Monitoramento Oceânico Global";
const description = "Os textos detalham a Análise SWOT, também conhecida como Matriz FOFA, uma ferramenta estratégica essencial para diagnosticar forças, fraquezas, oportunidades e ameaças em contextos empresariais, tecnológicos e pessoais. As fontes exploram desde as origens históricas do método na década de 1960 até sua aplicação moderna em engenharia de software e no monitoramento ambiental, como exemplificado pela missão satelital SWOT (Surface Water and Ocean Topography). Um destaque central é a Análise SWOT Cruzada (TOWS), que evolui o diagnóstico inicial ao conectar fatores internos e externos para gerar planos de ação ofensivos, defensivos, de reforço ou confrontativos.";

export const metadata: Metadata = {
  title: siteName,
  description: description,
  keywords: ["SWOT", "Análise SWOT", "Matriz FOFA", "TOWS", "Planejamento Estratégico", "NotebookLM", "Estratégia Empresarial"],
  authors: [{ name: "araguaci", url: "https://github.com/araguaci" }],
  creator: "araguaci",
  publisher: "araguaci",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: siteName,
    description: description,
    siteName: "SWOT Analysis - NotebookLM",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: description,
    creator: "@artesdosul",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/icon-512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SWOT Analysis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

