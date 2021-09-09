import Vue from 'vue'
import Vuex from 'vuex'
import works from './workpage.js'
import college from './college'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    works,
    college
  }
})
