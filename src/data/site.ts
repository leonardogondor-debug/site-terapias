// Configurações gerais do site num só lugar.
// Troque estes dados pelos dados reais da empresa.

export const site = {
  nome: "Pausa Terapias",
  slogan: "Terapias holísticas para corpo, mente e alma",
  descricao:
    "Terapias holísticas e integrativas com acolhimento e profissionalismo. Atendimento presencial e online. Agende sua sessão.",
  // URL pública (definida no .env).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // WhatsApp 
  whatsapp: "5511999999999",
  whatsappMensagem: "Olá! Gostaria de saber mais sobre as terapias.",
  email: "exemplo@gmail.com",
  telefone: "(11) 99999-9999",
  endereco: "Rua Exemplo, 123 - São Paulo/SP",
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
