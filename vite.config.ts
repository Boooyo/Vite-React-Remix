import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

installGlobals();

export default defineConfig({
  plugins: [
    remix(),
    tsconfigPaths(),
    react({
      babel: {
        plugins: [
          "babel-plugin-styled-components",
          "@babel/plugin-transform-runtime",
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      'three': 'three'
    }
  }
});
