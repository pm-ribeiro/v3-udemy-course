<template>
  <div class="notes">

    <AddEditNote
      v-model="newNote"
    >
      <template #buttons>
        <button
          class="button is-link has-background-primary"
          :disabled="!newNote"
          @click="addNewNote"
        >
          Save
        </button>
      </template>
    </AddEditNote>

    <p>
      {{newNote}}
    </p>

    <NoteCard
      class="mt-5"
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
      @deleteNote="deleteNote($event)"
    />
  </div>
</template>

<script setup>

/** imports */
import { ref } from "vue";
import NoteCard from '@/components/Notes/NoteCard.vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import {useStoreNotes} from '@/stores/storeNotes';

/** store */
const storeNotes = useStoreNotes();

const newNote = ref('ABC...');

</script>