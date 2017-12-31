<template>
  <div id="app">
      <router-view/>
   <footer>
      <ul class="flex bottom_0 position-fixed">
        <li class="flex_1">首页</li>
        <li class="flex_1">图表</li>
        <li class="flex_1">我的</li>
        <li class="flex_1">待定</li>
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
  @import './assets/scss/app.scss'
</style>


