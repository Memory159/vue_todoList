<template>
     <ul class="todo-main">
        <TodoItem v-for="todoObj in todos" :key="todoObj.id"/>
    </ul>
</template>

<script>
import TodoItem from './TodoItem'
export default {
    name:'TodoList',
    components:{
        TodoItem
    },
    data() {
        return {
            todos:[
                {id:'001',title:'吃饭',done:true},
                {id:'002',title:'睡觉',done:false},
                {id:'003',title:'打牌',done:true}
            ]
        }
    },
}
</script>

<style>
 /*main*/
    
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}
    
.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>