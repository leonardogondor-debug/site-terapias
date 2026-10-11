import Link from "next/link";
import { formatarData, type Post } from "@/data/posts";
import styles from "./cardpost.module.css";

// Card de pré-visualização de um artigo (usado na Home e na listagem do blog)
export default function CardPost({ post }: { post: Post }) {
  return (
    <article className={styles.card}>
      <time dateTime={post.data}>{formatarData(post.data)}</time>
      <h3>
        <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
      </h3>
      <p>{post.resumo}</p>
      <Link href={`/blog/${post.slug}`} className={styles.link}>
        Ler artigo →
      </Link>
    </article>
  );
}
