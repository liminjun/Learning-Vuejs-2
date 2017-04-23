import shop from '../../api/shop'
import * as types from '../mutation-types'// 引入所有的类型，然后制定为一个types对象，包含mutation-types里面所有的常量

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  //字符串的事件类型(type)和一个回调函数(handler)，接收state作为第一个参数，mutation的载荷(payload)
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
