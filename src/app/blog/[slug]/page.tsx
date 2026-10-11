import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ChamadaAcao from "@/components/chamadaacao/chamadaacao";
import { formatarData, posts } from "@/data/posts";
import estilos from "../../pagina.module.css";

type Props = { params: Promise<{ slug: string }> };

// Gera as páginas dos artigos em tempo de build (SSG)
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// SEO dinâmico: título e descrição de cada artigo
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.titulo, description: post.resumo };
}

export default async function PaginaPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  // Slug inexistente -> página 404
  if (!post) notFound();

  return (
    <>
      <section className="secao">
        <article className={`container ${estilos.artigo}`}>
          <Link href="/blog">← Voltar ao blog</Link>
          <h1>{post.titulo}</h1>
          <time dateTime={post.data}>{formatarData(post.data)}</time>
          {post.conteudo.map((paragrafo, i) => (
            <p key={i}>{paragrafo}</p>
          ))}
        </article>
      </section>
      <ChamadaAcao />
    </>
  );
}
