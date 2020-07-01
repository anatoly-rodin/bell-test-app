<template>
  <div class="item">
    <div class="item__info">
      <div>
        <span>ID: {{ data.id }}</span>
      </div>
      <div>
        <span>Имя: {{ data.name }}</span>
      </div>
      <br>
      <div>
        Комментарии:
        <ul class="collection">
          <li
            v-for="(i, idx) in data.items"
            :key="idx"
            class="collection-item"
          >
            <div>
              <span>
                <strong>ID:</strong>
                {{ i.id }}
              </span>
            </div>
            <div>
              <p>{{ i.name }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="item__actions">
      <button
        class="btn"
        type="button"
        @click="selectItem(data.id)"
      >
        +
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ActionTypes } from '@/store/action-types'

export default Vue.extend({
  name: 'VItem',
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    selectItem(id: number): void {
      this.$store.dispatch(ActionTypes.A_SELECT_ITEM, id)
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
