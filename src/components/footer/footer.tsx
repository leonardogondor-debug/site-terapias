import Link from "next/link";
import { links, site } from "@/data/site";
import styles from "./footer.module.css";

// Rodapé com contatos, navegação e redes sociais
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grade}`}>
        <div>
          <strong className={styles.logo}>🌿 {site.nome}</strong>
          <p>{site.slogan}</p>
        </div>

        <nav aria-label="Rodapé">
          <h3>Navegação</h3>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.rotulo}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3>Contato</h3>
          <ul>
            <li>{site.telefone}</li>
            <li>{site.email}</li>
            <li>{site.endereco}</li>
          </ul>
        </div>

        {/* Integração com redes sociais */}
        <div>
          <h3>Redes sociais</h3>
          <ul>
            {site.redes.map((r) => (
              <li key={r.nome}>
                <a href={r.url} target="_blank" rel="noopener noreferrer">
                  {r.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
