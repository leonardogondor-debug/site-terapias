# 🌿 Serena Equilíbrio — Site para Terapias Holísticas

Site institucional moderno, responsivo e otimizado para SEO, desenvolvido para uma empresa de terapias holísticas. O foco é transmitir **credibilidade, acolhimento e profissionalismo**, facilitando o contato, o **agendamento online** e o **recebimento de pagamentos**.

> Projeto de estudo/portfólio, baseado em um briefing real de freelance. Nomes, preços e depoimentos são fictícios.

---

## 📑 Sumário

- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Práticas aplicadas](#-práticas-aplicadas)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Páginas e rotas](#-páginas-e-rotas)
- [Como rodar](#-como-rodar-localmente)
- [Variáveis de ambiente](#-variáveis-de-ambiente)
- [Fluxo de agendamento e pagamento](#-fluxo-de-agendamento-e-pagamento)
- [SEO](#-seo)
- [Deploy](#-deploy)
- [Roadmap](#-roadmap)
- [Autor e contato](#-autor-e-contato)

---

## ✨ Funcionalidades

- Home com hero, serviços, "como funciona", depoimentos, artigos e CTA
- Página **Sobre** com apresentação da terapeuta
- **Terapias**: listagem e página individual (benefícios, FAQ, preço)
- **Blog** com artigos e rotas dinâmicas
- **Agendamento online** com escolha de terapia, data e horário
- **Pagamento** via Pix/cartão (integração com Mercado Pago)
- **Formulário de contato** e botão flutuante de **WhatsApp**
- Links para redes sociais
- Layout **responsivo** (desktop, tablet e celular)
- **SEO** básico: metadata, sitemap, robots e dados estruturados

---

## 🛠 Tecnologias

| Área | Tecnologia |
|---|---|
| Framework | **Next.js 15** (App Router) |
| Biblioteca UI | **React 19** |
| Linguagem | **TypeScript** |
| Estilização | **Tailwind CSS** |
| Back-end | **Route Handlers** do Next.js (API Routes) |
| Pagamentos | **Mercado Pago** (Checkout Pro) |
| E-mail (planejado) | **Resend** |
| Deploy | **Vercel** |
| Versionamento | **Git e GitHub** |

---

## ✅ Práticas aplicadas

**Arquitetura e código**
- Componentização e reaproveitamento (`Header`, `Footer`, `CardArtigo`, `ServicosGrid`)
- Separação de responsabilidades: `content/` (dados), `lib/` (regras de negócio) e `components/` (interface)
- TypeScript com tipagem das entidades (`Terapia`, `Artigo`)
- Server Components por padrão e Client Components apenas onde há interação (agendamento e contato)

**Performance e SEO**
- **SSG** com `generateStaticParams` nas páginas de terapias e blog
- `generateMetadata` para título e descrição dinâmicos por página
- `sitemap.ts` e `robots.ts` gerados automaticamente
- **JSON-LD** (schema.org) com FAQ nas páginas de terapias
- HTML semântico e `lang="pt-BR"`

**UX e acessibilidade**
- Design **mobile-first** e responsivo
- Contraste adequado, `aria-label` em botões só com ícone
- Feedback de erro e carregamento nos formulários
- Página 404 personalizada

**Segurança e boas práticas**
- Chaves e tokens em variáveis de ambiente (`.env.local` fora do Git)
- Validação de dados nas rotas de API
- Reserva de horário com checagem de conflito (evita agendamento duplo)
- Webhook para confirmar pagamento no servidor, sem confiar só no retorno do navegador
- Aviso de que as terapias complementam, e não substituem, o acompanhamento médico

---

---

## 🧭 Páginas e rotas

| Rota | Conteúdo |
|---|---|
| `/` | Hero, terapias, como funciona, depoimentos, artigos, CTA |
| `/sobre` | Apresentação, formações e filosofia de atendimento |
| `/terapias` | Lista de terapias |
| `/terapias/[slug]` | Detalhes, indicações, FAQ e preço |
| `/blog` | Lista de artigos |
| `/blog/[slug]` | Artigo completo |
| `/agendar` | Escolha de terapia, data, horário e pagamento |
| `/agendar/sucesso` | Confirmação da reserva |
| `/contato` | Formulário e WhatsApp |

---

## 🚀 Como rodar localmente

Pré-requisito: **Node.js 18.18+** (recomendado 20+).

```bash
git clone https://github.com/leonardogondor-debug/pausa-terapias.git
cd serena-equilibrio
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # servidor de produção
```

---

## 🔐 Variáveis de ambiente

Crie o arquivo `.env.local` na raiz:

```env
NEXT_PUBLIC_WHATSAPP=5551999999999
NEXT_PUBLIC_SITE_URL=http://localhost:3000
MP_ACCESS_TOKEN=
RESEND_API_KEY=
```

Sem `MP_ACCESS_TOKEN`, o pagamento roda em **modo demonstração** e o fluxo termina na tela de sucesso.

---

## 💳 Fluxo de agendamento e pagamento

1. O cliente escolhe a **terapia**, a **data** e o **horário** (`GET /api/agendamento`).
2. Informa os dados e o método de pagamento.
3. `POST /api/agendamento` reserva o horário e cria a cobrança no gateway.
4. O cliente é redirecionado ao checkout.
5. O gateway chama `POST /api/pagamento/webhook` e a reserva é confirmada.
6. O cliente recebe o link da videochamada por e-mail.

> Atenção: nesta versão as reservas ficam em memória. Para produção, use um banco de dados.

---

## 🔎 SEO

- Metadata global com template de título e Open Graph
- Metadata dinâmica nas páginas de terapias e artigos
- `sitemap.xml` e `robots.txt` automáticos
- Dados estruturados (FAQPage) por terapia
- Sugestões para conversão e geração de leads: isca digital (e-book ou aula gratuita), pacotes de sessões, depoimentos em vídeo e Google Meu Negócio

---

## ☁️ Deploy

1. Envie o projeto para o GitHub.
2. Importe o repositório na [Vercel](https://vercel.com).
3. Cadastre as variáveis de ambiente.
4. Configure no gateway a URL do webhook: `https://site-terapias-eight.vercel.app/`.

---

## 🗺 Roadmap

- [ ] Banco de dados (Prisma + PostgreSQL ou SQLite) para reservas
- [ ] Envio de e-mails com Resend (contato e confirmação)
- [ ] Confirmação completa de pagamento no webhook
- [ ] Blog em MDX
- [ ] Painel administrativo para a terapeuta
- [ ] Testes com Jest e Testing Library
- [ ] Pipeline CI/CD com GitHub Actions
- [ ] Integração com Google Calendar / Google Meet

---

## 👨‍💻 Autor e contato

**Leonardo Pacheco Vitorino** — Programador Frontend Freelancer

| | |
|---|---|
| 📧 E-mail | [leonardogondor@gmail.com](mailto:leonardogondor@gmail.com) |
| 📱 Telefone / WhatsApp | [(51) 98970-3729](https://wa.me/5551989703729) |
| 💻 GitHub | [Meus repositórios](https://github.com/leonardogondor-debug?tab=repositories) |
| 💼 99Freelas | [Leonardo Pacheco Vitorino \| Programador Frontend Freelancer](https://www.99freelas.com.br/user/LeoVit) |
| 🔗 LinkedIn | [Leonardo Pacheco Vitorino](https://www.linkedin.com/in/leonardo-pacheco-vitorino-01b0052a2/) |

Aberto a projetos freelance de sites, landing pages e aplicações web com React e Next.js.

---

## 📄 Licença

Projeto de estudo e portfólio. Uso livre para fins educacionais.
