<template>
     <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
   </div>
</template>

<script>
export default {
    name:'TodoHeader',
}
</script>

<style>

</style>