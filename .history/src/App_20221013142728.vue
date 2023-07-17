<template>
  <div id="root">
    <p class="nav">
      
    </p>
    <router-view></router-view>
    <!-- <form>
        <div class="title">登录</div>
        <input type="text" class="username" placeholder="Username">
        <div class="error"></div>
        <input type="password" class="password" placeholder="Password">
        <div class="error"></div>
        <button class="login-btn">登录</button>
        <div class="register"><router-link to="/Register">没有账号？点击注册</router-link></div>
    </form> -->
  </div>
</template>

<script>
    export default {
        name:'App',
    }
</script>

<style>
 body {
        background-color: #343a40;
 }
</style>
