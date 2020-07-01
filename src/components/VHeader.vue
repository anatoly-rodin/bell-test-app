<template>
  <nav>
    <div class="nav-wrapper">
      <ul
        id="nav-mobile"
        class="right hide-on-med-and-down"
      >
        <li>
          <router-link
            :to="{ path: '/' }"
          >
            <i class="material-icons">home</i>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ path: '/history', query: { type: types.ALL } }"
          >
            История
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ path: '/history', query: { type: types.ADDED } }"
          >
            История добавлений
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ path: '/history', query: { type: types.REMOVED } }"
          >
            История удалений
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

import {
  HistoryQueryTypes,
} from '@/utils/types'

export default Vue.extend({
  name: 'VHeader',
  computed: {
    types() {
      return HistoryQueryTypes
    },
  },
})
</script>
