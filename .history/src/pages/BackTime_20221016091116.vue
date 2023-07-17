<template>
    <div>
        <div class="other">
            <ul>
                <li class="backTime">
                    <router-link to="/BackTime">返回Todo</router-link>
                </li>
                <li class="exit">
                    <router-link to="/Login">退出登录</router-link>
                </li>
            </ul>
        </div>
        <div class="same">年</div>
        <div class="same">月</div>
        <div class="same">周</div>
        <div class="same">日</div>
    </div>
</template>

<script>
export default {
    name:'BackTime',
}
</script>

<style scoped>
    body {
        background-color: #93afca;
    }
    
    .same {
        width: 400px;
        height: 60px;
        background-color: rgb(140, 199, 170);
        margin: auto;
        margin-top: 50px;
        text-align: center;
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
    .backTime {
        width: 150px;
        height: 60px;
        display: inline;
        border: 0;
        color: #fff;
        margin-right: 10px;
    }
    
    .exit {
        width: 150px;
        height: 60px;
        display: inline;
        border: 0;
    }
    
    a {
        text-decoration: none;
        color: #fff;
        font-size: 20px;
    }
</style>