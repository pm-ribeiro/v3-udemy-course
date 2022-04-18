<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <p>
          {{ note.content }}
        </p>

        <p class="has-text-right has-text-grey-light">
          <small>
            {{characterLength}}
          </small>
        </p>

      </div>
    </div>
    <footer class="card-footer">
      <a
        @click.prevent="deleteNote(note.id)"
        class="card-footer-item"
      >
        Delete
      </a>
      <a 
        @click.prevent="editNote(note.id)"
        class="card-footer-item"
      >
        Edit
      </a>
      <a
        @click.prevent="saveEditedNote(note.id)"
        class="card-footer-item"
      >
        Save
      </a>
    </footer>
  </div>
</template>

<script setup>

import { computed } from "vue";

/** emits */
const emit = defineEmits(["deleteNote"]);

/** props */
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const deleteNote = (noteId) => {
  emit("deleteNote", noteId);
}

const editNote = () => {
  console.log('editNote')
}

const saveEditedNote = () => {
  console.log('saveEditedNote')
}


const characterLength = computed(
  () => {
    let noteLength = props.note.content.length;
    let description =
      noteLength > 1 ? " characters" : " character";
    return `
      ${noteLength} ${description}
    `;
  }
)

</script>

<style lang="scss" scoped>

</style>