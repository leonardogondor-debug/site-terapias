// Lista de terapias oferecidas. Para adicionar uma nova, basta incluir um item aqui.

export type Servico = {
  slug: string;
  nome: string;
  icone: string;
  resumo: string;
  duracao: string;
  preco: number; // em reais
  online: boolean; // se pode ser feita por videochamada
};

export const servicos: Servico[] = [
  {
    slug: "reiki",
    nome: "Reiki",
    icone: "✋",
    resumo: "Técnica de canalização de energia que promove relaxamento profundo e equilíbrio emocional.",
    duracao: "60 min",
    preco: 150,
    online: true,
  },
  {
    slug: "acupuntura",
    nome: "Acupuntura",
    icone: "📍",
    resumo: "Estímulo de pontos específicos do corpo para aliviar dores, estresse e ansiedade.",
    duracao: "50 min",
    preco: 180,
    online: false,
  },
  {
    slug: "aromaterapia",
    nome: "Aromaterapia",
    icone: "🌿",
    resumo: "Uso terapêutico de óleos essenciais para harmonizar o humor e o sono.",
    duracao: "45 min",
    preco: 130,
    online: true,
  },
  {
    slug: "meditacao",
    nome: "Meditação guiada",
    icone: "🧘",
    resumo: "Sessões conduzidas para reduzir o estresse e desenvolver presença e foco.",
    duracao: "40 min",
    preco: 110,
    online: true,
  },
  {
    slug: "florais",
    nome: "Terapia floral",
    icone: "🌸",
    resumo: "Essências florais que auxiliam no equilíbrio de emoções e padrões de comportamento.",
    duracao: "60 min",
    preco: 140,
    online: true,
  },
  {
    slug: "massagem",
    nome: "Massagem relaxante",
    icone: "💆",
    resumo: "Alívio de tensões musculares e bem-estar completo em ambiente acolhedor.",
    duracao: "60 min",
    preco: 170,
    online: false,
  },
];

// Formata valor em reais
export function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
