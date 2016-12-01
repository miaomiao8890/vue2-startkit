import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import news from './modules/news'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter,
    news
  }
})

export default store
