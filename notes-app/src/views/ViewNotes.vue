<template>
  <div class="notes">

    <NewNote
      @addNewNote="addNewNote($event)"
    />
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
import NoteCard from '@/components/Notes/NoteCard.vue';
import NewNote from '@/components/Notes/NewNote.vue';
import {useStoreNotes} from '@/stores/storeNotes';

/** store */
const storeNotes = useStoreNotes();

</script>