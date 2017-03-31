<template>
<<<<<<< HEAD
<input type="text" v-model="msg" @keyup="changeMsg($event.target.value)" @keyup.enter="incrementCounter">


</template>
<script>
import {mapGetters} from 'vuex'
import { mapActions } from 'vuex' 

    export default {
        computed:mapGetters({
            msg:'getMessage'
        }),
        methods:  mapActions(['changeMessage', 'incrementCounter']) 
=======
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
>>>>>>> 55a8220836510f524267f8cfa29e3ce7d1ac4d70
    }
</script>