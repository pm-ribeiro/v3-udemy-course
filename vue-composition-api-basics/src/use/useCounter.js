/**
 * Imports
 */

import  {
  reactive,
  computed,
  watch,
  onMounted,
  nextTick
} from 'vue';

export function useCounter() {
  /**
   * Counter
   */
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
      return 'even';
    }

    return 'odd';
  })

  // Traditional way to declare a function
  async function increase(amount, e) {
    // Console log the event parameters
    console.log(e);
    counterData.count += amount;

    await nextTick(() => {
      console.log('do something');
    })
    console.log('do something 2');
  }

  // Alternative way - using arrow function
  const decrease = (amount) => counterData.count -= amount;

  const reset = () => counterData.count = 0;

  onMounted(() => {
    console.log('onMounted counter')
  })

  return {
    counterData,
    isOddOrEven,
    increase,
    decrease,
    reset
  }
}