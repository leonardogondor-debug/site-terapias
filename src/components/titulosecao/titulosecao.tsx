import styles from "./titulosecao.module.css";

type Props = {
  etiqueta?: string; // texto pequeno acima do título
  titulo: string;
  subtitulo?: string;
};

// Cabeçalho padrão reutilizado em todas as seções para manter consistência visual
export default function TituloSecao({ etiqueta, titulo, subtitulo }: Props) {
  return (
    <div className={styles.wrapper}>
      {etiqueta && <span className={styles.etiqueta}>{etiqueta}</span>}
      <h2>{titulo}</h2>
      {subtitulo && <p>{subtitulo}</p>}
    </div>
  );
}
