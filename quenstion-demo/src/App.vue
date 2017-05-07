<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Demo</h1>
    
    {{questions}}
    <ul>
        <li v-for="(question,index) in questions">
            
            <h3>{{question.title}}</h3>
            <ul>
                <li v-for="item in question.items">
                    
                  
                
                    <input  type="radio"  :value="item.value"  v-if="question.type=='single'" v-model="question.selected">

                     <input  type="checkbox"  :value="item.value" v-if="question.type=='mutiple'" v-model="question.selected">
                    {{item.text}}
                </li>
            </ul>
        </li>
    </ul>
    <input type="button" value="提交" v-on:click="submitform">
    
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
      questions:null
    }
    
  },
  created:function(){
    this.getQuestions();//获取数据
  },
  methods:{
    submitform:function(){
      debugger;
      console.log(this.questions);
    },
    getQuestions:function(){
      var vm=this;
      var resource=this.$resource("http://localhost:8080/server/db.json");

      resource.get()
      .then(function(response){
        vm.questions=response.data.questions;
        
      })
      .catch(function(error){
        console.log(error);
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
