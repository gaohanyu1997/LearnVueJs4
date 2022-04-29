import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions  from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";
//1 安装插件
Vue.use(Vuex)
//2 创建对象
const state = {
  counter: 1000,
  students: [
    {id:110, name:'why1',age: 18},
    {id:111, name:'why2',age: 19},
    {id:112, name:'why3',age: 20},
    {id:113, name:'why4',age: 21}
  ],
  info: {
    name: 'kobe',
    age: 40,
    height: 1.98
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})
//3 导出store对象
export default store







