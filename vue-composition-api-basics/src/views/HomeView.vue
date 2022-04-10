<template>
  <div class="home">
    <h2 ref="appTitleRef">{{appTitle}}</h2>
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
      <input type="text" v-model="counterData.title" v-auto-focus >
    </div>
  </div>
</template>

<script setup>
/**
 * Imports
 */

  import  {
    ref,
    onMounted,
  } from 'vue';

  import vAutoFocus from '@/directives/vAutoFocus';

  import { useCounter } from '@/use/useCounter';

  const {
    counterData,
    increase,
    decrease,
    reset,
    isOddOrEven
  } = useCounter();


  /**
   * App title related code
  */
  const appTitle = 'A counter app';
  const appTitleRef = ref(null);

  onMounted(() => {
    console.log(`App title is ${appTitleRef.value.offsetWidth}px wide`)
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
