<template>
    <ul class="todo-main">
    <li>
        <label>
        <input type="checkbox"/>
        <span>xxxxx</span>
        </label>
        <button class="btn btn-danger" style="display:none">删除</button>
    </li>
    <li>
        <label>
        <input type="checkbox"/>
        <span>yyyy</span>
        </label>
        <button class="btn btn-danger" style="display:none">删除</button>
    </li>
</ul>
</template>

<script>
import TodoItem from './TodoItem'
export default {
    name:'TodoList',
    components:{
        TodoItem
    }
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