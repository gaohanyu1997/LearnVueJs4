<template>
  <div id="app">
    <h2>-------app内容-----</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <h2>-------App内容:getter相关内容-----</h2>
    <!-- <h2>{{$store.state.counter * $store.state.counter}}</h2> -->
    <h2>{{$store.getters.powerCounter}}</h2>
    <!-- <h2>{{more20stu}}</h2> -->
    <h2>{{$store.getters.more20stu}}</h2>
    <!-- <h2>{{$store.getters.more20stu.length}}</h2> -->
    <!-- <h2>{{$store.getters.more20stuLength}}</h2> -->
    <h2>{{$store.getters.moreAgeStu(20)}}</h2>



    <h2>-------hello vuex内容-----</h2>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex';
  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data(){
      return {
        message: '我是app组件'
      }
    },
    /*computed:{
      more20stu() {
        return this.$store.state.students.filter(s => s.age >=20)
      }
    },*/
    methods: {
      addition() {
        this.$store.commit('increment')
      },
      subtraction() {
        this.$store.commit('decrement')
      }
    }
  }
</script>
<style>
</style>
