<template>
  <NavBar></NavBar>
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
import {onMounted} from 'vue';
import NavBar from './components/Layout/NavBar.vue';

import {useStoreAuth} from '@/stores/storeAuth.js';

/** Store */
const storeAuth = useStoreAuth();

onMounted(() => {
  storeAuth.initUser();
})

</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>