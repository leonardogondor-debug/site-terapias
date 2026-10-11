// Depoimentos de clientes (exemplos fictícios para o exercício).
// Em produção, use apenas depoimentos reais e autorizados.

export type Depoimento = {
  nome: string;
  terapia: string;
  texto: string;
};

export const depoimentos: Depoimento[] = [
  {
    nome: "Mariana S.",
    terapia: "Reiki",
    texto: "Saí da primeira sessão muito mais leve. O atendimento é acolhedor e cuidadoso do início ao fim.",
  },
  {
    nome: "Carlos A.",
    terapia: "Meditação guiada",
    texto: "As sessões online me ajudaram a lidar com a ansiedade da rotina. Recomendo de olhos fechados.",
  },
  {
    nome: "Fernanda L.",
    terapia: "Aromaterapia",
    texto: "Meu sono melhorou muito. Ambiente lindo e profissional super atenciosa.",
  },
];
