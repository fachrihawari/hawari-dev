import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://hawari.dev",
  integrations: [tailwind(), svelte(), sitemap(), icon()],
  output: "hybrid",
  image: {
    service: sharpImageService()
  },
  server: {
    host: true,
    // have to set host to tell astro expose it to LAN
    port: Number(import.meta.env.PORT || 4321)
  },
  adapter: node({
    mode: "standalone"
  })
});