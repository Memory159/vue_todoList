<template>
  <TodoHeader/>
</template>

<script>
    
    import Banner from './components/Banner'
    import Login from './pages/Login'
    import TodoHeader from './pages/TodoHeader'
    import TodoFooter from './pages/TodoFooter'
    import TodoList from './pages/TodoList'
    export default {
        name:'App',
        components:{Banner,Login,TodoHeader,TodoFooter,TodoList}
    }
</script>

<style>
</style>
