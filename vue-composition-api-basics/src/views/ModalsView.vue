<template>
  <div class="modals">
    <h1>Modals</h1>
    <button  @click="showModal = true">Show modal</button>
    <Modal
      v-model="showModal"
      title="Modal title"
    >
      <template #body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Assumenda debitis non accusantium facilis, placeat vel molestias totam, sit perferendis hic porro ad,
          nostrum blanditiis dolore dolorum voluptatibus error ullam architecto.
        </p>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
/**
 * modals
*/
const showModal = ref(false);

</script>