<template>
  <nav
    class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow align-items-center d-flex"
  >
    <!-- Sidebar Toggle (Topbar) -->
    <button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i class="fa fa-bars"></i>
    </button>

    <h3 style="margin-bottom: 0px !important" class="text-dark">
      {{ pageTitle }}
    </h3>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="mr-2 d-none d-lg-inline text-dark">{{
            this.$auth.user.name
          }}</span>
          <img
            class="img-profile rounded-circle ml-2"
            :src="'http://127.0.0.1:8000/' + this.$auth.user.picture"
          />
        </a>
        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <a class="dropdown-item" href="#">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-dark"></i>
            Profile
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-dark"></i>
            Settings
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-list fa-sm fa-fw mr-2 text-dark"></i>
            Activity Log
          </a>
          <div class="dropdown-divider"></div>
          <a
            class="dropdown-item"
            href="javascript:void(0)"
            @click="logoutUser"
          >
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-dark"></i>
            Logout
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    logoutUser() {
      this.$auth.logout().then(() => {
        this.$router.push("/admin/login");
      });
    },
    uppercaseFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
  computed: {
    pageTitle() {
      const paths = this.$route.path.split("/");
      const title = paths[2];
      if (title && paths.length > 3) {
        return (
          this.uppercaseFirstLetter(title) +
          " " +
          this.uppercaseFirstLetter(paths[3])
        );
      } else if (title) {
        return this.uppercaseFirstLetter(title);
      }
      return "Home";
    },
  },
};
</script>
