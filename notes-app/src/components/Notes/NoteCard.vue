<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <p>
          {{ note.content }}
        </p>

        <div class="columns is-mobile has-text-grey-light">
          <small class="column">
            Created at: {{dateFormatted}}
          </small>
          <small class="column has-text-right">
            {{characterLength}}
          </small>
        </div>

      </div>
    </div>

    <footer class="card-footer">
      <a
        @click.prevent="modals.deleteNote = true"
        class="card-footer-item"
      >
        Delete
      </a>
      <RouterLink
        :to="`/edit-note/${note.id}`"
        class="card-footer-item"
      >
        Edit
      </RouterLink>
    </footer>

    <DeleteNoteModal
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :note-id="note.id"
    />
  </div>
</template>

<script setup>

/** imports */
import { computed, reactive } from "vue";
import { useDateFormat } from '@vueuse/core'
import {useStoreNotes} from '@/stores/storeNotes';
import DeleteNoteModal from '@/components/DeleteNoteModal.vue';

/** store */
const storeNotes = useStoreNotes();

/** props */
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

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

/** modals */

const modals = reactive({
  deleteNote: false
})

// date formated
const dateFormatted = computed(
  () => {
    let date = new Date(parseInt(props.note.date))
    return useDateFormat(date, 'DD/MM/YYYY - HH:mm').value;
  }
)

</script>
