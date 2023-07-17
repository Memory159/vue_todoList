<template>
    <div class="big-box">
        <div class="header">
            <div id="root">
                <div class="other">
                    <ul>
                        <li class="backTime">
                            <router-link to="/BackTime">倒计时</router-link>
                        </li>
                        <li class="exit">
                            <router-link to="/Login">退出登录</router-link>
                        </li>
                    </ul>
                </div>
                <div class="todo-container">
                    <div class="todo-wrap">
                        <div class="todo-header">
                            <input type="text" placeholder="请输入你的任务名称，按回车键确认" />
                        </div>
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
                        <span>xxxxx</span>
                        </label>
                                <button class="btn btn-danger" style="display:none">删除</button>
                            </li>
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
                        <div class="todo-footer">
                            <label>
                        <input type="checkbox"/>
                    </label>
                            <span>
                        <span>已完成0</span> / 全部2
                            </span>
                            <button class="btn btn-danger">清除已完成任务</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <router-link ></router-link>
</div>
</template>

<script>
export default {
    naem:'Index'
}
</script>

<style scoped>
     /*base*/
        
    /* body {
        background-color: #93afca;
    }
    
    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }
    
    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }
    
    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }
    
    .btn:focus {
        outline: none;
    }
    
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-top: 60px;
    } */
    /*header*/
    
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }
    
    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
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
    /*item*/
    
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
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
    
    .other {
        position: absolute;
        top: -10px;
        right: 20px;
        width: 300px;
        height: 60px;
    }
    ul{
        margin-top: 20px;
    }
    li{
        height: 41px;
    }
    .backTime {
        width: 150px;
        height: 60px;
        display: inline;
        border: 0;
        color: #fff;
        margin-right: 10px;
    }
    
    .exit {
        width: 150px;
        height: 60px;
        display: inline;
    }
    
    a {
        text-decoration: none;
        color: #fff;
        font-size: 20px;
    }
</style>