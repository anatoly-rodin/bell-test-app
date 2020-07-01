<template>
  <li class="collection-item">
    <div>
      <span>ID: {{ data.id }}</span>
    </div>
    <div>
      <span>Имя: {{ data.name }}</span>
    </div>
    <div>
      <span>Тип: {{ data.type }}</span>
    </div>
    <div>
      <span>Время: {{ data.date }}</span>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VLogItem',
  props: {
    data: {
      type: Object,
    },
  },
})
</script>
