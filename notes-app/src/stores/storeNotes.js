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
} from "firebase/firestore"
import {db} from '@/js/firebase'

const notesCollectionRef = collection(db, "notes");
const notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));
;

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
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
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
      });
      this.notesLoaded = true;
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
    }
  }
})
