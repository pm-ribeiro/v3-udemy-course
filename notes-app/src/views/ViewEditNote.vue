<template>
  <div class="edit-note">
    <h1>Edit note - ID: {{$route.params.id}}</h1>
  </div>
  <AddEditNote

  />
</template>

<script setup>

import AddEditNote from '@/components/Notes/AddEditNote.vue';

</script>
