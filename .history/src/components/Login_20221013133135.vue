<template>
  <form>
        <div class="title">登录</div>
        <input type="text" class="username" placeholder="Username">
        <div class="error"></div>
        <input type="password" class="password" placeholder="Password">
        <div class="error"></div>
        <button class="login-btn">登录</button>
        <div class="register"><a href="#">没有账号？点击注册</a></div>
    </form>
</template>

<script>
export default {
    name:'Login'
}
</script>

<style>

</style>