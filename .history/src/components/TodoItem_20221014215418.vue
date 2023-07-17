<template>
  <li>
      <label>
          <input type="checkbox" class="check" :checked="todo.done"/>
          <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" style="display:none">删除</button>
  </li>
</template>

<script>
export default {
    name:'TodoItem',
    props:['todo']
}
</script>

<style>
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
</style>