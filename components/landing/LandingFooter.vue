<template>
  <footer class="footer">
    <div v-if="$route.path.split('/')[1] == ''" class="footer-container">
      <a href="" class="logo">
        <img src="~/assets/img/logo.png" alt="" class="logo-img" />
        <span class="logo-text">HMIF Amikom</span>
      </a>
      <ul>
        <li>
          <a href="#header" class="footer-links">Home</a>
        </li>
        <li><a href="#vision" class="footer-links">Visi & Misi</a></li>
        <li><a href="#article" class="footer-links">Article</a></li>
        <li>
          <a href="privacy_policy.html" class="footer-links">Privacy Policy</a>
        </li>
      </ul>
    </div>
    <div v-else class="footer-container">
      <a href="" class="logo">
        <img src="~/assets/img/logo.png" alt="" class="logo-img" />
        <span class="logo-text">HMIF Amikom</span>
      </a>
      <ul>
        <li>
          <nuxt-link to="/#header" class="footer-links">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/#vision" class="footer-links">Visi & Misi</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/article" class="footer-links">Article</nuxt-link>
        </li>
        <li>
          <a href="privacy_policy.html" class="footer-links">Privacy Policy</a>
        </li>
      </ul>
    </div>
  </footer>
  <!-- .footer end -->
</template>

<style scoped>
@import "@/assets/landing/css/main.css";
</style>
