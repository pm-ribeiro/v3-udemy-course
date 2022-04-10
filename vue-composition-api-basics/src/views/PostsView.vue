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
      @click="increase(1)"

      :class="{'yellow' : isOddOrEven === 'odd'}"
    >
      {{counterData.count}}
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

  import { useCounter } from '@/use/useCounter';

  const {
    counterData, increase, isOddOrEven
  } = useCounter();


  const posts = reactive(
    [
      { id: '1', title: 'Post 1' },
      { id: '2', title: 'Post 2' },
      { id: '3', title: 'Post 3' },
    ]
  )

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