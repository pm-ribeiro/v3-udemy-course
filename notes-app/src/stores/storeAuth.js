import { defineStore } from 'pinia'
import { auth } from '@/js/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {useStoreNotes} from '@/stores/StoreNotes';


export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
      user: {},
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
    },

    initUser() {
      const storeNotes = useStoreNotes();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          console.log('user...', user);
          this.router.push('/');
          storeNotes.init();
        } else {
          this.user = {};
          console.log('user...', user);
          this.router.replace('/auth');
          storeNotes.clearNotes();
        }
      });
    }
  }
})
