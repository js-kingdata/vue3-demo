<template>
  <Suspense>
    <template #default>
      <div v-for="{state, increment} in states">
        <button @click="increment(1)">+1</button>
        {{ state.name }}
        <button @click="increment(-1)">-1</button>
      </div>
    </template>
    <template #fallback>
      <div class="loading">loading</div>
    </template>
  </Suspense>
</template>

<script lang="ts">
import CountEffect from "./CounterF/counter";

export default {
  name: "Counter",
  setup: () => {
    const states = [0, 1, 2, 3, 4].map(idx => CountEffect(idx))
    return {states}
  }
}

</script>
