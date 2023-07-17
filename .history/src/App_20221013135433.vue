<template>
  <div id="root">
    <p class="nav">
      <router-link to="/index">首页</router-link>
      <router-link to="/Register">注册</router-link>
    </p>
    <router-view></router-view>
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
