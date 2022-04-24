<template>
  <div id="app">
    <router-view/>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/fengjing.jpg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/active.jpg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/z.jpg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/active.jpg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="yellow">
        <img slot="item-icon" src="./assets/img/tabbar/fengjing.jpg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/active.jpg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/z.jpg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/active.jpg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>













