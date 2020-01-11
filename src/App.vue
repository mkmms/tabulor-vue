<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-10">
          <router-view></router-view>
        </div>
        <div class="col-2">
          <side-menu></side-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import SideMenu from './components/layout/SideMenu.vue';
export default {
  name: 'app',
  components: {
    Navbar,
    SideMenu
  }
}
</script>