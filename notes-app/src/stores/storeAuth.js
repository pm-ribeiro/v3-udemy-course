import { defineStore } from 'pinia'
import { auth } from '@/js/firebase'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";


export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {

    }
  },

  getters: {

  },

  actions: {
    registerUser(credentials) {
      const { email, password } = credentials

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.error('Error:', errorCode, errorMessage);
      });
    },

    loginUser(credentials) {
      const { email, password } = credentials

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User:', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error:', errorCode, errorMessage);
      });

    },

    logoutUser() {
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
  }
})
