import type { Metadata } from "next";
import Servicos from "@/components/servicos/servicos";
import ChamadaAcao from "@/components/chamadaacao/chamadaacao";
import estilos from "../pagina.module.css";

export const metadata: Metadata = {
  title: "Terapias e serviços",
  description: "Reiki, acupuntura, aromaterapia, meditação, terapia floral e massagem. Veja valores e agende.",
};

export default function PaginaServicos() {
  return (
    <>
      <div className={estilos.topo}>
        <div className="container">
          <h1>Nossas terapias</h1>
          <p>Cada atendimento é personalizado para o seu momento.</p>
        </div>
      </div>
      {/* Sem "limite": mostra todas as terapias */}
      <Servicos />
      <ChamadaAcao />
    </>
  );
}
