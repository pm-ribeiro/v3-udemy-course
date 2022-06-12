import { defineStore } from 'pinia'
import { collection, onSnapshot } from "firebase/firestore"
import {db} from '@/js/firebase'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        // {
        //   id: '1',
        //   content: 'First note',
        // },
        // {
        //   id: '2',
        //   content: 'shorter note',
        // }
      ]
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
      onSnapshot(collection(db, "notes"), (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content
          }
          notes.push(note)
        });

        this.notes = notes;
      });
    },

    addNote(noteContent) {
      let currentDate = new Date().getTime();

      let newNote = {
        id: currentDate.toString(),
        content: noteContent,
      }

      this.notes.unshift(newNote);
    },

    deleteNote(noteId) {
      this.notes = this.notes.filter(note => note.id !== noteId);
    },

    updateNote(id, content) {
      let note = this.notes.find((note) => note.id === id)
      note.content = content;
    }
  }
})
