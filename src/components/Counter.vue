<template>
  <div class="counter">
    <button @click="increment(1)">+1</button>
    {{ state.name }}
    <button @click="increment(-1)">-1</button>
  </div>

</template>

<script lang="ts">
import {reactive, computed} from "vue";
import {CounterModel} from "../types/counter";

const CountEffect = () => {
  const state = reactive<CounterModel>({value: 111, name: computed(() => state.name = `counter: ${state.value}`)})
  const increment = (payload: number = 1) => {
    state.value += payload
  }
  return {state, increment}
}

export default {
  name: "Counter",
  setup: () => {
    const {state, increment} = CountEffect()
    return {state, increment}
  }
}

</script>
