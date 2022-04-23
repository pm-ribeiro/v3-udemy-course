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
        class="button is-link has-background-is-light mr-3"
        @click="$router.push('/')"
      >
        Cancel
      </button>
      <button
        class="button is-link has-background-link"
        :disabled="!noteContent"
        @click="handleSaveNote()"
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
import { useStoreNotes } from '@/stores/storeNotes';
import { useRoute, useRouter } from 'vue-router';

const storeNotes = useStoreNotes();
const route = useRoute(),
      router = useRouter();

/** note */
const noteContent = ref('');

noteContent.value = storeNotes.getNoteContent(route.params.id);

function handleSaveNote() {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push('/');
}

</script>
