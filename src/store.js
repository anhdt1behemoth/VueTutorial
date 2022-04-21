import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    username: 'Vuex.com',
    age: 10
  },
  getters: {

  },
  mutations: {
    changeUsername (state, newUsername) {
      state.username = newUsername
    }
  },
  actions: {
    handleChangeUsername (context, newUsername) {
      context.commit('changeUsername', newUsername)
    }
  }
})
