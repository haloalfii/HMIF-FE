<template>
  <div style="height: 90%">
    <div
      class="container-fluid d-flex align-items-center justify-content-center"
      style="height: 100%"
    >
      <!-- 404 Error Text -->
      <div class="text-center">
        <div class="title">{{ message }}</div>
        <div v-if="statusCode === 404">
          <div class="error mx-auto" data-text="404">404</div>
          <p class="lead text-gray-800 mb-5">Page Not Found</p>
          <p class="text-gray-500 mb-0">
            It looks like you found a glitch in the matrix...
          </p>
          <nuxt-link to="/">&larr; Back to Home Page</nuxt-link>
        </div>

        <div v-else>
          <p class="description">
            An error occurred while rendering the page. Check developer tools
            console for details.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/partials/Sidebar.vue";
import Navbar from "@/components/partials/Navbar.vue";
import Footer from "@/components/partials/Footer.vue";
export default {
  name: "NuxtError",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  components: { Sidebar, Navbar, Footer },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message || "Error";
    },
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1.0,minimum-scale=1.0",
        },
      ],
    };
  },
};
</script>
