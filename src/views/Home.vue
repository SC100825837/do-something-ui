<template>
  <div class="page">
    <h2>Home Page</h2>
    <el-button type="primary" @click="toWordPage()">单词管理</el-button>
    <el-button type="primary" @click="testAxios()">测试Axios调用</el-button>
    <el-button type="primary" @click="getUser()">测试mock调用</el-button>
  </div>
</template>

<script>
  //axios是一个基于Promise用于浏览器和Node.js的HTTP客户端，用来发送HTTP请求
  import axios from 'axios'
  import router from '@/router'
  import mock from '@/mock/mock.js'
    export default {
        name: "Home",
        methods: {
            toWordPage() {
                router.push('/wordManager')
            },
            testAxios() {
                let id = 1
                this.$api.word.getOneById(id)
                    .then(function (res) {
                        console.log("res", res)
                    }).catch(function (res) {
                    console.log("res", res)
                })
                /*axios.get('http://localhost:8001/word/getOneById/1')
                    .then(res => {
                        console.log("testAxios", res)
                    })*/
            },
            getUser() {
                axios.get('http://localhost:8080/user')
                    .then(res => {
                        console.log("getUser", res)
                    })
            }
        }
    }
</script>

<style xml:lang="scss">

</style>
