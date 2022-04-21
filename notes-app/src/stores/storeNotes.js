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
    addNote(newNote) {
      let currentDate = new Date().getTime();

      let note = {
        id: currentDate.toString(),
        content: newNote,
      }

      this.notes.unshift(note);
    }
  }
})
