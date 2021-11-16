<template>
  <div>
<!--    <h1>测试webSocket</h1>-->
    <button @click="getWebsocket">点击请求后台数据</button>
  </div>
</template>
<script>

import axios from 'axios'
export default {
  name: "websocket",
  created() { // 页面创建生命周期函数
    this.initWebSocket()
  },
  destroyed: function () { // 离开页面生命周期函数
    this.websocketclose();
  },
  methods: {
    initWebSocket: function () {
      // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
      this.websock = new WebSocket("ws://localhost:8001/websocket/test");
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen: function () {
      console.log("WebSocket连接成功");
    },
    websocketonerror: function (e) {
      console.log("WebSocket连接发生错误");
    },
    websocketonmessage: function (e) {
      console.log(e.data);                // console.log(e);
      this.$notify({
        title: '提示',
        message: e.data,
        duration: 0
      });
    },
    websocketclose: function (e) {
      console.log("connection closed (" + e + ")");
    },
    getWebsocket: function () {
      console.log("this.$api", this.$api)
      console.log("this.$api", this.$api.test)
      this.$api.test.testWebSocket("test").then(result => {
        console.log("result", result)
        // open(result.data.msg)
      })
    },
    open(msg) {
      this.$notify({
        title: '提示',
        message: msg,
        duration: 0
      });
    }
  }

}
</script>
<style xml:lang="scss">

</style>



