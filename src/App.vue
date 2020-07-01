<template>
  <div id="app">
    <VHeader />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VHeader from '@/components/VHeader.vue'
import { ActionTypes } from '@/store/action-types'

export default Vue.extend({
  name: 'App',
  components: {
    VHeader,
  },
  mounted() {
    this.$store.dispatch(ActionTypes.A_LOAD_ITEMS)
  },
})
</script>
