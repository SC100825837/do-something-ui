<template>
  <div class="page">
    <h2>Login Page</h2>
    <el-button type="primary" @click="login()">登录</el-button>
  </div>
</template>

<script>
    import Cookies from "js-cookie";
    import router from '@/router'
    import mock from '@/mock/mock.js'
    export default {
        name: "Login",
        methods: {
            login() {
                this.$api.login.login()
                    .then(function (res) {
                        // console.log("res", res)
                        Cookies.set('token', res.token) //放置token到Cookie
                        router.push('/')
                    }).catch(function (res) {
                    console.log("res", res)
                })
            }
        }
    }
</script>

<style xml:lang="scss">

</style>
