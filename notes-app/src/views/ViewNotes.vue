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
import { ref, watch } from "vue";
import NoteCard from '@/components/Notes/NoteCard.vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import {useStoreNotes} from '@/stores/storeNotes';

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

watch(newNote, (newValue, oldValue) => {
  if(newValue.length === 140) {
    alert('Only 140 characters allowed');
  }
})

</script>