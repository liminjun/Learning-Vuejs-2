import Vue from 'vue'
import App from './App.vue'
import HelloComponent from './HelloComponent.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  components:{
    HelloComponent
  }
})
