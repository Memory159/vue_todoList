<template>
   <div>
        <div class="other">
            <ul>
                <li class="backTodo">
                    <router-link to="/Index">返回Todo</router-link>
                </li>
                <li class="exit">
                    <router-link to="/Login">退出登录</router-link>
                </li>
                <li class="person">
                    <router-link to="/Person">个人信息</router-link>
                </li>
            </ul>
        </div>
       <div class="username">用户名:{{}}</div>
       <div class="password">密码:{{}}</div>
    </div>
</template>

<script>
export default {
    name:'Person'
}
</script>

<style scoped>
     body {
        background-color: #93afca;
    }
</style>