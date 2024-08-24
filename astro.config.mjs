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
  adapter: node({
    mode: "standalone",
  }),
});
