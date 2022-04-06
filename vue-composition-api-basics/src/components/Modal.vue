<template>
  <teleport to="body">
    <div class="modal-overlay">
      <div class="modal">

        <h2>{{title}}</h2>

        <slot name="body" />

        <button @click="close()">
          hide modal
        </button>
      </div>
    </div>
  </teleport>

</template>

<script setup>
/**props */

const props = defineProps({
  title: {
    type: String,
    default: 'A title',
  },
});
// accessing props
console.log(props.title);

/** emits */

const emit = defineEmits(['closeModal']);


/** handle close button */
function close() {
  emit('closeModal');
}

</script>

<style scoped>
.modal {
  background-color: rgb(122, 122, 225);
  padding: 12px;
  margin: auto;
  max-width: 50vh;
  max-height: 80vh;
  border-radius: 4px;
}

.modal-overlay {
  background-color: rgb(43, 43, 43);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
}
</style>