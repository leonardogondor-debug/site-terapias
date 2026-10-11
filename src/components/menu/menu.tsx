"use client"; // Precisa de estado (abrir/fechar menu no celular)

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { links, site } from "@/data/site";
import styles from "./menu.module.css";

// Menu de navegação fixo no topo, com versão mobile (hambúrguer)
export default function Menu() {
  // Controla se o menu mobile está aberto
  const [aberto, setAberto] = useState(false);
  // Rota atual, para destacar o link ativo
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Navegação principal">
        {/* Logo / nome da empresa */}
        <Link href="/" className={styles.logo} onClick={() => setAberto(false)}>
          🌿 {site.nome}
        </Link>

        {/* Botão hambúrguer (visível apenas no celular) */}
        <button
          className={styles.hamburguer}
          onClick={() => setAberto(!aberto)}
          aria-expanded={aberto}
          aria-label="Abrir menu"
        >
          {aberto ? "✕" : "☰"}
        </button>

        {/* Lista de links */}
        <ul className={`${styles.lista} ${aberto ? styles.aberto : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? styles.ativo : ""}
                onClick={() => setAberto(false)}
              >
                {link.rotulo}
              </Link>
            </li>
          ))}
          <li>
            {/* Botão de conversão: leva para a página de agendamento */}
            <Link href="/agendamento" className="botao" onClick={() => setAberto(false)}>
              Agendar sessão
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
