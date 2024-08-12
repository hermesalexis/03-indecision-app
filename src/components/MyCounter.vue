<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

interface Props {
  value: number;
}

const props = defineProps<Props>();


const { counter, squareCounter } = useCounter(props.value);





// import { computed, ref, type Prop } from 'vue';

// se define el objeto props donde las props son los argumentos
// que se pasan del componente padre al hijo. En este caso se
// define una props llamada value, tipo numérica y que es requerida
// const props = defineProps({
//   value: { type: Number, required: true }
// });

// codigo anterior en typescript
// value? => significa que el valor puede ser opcionas
// value => significa que es obligatorio

// interface Props {
//   value?: number;
//   text: string;
// }

// const props = defineProps<Props>();

// counter si no tiene valor pone 10 por defecto
// const counter = ref(props.value ?? 10);
// const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scoped>
.btn {
  @apply p-5 bg-blue-500  hover:bg-blue-700 mr-2;
}
</style>
