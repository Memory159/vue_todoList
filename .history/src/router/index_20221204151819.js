import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Register from '@/pages/Register'
import Index from '@/pages/Index'
Vue.use(ElementUI);
Vue.use(Router)

export default new Router({
    routes: [{
            //默认路径
            path: '/',
            // name: 'Login',
            component: Login
        }, {
            path: '/register',
            component: Register
        }, {
            path: '/index',
            component: Index
        },
        {
            path: '/',
            // redirect的意思是，当用户访问/a时，URL 将会被替换成/b，然后匹配路由为/b
            redirect: '/Login'
        }


    ]
})