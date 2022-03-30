<template>
  <div class="modals">
    <h1>Modals</h1>
    <button  @click="showModal = true">Show modal</button>

    <teleport to="body">
      <div class="modal-overlay" v-if="showModal">
        <div class="modal">
          <h2>This is a modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda debitis non accusantium facilis, placeat vel molestias totam, sit perferendis hic porro ad,
            nostrum blanditiis dolore dolorum voluptatibus error ullam architecto.
          </p>

          <button @click="showModal = false">
            hide modal
          </button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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