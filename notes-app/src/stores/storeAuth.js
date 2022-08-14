import { defineStore } from 'pinia'
import { auth } from '@/js/firebase'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {

    }
  },

  getters: {

  },

  actions: {
    registerUser(credentials) {
      console.log(
        credentials.email,
        credentials.password,
      )
    },

    loginUser(credentials) {
      console.log(
        credentials.email,
        credentials.password,
      )
    }
  }
})
