<template>
  <div class="card p-4">
    <div class="field">
      <label class="label">New note</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Type a new note..."
          v-model="newNote"
          ref="newNoteRef"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button
          class="button is-link has-background-primary"
          :disabled="!newNote"
          @click="addNewNote"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
/** imports */
import { ref } from "vue";

/** emits */
const emit = defineEmits(["newNote"]);

/** new note */
const newNote = ref("");
const newNoteRef = ref(null);

function addNewNote() {
  if(!newNote.value) return;

  emit("addNewNote", newNote.value);

  newNote.value = "";

  newNoteRef.value.focus();
}

</script>

<style lang="scss" scoped>

</style>