<template>
  <NavBar></NavBar>
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
import {onMounted} from 'vue';
import NavBar from './components/Layout/NavBar.vue';
import {useStoreNotes} from '@/stores/storeNotes.js';

/** Store */
const storeNotes = useStoreNotes();

onMounted(() => {
  storeNotes.getNotes()
})

</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>