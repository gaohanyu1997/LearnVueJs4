import axios from 'axios'
export function request(config){
  const instance = axios.create({
    baseURI: 'http://123.207.32.32:8000',
    timeout: 3000
  })
  //2 axios的拦截器
  //2.1 请求拦截的作用
  axios.interceptors.request.use(config =>{
    console.log(config);
    //1 比如config中的一些信息不符合服务器的要求
    //2 比如每次发送网络请求时，都希望在界面显示一个请求的图标
    //3 某些网络请求(比如登录token),是必须携带一些特殊的信息
    return config;
  },err => {
    console.log(err)
  })
  //2.2 响应拦截
  axios.interceptors.response.use(res =>{
    console.log(res)
    return res.data;  //data是真正的结果
  },err =>{
    console.log(err)
  })
  return instance(config)
}


/*export function request(config){
  return new Promise((resolve,reject) =>{
    const instance = axios.create({
      baseURI: 'http://123.207.32.32:8000',
      timeout: 3000
    })
    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}*/

/*export function request(config){
  //1 创建axios的实例
  const instance = axios.create({
    baseURI: 'http://123.207.32.32:8000',
    timeout: 3000
  })
  //发送真正的网络请求
  instance(config.baseConfig)
    .then(res => {
      config.success(res);  //成功
    })
    .catch(err => {
      failure(err);  //失败
    })
}*/

/*export function request(config, success, failure){
  //1 创建axios的实例
  const instance = axios.create({
    baseURI: 'http://123.207.32.32:8000',
    timeout: 3000
  })
  //发送真正的网络请求
  instance(config)
    .then(res => {
      success(res);  //成功
    })
    .catch(err => {
      failure(err);  //失败
    })
}*/
