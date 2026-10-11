import { linkWhatsapp } from "@/data/site";
import styles from "./whatsappbotao.module.css";

// Botão flutuante do WhatsApp, fixo no canto da tela em todas as páginas
export default function WhatsappBotao() {
  return (
    <a
      href={linkWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.botao}
      aria-label="Conversar pelo WhatsApp"
    >
      💬
    </a>
  );
}
