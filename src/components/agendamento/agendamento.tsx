"use client"; // Formulário interativo (estado, datas, redirecionamento para pagamento)

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { formatarPreco, servicos } from "@/data/servicos";
import { linkWhatsapp, site } from "@/data/site";
import styles from "./agendamento.module.css";

// Horários disponíveis (em produção, viriam de uma agenda real: Calendly, Google Calendar, API própria)
const HORARIOS = ["09:00", "10:30", "14:00", "15:30", "17:00", "19:00"];

// Agendamento de sessões online + pagamento.
// Fluxo: escolher terapia -> data -> horário -> pagar -> confirmação por WhatsApp.
export default function Agendamento() {
  const params = useSearchParams();
  // Pré-seleciona a terapia vinda da query string (?terapia=reiki)
  const inicial = params.get("terapia") ?? servicos[0].slug;

  const [terapia, setTerapia] = useState(inicial);
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [nome, setNome] = useState("");

  // Terapia selecionada (para mostrar preço e duração)
  const servico = useMemo(() => servicos.find((s) => s.slug === terapia) ?? servicos[0], [terapia]);

  // Data mínima = hoje (não permite agendar no passado)
  const hoje = new Date().toISOString().split("T")[0];

  const pronto = nome.trim() && data && horario;

  // Mensagem de confirmação enviada por WhatsApp
  const mensagem = `Olá! Sou ${nome}. Gostaria de confirmar: ${servico.nome} em ${data
    .split("-")
    .reverse()
    .join("/")} às ${horario}.`;

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <label>
          Seu nome
          <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Como podemos te chamar?" required />
        </label>

        <label>
          Terapia
          <select value={terapia} onChange={(e) => setTerapia(e.target.value)}>
            {servicos
              .filter((s) => s.online)
              .map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.nome} — {formatarPreco(s.preco)}
                </option>
              ))}
          </select>
        </label>

        <label>
          Data
          <input type="date" min={hoje} value={data} onChange={(e) => setData(e.target.value)} required />
        </label>

        <fieldset>
          <legend>Horário</legend>
          <div className={styles.horarios}>
            {HORARIOS.map((h) => (
              <button
                type="button"
                key={h}
                className={`${styles.horario} ${horario === h ? styles.selecionado : ""}`}
                onClick={() => setHorario(h)}
              >
                {h}
              </button>
            ))}
          </div>
        </fieldset>
      </form>

      {/* Resumo + pagamento */}
      <aside className={styles.resumo}>
        <h3>Resumo</h3>
        <p><strong>{servico.nome}</strong> • {servico.duracao} • online</p>
        <p className={styles.total}>{formatarPreco(servico.preco)}</p>

        {/* Pagamento: se houver link de checkout configurado, abre; senão, orienta via WhatsApp */}
        {site.pagamentoUrl ? (
          <a
            href={pronto ? site.pagamentoUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`botao ${!pronto ? styles.desativado : ""}`}
            aria-disabled={!pronto}
          >
            Pagar e confirmar
          </a>
        ) : (
          <p className={styles.aviso}>
            Pagamento online ainda não configurado. Defina <code>NEXT_PUBLIC_PAGAMENTO_URL</code> no
            arquivo <code>.env.local</code>.
          </p>
        )}

        {/* Alternativa: confirmar o horário direto pelo WhatsApp */}
        <a
          href={pronto ? linkWhatsapp(mensagem) : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`botao botaoContorno ${!pronto ? styles.desativado : ""}`}
          aria-disabled={!pronto}
        >
          Confirmar pelo WhatsApp
        </a>

        <small>🔒 Pagamento seguro via Pix ou cartão.</small>
      </aside>
    </div>
  );
}
