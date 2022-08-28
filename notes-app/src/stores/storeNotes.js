import { defineStore } from 'pinia'
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  addDoc
} from 'firebase/firestore';
import {db} from '@/js/firebase';
import {useStoreAuth} from '@/stores/StoreAuth';


let notesCollectionRef, notesCollectionQuery;
let getNotesSnapshot = null;

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
      notesLoaded: false
    }
  },

  getters: {
    getNoteContent: (state) => {
      return (noteId) => state.notes.find((note) => note.id === noteId).content
    },

    totalNotesCount: (state) => {
      return state.notes.length
    },

    totalCharacterestCount: (state) => {
      return state.notes.reduce((total, note) => total + note.content.length, 0)
    }
  },

  actions: {
    async getNotes() {
      this.notesLoaded = false;

      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = []
        
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          }
          notes.push(note)
        });

        this.notes = notes;
        this.notesLoaded = true;
      }, error => {
        console.log('error message:', error.message)
      });
    },

    async addNote(content) {
      const currentDate = new Date().getTime(),
        date = currentDate.toString();

      await addDoc(notesCollectionRef, {
        date,
        content
      });

    },

    async deleteNote(noteId) {
      await deleteDoc(doc(notesCollectionRef, noteId));
    },

    async updateNote(id, content) {
      await updateDoc(doc(notesCollectionRef, id), {
        content
      });
    },

    clearNotes() {
      console.log('clearing notes...')
      this.notes = [];

      if(getNotesSnapshot) {
        getNotesSnapshot(); // unsibsribe from previous snapshot
      }
    },

    /**
     * Initialize database refs
     */
    init() {
      const storeAuth = useStoreAuth();

      notesCollectionRef = collection(
        db, 'users', storeAuth.user.id, 'notes'
      );

      notesCollectionQuery = query(
        notesCollectionRef, orderBy('date', 'desc')
      );

      this.getNotes();
    }
  }
})
