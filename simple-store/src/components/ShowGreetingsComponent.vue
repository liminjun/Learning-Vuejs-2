<template>
    <h1>{{msg}}</h1>
<<<<<<< HEAD
    <div>the message was changed {{counter}} times</div>
</template>
<script>
import {mapGetters} from 'vuex'

    export default {
        computed:mapGetters({
            msg:'getMessage',
            counter:'getCounter'
        })
=======
</template>
<script>
    export default {
        computed:{
            msg(){
                return this.$store.state.msg
            }
        }
>>>>>>> 55a8220836510f524267f8cfa29e3ce7d1ac4d70
    }
</script>