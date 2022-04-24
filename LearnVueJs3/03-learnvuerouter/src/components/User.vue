<template>
  <div>
    <h2>我是用户页面</h2>
    <p>我是用户的相关信息，嘿嘿嘿</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userId}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
    export default {
      name: "User",
      created(){
        console.log('created'),
          document.title = '用户'
      },
      created(){
        console.log('User created')
      },
      destroyed() {
        console.log("User destroyed")
      },
      computed: {
        userId() {
          return this.$route.params.userId;
        }
      },
      methods: {
        btnClick(){
          console.log(this.$router)
          console.log(this.$route)
        }
      }
    }
</script>

<style scoped>

</style>
