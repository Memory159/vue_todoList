<template>
   <div>
        <div class="other">
            <ul>
                <li class="backTodo">
                    <router-link to="/Index">返回Todo</router-link>
                </li>
                <li class="backTime">
                    <router-link to="/BackTime">倒计时</router-link>
                </li>
                <li class="exit">
                    <router-link to="/Login">退出登录</router-link>
                </li>
            </ul>
        </div>
       <div class="username">用户名: {{username}}</div>
       <div class="password">密码: {{password}}</div>
    </div>
</template>

<script>
export default {
    name:'Person',
    data() {
        return {
            username:'zhangsan',
            password:'123'
        }
    },
}
</script>

<style scoped>
     body {
        background-color: #93afca;
    }
    .other {
        position: absolute;
        top: -10px;
        right: 20px;
        width: 350px;
        height: 60px;
    }
    ul{
        margin-top: 20px;
    }
    li{
        height: 41px;
    }
   
    .exit {
        width: 150px;
        height: 60px;
        display: inline;
        border: 0;
        color: #fff;
        margin-right: 20px;
    }
    
    .backTodo {
        width: 150px;
        height: 60px;
        display: inline;
        border: 0;
        color: #fff;
        margin-right: 20px;
    }
    a {
        text-decoration: none;
        color: #fff;
        font-size: 20px;
    }
    .person{
        width: 150px;
        height: 60px;
        display: inline;
        border: 0;
    }
    .backTime {
        width: 150px;
        height: 60px;
        display: inline;
        border: 0;
        color: #fff;
        margin-right: 20px;
    }
    .username{
        width: 300px;
        height: 50px;
        margin: auto;
        margin-top: 200px;
        font-size: 30px;
        font-weight: 700;
        color: #fff;
    }
    .password{
        width: 300px;
        height: 50px;
        margin: auto;
        margin-top: 80px;
        font-size: 30px;
        font-weight: 700;
        color: #fff;
    }
</style>