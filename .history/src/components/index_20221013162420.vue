<template>
    <div class="big-box">
        <div class="header">
            <div id="root">
                <div class="other">
                    <ul>
                        <li class="backTime">
                            <a href="#">倒计时</a>
                        </li>
                        <li class="exit">
                            <a href="#">退出登录</a>
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
</div>
</template>

<script>
export default {
    naem:'Index'
}
</script>

<style>

</style>