import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import getters from './getters'
import actions from './actions'
import { CHANGE_MSG, INCREMENT_COUNTER } from './mutation_types' 
Vue.use(Vuex)

const  state={
    msg:"Hello Vue!",
    counter:0
}

const mutations={
    [CHANGE_MSG](state,msg){
        state.msg=msg
    },
    [INCREMENT_COUNTER](state){
        state.counter++;
=======

Vue.use(Vuex)

const  state={
    msg:"Hello Vue!"
}

const mutations={
    changeMessage(state,msg){
        state.msg=msg
>>>>>>> 55a8220836510f524267f8cfa29e3ce7d1ac4d70
    }
}

export default new Vuex.Store({
    state,
<<<<<<< HEAD
    mutations,
    getters,
    actions
=======
    mutations
>>>>>>> 55a8220836510f524267f8cfa29e3ce7d1ac4d70
})