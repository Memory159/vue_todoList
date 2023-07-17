<template>
  <div class="todo-footer" v-show="total">
        <label>
          <input type="checkbox" :checked="isAll" @change="checkAll"/>
        </label>
        <span>
           <span>已完成 {{doneTotal}}</span> / 全部 {{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'TodoFooter',
    props:['todos'],
    computed:{
      total(){
        // console.log( Object.prototype.toString.call(this.todos));
        console.log(this.todos);
        return this.todos.length
      },
      doneTotal(){
        // 第一种方法：最简单的方法，通过遍历得到每一个 todo ，得到每一个完成的 todo
        // let i = 0;
        // this.todos.forEach((todo) => {
        //     if(todo.done) i++
        // });
        // return i
        // 第二种方法，使用 reduce 下面为简写方式
        return this.todos.reduce((pre,current)=> pre + (current.done ? 1 : 0),0)
      },
      isAll(){
        return this.doneTotal === this.total && this.total > 0
      }
    },
    methods: {
      // 全选或全不选
      checkAll(e){
        // this.checkAllTodo(e.target.checked)
        this.$emit('checkAllTodo',e.target.checked)
      },
      // 清除已完成
      clearAll(){
        // this.clearAllTodo()
        this.$emit('clearAllTodo')
      }
    },
}
</script>

<style scoped>
 /*footer*/
    
 .todo-footer {
      height: 40px;
      line-height: 40px;
      padding-left: 6px;
      margin-top: 5px;
  }
  
  .todo-footer label {
      display: inline-block;
      margin-right: 20px;
      cursor: pointer;
  }
  
  .todo-footer label input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
  }
  
  .todo-footer button {
      float: right;
      margin-top: 5px;
  }
</style>