<template>
  <div class="home">
    <button class="btn" @click="decrement">-</button>
    <span class="counter">{{counter}}</span>
    <button class="btn" @click="increment">+</button>

    <br>

    <button class="btn" @click="reset">reset counter</button>
  </div>
</template>

<script setup>
  import  { ref } from 'vue';

  const counter = ref(0)

  // Traditional way to declare a function
  function increment() {
    return counter.value++;
  }

  // Alternative way - using arrow function
  const decrement = () => counter.value--;

  const reset = () => counter.value = 0;
</script>


<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn, .counter {
  font-size: 40px !important;
  margin: 10px !important;
}

</style>
