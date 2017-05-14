<template>
  <div class="blog-list">
  
    <div v-for="item in list">
        <p>{{item.introText}}</p>
    </div>
  </div>
</template>
<script>


export default{
  created () {
    //调用action
    this.$store.dispatch('getList')
  },
   
    computed:{
      list:function(){
        return this.$store.state.list;
      }
    }
}
</script>
<style>

</style>
