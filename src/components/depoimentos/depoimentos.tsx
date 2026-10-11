import { depoimentos } from "@/data/depoimentos";
import TituloSecao from "../titulosecao/titulosecao";
import styles from "./depoimentos.module.css";

// Depoimentos de clientes: prova social para aumentar a confiança
export default function Depoimentos() {
  return (
    <section className={`secao ${styles.fundo}`}>
      <div className="container">
        <TituloSecao etiqueta="Depoimentos" titulo="Quem já viveu a experiência" />

        <div className={styles.grade}>
          {depoimentos.map((d) => (
            <figure key={d.nome} className={styles.card}>
              <span className={styles.aspas} aria-hidden="true">“</span>
              <blockquote>{d.texto}</blockquote>
              <figcaption>
                <strong>{d.nome}</strong>
                <span>{d.terapia}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
