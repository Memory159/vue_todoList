<template>
  <li>
      <label>
          <input type="checkbox" class="check" :checked="todo.done" @change="handleCheck(todo.id)"/>
          <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)" >删除</button>
  </li>
</template>

<script>
export default {
    name:'TodoItem',
    // 声明接收 todo 对象
    props:['todo','checkTodo'],
    methods: {
        handleCheck(id){
            // 通知 App 组件将对应的 todo 对象的 done 值取反 
            this.checkTodo(id)
        }
    },
}
</script>

<style scoped>
   /*item*/
    
   li {
        list-style: none;
        height: 40px;
        line-height: 31px;
        padding: 5px 5px;
        border-bottom: 1px solid #ddd;
    }
    
    li label {
        float: left;
        cursor: pointer;
    }
    
    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }
    
    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }
    
    li:before {
        content: initial;
    }
    
    li:last-child {
        border-bottom: none;
    }
    .check{
        margin-top: 9px;
    }
    li:hover{
        background-color: #ddd;
    }
    li:hover button{
        display: block;
    }
</style>