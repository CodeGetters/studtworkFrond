import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
  presetTypography,
} from "unocss";

export default defineConfig({
  rules: [],
  theme: {
    breakpoints: {
      xs: "320px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1920px",
    },
    verticalBreakpoints: {},
  },
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
