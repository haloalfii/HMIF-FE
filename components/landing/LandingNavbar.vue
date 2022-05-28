<template>
  <main class="navbar-lp">
    <nav v-if="$route.path.split('/')[1] == ''">
      <a href="/" class="logo">
        <img src="~/assets/img/logo.png" class="mx-2 logo-img" />
        <span class="logo-text">HMIF AMIKOM</span>
      </a>
      <ul>
        <li>
          <a href="#header" class="nav-links nav-links_active">Home</a>
        </li>
        <li><a href="#vision" class="nav-links">Visi & Misi</a></li>
        <li><a href="#article" class="nav-links">Article</a></li>
        <li><a href="#partner" class="nav-links">Partner</a></li>
        <li>
          <nuxt-link to="/privacy_policy" class="nav-links"
            >Privacy Policy</nuxt-link
          >
        </li>
        <li v-if="this.$auth.loggedIn">
          <nuxt-link to="/admin" class="nav-links">{{
            this.$auth.user.name
          }}</nuxt-link>
        </li>
        <li v-else>
          <nuxt-link to="/admin/login" class="nav-links">Login</nuxt-link>
        </li>
      </ul>
      <!-- hamburger-menu-icon -->
      <div class="hamburger">
        <div class="hamburger-icon"></div>
        <div class="hamburger-icon"></div>
      </div>
    </nav>
    <nav v-else-if="$route.path.split('/')[1] == 'article'">
      <a href="/" class="logo">
        <img src="~/assets/img/logo.png" class="mx-2 logo-img" />
        <span class="logo-text">HMIF AMIKOM</span>
      </a>
      <ul>
        <li>
          <nuxt-link to="/" class="nav-links nav-links_active">Home</nuxt-link>
        </li>
        <!-- <li><a href="#vision" class="nav-links">Visi & Misi</a></li>
        <li><a href="#article" class="nav-links">Article</a></li>
        <li><a href="#partner" class="nav-links">Partner</a></li> -->
        <li>
          <nuxt-link to="/privacy_policy" class="nav-links"
            >Privacy Policy</nuxt-link
          >
        </li>
        <li v-if="this.$auth.loggedIn">
          <nuxt-link to="/admin" class="nav-links">{{
            this.$auth.user.name
          }}</nuxt-link>
        </li>
        <li v-else>
          <nuxt-link to="/admin/login" class="nav-links">Login</nuxt-link>
        </li>
      </ul>
      <!-- hamburger-menu-icon -->
      <div class="hamburger">
        <div class="hamburger-icon"></div>
        <div class="hamburger-icon"></div>
      </div>
    </nav>
    <nav v-else>
      <a href="/" class="logo">
        <img src="~/assets/img/logo.png" class="mx-2 logo-img" />
        <span class="logo-text">HMIF AMIKOM</span>
      </a>
      <ul>
        <li>
          <nuxt-link to="/" class="nav-links nav-links_active">Home</nuxt-link>
        </li>
        <!-- <li><a href="#vision" class="nav-links">Visi & Misi</a></li>
        <li><a href="#article" class="nav-links">Article</a></li>
        <li><a href="#partner" class="nav-links">Partner</a></li> -->
        <li>
          <nuxt-link to="/article" class="nav-links">Article</nuxt-link>
        </li>
        <li v-if="this.$auth.loggedIn">
          <nuxt-link to="/admin" class="nav-links">{{
            this.$auth.user.name
          }}</nuxt-link>
        </li>
        <li v-else>
          <nuxt-link to="/admin/login" class="nav-links">Login</nuxt-link>
        </li>
      </ul>
      <!-- hamburger-menu-icon -->
      <div class="hamburger">
        <div class="hamburger-icon"></div>
        <div class="hamburger-icon"></div>
      </div>
    </nav>
  </main>
</template>

<script>
export default {
  mounted() {
    const nav = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
      console.log(nav);
      nav.classList.toggle("active");
    });
  },
};
</script>

<style scoped>
@import "@/assets/landing/css/main.css";
</style>
