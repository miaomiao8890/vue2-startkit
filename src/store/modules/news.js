import * as types from '../mutation-types'
import fetch from 'isomorphic-fetch'

// initial state
const state = {
  loading: false,
  newsList: [],
  errorMsg: ''
}

// getters
const getters = {
  getNewsList: state => state.newsList,
  getRequestStatus: state => state.loading
}

// actions
const actions = {
  fetchInitNewsList ({ commit }) {
    commit(types.REQUESTING)
    fetch('http://123.57.21.57:8011/vuedemo/vuedemo1.json')
      .then(res => res.json())
      .then(data => commit(types.FETCH_NEWS_LIST_SUCCESS, data.data))
      .catch(e => commit(types.REQUESTING, { e }))
  },
  fetchMoreNewsList ({ commit }) {
    commit(types.REQUESTING)
    fetch('http://123.57.21.57:8011/vuedemo/vuedemo2.json')
      .then(res => res.json())
      .then(data => commit(types.FETCH_MORE_NEWS_LIST_SUCCESS, data.data))
      .catch(e => commit(types.REQUESTING, { e }))
  }
}

// mutations
const mutations = {
  [types.REQUESTING] (state) {
    state.loading = true
  },
  [types.FETCH_NEWS_LIST_SUCCESS] (state, list) {
    state.newsList = list
    state.loading = false
  },
  [types.FETCH_MORE_NEWS_LIST_SUCCESS] (state, list) {
    state.newsList = [...state.newsList, ...list]
    state.loading = false
  },
  [types.FETCH_NEWS_LIST_FAILURE] (state, { err }) {
    state.errorMsg = err
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}