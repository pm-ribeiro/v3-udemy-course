<template>
  <div
    class="card p-4"
    :class="setBackgroundColor"
  >
    <div class="field">
      <label class="label">
        {{label}}
      </label>
      <div class="control">
        <textarea
          class="textarea"
          :placeholder="placeholder"
          v-model="modelValue"
          ref="textAreaRef"
          @input="$emit('update:modelValue', modelValue)"
          v-autofocus
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
/** imports */
import { ref } from "vue";
import { computed } from "vue";
import vAutofocus from '@/directives/vAutofocus';

/** emits */
const emit = defineEmits(['update:modelValue']);

/** props */
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  backgroundColor: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: "Type a new note..."
  },
  label: {
    type: String,
    default: "New note"
  }
})

const textAreaRef = ref(null);

const focusTextarea = () => {
  textAreaRef.value.focus();
}

defineExpose({
  focusTextarea
})


const setBackgroundColor = computed(
  () => {
    if(props.backgroundColor) {
      return `has-background-${props.backgroundColor}-dark`;
    }
  }
);

</script>