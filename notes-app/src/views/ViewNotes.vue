<template>
  <div class="notes">
    <!-- remove this p when ready -->
    <p>
      {{notes}}
    </p>
    <NewNote
      @addNewNote="addNewNote($event)"
    />
    <NoteCard
      class="mt-5"
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteNote="deleteNote($event)"
    />
  </div>
</template>

<script setup>

import NoteCard from '@/components/Notes/NoteCard.vue';
import NewNote from '@/components/Notes/NewNote.vue';


import { ref } from "vue";

/** Notes */
const notes = ref([
  {
    id: 1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    content: 'shorter note',
  },
])

function addNewNote(newNote){
  let currentDate = new Date().getTime();

  notes.value.unshift({
    id: currentDate.toString(),
    content: newNote,
  });

  console.log(notes.value);
}

const deleteNote = (noteId) => {
  notes.value = notes.value.filter(note => note.id !== noteId);
}

</script>