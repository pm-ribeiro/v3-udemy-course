<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Alert!
        </p>
        <button
          class="delete"
          aria-label="close"
          @click="close"
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
          @click="close"
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
/** emits */
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const close = () => {
  emit('update:modelValue', false)
}

</script>