<template>
    <div>
    <h3>Container Component 总数：<div>{{itemsTotal}}</div></h3>
        <div class="content">
        
        <div class="item" v-for="item in items">
            {{item.content}}
        </div>

        
    </div>
    </div>
</template>
<script>
export default{
    computed:{
        items(){
            return this.$store.state.items;
        },
        itemsTotal(){
            return this.$store.getters.itemsCount;
        }
    }
}
</script>