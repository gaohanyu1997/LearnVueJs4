//配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
//import Home from '../components/Home'
//import About from '../components/About'
//import User from '../components/User'

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

//1 通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//2 创建路由VueRouter对象
const routes = [
  //映射关系
  {
    path: '',
    //redirect 重定向
    redirect: '/home'
  },
  {
    //协议头：//host/query
    path: '/home',
    component: Home,
    meta:{
      title: '首页'
    },
    children: [
     /* {
        path: '',
        redirect: 'news'
      },*/
      {
        path: 'news',
        component: HomeNews
      },{
        path: 'message',
        component: HomeMessage
      }
      ]
  },{
    path: '/about',
    component: About,
    meta:{
      title: '关于'
    },
    beforeEnter:(to,from,next)=>{
      //console.log('about beforeEnter');
      next()
    }
  },{
    path: '/user/:userId',
    component: User,
    meta:{
      title: '用户'
    }
  },{
    path: '/profile',
    component : Profile,
    meta:{
      title: '档案'
    }
  }
]
const router =  new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
//router.beforeEach((to,from,next)=>{})
//前置守卫(guard)  钩子(hook)
router.beforeEach((to,from,next)=>{
  //从from 跳转到 to
  //document.title = to.matched[0].meta.title,
  //console.log('前置守卫')
  next()
})
//后置钩子(hook)
//router.afterEach((to,form,)=>{})
router.afterEach((to,form,)=>{
  //console.log('后置守卫')
})

//3 将router对象传入到Vue实例中  导出
export default router



















