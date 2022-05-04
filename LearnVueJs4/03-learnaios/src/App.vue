<template>
  <div id="app">
    <h2>-------------</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    console.log('---');
  }
}
</script>

<style>

</style>
