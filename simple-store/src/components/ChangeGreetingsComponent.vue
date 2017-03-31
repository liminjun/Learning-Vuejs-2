<template>
<input type="text" v-model="msg" @keyup="changeMsg">
</template>
<script>
    export default {
        computed:{
            msg(){
                return this.$store.state.msg
            }
        },
        methods:{
            changeMsg(event){
                this.$store.commit('changeMessage',event.target.value)
            }
        }
    }
</script>