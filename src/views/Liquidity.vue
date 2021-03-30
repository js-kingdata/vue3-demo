<template>
  <div style="display: flex;">
    <PairList :pairs="pairs" :click="clickPair"/>
    <div v-if="isToken">
      <TokenLiquidity/>
    </div>
    <div v-else>
      <PairLiquidityOrPrice/>
    </div>
  </div>

</template>

<script lang="ts">

import {onMounted, ref} from "vue";
import {useRoute} from 'vue-router'
import axios from "axios";
import {CurrencyPrice} from "@/types/liquidity";

const pairListEffect = (symbol: string) => {
  const pairs = ref<CurrencyPrice>([])
  const fetchData = () => {
    return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(json => {
          pairs.value = json.data.bpi
        })
  }
  onMounted(fetchData)
  return {pairs, fetchData}
}

const pairDetailEffect = (pair: string) => {
  const pairDetail = ref(null)
  const fetchDetail = () => {
    axios.get(`pairs/${pair}`)
        .then(json => {
          detail.value = json
        })
  }
  return {pairDetail, fetchDetail}
}

export default {

  setup() {
    const {token, pair} = useRoute().query
    const isToken = ref(false)
    const clickPair = (pair) => {
      isToken.value = false
      pairDetailEffect(pair)
    }
    const {pairs} = pairListEffect()

    if (!!token) {
      // todo token query
      isToken.value = true
    } else if (!!pair) {
      // todo pair query
    }
    return {isToken, pairs, clickPair}
  }
}
</script>
