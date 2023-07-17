<template>
    <div class="big-box">
        <div class="header">
            <div id="root">
                <div class="other">
                    <ul>
                        <li class="backTime">
                            <router-link to="/BackTime">倒计时</router-link>
                        </li>
                      
                        <li class="exit">
                            <router-link to="/Login">退出登录</router-link>
                        </li>
                    </ul>
                </div>
                <div class="todo-container">
                    <div class="todo-wrap">
                        <TodoHeader @addTodo="addTodo"/>
                        <TodoList :todos="todos"/>
                        <TodoFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
                    </div>
                </div>
            </div>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFooter from '@/components/TodoFooter.vue';

export default {
    name: "Index",
    components: { TodoHeader, TodoList, TodoFooter },
    data() {
        return {
          
            todos : JSON.parse(localStorage.getItem('save'))[0].things == '' ?  [] : JSON.parse(JSON.parse(localStorage.getItem('save'))[0].things)
           
        }

    },
    methods: {
        // 添加一个 todo
        addTodo(todoObj){
            this.todos.unshift(todoObj); 
        },
        // 勾选或者取消勾选
        checkTodo(id){
            this.todos.forEach((todo)=>{
                if(todo.id === id) todo.done = !todo.done
            })
        },
        // 删除一个 todo
        deleteTodo(id){
            // 过滤掉不想要的 todo
            this.todos = this.todos.filter((todo)=>{
                return todo.id !== id
            })
        },
        // 全选或取消全选
        checkAllTodo(done){
            this.todos.filter((todo)=>{
                todo.done = done
            })
        },
        // 清除已完成
        clearAllTodo(){
            if(!this.todos.done){
                if(confirm('确定清除吗？')){
                        this.todos = this.todos.filter((todo)=>{
                        return !todo.done
                    })
                }
            }
        }
    },
    watch:{
        todos:{
            deep:true,
            handler(value){
                // 获取到本地存储里的用户名和密码
                let u = JSON.parse(localStorage.getItem('save'))[0].username
                let p = JSON.parse(localStorage.getItem('save'))[0].password
                // 定义一个新的数组，将 todos 里面的数据存进来
                let newSave = [{username:u,password:p,things:[JSON.stringify(value)]}]
                // 将数据存到本地
                localStorage.setItem('save',JSON.stringify(newSave))
            }
        }
    },
    mounted() {
        console.log(JSON.parse(localStorage.getItem('save'))[0].username);
        this.$bus.$on('checkTodo',this.checkTodo)
        this.$bus.$on('deleteTodo',this.deleteTodo)
    },
    beforeDestroy() {
        this.$bus.$off('checkTodo')
        this.$bus.$off('deleteTodo')
    },
}
</script>

<style scoped>
     /*base*/
        
    body {
        background-color: #93afca;
    }
    
    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }
    
    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }
    
    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }
    
    .btn:focus {
        outline: none;
    }
    
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-top: 60px;
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