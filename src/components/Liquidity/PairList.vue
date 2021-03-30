<template>
  <div style="width: 500px;">
    列表
    <ul>
      <li v-for="{code, symbol, rate, rate_float} in pairs" @click="click(code)" :key="code + symbol">
        {{ `${code} - ${symbol}` }} | {{ rate }} | {{ rate_float }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

import {CurrencyPrice} from "@/types/liquidity";

export default {
  props: ['pairs', 'click'],
  // props: {
  //   pairs: CurrencyPrice,
  //   click: Function,
  // },
  setup(props) {
    return props
  }
}
</script>
