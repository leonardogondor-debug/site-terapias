import Link from "next/link";
import { linkWhatsapp, site } from "@/data/site";
import styles from "./hero.module.css";

// Seção principal da Home: promessa clara + dois botões de ação (conversão)
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.conteudo}`}>
        <span className={styles.selo}>Atendimento presencial e online</span>
        <h1>{site.slogan}</h1>
        <p className={styles.texto}>
          Um espaço de acolhimento para você reencontrar equilíbrio, leveza e bem-estar através de
          terapias integrativas conduzidas com cuidado e profissionalismo.
        </p>
        <div className={styles.acoes}>
          <Link href="/agendamento" className="botao">
            Agendar sessão online
          </Link>
          <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className="botao botaoContorno">
            Falar no WhatsApp
          </a>
        </div>
        {/* Prova social logo no topo ajuda na credibilidade */}
        <ul className={styles.numeros}>
          <li><strong>+500</strong> sessões realizadas</li>
          <li><strong>8 anos</strong> de experiência</li>
          <li><strong>4,9/5</strong> de satisfação</li>
        </ul>
      </div>
    </section>
  );
}
