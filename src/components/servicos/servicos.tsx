import Link from "next/link";
import { formatarPreco, servicos } from "@/data/servicos";
import TituloSecao from "../titulosecao/titulosecao";
import styles from "./servicos.module.css";

type Props = {
  limite?: number; // na Home mostramos só alguns; na página de serviços, todos
};

// Grade de cards com as terapias oferecidas
export default function Servicos({ limite }: Props) {
  const lista = limite ? servicos.slice(0, limite) : servicos;

  return (
    <section className="secao">
      <div className="container">
        <TituloSecao
          etiqueta="Terapias"
          titulo="Cuidado integral para você"
          subtitulo="Escolha a terapia ideal para o seu momento. Algumas sessões podem ser feitas online."
        />

        <div className={styles.grade}>
          {lista.map((s) => (
            <article key={s.slug} className={styles.card}>
              <span className={styles.icone} aria-hidden="true">{s.icone}</span>
              <h3>{s.nome}</h3>
              <p>{s.resumo}</p>
              <ul className={styles.detalhes}>
                <li>⏱ {s.duracao}</li>
                <li>{s.online ? "💻 Online e presencial" : "📍 Presencial"}</li>
              </ul>
              <div className={styles.rodape}>
                <strong>{formatarPreco(s.preco)}</strong>
                {/* Passa a terapia escolhida via query string para pré-selecionar no agendamento */}
                <Link href={`/agendamento?terapia=${s.slug}`} className={styles.link}>
                  Agendar →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {limite && (
          <div className={styles.verTodas}>
            <Link href="/servicos" className="botao botaoContorno">
              Ver todas as terapias
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
