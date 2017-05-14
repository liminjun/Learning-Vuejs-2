<template>
  <div class="login-panel">
    <div class="form-group clearfix">
      <label class="col-md-2 label-control">用户名</label>
      <div class="col-md-10">
        <input type="text" placeholder="请输入用户名" v-model="username" class="form-control"/>
      </div>
    </div>
    <div class="form-group clearfix">
      <label class="col-md-2 label-control">密码</label>
      <div class="col-md-10">
        <input type="password" placeholder="请输入密码" v-model="password" class="form-control"/>
      </div>
    </div>
    <div class="form-group clearfix">
      <label class="col-md-2 label-control"></label>
      <div class="col-md-10">
        <button class="btn btn-primary btn-block" type="submit" @click="submit()" >登  录</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .login-panel { width:600px; margin: 100px auto; padding: 40px 20px; border: 1px solid #e2e2e2;}
</style>
<script>
export default {
    data(){
      return{
          username:"",
          password:""
      }
    },
    methods: {
      submit(){
          if(this.username=="admin" && this.password=="123456"){
            this.$router.push("blogList")
          }else{
              alert("请输入正确的用户名或者密码");
          }
      }
    }
}
</script>
