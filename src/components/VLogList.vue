<template>
  <div class="log-list">
    <ul
      v-if="logList.length"
      class="collection"
    >
      <VLogItem
        v-for="(log, idx) in logList"
        :key="idx"
        :data="log"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { LogItem, LogItemTypes } from '@/utils/LogItem'
import { HistoryQueryTypes } from '@/utils/types'
import VLogItem from '@/components/VLogItem.vue'

import {
  GetterTypes,
} from '@/store/getter-types'

export default Vue.extend({
  name: 'VLogList',
  components: {
    VLogItem,
  },
  computed: {
    logs(): LogItem[] {
      return this.$store.getters[GetterTypes.GET_LOGS]
    },
    logList(): LogItem[] {
      const {
        type,
      } = this.$route.query

      switch (type) {
        case HistoryQueryTypes.ADDED:
          return this.logs.filter((item) => item.type === LogItemTypes.SELECT)
        case HistoryQueryTypes.REMOVED:
          return this.logs.filter((item) => item.type === LogItemTypes.UNSELECT)
        default:
          return this.logs
      }
    },
  },
})
</script>
