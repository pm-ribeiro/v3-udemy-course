<template>
  <div class="notes">

    <AddEditNote
      ref="addEditNoteRef"
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

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-small is-primary" max="100"
    />

    <template v-else>
      <NoteCard
        class="mt-5"
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
        @deleteNote="deleteNote($event)"
      />
    </template>
  </div>
</template>

<script setup>

/** imports */
import { ref } from "vue";
import NoteCard from '@/components/Notes/NoteCard.vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import {useStoreNotes} from '@/stores/storeNotes';
import {useWatchCharacters} from '@/use/useWatchCharacters';

/** store */
const storeNotes = useStoreNotes();

const newNote = ref('');
const addEditNoteRef = ref(null);

function addNewNote() {
  if(!newNote.value) return;

  storeNotes.addNote(newNote.value);

  newNote.value = "";

  addEditNoteRef.value.focusTextarea();
}

/** watch characters */
useWatchCharacters(newNote, 140);

</script>