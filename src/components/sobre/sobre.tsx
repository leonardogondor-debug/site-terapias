import { site } from "@/data/site";
import styles from "./sobre.module.css";

// Apresentação da profissional/empresa: gera credibilidade e conexão
export default function Sobre() {
  return (
    <section className="secao">
      <div className={`container ${styles.grade}`}>
        {/* Espaço da foto: troque por <Image /> com a foto real da terapeuta */}
        <div className={styles.foto} role="img" aria-label="Foto da terapeuta">
          🌿
        </div>

        <div>
          <span className={styles.etiqueta}>Sobre</span>
          <h2>Cuidar de você com presença e respeito</h2>
          <p>
            O {site.nome} nasceu do desejo de oferecer um espaço seguro e acolhedor para quem busca
            equilíbrio entre corpo, mente e emoções. Unimos técnicas milenares e práticas integrativas
            em atendimentos individualizados.
          </p>
          <p>
            Formação em terapias integrativas, mais de 8 anos de experiência e atualização constante.
            Cada sessão é pensada para o seu momento e as suas necessidades.
          </p>
          <ul className={styles.valores}>
            <li>💚 Acolhimento</li>
            <li>🤝 Ética e sigilo</li>
            <li>✨ Atendimento personalizado</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
