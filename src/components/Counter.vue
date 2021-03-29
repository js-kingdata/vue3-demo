<template>
  <div class="counter">
    <button @click="increment(1)">+1</button>
    {{ count.value }}
    <button @click="decrement()">-1</button>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {CounterModel} from "../types/counter";


export default defineComponent({
  name: "Counter",
  setup: () => {
    const count = ref<CounterModel>({value: 111, name: 'counter1'})
    const increment = (payload: number = 1) => {
      count.value += payload
    }
    const decrement = (payload: number = 2) => {
      count.value -= payload
    }
    return {count, increment, decrement}
  }
})

</script>
