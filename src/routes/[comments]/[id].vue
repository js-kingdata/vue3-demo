<script lang="ts">

import {Load} from "ream/app";

export const load: Load = async ({params, query, path}) => {
  return {
    props: {
      params,
      query,
      path,
    },
  }
}
export default {
  props: ['params', 'path', 'query'],
  setup({params, path, query}) {
    return {params, path, query}
  }
}
</script>
<template>
  unknown page
  <br>
  {{ params }}
  <br>
  {{ path }}
  <br>
  {{ query }}
</template>
