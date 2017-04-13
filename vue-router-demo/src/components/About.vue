<template>
  <div class="main">
    <p>右侧main面板</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  background-color:red;
  width:80%;
  float:right;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
