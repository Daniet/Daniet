import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import vue from "@astrojs/vue";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://daniet.github.io",
  base: "/Daniet",
  integrations: [
    tailwind(),
    partytown(),
    vue(),
    compressor({ css: true, html: true, img: true, js: true, svg: true }),
  ],
});
