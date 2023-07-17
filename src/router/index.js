// 改文件专门用于创建整个应用的路由器
// 引入 VueRouter
import VueRouter from 'vue-router'
// 引入组件
import Register from '../pages/Register'
import Login from '../pages/Login'
import BackTime from '../pages/BackTime'
import Index from '../pages/Index'
import Person from '../pages/Person'
// 创建 router 实例对象，去管理一组一组的路由规则
export default new VueRouter({
    // history 模式与 hash 模式
    mode: 'history',
    routes: [
        // {
        //     path: '*',
        //     component: Login
        // },
        {
            path: '/Register',
            name: '注册',
            component: Register
        },
        {
            path: '/Login',
            name: '登陆',
            component: Login
        },

        {
            path: '/BackTime',
            name: '倒计时',
            component: BackTime
        },
        {
            path: '/Index',
            name: '首页',
            component: Index
        },
        {
            path: '/Person',
            name: '个人信息',
            component: Person
        },
        {
            path: '/',
            // redirect的意思是，当用户访问/a时，URL 将会被替换成/b，然后匹配路由为/b
            redirect: '/Login'
        }
    ]
})