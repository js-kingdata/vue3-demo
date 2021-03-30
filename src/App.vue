<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <div class="logo"/>
      <a-menu
          theme="dark"
          mode="horizontal"
          v-model:selectedKeys="selectKey"
          :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <router-link to="/home">Home</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/about">About</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/liquidity?token=HBO">liquidity</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <router-view/>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  setup() {
    return {
      selectKey: ref<string[]>(['3']),
    };
  },
});
</script>
