import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manoel F. Matos Dev",
  description: "Desenvolvedor web full stack focado em criação de sites, landing pages e sistemas otimizados. Solicite seu orçamento!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo1.svg" sizes="any" />
        <meta
          name="description"
          content="Desenvolvedor Web com foco em soluções modernas: sites, sistemas personalizados e landing pages otimizadas para SEO e performance."
        />
        <meta
          name="keywords"
          content="desenvolvedor web, programador freelancer, criação de sites, landing page, sistemas personalizados, full stack"
        />
        <meta property="og:title" content="Desenvolvedor Web Freelancer" />
        <meta
          property="og:description"
          content="Criação de sites profissionais, sistemas web personalizados e landing pages otimizadas para conversão. Orçamento rápido!"
        />
        {/* <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://seusite.com" />
        <meta property="og:type" content="website" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
