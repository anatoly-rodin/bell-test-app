<template>
  <div class="history">
    <h3>История{{ text }}</h3>
    <VLogList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VLogList from '@/components/VLogList.vue'

import {
  HistoryQueryTypes,
} from '@/utils/types'

export default Vue.extend({
  name: 'History',
  components: {
    VLogList,
  },
  computed: {
    text(): string {
      const {
        type,
      } = this.$route.query

      switch (type) {
        case HistoryQueryTypes.ADDED:
          return ' добавлений'
        case HistoryQueryTypes.REMOVED:
          return ' удалений'
        default:
          return ''
      }
    },
  },
})
</script>
