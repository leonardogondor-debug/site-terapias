import type { Metadata } from "next";
import Sobre from "@/components/sobre/sobre";
import Depoimentos from "@/components/depoimentos/depoimentos";
import ChamadaAcao from "@/components/chamadaacao/chamadaacao";
import estilos from "../pagina.module.css";

// Metadados específicos da página (SEO)
export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a história, a formação e a abordagem do nosso espaço de terapias holísticas.",
};

export default function PaginaSobre() {
  return (
    <>
      <div className={estilos.topo}>
        <div className="container">
          <h1>Sobre nós</h1>
          <p>Conheça quem vai cuidar de você.</p>
        </div>
      </div>
      <Sobre />
      <Depoimentos />
      <ChamadaAcao />
    </>
  );
}
