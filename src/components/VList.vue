<template>
  <div class="list">
    <VItem
      v-for="(item, idx) of items"
      :key="idx"
      :data="item"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { GetterTypes } from '@/store/getter-types'
import VItem from '@/components/VItem.vue'

export default Vue.extend({
  name: 'VList',
  components: {
    VItem,
  },
  computed: {
    items() {
      return this.$store.getters[GetterTypes.GET_ITEMS]
    },
  },
})
</script>
