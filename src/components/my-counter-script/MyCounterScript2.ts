import { useCounter } from '@/composables/useCounter';
//import { computed, defineComponent, ref } from 'vue';
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
