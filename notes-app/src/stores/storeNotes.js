import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: [
      {
        id: 1,
        content: 'First note',
      },
      {
        id: 2,
        content: 'shorter note',
      }
    ]
  }),

  actions: {
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
    }
  }
})
