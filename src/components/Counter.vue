<template>
  <div v-for="{state, increment} in states">
    <button @click="increment(1)">+1</button>
    {{ state.name }}
    <button @click="increment(-1)">-1</button>
  </div>
  <p>

    {{ user.id }}
  </p>
  <button @click="Login()">Login</button>
</template>

<script lang="ts">
import CountEffect from "./CounterF/counter";
import {inject} from 'vue'

export default {
  name: "Counter",
  inject: ['user'],
  setup: () => {
    const {user, Login} = inject('user')
    const states = [0, 1, 2, 3, 4].map(idx => CountEffect(idx))
    return {states, Login, user}
  }
}

</script>
