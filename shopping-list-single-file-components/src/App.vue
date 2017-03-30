<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <add-item-component></add-item-component>
    <items-component :items="items"></items-component>
    <change-title-component></change-title-component>
  </div>
</template>

<script>
import Hello from './components/Hello'


import AddItemComponent from './components/AddItemComponent' 
  import ItemsComponent from './components/ItemsComponent' 
  import ChangeTitleComponent from './components/ChangeTitleComponent' 

export default {
  name: 'app',
  components: {
    AddItemComponent, 
      ItemsComponent, 
      ChangeTitleComponent 
  },
  data() {
    return {
      items: [{ text: 'Bananas', checked: true }, 
                { text: 'Apples', checked: false }] 
    }
  },
  methods:{
    addItem(text){
      this.items.push({
        text:text,
        checked:false
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
