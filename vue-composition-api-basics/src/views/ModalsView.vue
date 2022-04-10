<template>
  <div class="modals">
    <h1>Modals</h1>

    <div>
      <label for="">
        Show dark modal
        <input type="checkbox" v-model="showDarkModals">
      </label>
    </div>

    <button  @click="showModal = true">Show modal</button>
    <component
      :is="modalComponent"
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
    </component>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';
import { computed } from '@vue/reactivity';
/**
 * modals
*/
const showDarkModals = ref(false);
const showModal = ref(false);

const modalComponent = computed( () => {
    return showDarkModals.value ? ModalDark : Modal;
  });


</script>