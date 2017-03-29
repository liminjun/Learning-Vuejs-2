<template lang="jade">
<h1>{{msg}}</h1>
</template>
<script>
export default{
    data(){
        return {
            msg:"Hello!"
        }
    }
}
</script>

<style lang="sass" scoped>
$red:red;
h1{
    color:$red;
}
</style>