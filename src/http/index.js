/**
 * 将axios封装成插件，按插件方式引入
 * 把axios注册为Vue插件使用，并将api模块挂载在Vue原型的$api对象上。
 * 这样在能获取this引用的地方就可以通过 “ this.$api.子模块.方法 ” 的方式调用API了
 */
import api from './api' //导入所有接口
const install = Vue => {
  if (install.installed)
    return;
  install.installed = true;
  Object.defineProperties(Vue.prototype, {
    //注意，此处挂载在 Vue原型的 $api对象上
    $api: {
      get() {
        return api
      }
    }
  })
}
export default install
