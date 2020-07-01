<template>
  <div class="item">
    <div class="item__info">
      <div>
        <span>ID: {{ data.id }}</span>
      </div>
      <div>
        <span>Имя: {{ data.name }}</span>
      </div>
    </div>
    <div class="item__actions">
      <button
        class="btn red"
        type="button"
        @click="unselectItem(data.id)"
      >
        -
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { ActionTypes } from '@/store/action-types'

export default Vue.extend({
  name: 'VSelectedItem',
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    unselectItem(id: number): void {
      this.$store.dispatch(ActionTypes.A_UNSELECT_ITEM, id)
    },
  },
})
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  padding: 15px;
  border: 1px solid #eeeeee;

  & + & {
    margin-top: 15px;
  }

  &__info {
    flex-basis: 90%;
  }

  &__actions {
    flex-basis: 10%;
  }
}
</style>
