import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // File extension for generated javascript files
  outExtension: "js",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./app/routes/**/*.{ts,tsx,js,jsx}",
    "./app/components/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",
});
