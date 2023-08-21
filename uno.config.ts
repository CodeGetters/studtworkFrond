import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
  presetTypography,
} from "unocss";

import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  rules: [],
  theme: {
    breakpoints: {
      xs: "375px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
    },
  },
  transformers: [
    transformerDirectives({
      applyVariable: ["--at-apply", "--uno-apply", "--uno"],
    }),
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetIcons({
      cdn: "https://esm.sh/",
      extraProperties: {
        display: "inline-block",
        height: "1.2em",
        width: "1.2em",
        "vertical-align": "text-bottom",
      },
    }),
  ],
});
