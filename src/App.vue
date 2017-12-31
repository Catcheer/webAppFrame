<template>
  <div id="app">
    <transition name="slide-left">
      <router-view/>
    </transition>
    <footer>
      <ul class="flex bottom_0 position-fixed width-pre_100 height_45 line-height_45 bg-f1f1f1 font_32">
        <li class="flex_1 text-center">
          <router-link to="/">首页</router-link>
        </li>
        <li class="flex_1 text-center">
          <router-link :to="{name:'EchartsMenu'}"> 图表</router-link>
        </li>

        <li class="flex_1 text-center">
          <router-link to="/user"> 我的</router-link>
        </li>
        <li class="flex_1 text-center">
          <router-link to="/"> 待定</router-link>
        </li>
      </ul>
    </footer>

  </div>
</template>

<script>
  export default {
    name: "app"
  };

</script>

<style lang="scss">
  @import "./assets/scss/app.scss";

</style>
