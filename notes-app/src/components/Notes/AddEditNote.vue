<template>
  <div class="card p-4">
    <div class="field">
      <label class="label">New note</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Type a new note..."
          v-model="modelValue"
          ref="newNoteRef"
          @input="$emit('update:modelValue', modelValue)"
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
/** imports */
import { ref } from "vue";
import {useStoreNotes} from '@/stores/storeNotes';

/** store */
const storeNotes = useStoreNotes();

/** emits */
const emit = defineEmits(['update:modelValue']);

/** props */
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

/** new note */
const newNoteRef = ref(null);

// function addNewNote() {
//   if(!newNote.value) return;

//   storeNotes.addNote(newNote.value);

//   newNote.value = "";

//   newNoteRef.value.focus();
// }

</script>

<style lang="scss" scoped>

</style>