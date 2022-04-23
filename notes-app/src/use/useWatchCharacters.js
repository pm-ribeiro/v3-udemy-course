import { watch } from "vue";

export function useWatchCharacters(valueToWatch, numberOfCharacters) {

  watch(valueToWatch, (newValue) => {
    if(newValue.length === numberOfCharacters) {
      alert(`
        Only ${numberOfCharacters} characters allowed
      `);
    }
  });
};