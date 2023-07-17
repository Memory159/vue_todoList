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
        <div class="same">Now : {{now}}</div>
        <div class="same">{{year}} 年已经过去 {{yearDay}} 天</div>
        <div class="same">{{month}} 月已经过去 {{monthDay}} 天</div>
        <div class="same">这周剩下 {{week}} 天</div>
        <div class="same">今天剩下 {{hours}} 小时 {{minutes}} 分 {{seconds}} 秒</div>
    </div>
</template>

<script>
export default {
    name:'BackTime',
    data() {
        return {
            now:'0',
            year:'0',
            yearDay:'0',
            month:'0',
            monthDay:'0',
            week:'0',
            hours:'00',
            minutes:'00',
            seconds:'00',
            timer:null
        }
    },
    computed:{
       
    },
    mounted() {
        this.timer = setTimeout(() => {
                this.getTime()
            }, 1000);
    },
    methods: {
        getTime(){
            var nowTime = new Date()
            var year = nowTime.getFullYear();
            var month = nowTime.getMonth() + 1;
            var date = nowTime.getDate();
            var hours = nowTime.getHours();
            hours = hours < 10 ? '0' + hours : hours;
            var minutes = nowTime.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var seconds = nowTime.getSeconds();
            seconds = seconds < 10 ? '0' + seconds : seconds;
            var now = year + "/" + month + "/" + date + " " + hours + ":" + minutes + ":" + seconds;
            this.now = now
            console.log(this.now);
            // this.year = nowTime.getFullYear();
        }
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