<template>
  <div>
    Ini Halaman Admin {{ this.$auth.user }}
    <button @click="logoutUser">Logout</button>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",

  head() {
    return {
      title: "Home | HMIF Amikom",
    };
  },

  methods: {
    logoutUser() {
      this.$auth.logout().then(() => {
        this.$router.push("/admin/login");
      });
    },
  },
};
</script>
