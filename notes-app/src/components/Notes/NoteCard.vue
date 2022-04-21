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
        @click.prevent="storeNotes.deleteNote(note.id)"
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
    </footer>
  </div>
</template>

<script setup>

/** imports */
import { computed } from "vue";
import {useStoreNotes} from '@/stores/storeNotes';

/** store */
const storeNotes = useStoreNotes();

/** props */
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const editNote = () => {
  console.log('editNote')
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
