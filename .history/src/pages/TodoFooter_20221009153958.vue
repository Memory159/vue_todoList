<template>
    <div class="todo-footer" v-show="total">
        <label>
          <input type="checkbox" :checked="isAll" @change="checkAll"/>
        </label>
        <span>
          <span>已完成{{doneTotal}}</span> / 全部{{total}} 
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'TodoFooter',
}
</script>

<style>

</style>