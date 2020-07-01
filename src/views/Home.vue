<template>
  <div class="home row">
    <div class="col s7">
      <div class="row">
        <VSearchInput />
      </div>
      <div class="row">
        <VList />
      </div>
    </div>
    <div class="col s4 offset-s1">
      <VAside />
    </div>
    <VPreloader v-if="loaderStatus" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VSearchInput from '@/components/VSearchInput.vue'
import VList from '@/components/VList.vue'
import VAside from '@/components/VAside.vue'
import VPreloader from '@/components/VPreloader.vue'

import { GetterTypes } from '@/store/getter-types'

export default Vue.extend({
  name: 'Home',
  components: {
    VSearchInput,
    VList,
    VAside,
    VPreloader,
  },
  computed: {
    loaderStatus() {
      return this.$store.getters[GetterTypes.GET_LOADER_STATUS]
    },
  },
})
</script>
