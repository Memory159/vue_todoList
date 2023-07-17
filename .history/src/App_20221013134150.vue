<template>
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <TodoList/>
      <TodoFooter/>
    </div>
  </div>
</div>

</template>

<script>
    // import Banner from './components/Banner'
    // import Login from './pages/Login'
    import TodoHeader from './pages/TodoHeader'
    import TodoFooter from './pages/TodoFooter'
    import TodoList from './pages/TodoList'
    export default {
        name:'App',
        components:{
          TodoHeader,
          TodoFooter,
          TodoList
        }
    }
</script>

<style>
 body {
        background-color: #343a40;
    }
</style>
