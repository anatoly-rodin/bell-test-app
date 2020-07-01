import { Item } from '@/utils/Item'
import {
  filterByName,
} from '@/utils/filters'
import { LogItem } from '@/utils/LogItem'

import { GetterTypes } from './getter-types'
import { State } from './state'

export type Getters = {
  [GetterTypes.GET_FILTER](state: State): string;
  [GetterTypes.GET_ITEMS](state: State): Item[];
  [GetterTypes.GET_SELECTED_ITEMS](state: State): Item[];
  [GetterTypes.GET_LOGS](state: State): LogItem[];
  [GetterTypes.GET_LOADER_STATUS](state: State): boolean;
}

export const getters: Getters = {
  [GetterTypes.GET_FILTER]: (state) => state.filter,
  [GetterTypes.GET_ITEMS]: (state) => {
    state.filteredItems = filterByName(state.items, state.filter)
    state.filteredItems.sort((a: Item, b: Item) => (a.id < b.id ? -1 : 1))

    if (state.filter !== '') {
      state.filteredItems.reverse()
    }

    return state.filteredItems
  },
  [GetterTypes.GET_SELECTED_ITEMS]: (state) => state.selectedItems,
  [GetterTypes.GET_LOGS]: (state) => state.logs,
  [GetterTypes.GET_LOADER_STATUS]: (state) => state.loading,
}
