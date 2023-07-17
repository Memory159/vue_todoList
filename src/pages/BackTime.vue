<template>
    <div>
        <div class="other">
            <ul>
                <li class="backTodo">
                    <router-link to="/Index">返回Todo</router-link>
                </li>
                <li class="person">
                    <router-link to="/Person">个人信息</router-link>
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
            hours:'0',
            minutes:'0',
            seconds:'0',
            timer:null
        }
    },
    // 在挂载之前调用一次方法，解决页面闪动的问题
    beforeMount() {
        this.getTime()
    },
    mounted() {
        // 挂载完毕之后开启定时器
        this.timer = setInterval(() => {
            this.getTime()
            if(this.seconds > 0){
                this.seconds --
            }else if(this.seconds == 0 && this.minutes > 0 ){
                this.minutes --
            }else if(this.minutes == 0 && this.hours > 0){
                this.hours --
            }
        }, 1000);
    },
    // 在即将销毁之前，把定时器清除
    beforeDestroy() {
        clearInterval(this.timer);
    },
    methods: {
        getTime(){
            // 获取到当前时间的时间戳
            var nowTime = new Date()
            // 获取到今年年底的时间戳
            var yearEndTime = new Date('2022-12-31 00:00:00')
            // 获取到当前年
            var year = nowTime.getFullYear();
            // 获取到本月，不过会比预期小一个月，需要自己加一补上
            var month = nowTime.getMonth() + 1;
            // 获取到天，就是本月的几号
            var date = nowTime.getDate();
             // 获取到星期几，其中从 0 开始到 6 结束，0 代表周日
             var howWeek = new Date().getDay();
            // 获取到当前的小时
            var hours = nowTime.getHours();
            hours = hours < 10 ? '0' + hours : hours;
            // 获取到当前的分钟
            var minutes = nowTime.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
            // 获取到当前的秒钟
            var seconds = nowTime.getSeconds();
            seconds = seconds < 10 ? '0' + seconds : seconds;
            // 得到现在的时间 格式为 ..年..月..日..时..分..秒
            var now = year + "/" + month + "/" + date + " " + hours + ":" + minutes + ":" + seconds;
            // 将获取到的值赋值给 data 中的变量
            this.now = now
            this.year = year
            this.yearDay = 365 - parseInt((yearEndTime.getTime() - nowTime.getTime()) / 1000 / 60 / 60 / 24)
            this.month = month
            this.monthDay = date
            this.week = 7 - howWeek == 7 ? 1 : 7 - howWeek
            this.hours = (24 - hours)
            this.minutes = (60 -  minutes)
            this.seconds = (60 - seconds)
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
    .person{
        width: 150px;
        height: 60px;
        display: inline;
        border: 0;
        color: #fff;
        margin-right: 20px;
    }
</style>