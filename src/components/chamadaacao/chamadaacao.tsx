import Link from "next/link";
import styles from "./chamadaacao.module.css";

// Faixa de chamada para ação (CTA) usada no fim das páginas para converter visitantes
export default function ChamadaAcao() {
  return (
    <section className={styles.faixa}>
      <div className={`container ${styles.conteudo}`}>
        <h2>Pronta para dar o primeiro passo?</h2>
        <p>Agende sua sessão online em poucos cliques e comece a cuidar de você hoje.</p>
        <Link href="/agendamento" className={`botao ${styles.botao}`}>
          Agendar agora
        </Link>
      </div>
    </section>
  );
}
