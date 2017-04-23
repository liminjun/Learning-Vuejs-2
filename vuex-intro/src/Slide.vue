<template>
    <ul class="slide list-unstyled">
        <li @click="addItem({content:Math.random()})">增加</li>
        <li @click="deleteItem()">删除</li>
    </ul>
</template>
<script>


export default{
    data(){
        return {

        }
    },
   methods:{
       addItem:function(item){
           debugger;
           this.$store.dispatch('addItem',item) 
       },
       deleteItem:function(){
           this.$store.dispatch('deleteItem')

           //组件代码中直接提交mutation
           //this.$store.commit("DELETE_ITEM");
       }
   }
}
</script>

<style scoped>
.slide{width:20%;
background-color:#cc99dd;
}

</style>