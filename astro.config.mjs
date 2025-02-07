import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap"; // Opcional, mas recomendado para SEO

export default defineConfig({
  integrations: [tailwind(), icon(), compress(), sitemap()],
  output: "static", // Alterado para static
  site: 'https://guigomaster01.github.io',
  base: '/curriculo', // Caminho base do repositório
});
