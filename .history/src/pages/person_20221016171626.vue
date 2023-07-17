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
    .backTodo {
        width: 150px;
        height: 60px;
        display: inline;
        border: 0;
        color: #fff;
        margin-right: 20px;
    }
    
    .exit {
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
</style>