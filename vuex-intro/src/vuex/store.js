import Vue from "vue"
import Vuex from "vuex"

import {ADD_ITEM} from './mutation-types'
import {DELETE_ITEM} from './mutation-types'


Vue.use(Vuex)

const state = {
    items: [],//数据列表
    name: "" //应用名称
}

const mutations = {
    ADD_ITEM(state, payload) {
        state.items.push(payload.item);
    },
    DELETE_ITEM(state) {
        state.items.pop();
    }

    // [ADD_ITEM](state, payload) {
    //     state.items.push(payload.item);
    // },
    // [DELETE_ITEM](state) {
    //     state.items.pop();
    // }
};

const getters={
    itemsCount:function(){
        return state.items.length
    }
}
const actions = {
    addItem(context,item) {
        context.commit("ADD_ITEM", {item:item});
    },
    deleteItem(context) {
        //action内部执行异步操作
        setTimeout(function(){
            context.commit("DELETE_ITEM");
        },1000);
        
    }
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});