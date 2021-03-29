<template>
  <div class="counter">
    <button @click="increment(1)">+1</button>
    {{ name }} : {{ value }}
    <button @click="decrement()">-1</button>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref, reactive, toRefs} from "vue";
import {CounterModel} from "../types/counter";


export default defineComponent({
  name: "Counter",
  setup: () => {
    const useFeatures = () => {
      const state = reactive<CounterModel>({value: 111, name: 'counter1111'})
      return toRefs(state)
    }
    const {value, name} = useFeatures()
    const increment = (payload: number = 1) => {
      value.value += payload
    }
    const decrement = (payload: number = 2) => {
      value.value -= payload
    }
    return {name, value, increment, decrement}
  }
})

</script>
