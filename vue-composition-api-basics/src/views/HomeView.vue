<template>
  <div class="home">
    <h2 ref="appTitleRef">{{appTitle}}</h2>
    <h3>
      {{counter.title}}
    </h3>
    <button class="btn" @click="counter.decrease(2)">-2</button>
    <button class="btn" @click="counter.decrease(1)">-</button>

    <span class="counter">{{counter.count}}</span>

    <button class="btn" @click="counter.increase(1)">+</button>
    <button class="btn" @click="counter.increase(2)">+2</button>

    <br>

    <button class="btn" @click="counter.reset">reset counter</button>

    <p>This counter is {{counter.isOddOrEven}}</p>

    <div class="edit">
      <h4>Edit counter title</h4>
      <input type="text" v-model="counter.title" v-auto-focus >
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

  import { useCounterStore } from '@/stores/counter';

  /**
   * App title related code
  */
  const appTitle = 'A counter app';
  const appTitleRef = ref(null);

  onMounted(() => {
    console.log(`App title is ${appTitleRef.value.offsetWidth}px wide`)
  })

  /** counter */

  const counter = useCounterStore();

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
