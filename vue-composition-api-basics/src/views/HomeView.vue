<template>
  <div class="home">
    <h2>{{appTitle}}</h2>
    <h3>
      {{counterData.title}}
    </h3>
    <button class="btn" @click="decrease(2)">-2</button>
    <button class="btn" @click="decrease(1)">-</button>

    <span class="counter">{{counterData.count}}</span>

    <button class="btn" @click="increase(1, $event)">+</button>
    <button class="btn" @click="increase(2)">+2</button>

    <br>

    <button class="btn" @click="reset">reset counter</button>

    <div class="edit">
      <h4>Edit counter title</h4>
      <input type="text" v-model="counterData.title">
    </div>
  </div>
</template>

<script setup>
  import  { reactive } from 'vue';

  const appTitle = 'A counter app';

  const counterData = reactive(
    {
      count: 0,
      title: 'My counter'
    }
  );
  // Traditional way to declare a function
  function increase(amount, e) {
    // Console log the event parameters
    console.log(e);
    return counterData.count += amount;
  }

  // Alternative way - using arrow function
  const decrease = (amount) => counterData.count -= amount;

  const reset = () => counterData.count = 0;
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

.edit {
  margin: 20px;
}
</style>
