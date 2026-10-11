import type { Metadata } from "next";
import FormContato from "@/components/formcontato/formcontato";
import { linkWhatsapp, site } from "@/data/site";
import estilos from "../pagina.module.css";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale conosco por WhatsApp, e-mail ou formulário e tire suas dúvidas.",
};

export default function PaginaContato() {
  return (
    <>
      <div className={estilos.topo}>
        <div className="container">
          <h1>Fale conosco</h1>
          <p>Estamos prontos para te ouvir e ajudar a escolher a melhor terapia.</p>
        </div>
      </div>

      <section className="secao">
        <div className={`container ${estilos.contato}`}>
          <div className={estilos.info}>
            <h2>Contatos</h2>
            <ul>
              <li>📞 {site.telefone}</li>
              <li>✉️ {site.email}</li>
              <li>📍 {site.endereco}</li>
            </ul>
            <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className="botao">
              Chamar no WhatsApp
            </a>
          </div>

          <FormContato />
        </div>
      </section>
    </>
  );
}
