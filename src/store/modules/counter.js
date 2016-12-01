import * as types from '../mutation-types'

// initial state
const state = {
  count: 0
}

// getters
const getters = {
  getCount: state => state.count
}

// actions
const actions = {

}

// mutations
const mutations = {
  [types.INCREMENT_COUNTER] (state) {
    state.count++
  },
  [types.DECREMENT_COUNTER] (state) {
    state.count--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}