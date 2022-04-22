<template>
  <div class="edit-note">
    <h1>Edit note - ID: {{$route.params.id}}</h1>
  </div>
  <AddEditNote
    v-model="noteContent"
    backgroundColor="link"
    placeholder="Edit note..."
    label="Edit note"
  >
    <template #buttons>
      <button
        class="button is-link has-background-is-light"
        @click="$router.push('/')"
      >
        Cancel
      </button>
      <button
        class="button is-link has-background-link"
        :disabled="!noteContent"
      >
        Save
      </button>
    </template>
  </AddEditNote>
</template>

<script setup>

/** imports */
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { ref } from 'vue';

/** note */
const noteContent = ref('');

</script>
