<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink
          :to="`/postDetail/${post.id}`"
        >
          Post {{post.id}}
        </RouterLink>
      </li>
    </ul>

    <textarea v-auto-focus/>

    <button
      class="counter-button"
      @click="counter.increase(1)"

      :class="{'yellow' : counter.isOddOrEven === 'odd'}"
    >
      {{counter.count}}
    </button>
  </div>
</template>

<script setup>
/**
 * Imports
 */
  import vAutoFocus from '@/directives/vAutoFocus';
  import  {
    reactive,
  } from 'vue';
  import { useCounterStore } from '@/stores/counter';

  const posts = reactive(
    [
      { id: '1', title: 'Post 1' },
      { id: '2', title: 'Post 2' },
      { id: '3', title: 'Post 3' },
    ]
  )

  /** counter */
  const counter = useCounterStore();

</script>

<style scoped>
ul {
  margin-bottom: 30px;
}

.counter-button {
  font-size: 32px;
  background-color: pink;
}

.counter-button.yellow {
  background-color: yellow;
}
</style>