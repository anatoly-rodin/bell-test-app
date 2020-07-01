<template>
  <div class="aside">
    <div class="row">
      <div class="input-field col s12">
        <input
          type="text"
          value="Выбранные элементы"
          readonly
        >
      </div>
    </div>
    <div class="row">
      <aside>
        <VSelectedItem
          v-for="(item, idx) in selectedItems"
          :key="idx"
          :data="item"
        />
      </aside>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { GetterTypes } from '@/store/getter-types'
import { Item } from '@/utils/Item'

import VSelectedItem from '@/components/VSelectedItem.vue'

export default Vue.extend({
  name: 'VAside',
  components: {
    VSelectedItem,
  },
  computed: {
    selectedItems(): Item[] {
      return this.$store.getters[GetterTypes.GET_SELECTED_ITEMS]
    },
  },
})
</script>

<style lang="scss" scoped>
.aside {
  aside {
    min-height: 200px;
    padding: 10px;
    border: 1px solid #eeeeee;
  }
}
</style>
