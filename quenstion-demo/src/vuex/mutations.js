import * as types from './mutation_types'



export default {

  [types.POPULATE_QUESTIONS](state, lists) {
    state.questions = lists
  },

}
