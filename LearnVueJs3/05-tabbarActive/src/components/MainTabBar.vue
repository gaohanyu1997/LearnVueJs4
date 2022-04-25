<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home" active-color="bule">
        <img slot="item-icon" src="../assets/img/tabbar/fengjing.jpg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/active.jpg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" active-color="green">
        <img slot="item-icon" src="../assets/img/tabbar/z.jpg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/active.jpg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" active-color="red">
        <img slot="item-icon" src="../assets/img/tabbar/fengjing.jpg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/active.jpg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" active-color="yellow">
        <img slot="item-icon" src="../assets/img/tabbar/z.jpg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/active.jpg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  //import TabBar from "../components/tabbar/TabBar";
  import TabBar from "@/components/tabbar/TabBar";
  import TabBarItem from "../components/tabbar/TabBarItem"

    export default {
      name: "MainTabBar",
      components:{
        TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
