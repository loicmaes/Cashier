// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    "nuxt-mailer",
    "nuxt-scheduler",
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: "Cashier, bienvenue",
    },
  },
  colorMode: {
    classSuffix: "",
  },
  runtimeConfig: {
    mailerHost: "",
    mailerPort: "",
    mailerUser: "",
    mailerPass: "",
    mailerFromAddress: "",
    mailerFromName: "",
    public: {
      apiUrl: "",
    },
  },
  compatibilityDate: "2024-11-01",
  eslint: {
    checker: true,
    config: {
      stylistic: {
        semi: true,
        indent: 2,
        quotes: "double",
      },
    },
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    defaultLocale: "fr",
    locales: ["fr"],
  },
  tailwindcss: {
    cssPath: ["assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: false,
    viewer: true,
  },
});
