<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>

    <h2>{{message}}</h2>
  </div>
</template>

<script>
    export default {
      name: "Home.vue",
      data(){
        return {
          message: '你好要',
          path: '/home/news'
        }
      },
      created(){
        console.log('home created')
      },
      destroyed() {
        console.log("home destroyed")
      },
      //这两个函数，只有该组件被保持了状态使用了keep-alive时，才是有效的
      //活跃状态
      activated() {
        //console.log('home activated')
        //this.$router.push(this.path)
      },
      //不活跃状态
      deactivated() {
        //console.log('deactivated')
      },
      //记录上一次离开时候的状态(组件内的导航守卫)
      beforeRouteLeave(to,from,next){
        console.log(this.$route.path)
        this.path = this.$route.path
        next()
      }
      //template挂在到Dom上会回调
      /*mounted(){
        console.log('mounted')
      },
      //界面发生刷新会回调
      updated(){
        console.log('updated')
      }*/
    }
</script>

<style scoped>

</style>
