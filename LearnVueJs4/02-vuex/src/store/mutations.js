import {INCREMENT} from "./mutations-types";

export default {
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
}
