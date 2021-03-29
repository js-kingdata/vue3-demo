<template>
  <h1>About</h1>
  {{ user.id }}
  <button @click="Logout()">Logout</button>
</template>

<script lang="ts">
import {inject} from "vue";

export default {
  setup() {
    const {user, Logout, checkLogin} = inject('user')
    console.log(checkLogin())
    return {
      user, Logout
    }
  }
}
</script>
