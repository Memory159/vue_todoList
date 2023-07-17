<template>
     <ul class="todo-main">
       <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
    </ul>
</template>

<script>
export default {
    name:'TodoList',
}
</script>

<style>

</style>