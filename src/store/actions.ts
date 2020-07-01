import API from '@/api'

import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Mutations } from './mutations'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.A_SET_FILTER](
    { commit }: AugmentedActionContext,
    payload: string
  ): void;
  [ActionTypes.A_LOAD_ITEMS](
    { commit }: AugmentedActionContext
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.A_SET_FILTER]({ commit }, payload: string) {
    commit(MutationTypes.M_SET_FILTER, payload)
  },
  async [ActionTypes.A_LOAD_ITEMS]({ commit }) {
    await API.loadItems()
      .then((data) => {
        commit(MutationTypes.M_SET_ITEMS, data.data)
      })
      .catch((error) => {
        alert(error)
      })
  },
  [ActionTypes.A_SELECT_ITEM]({ commit }, payload: number) {
    commit(MutationTypes.M_SELECT_ITEM, payload)
  },
  [ActionTypes.A_UNSELECT_ITEM]({ commit }, payload: number) {
    commit(MutationTypes.M_UNSELECT_ITEM, payload)
  },
}
