<template>
  <teleport to="body">
    <div class="modal-overlay">
      <div class="modal">

      <slot name="title" />
        <slot />

        <pre>
          {{ $slots.title}}
        </pre>
        <button @click="showModal = false">
          hide modal
        </button>
      </div>
    </div>
  </teleport>

</template>

<script setup>
import { ref } from 'vue';
import {useSlots} from 'vue';
const slots = useSlots();

console.log(slots.title())

/**
 * modals
*/
const showModal = ref(false);

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