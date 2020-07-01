<template>
  <div class="input-field col s12">
    <input
      v-model="filter"
      type="text"
      placeholder="Введите имя"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  ActionTypes,
} from '@/store/action-types'

export default Vue.extend({
  name: 'VSearchInput',
  data: () => (
    {
      filter: '',
    }
  ),
  watch: {
    filter(value: string): void {
      this.$store.dispatch(ActionTypes.A_SET_FILTER, value)
    },
  },
})
</script>
