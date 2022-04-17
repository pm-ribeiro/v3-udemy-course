<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
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

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const deleteNote = () => {
  console.log('deleteNote')
}

const editNote = () => {
  console.log('editNote')
}

const saveEditedNote = () => {
  console.log('saveEditedNote')
}

</script>

<style lang="scss" scoped>

</style>