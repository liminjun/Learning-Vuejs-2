export default {
    getMessage(state){
        return (state.msg).toUppercase()
    },
    getCounter(state){
        return (state.counter)
    }
}