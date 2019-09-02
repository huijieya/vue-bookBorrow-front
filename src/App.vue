<template>
  <div id="app">
    <router-view/>
    <!-- <div class="foot">
      <tabbar></tabbar>
    </div> -->
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'
export default {
  name: 'App',
  components: {
    tabbar
  }
}
</script>

<style>
/* @import '../src/scss/common.scss'; */
#app{
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}
/* 水平垂直居中 */
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.row{
  display: flex;
  flex-direction: row;
}
</style>
