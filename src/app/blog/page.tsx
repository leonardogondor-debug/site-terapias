import type { Metadata } from "next";
import CardPost from "@/components/blog/cardpost";
import { posts } from "@/data/posts";
import estilos from "../pagina.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre bem-estar, saúde integrativa e terapias holísticas.",
};

// Listagem de todos os artigos
export default function PaginaBlog() {
  return (
    <>
      <div className={estilos.topo}>
        <div className="container">
          <h1>Blog</h1>
          <p>Conteúdos para cuidar do corpo, da mente e das emoções.</p>
        </div>
      </div>
      <section className="secao">
        <div className={`container ${estilos.grade}`}>
          {posts.map((p) => (
            <CardPost key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </>
  );
}
