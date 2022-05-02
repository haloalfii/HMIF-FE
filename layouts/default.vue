<template>
  <body id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <Sidebar />
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <Navbar />
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <Nuxt />
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <Footer />
        <!-- End of Footer -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>
  </body>
</template>

<script>
import Sidebar from "@/components/partials/Sidebar.vue";
import Navbar from "@/components/partials/Navbar.vue";
import Footer from "@/components/partials/Footer.vue";
export default {
  components: { Sidebar, Navbar, Footer },
};
</script>
