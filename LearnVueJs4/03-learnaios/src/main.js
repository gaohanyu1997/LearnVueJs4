import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
//基本使用
/*axios(config)*/ //模拟发送服务器请求(url)，打印返回数据，默认请求方式：get
axios({
  url: 'http://123.207.32.32:8080/home/muitidata',
  method: 'get'  //默认不写为get请求方式
}).then(res => {
  console.log(res)
})

//发送请求携带参数
axios.post({
  /*url: 'http://123.207.32.32:8080/home/data?type=sell&page=3'*/ //方式一
  url: 'http://123.207.32.32:8080/home/data',  //方式二
  //专门针对get请求的参数拼接
  params:{
    type: 'pop',
    page: 1
  }
}).then(res =>{
  console.log(res)
})

//配置
axios.defaults.baseURL = 'http://123.207.32.32:8080',
axios.defaults.timeout = 5

axios.all([axios({
  url: '/home/muitidata'
}), axios({
  url: '/home/data',
  params:{
    type: 'sell',
    page: 5
  }
})]).then(result =>{
  console.log(result);
  console.log(result[0]);
  console.log(result[1]);
})


