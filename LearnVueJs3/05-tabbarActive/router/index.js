import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../src/views/home/Home')
const Category = () => import('../src/views/category/Category')
const Cart = () => import('../src/views/cart/Cart')
const Profile = () => import('../src/views/profile/Profile')
//1 安装插件
Vue.use(VueRouter)
//2 创建路由对象
const routers = [
  {
    path: '',
    redirect: '/home'
  },{
    path: '/home',
    component: Home
  },{
    path: '/category',
    component: Category
  },{
    path: '/cart',
    component: Cart
  },{
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routers,
  mode: 'history'
})
//3 导出router
export default router










