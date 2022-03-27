<template>
  <div class="home">
    <button class="btn" @click="decrement">-</button>
    <span class="counter">{{counter}}</span>
    <button class="btn" @click="increment">+</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      counter: 0
    }
  },

  methods: {
    increment() {
      this.counter += 1;
    },

    decrement() {
      this.counter -= 1;
    }
  }
}

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
