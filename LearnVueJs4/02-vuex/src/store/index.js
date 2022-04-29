import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutations-types'

//1 安装插件
Vue.use(Vuex)

//2 创建对象
const moduleA = {
  state: {
    name: 'lilei',
  },
  mutations: {
    updateName(state,payload){
      state.name = payload
    }
  },
  getters: {
    fullname(state) {
      return state.name + '111'
    },
    fullname2(state,getters) {
      return getters.fullname + '222'
    },
    fullname3(state,getters,rootState) {
      return getters.fullname2 + rootState.counter
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() =>{
        context.commit('updateName','wangwu')
      },1000)
    }
  }

}
const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    //方法
    [INCREMENT](state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    /*incrementCount(state, count){
      //state.counter += count
      console.log(count)
    },*/
    incrementCount(state, payload){
      console.log(payload)
      state.counter += payload.count
    },
    addStudent(state, stu){
      state.students.push(stu)
    },
    updateInfo(state){
      //修改某一个属性
      state.info.name = 'codewhy'
      //添加某一个属性
      //state.info['address'] = '洛杉矶' //不是响应式的
      //Vue.set(state.info,'address','洛杉矶')   //响应式
      //删除某一个属性
      //delete state.info.age   //不是响应式
      //Vue.delete(state.info,'age') //响应式
    }
  },
  actions: {
    //context：上下文
    /*aUpdateInfo(context,payload) {
      //模拟异步操作
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload.message);
        payload.success()
      },1000)
    }*/
    aUpdateInfo(context,payload) {
      //模拟异步操作
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          resolve('1111')
        },1000)
      })
    }
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
    a: moduleA
  }
})

//3 导出store对象
export default store







