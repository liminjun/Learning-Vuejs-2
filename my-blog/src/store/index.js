import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)



const state = {
  list: []
}



export default new Vuex.Store({
  state,
  actions,
  mutations
})
