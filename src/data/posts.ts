// Artigos do blog guardados localmente.
// Futuramente podem vir de um CMS (Sanity, Contentful, etc.).

export type Post = {
  slug: string;
  titulo: string;
  resumo: string;
  data: string; // formato AAAA-MM-DD
  conteudo: string[]; // cada item é um parágrafo
};

export const posts: Post[] = [
  {
    slug: "5-habitos-para-reduzir-o-estresse",
    titulo: "5 hábitos simples para reduzir o estresse",
    resumo: "Pequenas práticas diárias que fazem diferença no seu bem-estar emocional.",
    data: "2026-09-20",
    conteudo: [
      "O estresse faz parte da vida moderna, mas podemos aprender a lidar melhor com ele.",
      "Respirar com consciência por alguns minutos, manter uma rotina de sono, movimentar o corpo, reduzir telas à noite e reservar tempo para si são hábitos simples e eficazes.",
      "As terapias holísticas complementam essas práticas, oferecendo um espaço de cuidado e escuta.",
    ],
  },
  {
    slug: "o-que-e-reiki",
    titulo: "O que é Reiki e como funciona uma sessão?",
    resumo: "Entenda os princípios do Reiki e o que esperar do primeiro atendimento.",
    data: "2026-09-05",
    conteudo: [
      "O Reiki é uma técnica japonesa de imposição de mãos que busca equilibrar a energia do corpo.",
      "Na sessão, você fica deitado, vestido, em ambiente tranquilo, enquanto o terapeuta posiciona as mãos em regiões do corpo.",
      "Muitas pessoas relatam relaxamento, sensação de leveza e melhora do sono.",
    ],
  },
  {
    slug: "aromaterapia-em-casa",
    titulo: "Aromaterapia em casa: por onde começar",
    resumo: "Dicas para usar óleos essenciais com segurança no dia a dia.",
    data: "2026-08-18",
    conteudo: [
      "Óleos essenciais são concentrados e devem ser usados com orientação.",
      "Um difusor com lavanda no fim do dia ajuda a criar um ambiente de calma.",
      "Procure sempre um profissional para indicar o óleo mais adequado para você.",
    ],
  },
];

// Formata a data para exibição (ex.: 20 de setembro de 2026)
export function formatarData(data: string) {
  return new Date(data + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
