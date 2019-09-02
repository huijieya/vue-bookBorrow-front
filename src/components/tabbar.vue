<template>
  <div class="tabbar">
    <router-link v-for="(item, index) in dataList" :to="item.link" :key="index">
      <div class="tabbar-item">
        <span class="iconfont">{{item.code}}</span>
        <div class="tabbar-item-text">
            {{item.name}}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      index: 1,
      active: true,
      unactive: false,
      dataList: [
        {
          code: '\ue6fb',
          name: '首页',
          link: '/'
        },
        {
          code: '\ue6d5',
          name: '分类',
          link: '/category'
        },
        {
          code: '\ue625',
          name: '我的',
          link: '/mine'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style>
.tabbar{
  height: 50px;
  position: absolute;
  bottom: 0px;
  /* 加了right:0可以防止出现滑动 */
  right: 0px;
  margin-bottom: 0px;
  width: 100%;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
  font-family: "微软雅黑";
  /* flex: 1;不太会用 */
}
.tabbar-item{
  display: flex;
  flex-direction: column;
  /*实现垂直居中*/
  align-items: center;

}
/* i标签 设大小不管用 用fontsize控制*/
/* .tabbar-item-icon{
  width: 30px;
  height: 30px;
} */
@font-face {
  font-family: 'iconfont';  /* project id 1044508 */
  src: url('//at.alicdn.com/t/font_1044508_821jtbx5exo.eot');
  src: url('//at.alicdn.com/t/font_1044508_821jtbx5exo.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1044508_821jtbx5exo.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1044508_821jtbx5exo.woff') format('woff'),
  url('//at.alicdn.com/t/font_1044508_821jtbx5exo.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1044508_821jtbx5exo.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
    text-decoration: none;
    color: inherit;
}
.router-link-exact-active {
  color: #ce343d;
}
</style>
