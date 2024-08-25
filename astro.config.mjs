import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://hawari.dev",
  integrations: [tailwind(), svelte()],
  output: "server",
  image: {
    service: squooshImageService(),
  },
  server: {
    host: true, // have to set host to tell astro expose it to LAN
    port: Number(import.meta.env.PORT || 4321)
  },
  adapter: node({
    mode: "standalone",
  }),
});
