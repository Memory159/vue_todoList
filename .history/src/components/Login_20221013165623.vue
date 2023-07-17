<template>
  <form>
        <div class="title">登录</div>
        <input type="text" class="username" placeholder="Username">
        <div class="error"></div>
        <input type="password" class="password" placeholder="Password">
        <div class="error"></div>
        <button class="login-btn">登录</button>
        <div class="register"><router-link to="/Register">没有账号？点击注册</router-link></div>
    </form>
</template>

<script>
export default {
    name:'Login',

}
</script>

<style scoped>
  form {
      margin: 160px auto;
      width: 700px;
      height: 400px;
      background-color:  #343a40;
      box-shadow: 5px 5px 5px 5px  #343a40;
  }
  
  .title {
      color: #74dcff;
      font-size: 30px;
      font-weight: 800;
      text-align: center;
      padding-top: 20px;
      margin-bottom: 25px;
  }
  
  .username {
      width: 400px;
      height: 40px;
      margin: 15px 150px;
      font-size: 15px;
      border: 0;
      outline: none;
      border-radius: 5px;
      padding-left: 15px;
  }
  
  .password {
      width: 400px;
      height: 40px;
      margin: 15px 150px;
      font-size: 15px;
      border: 0;
      outline: none;
      border-radius: 5px;
      /* letter-spacing: 10px; */
      padding-left: 15px;
  }
  
  .login-btn {
      width: 400px;
      height: 60px;
      background-color: #3e4963;
      margin: 40px 0px 0px 150px;
      border-radius: 1%;
      font-size: 25px;
      color: #fff;
      border-radius: 5px;
      border: 0;
  }
  
  .register {
      color: #fff;
      margin: 10px 0px 0px 410px;
  }
  
  a {
      color: #fff;
  }
</style>