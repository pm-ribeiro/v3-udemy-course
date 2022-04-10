import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'My counter title - PINIA'
  }),

  getters: {
    isOddOrEven: (state) => {
      if(state.count % 2 === 0) {
        return 'even';
      }

      return 'odd';
    }
  },

  actions: {
    increase(payload) {
      this.count += payload;
    },

    decrease(payload) {
      this.count -= payload;
    },

    reset() {
      this.count = 0;
    }
  }
})
