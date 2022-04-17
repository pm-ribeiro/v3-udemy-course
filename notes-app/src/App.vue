<template>
  <NavBar></NavBar>

  <RouterView />
</template>

<script setup>

import NavBar from './components/Layout/NavBar.vue';

</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>