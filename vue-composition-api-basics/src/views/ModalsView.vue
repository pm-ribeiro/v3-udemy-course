<template>
  <div class="modals">
    <h1>Modals</h1>
    <button  @click="showModal = true">Show modal</button>
    <Modal v-if="showModal">
      <template #title>
        <h2>This is a modal title</h2>
      </template>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Assumenda debitis non accusantium facilis, placeat vel molestias totam, sit perferendis hic porro ad,
        nostrum blanditiis dolore dolorum voluptatibus error ullam architecto.
      </p>
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