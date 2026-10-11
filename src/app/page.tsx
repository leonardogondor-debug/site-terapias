import Link from "next/link";
import Hero from "@/components/hero/hero";
import Servicos from "@/components/servicos/servicos";
import Sobre from "@/components/sobre/sobre";
import Depoimentos from "@/components/depoimentos/depoimentos";
import TituloSecao from "@/components/titulosecao/titulosecao";
import CardPost from "@/components/blog/cardpost";
import ChamadaAcao from "@/components/chamadaacao/chamadaacao";
import { posts } from "@/data/posts";
import estilos from "./pagina.module.css";

// Página inicial: monta as seções na ordem que guia o visitante até o agendamento
export default function Home() {
  return (
    <>
      <Hero />
      <Servicos limite={3} />
      <Sobre />
      <Depoimentos />

      {/* Últimos artigos do blog (conteúdo ajuda no SEO) */}
      <section className="secao">
        <div className="container">
          <TituloSecao etiqueta="Blog" titulo="Conteúdos para o seu bem-estar" />
          <div className={estilos.grade}>
            {posts.slice(0, 3).map((p) => (
              <CardPost key={p.slug} post={p} />
            ))}
          </div>
          <div className={estilos.centro}>
            <Link href="/blog" className="botao botaoContorno">
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </section>

      <ChamadaAcao />
    </>
  );
}
