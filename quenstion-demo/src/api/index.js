import Vue from "vue"
import VueResource from 'vue-resource'

Vue.use(VueResource);

const QuestionsResource=Vue.resource('http://localhost:3000/' + 'shoppinglists{/id}')

export default{
    fetchQuestions:()=>{
        return QuestionsResource.get();
    }
}