<template>
  <div id="app">
    <!-- 使用 <router-view> 动态加载组件，不直接显示 <Login> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>