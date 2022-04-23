import { watch } from "vue";

export function useWatchCharacters(
  valueToWatch,
  maxCharacteres = 100
) {

  watch(valueToWatch, (newValue) => {
    if(newValue.length === maxCharacteres) {
      alert(`
        Only ${maxCharacteres} characters allowed
      `);
    }
  });
};