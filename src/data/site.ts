// Configurações gerais do site num só lugar.
// Troque estes dados pelos dados reais da empresa.

export const site = {
  nome: "Espaço Equilíbrio",
  slogan: "Terapias holísticas para corpo, mente e alma",
  descricao:
    "Terapias holísticas e integrativas com acolhimento e profissionalismo. Atendimento presencial e online. Agende sua sessão.",
  // URL pública (definida no .env). Usada em SEO, sitemap e robots.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // WhatsApp no formato internacional, sem + nem espaços (55 + DDD + número)
  whatsapp: "5511999999999",
  whatsappMensagem: "Olá! Gostaria de saber mais sobre as terapias.",
  email: "contato@espacoequilibrio.com.br",
  telefone: "(11) 99999-9999",
  endereco: "Rua das Flores, 123 - São Paulo/SP",
  // Link do checkout (Mercado Pago, Stripe Payment Link etc.)
  pagamentoUrl: process.env.NEXT_PUBLIC_PAGAMENTO_URL ?? "",
  redes: [
    { nome: "Instagram", url: "https://instagram.com/" },
    { nome: "Facebook", url: "https://facebook.com/" },
    { nome: "YouTube", url: "https://youtube.com/" },
  ],
};

// Itens do menu de navegação
export const links = [
  { href: "/", rotulo: "Início" },
  { href: "/sobre", rotulo: "Sobre" },
  { href: "/servicos", rotulo: "Terapias" },
  { href: "/blog", rotulo: "Blog" },
  { href: "/contato", rotulo: "Contato" },
];

// Gera o link do WhatsApp com mensagem pré-preenchida
export function linkWhatsapp(mensagem: string = site.whatsappMensagem) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
