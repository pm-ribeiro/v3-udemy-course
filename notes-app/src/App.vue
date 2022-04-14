<template>
  <NavbarVue></NavbarVue>

  <RouterLink to="/" class="button">Notes</RouterLink>
  <RouterLink to="/stats" class="button">Stats</RouterLink>
  <RouterView></RouterView>
</template>

<script setup>
import NavbarVue from "./components/layout/Navbar.vue";
</script>

<style scoped>
@import "bulma/css/bulma.min.css";
</style>
