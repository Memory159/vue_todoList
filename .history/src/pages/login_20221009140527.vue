<template>
     <div class="modal-body index-news-list" id="index-news-list-1">
                    <form class="loginForm" id="loginForm" action="" method="post">
                        <div class="form-group">
                            <input class="form-control required" name="name" id="name" type="text" placeholder="请输入用户名或邮箱">
                        </div>
                        <div class="form-group">
                            <input class="form-control required" name="password" id="password" type="password" placeholder="请输入密码">
                        </div>
                        <!-- <div class="form-group">
                            <label for="remember">
								<input type="checkbox" name="remember" id="remember" value="0"/> 记住我
							  </label>
                        </div> -->
                        <div class="form-group">
                            <button class="btn btn-primary" type="submit">登录</button>
                        </div>
                    </form>
                </div>
</template>

<script>
export default {
    name:Login,
}
</script>

<style>

</style>