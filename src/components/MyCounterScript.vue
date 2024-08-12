<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
//import { computed, defineComponent, ref } from 'vue';
import { useCounter } from '../composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  // las props son enviadas a la función setup
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    // const counter = ref(props.value);
    // const squareCounter = computed(() => counter.value * counter.value);
    const { counter, squareCounter } = useCounter(props.value);
    return {
      counter,
      squareCounter,
    };
  },
});
</script>
