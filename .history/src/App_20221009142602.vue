<template>
  <Login/>
</template>

<script>
    import Banner from './components/Banner'
    import Login from './pages/Login'
    export default {
        name:'App',
        components:{Banner,Login}
    }
</script>

<style>
  * {
        margin: 0 auto;
    }
    
    body {
        background-color: #343a40;
    }
    
    .container {
        position: relative;
        top: 100px;
    }
    
    .news-nav {
        clear: both;
        height: 80px;
        margin-left: 10px;
        margin-right: 10px;
        width: 300px;
        margin: 0 auto;
    }
    
    .news-nav li {
        float: left;
        list-style-type: none;
        margin: 0 10px;
        font-size: 30px;
        display: block;
        width: 86px;
        height: 79px;
        text-align: center;
        line-height: 79px;
        font-weight: bold;
        color: #007bff;
        cursor: pointer;
    }
    
    .news-nav li.on {
        color: #74dcff;
        border-bottom-color: #74dcff;
        border-bottom-style: solid;
        border-bottom-width: 2px;
    }
    
    #index-news-list-2 {
        display: none;
    }
    
    .modal-dialog {
        max-width: 100% !important;
    }
    
    .modal-content {
        background: rgba(0, 0, 0, 0.3);
        width: 700px;
    }
    
    .loginForm {
        width: 400px;
    }
    
    .loginForm .form-group {
        margin: 30px 0;
    }
    
    .loginForm .form-group .form-control {
        height: 40px;
        font-size: 15px;
    }
    
    input[type="checkbox"] {
        position: relative;
        top: -2px;
        vertical-align: middle;
        cursor: pointer;
        zoom: 1.6;
    }
    
    input[type="radio"] {
        position: relative;
        top: -3px;
        vertical-align: middle;
        cursor: pointer;
        zoom: 1.6;
    }
    
    .btn-primary {
        background-color: #3e4963;
        border: 0px solid transparent;
        width: 400px;
        height: 50px;
        font-size: 24px;
        font-family: STKaiti;
    }
    
    label {
        color: #fff;
        font-size: 16px;
    }
</style>
