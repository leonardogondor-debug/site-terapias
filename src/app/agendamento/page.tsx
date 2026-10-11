import { Suspense } from "react";
import type { Metadata } from "next";
import Agendamento from "@/components/agendamento/agendamento";
import estilos from "../pagina.module.css";

export const metadata: Metadata = {
  title: "Agendar sessão online",
  description: "Escolha a terapia, a data e o horário e pague online com segurança.",
};

export default function PaginaAgendamento() {
  return (
    <>
      <div className={estilos.topo}>
        <div className="container">
          <h1>Agende sua sessão online</h1>
          <p>Escolha terapia, data e horário. Leva menos de 2 minutos.</p>
        </div>
      </div>
      <section className="secao">
        <div className="container">
          {/* Suspense é necessário porque o componente usa useSearchParams */}
          <Suspense fallback={<p>Carregando agenda...</p>}>
            <Agendamento />
          </Suspense>
        </div>
      </section>
    </>
  );
}
