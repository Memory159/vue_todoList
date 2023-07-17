<template>
   <form>
        <div class="title">欢迎注册</div>
        <input type="text" class="username" v-model="save.username" placeholder="Username">
        <div class="error"></div>
        <input type="password" class="password" v-model="save.password" placeholder="Password">
        <div class="error"></div>
        <input type="password" class="pwdagain" v-model="save.pwdagain" placeholder="Confirm Password">
        <div class="error"></div>
        <button class="login-btn" @click="register">注册</button>
        <div class="login"><router-link to="/Login">已有账号？点击登录</router-link></div>
    </form>
</template>

<script>
export default {
    name:'Register',
    data() {
        return {
            // username:'',
            // password:'',
            // pwdagain:''
            save:[
                {username:'',password:''}
            ]
        }
    },
    methods: {
        register(){
            // if(this.username == '' || this.password == '' || this.pwdagain == ''){
            //     alert("用户名或密码为空");
            // }else{
            //     if(localStorage.getItem('username') === this.username){
            //     alert("用户名已存在");
            //     }else{
            //         if(this.pwdagain !== this.password){
            //         alert("密码不相符");
            //         }else{

            //             alert("注册成功，去登录");
            //             this.$router.push('/');
            //         }
            //     }
                
            // }
            var save = {
                'username':'',
                'password':''
            }
            localStorage.setItem('save',JSON.stringify(save));
            
        }
    },
}
</script>

<style scoped>
    form {
        margin: 160px auto;
        width: 700px;
        height: 450px;
        background-color:  #343a40;
        box-shadow: 5px 5px 5px 5px  #343a40;
    }
    
    .title {
        color: #74dcff;
        font-size: 30px;
        font-weight: 800;
        text-align: center;
        padding-top: 20px;
        margin-bottom: 25px;
    }
    
    .username {
        width: 400px;
        height: 40px;
        margin: 15px 150px;
        font-size: 15px;
        border: 0;
        outline: none;
        border-radius: 5px;
        padding-left: 15px;
    }
    
    .password {
        width: 400px;
        height: 40px;
        margin: 15px 150px;
        font-size: 15px;
        border: 0;
        outline: none;
        border-radius: 5px;
        /* letter-spacing: 10px; */
        padding-left: 15px;
    }
    
    .pwdagain {
        width: 400px;
        height: 40px;
        margin: 15px 150px;
        font-size: 15px;
        border: 0;
        outline: none;
        border-radius: 5px;
        /* letter-spacing: 10px; */
        padding-left: 15px;
    }
    
    .login-btn {
        width: 400px;
        height: 60px;
        background-color: #3e4963;
        margin: 40px 0px 0px 150px;
        border-radius: 1%;
        font-size: 25px;
        color: #fff;
        border-radius: 5px;
        border: 0;
    }
    
    .login {
            color: #fff;
            margin: 10px 0px 0px 410px;
    }

    a {
        color: #fff;
    }
</style>