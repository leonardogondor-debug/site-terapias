"use client"; // Formulário com estado e envio via fetch

import { useState, type FormEvent } from "react";
import styles from "./formcontato.module.css";

type Status = "parado" | "enviando" | "ok" | "erro";

// Formulário de contato: envia os dados para /api/contato
export default function FormContato() {
  const [status, setStatus] = useState<Status>("parado");

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("enviando");

    // Converte os campos do formulário em objeto
    const form = e.currentTarget;
    const dados = Object.fromEntries(new FormData(form));

    try {
      const resp = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      if (!resp.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("erro");
    }
  }

  return (
    <form className={styles.form} onSubmit={enviar}>
      <label>
        Nome
        <input name="nome" required minLength={2} />
      </label>
      <label>
        E-mail
        <input name="email" type="email" required />
      </label>
      <label>
        Telefone / WhatsApp
        <input name="telefone" type="tel" />
      </label>
      <label>
        Mensagem
        <textarea name="mensagem" rows={5} required minLength={5} />
      </label>

      <button className="botao" disabled={status === "enviando"}>
        {status === "enviando" ? "Enviando..." : "Enviar mensagem"}
      </button>

      {/* Feedback ao usuário (aria-live para leitores de tela) */}
      <p role="status" aria-live="polite" className={styles.feedback}>
        {status === "ok" && "✅ Mensagem enviada! Responderemos em breve."}
        {status === "erro" && "❌ Não foi possível enviar. Tente pelo WhatsApp."}
      </p>
    </form>
  );
}
