<template>
  <h1>Home</h1>
  <Counter/>
</template>

<script lang="ts">
import Counter from "../components/Counter.vue";


import {defineComponent} from "vue";

export default defineComponent({
  name: 'Home',
  components: {
    Counter
  }
})
</script>
