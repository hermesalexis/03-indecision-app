<template>
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <hr />
  <!-- utilizo el componente My Counter-->
  <!-- v-bind:xxx="yyy" es el equivalente a poner :xxxx="yyy"-->
  <!-- con los dos puntos :value, no se manda un string sino un valor numérico-->
  <MyCounter :value="1" text="Hola mundo" />
  <MyCounterScript :value="2" />
  <MyCounterScript2 :value="3" />
</template>

<script lang="ts" setup>
// import componente MyCounter
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>
