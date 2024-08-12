import { computed, ref } from "vue";

//const counter = ref(10); // gestor de estado global para nuestra aplicación basado en un composable

export const useCounter = (initialValue: number = 5) => {
  // las propiedades read only no necesitan definirse como variables al ser retornadas
  const counter = ref(initialValue); // gestor de estado global para nuestra aplicación basado en un composable

  return {
    counter,

    // Read-only
    squareCounter: computed(() => counter.value * counter.value),
  }
}