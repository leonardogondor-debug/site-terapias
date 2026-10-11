import type { Metadata } from "next";
import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/footer";
import WhatsappBotao from "@/components/whatsappbotao/whatsappbotao";
import { site } from "@/data/site";
import "./globals.css";

// SEO básico: título, descrição, Open Graph e URL base para todas as páginas
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} | Terapias Holísticas`,
    template: `%s | ${site.nome}`, // páginas internas: "Título | Nome do site"
  },
  description: site.descricao,
  openGraph: {
    title: site.nome,
    description: site.descricao,
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
  },
};

// Layout raiz: o Menu, o Footer e o botão de WhatsApp aparecem em todas as páginas
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Dados estruturados (JSON-LD) ajudam o Google a entender o negócio local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: site.nome,
    description: site.descricao,
    url: site.url,
    telephone: site.telefone,
    email: site.email,
    address: site.endereco,
  };

  return (
    <html lang="pt-BR">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Menu />
        <main>{children}</main>
        <Footer />
        <WhatsappBotao />
      </body>
    </html>
  );
}
