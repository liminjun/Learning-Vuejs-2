import Vue from 'vue'




export  function getList({ commit }) {  
  Vue.resource("http://angularjsblog.duapp.com/api/blogs").get().then(function (response) {
    console.log(response.data);
    commit("GET_LIST", response.data)
  }).catch(function (error) {
    console.log(error);
  })
}