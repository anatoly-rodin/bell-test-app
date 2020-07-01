import { Item } from '@/utils/Item'
import { LogItem, LogItemTypes } from '@/utils/LogItem'

import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State } from './state'

export type Mutations<S = State> = {
  [MutationTypes.M_SET_FILTER](state: S, payload: string): void;
  [MutationTypes.M_SET_ITEMS](state: S, payload: []): void;
  [MutationTypes.M_SELECT_ITEM](state: S, payload: number): void;
  [MutationTypes.M_UNSELECT_ITEM](state: S, payload: number): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.M_SET_FILTER](state, payload: string) {
    state.filter = payload
  },
  [MutationTypes.M_SET_ITEMS](state, payload: []) {
    state.items = payload.map((item) => new Item(item))
    state.filteredItems = state.items
    state.loading = false
  },
  [MutationTypes.M_SELECT_ITEM](state, payload: number) {
    const item = state.filteredItems.find((i: Item) => i.id === payload)

    if (item !== undefined) {
      state.selectedItems.push(item)
      state.logs.push(new LogItem(item, LogItemTypes.SELECT))
      state.items = state.items.filter((i: Item) => i.id !== payload)
    }
  },
  [MutationTypes.M_UNSELECT_ITEM](state, payload: number) {
    const item = state.selectedItems.find((i: Item) => i.id === payload)

    if (item !== undefined) {
      state.items.push(item)
      state.logs.push(new LogItem(item, LogItemTypes.UNSELECT))
      state.selectedItems = state.selectedItems.filter((i: Item) => i.id !== payload)
    }
  },
}
