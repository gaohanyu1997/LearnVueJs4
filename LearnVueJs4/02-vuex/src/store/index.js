import Vue from 'vue'
import Vuex from 'vuex'

//1 安装插件
Vue.use(Vuex)

//2 创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id:110, name:'why1',age: 18},
      {id:111, name:'why2',age: 19},
      {id:112, name:'why3',age: 20},
      {id:113, name:'why4',age: 21}
    ]
  },
  mutations: {
    //方法
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  },
  actions: {

  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age >=20)
    },
    more20stuLength(state,getters) {
      /*return state.students.filter(s => s.age >=20).length*/
      return getters.more20stu.length
    },
    moreAgeStu(state){
      return function(age) {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {

  }
})

//3 导出store对象
export default store
