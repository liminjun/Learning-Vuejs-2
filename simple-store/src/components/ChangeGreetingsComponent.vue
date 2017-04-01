<template>

<input type="text" v-model="msg" @keyup="handleMessageInputChanges($event)" />


</template>
<style>
</style>
<script>
import {mapGetters} from 'vuex'
import { mapActions } from 'vuex'

    export default {
        computed:mapGetters({
            msg:'getMessage'
        }),
        methods:  mapActions(['handleMessageInputChanges'])

    }
</script>
