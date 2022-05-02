<template>
  <div>
    <header id="header" class="header">
      <main class="header-container">
        <div class="header_content">
          <h1 class="heading-primary">
            <span class="heading_span_1">Welcome to </span><br />
            <span class="heading_span_2">HMIF Amikom </span><br />
            <span class="heading_span_3"
              >We're here to <span class="type-animation"></span>
            </span>
          </h1>
          <p class="text-paragraph-18">
            We have lot's content to help you with your Study, start with
            article, question bank, tutorial, and many more to come
          </p>
          <a href="#vision" class="btn btn-hmif">Get in touch</a>
        </div>
        <!-- .header-container end -->
        <div class="header_img">
          <img src="~/assets/img/logo.png" alt="" />
        </div>
        <!-- .header-img end -->
      </main>
    </header>
    <main class="stats">
      <h3
        class="mt-5 heading-secondary text-center"
        style="width: 80%; margin: 0 auto"
      >
        Our Division
      </h3>
      <section class="stats-container">
        <div class="stats_card stats_card_1">
          <h3 class="heading-tertiary">Aspirasi Advokasi</h3>
        </div>
        <!-- .stats_card_1 end -->
        <div class="stats_card stats_card_2">
          <h3 class="heading-tertiary">Litbang</h3>
        </div>
        <!-- .stats_card_2 end -->
        <div class="stats_card stats_card_3">
          <h3 class="heading-tertiary">Keorganisasian</h3>
        </div>
        <!-- .stats_card_3 end -->
        <div class="stats_card stats_card_4">
          <h3 class="heading-tertiary">Humas</h3>
        </div>
        <!-- .stats_card_4 end -->
      </section>
      <!-- .stats-container end -->
    </main>
    <main id="vision" class="showcase showcase_1">
      <div class="showcase-container">
        <div class="showcase_content">
          <h2 class="heading-secondary text-center">Visi dan Misi</h2>
          <span class="text-paragraph-16">
            Visi <br />
            Membuat HMIF Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Dolorem, sapiente! <br />
            Misi <br />
            <ol style="margin-left: 30px">
              <li>
                Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Voluptas iure dolore distinctio iusto qui.
                Repellendus?
              </li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ol>
          </span>
        </div>
        <!-- .showcase_content end -->
        <img src="~/assets/img/logo.png" alt="" class="showcase_img" />
      </div>
      <!-- .showcase-container end -->
    </main>
    <main id="article" class="cards">
      <h3 class="text-center mb-4 heading-secondary">Our Article</h3>
      <div class="cards-container">
        <div class="card card_1">
          <img
            src="~/assets/img/logo.png"
            width="64px"
            height="64px"
            class="card_img"
            alt=""
          />
          <h3 class="heading-tertiary card_heading">Analyze</h3>
          <p class="card_text" style="font-size: 16px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            nesciunt.
          </p>
          <a href="" class="card_text_link">Learn More</a>
        </div>
        <!-- .card-1 end -->
        <div class="card card_2">
          <img
            src="~/assets/img/logo.png"
            width="64px"
            height="64px"
            class="card_img"
            alt=""
          />
          <h3 class="heading-tertiary card_heading">Explore</h3>
          <p class="card_text" style="font-size: 16px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            nesciunt.
          </p>
          <a href="" class="card_text_link">Learn More</a>
        </div>
        <!-- .card-2 end -->
        <div class="card card_3">
          <img
            src="~/assets/img/logo.png"
            width="64px"
            height="64px"
            class="card_img"
            alt=""
          />
          <h3 class="heading-tertiary card_heading">Creative</h3>
          <p class="card_text" style="font-size: 16px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            nesciunt.
          </p>
          <a href="" class="card_text_link">Learn More</a>
        </div>
        <!-- .card-3 end -->
      </div>
      <!-- .cards-container end -->
      <div style="display: flex; justify-content: center; margin-top: 3rem">
        <button class="btn btn-hmif">Read More</button>
      </div>
    </main>
    <main class="cta">
      <h2 class="heading-secondary">Backed by the best</h2>
      <p class="text-paragraph-16">
        Our university gives a lot of support to this organization
        <br class="cta_mb_br" />
        building some of our favourite products at
      </p>
      <div class="cta_brand">
        <img src="~/assets/img/logo.png" class="cta_brand_img" alt="" />
        <img src="~/assets/img/logo-amikom.png" class="cta_brand_img" alt="" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: "landing",
  head() {
    return {
      title: "HMIF",
    };
  },
  data() {
    return {
      authStatus: false,
    };
  },
};
</script>

<style scoped>
@import "@/assets/landing/css/main.css";
</style>
