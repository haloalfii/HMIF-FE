export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: "HMIF",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/icon.ico" }],
    script: [
      { src: "/vendor/jquery/jquery.min.js" },
      { src: "/vendor/bootstrap/js/bootstrap.bundle.min.js" },
      { src: "/vendor/jquery-easing/jquery.easing.min.js" },
      { src: "/js/sb-admin-2.min.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/sb-admin-2.css",
    "@/assets/css/custom.css",
    "@/assets/vendor/fontawesome-free/css/all.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/dotenv",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/admin",
    proxy: true,
    proxyHeaders: false,
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/hmif_api/api/auth/login",
            method: "post",
            propertyName: "access_token",
          },
          logout: {
            url: "/hmif_api/api/auth/logout",
            method: "post",
          },
          user: {
            url: "/hmif_api/api/auth/user-profile",
            method: "get",
            propertyName: false,
          },
        },
      },
    },
    redirect: {
      login: "/admin/login",
      logout: "/admin/login",
      home: "/admin",
    },
  },

  router: {
    middleware: ["auth"],
  },

  proxy: {
    "/hmif_api/": {
      target: process.env.API_URL,
      pathRewrite: { "^/hmif_api/": "/" },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
