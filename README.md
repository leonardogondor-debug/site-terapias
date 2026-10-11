# Site – Espaço Equilíbrio (Terapias Holísticas)

Exercício: site institucional com Next.js (App Router), TypeScript (TSX) e CSS Modules.

## Rodar

```bash
npm install
cp .env.example .env.local   # ajuste a URL do site e o link de pagamento
npm run dev                  # http://localhost:3000
npm run build                # build de produção
```

## Estrutura

```
src/
├── app/                      # rotas (App Router)
│   ├── layout.tsx            # Menu + Footer + WhatsApp + SEO global
│   ├── page.tsx              # Home
│   ├── sobre/ servicos/ agendamento/ contato/
│   ├── blog/ + blog/[slug]/  # listagem e artigo (SSG + generateMetadata)
│   ├── api/contato/route.ts  # recebe o formulário de contato
│   ├── sitemap.ts / robots.ts
│   ├── globals.css           # variáveis, reset, botões
│   └── pagina.module.css     # estilos compartilhados das páginas
├── components/               # cada componente = pasta + .tsx + .module.css
│   ├── menu/  hero/  titulosecao/  servicos/  sobre/  depoimentos/
│   ├── chamadaacao/  agendamento/  blog/  formcontato/
│   └── whatsappbotao/  footer/
└── data/                     # conteúdo editável (site, serviços, depoimentos, posts)
```

## Requisitos do briefing

| Requisito | Onde |
|---|---|
| Home, Sobre, Serviços, Contato | `app/` + `components/` |
| WhatsApp | `whatsappbotao/`, `linkWhatsapp()` em `data/site.ts` |
| Formulário de contato | `formcontato/` + `api/contato/route.ts` |
| Depoimentos | `depoimentos/` |
| Blog | `app/blog/`, `data/posts.ts` |
| Redes sociais | `footer/`, `data/site.ts` |
| SEO | metadata, JSON-LD, sitemap, robots |
| Responsivo | media queries em cada `.module.css` |
| Agendamento online | `agendamento/` (horários fixos de exemplo) |
| Pagamento | link de checkout em `NEXT_PUBLIC_PAGAMENTO_URL` |

## Próximos passos (produção)

- **Agenda real:** trocar os horários fixos por Calendly (embed) ou Google Calendar API.
- **Pagamento:** criar um Payment Link (Mercado Pago / Stripe) ou uma rota de checkout com webhook de confirmação.
- **Formulário:** enviar e-mail com Resend/Nodemailer ou salvar em CRM.
- **Imagens reais** (foto da terapeuta) com `next/image`, e depoimentos reais e autorizados.

## Ideias de geração de leads e conversão

- Oferecer uma primeira sessão de avaliação gratuita ou com desconto.
- Captura de e-mail com material gratuito (e-book ou meditação guiada).
- Botão de WhatsApp fixo e CTA ao final de todas as páginas (já incluídos).
- Prova social: depoimentos, número de sessões, avaliações do Google.
- Google Analytics / Meta Pixel para medir e remarcar visitantes.
- Artigos de blog focados em buscas locais ("reiki em São Paulo").
