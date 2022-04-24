<template>
  <div class="modal is-active p-4">
    <div class="modal-background"></div>
    <div
      class="modal-card"
      v-on-click-outside="closeModal"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">
          Alert!
        </p>
        <button
          class="delete"
          aria-label="close"
          @click="closeModal"
        ></button>
      </header>
      <section class="modal-card-body">
        <p>
          Are you sure you want to delete this note?
        </p>
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button
          class="button"
          @click="closeModal"
        >
          Cancel
        </button>
        <button class="button is-danger">
          Confirm
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
/** imports */
import { vOnClickOutside } from '@vueuse/components'
import { onMounted, onUnmounted, ref } from 'vue';

/** emits */
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

const closeModal = () => {
  emit('update:modelValue', false);
}

/** keyboard control */
const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
});

</script>