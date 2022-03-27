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

    <p>This counter is {{isOddOrEven}}</p>

    <div class="edit">
      <h4>Edit counter title</h4>
      <input type="text" v-model="counterData.title">
    </div>
  </div>
</template>

<script setup>
  import  {
    reactive,
    computed,
    watch,
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted,
  } from 'vue';

  const appTitle = 'A counter app';

  const counterData = reactive(
    {
      count: 0,
      title: 'My counter'
    }
  );

  // Watch the reactive data for changes
  watch(() => counterData.count, (newCount, oldCount) => {
    console.log(newCount, oldCount);
    if(newCount === 20) {
      alert('Way to go! You made to 20!')
    }
  })

  // Computed example, returns if the counter is odd or even
  const isOddOrEven = computed(() => {
    if(counterData.count % 2 === 0) {
      return 'is even';
    }

    return 'is odd';
  })

  // Traditional way to declare a function
  function increase(amount, e) {
    // Console log the event parameters
    console.log(e);
    return counterData.count += amount;
  }

  // Alternative way - using arrow function
  const decrease = (amount) => counterData.count -= amount;

  const reset = () => counterData.count = 0;

  onBeforeMount(() => {
    console.log('On bf mount')
  })

  onMounted(() => {
    console.log('On mount')
  })

  onBeforeUnmount(() => {
    console.log('On bf unmount')
  })

  onUnmounted(() => {
    console.log('On bf unmount')
  })

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
