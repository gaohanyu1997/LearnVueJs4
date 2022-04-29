export default {
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
}
