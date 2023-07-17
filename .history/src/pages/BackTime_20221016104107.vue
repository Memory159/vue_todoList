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
            </ul>
        </div>
        <div class="same">{{year}} 年已经过去 {{yearDay}} 天</div>
        <div class="same">{{month}} 月已经过去 {{monthDay}} 天</div>
        <div class="same">这周剩下 {{week}} 天</div>
        <div class="same">今天剩下 {{day}} 小时</div>
    </div>
</template>

<script>
export default {
    name:'BackTime',
    data() {
        return {
            year:2022,
            yearDay:365,
            month:10,
            monthDay:30,
            week:7,
            day:24
        }
    },
    mounted() {
        let nowTime = new Date().getTime()
        console.log(new Date().getMonth() + 1);
        console.log(new Date().getFullYear());
        console.log(new Date().getDay());
    },
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
        font-size: 24px;
        font-weight: 700;
        line-height: 60px;
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
    }
    
    a {
        text-decoration: none;
        color: #fff;
        font-size: 20px;
    }
</style>