// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//导入API模块，并通过Vue.use(api)语句进行使用注册，这样就可以通过“this.$api.子模块.方法”的方式来调用后台接口了
import api from "./http";
Vue.use(api) //注册使用api

//引入global模块，并通过Vue.prototype.global = global语句进行挂载，这样就可以通过this.gloabl.xx来获取全局配置了
import global from "@/utils/global";
Vue.prototype.global = global //挂载全局配置模块

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
