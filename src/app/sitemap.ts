import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { site } from "@/data/site";

// Sitemap automático (/sitemap.xml) para o Google indexar todas as páginas
export default function sitemap(): MetadataRoute.Sitemap {
  const rotas = ["", "/sobre", "/servicos", "/agendamento", "/blog", "/contato"].map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
  }));

  const artigos = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.data),
  }));

  return [...rotas, ...artigos];
}
