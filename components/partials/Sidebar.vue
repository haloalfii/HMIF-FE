<template>
  <div>
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      style="height: 100%"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <nuxt-link
        class="sidebar-brand d-flex align-items-center justify-content-center"
        to="/admin"
      >
        <i class="fas fa-heart text-danger"></i>
        <div class="small mx-3">School System</div>
      </nuxt-link>

      <!-- Heading -->
      <li
        class="nav-item"
        :class="{ active: $route.path.split('/')[1] == 'admin' }"
        style="margin-top: 56px"
      >
        <nuxt-link class="nav-link" to="/admin">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></nuxt-link
        >
      </li>
      <hr class="sidebar-divider" />
      <div v-for="(data, indexMenu) of menuItems" :key="indexMenu">
        <div class="sidebar-heading">{{ data.title }}</div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li
          v-for="(dataMenu, indexMenuDetail) of data.menu"
          :key="indexMenuDetail"
          :class="{
            active: $route.path.split('/')[1] == dataMenu.active,
          }"
          class="nav-item"
        >
          <div v-if="dataMenu.isSubMenu">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              :data-target="'#collapseTwo' + dataMenu.id"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i :class="dataMenu.menuIcon"></i>
              <span>{{ dataMenu.menuName }}</span>
            </a>
            <div
              :id="'collapseTwo' + dataMenu.id"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">{{ dataMenu.mainTitle }}</h6>
                <nuxt-link
                  v-for="(dataSubMenu, indexSubMenu) of dataMenu.subMenu"
                  :key="indexSubMenu"
                  class="collapse-item"
                  :to="dataSubMenu.Link"
                  >{{ dataSubMenu.subMenuTitle }}</nuxt-link
                >
              </div>
            </div>
          </div>
          <div v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="dataMenu.Link">
                <i :class="dataMenu.menuIcon"></i>
                <span>{{ dataMenu.menuName }}</span></nuxt-link
              >
            </li>
          </div>
        </li>
        <hr class="sidebar-divider d-none d-md-block" />
      </div>
    </ul>
  </div>
</template>

<script>
import { menuItems } from "./menu";
export default {
  data() {
    return {
      menuItems: menuItems,
    };
  },
};
</script>
