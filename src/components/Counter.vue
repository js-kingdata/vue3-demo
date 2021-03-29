<template>
  <div v-for="{state, increment} in states">
    <button @click="increment(1)">+1</button>
    {{ state.name }}
    <button @click="increment(-1)">-1</button>
  </div>
</template>

<script lang="ts">
import {reactive, computed, toRef} from "vue";
import {CounterModel} from "../types/counter";

const CountEffect = (defaultValue: number = 0) => {
  const state = reactive<CounterModel>({
    value: defaultValue,
    name: computed(() => `counter: ${state.value}`)
  })
  const increment = (payload: number = 1) => {
    state.value += payload
  }
  return {state, increment}
}

export default {
  name: "Counter",
  setup: () => {
    const states = [0, 1, 2, 3, 4].map(idx => CountEffect(idx))
    return {states}
  }
}

</script>
