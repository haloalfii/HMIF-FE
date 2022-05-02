<template>
  <div>
    <LandingNavbar />
    <Nuxt />
    <LandingFooter />
    <!-- ======= Back to top ======= -->
    <a href="#" class="back-to-top"
      ><img src="~/assets/landing/img/arrow-up.svg" alt=""
    /></a>
  </div>
</template>

<script>
import LandingNavbar from "@/components/landing/LandingNavbar.vue";
import LandingFooter from "@/components/landing/LandingFooter.vue";

export default {
  components: { LandingNavbar, LandingFooter },
  mounted() {
    const nav = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
      console.log(nav);
      nav.classList.toggle("active");
    });

    let backtotop = document.querySelector(".back-to-top");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    });

    window.ityped.init(document.querySelector(".type-animation"), {
      strings: ["help", "serve", "develop"],
      loop: true,
      typeSpeed: 150,
    });
  },
};
</script>

<style scoped>
@import "@/assets/landing/css/main.css";
</style>
