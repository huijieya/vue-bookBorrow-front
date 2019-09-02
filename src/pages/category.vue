<template>
  <div>
    <!-- <router-link to="/login">跳转</router-link> -->
    <div class="search">
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </div>
    <div class="scroll">
      <!-- vant方式 缺点不能联动
      <van-tree-select
        :items="items"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        @navclick="onNavClick"
        @itemclick="onItemClick"
      /> -->

      <!-- 左边 -->
      <div class="menu-wrapper" ref="left">
        <ul>
          <li
            class="menu-item"
            v-for="(books,index) in mainItems"
            :key="index"
            :class="{current: index === currentIndex}"
            @click="selectItem(index,$event)"
            >
            <span>{{books.name}}</span>
          </li>
        </ul>
      </div>
      <!-- 右边 -->
      <div class="shop-wrapper" ref="right">
        <ul>
          <li class="shops-li" v-for="(books, index1) in mainItems" :key="index1">
            <div class="shops-title">
              <h4>{{books.name}}</h4>
            </div>
            <ul class="shops-items">
              <li v-for="(item, index2) in books.subItems" :key="index2">
                <!-- 链接到详情页 -->
                <router-link :to="{path:'/detail',query: {bookId: item.bookId}}">
                  <img :src="item.icon" alt="">
                  <span>{{item.title}}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div>
    <van-tabbar v-model="active1">
      <van-tabbar-item to="/" icon="shop-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/note" icon="records">笔记</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
  </div>
</template>

<script>
import { Search, Tabbar, TabbarItem } from 'vant'
import Vue from 'vue'
import BScroll from 'better-scroll'
import { mainItems } from '../utils/data.js'
Vue.use(Search)
Vue.use(Tabbar).use(TabbarItem)
export default {
  name: 'index',
  data () {
    return {
      mainItems, //定义了书籍分类和详情
      scrollY: 0, // 右侧列表滑动的y轴坐标
      listHeight: [], // 所有分类头部位置
      clickEvent: false,
      active1: 1,
      value: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
      this._getHeight()
    })
    // this.$store.dispatch('reqSearchGoods')
  },
  computed: {
    currentIndex (index) {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          // if (this.clickEvent) {
          //   return i + 1
          // } else {
          return i
          // }
        }
      }
      return 0
    }
  },
  watch: {
    searchgoods () {
      // 监听数据
      this.$nextTick(() => {
        // 左右两边滚动
        this._initBScroll()
        // 右边列表高度
        this._initRightHeight()
      })
    }
  },
  methods: {
    _initScroll () {
      // 左边滚动
      this.lefts = new BScroll(this.$refs.left, {
        click: true
      })

      // 右边滚动
      this.rights = new BScroll(this.$refs.right, {
        probeType: 3
      })
      // 监听右边滚动事件 实时获取位置pos.y
      this.rights.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
        // console.log(this.scrollY)
      })
    },
    // 求出右边列表的高度
    _getHeight () {
      let rightItems = this.$refs.right.getElementsByClassName('shops-li')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < rightItems.length; i++) {
        let item = rightItems[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    // 点击左边实现滚动
    selectItem (index, event) {
      this.clickEvent = true
      if (!event._constructed) {
      } else {
        let rightItems = this.$refs.right.getElementsByClassName('shops-li')
        let el = rightItems[index]
        this.rights.scrollToElement(el, 300)
      }
    },
    // 带参跳转到详情页
    routerTo(bookId) {
      console.log(item,888)
      this.$router.push({
        name: "detail",
        query: {
          bookId: bookId
        }
      });
    },
  }
}
</script>

<style>
.scroll{
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: absolute;
  top: 50px;
  bottom: 50px;
  width: 100%;
}
.menu-wrapper{
  background-color: #e0e0e0;
  width: 80px;
  flex: 0 0 80px;
}
.menu-item{
  width: 100%;
  height: 60px;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: lighter;
  color: #666;
  position: relative;
}
.current{
  color: #e02e24;
  background: #ffffff;
}
.current::before {
  content: '';
  background-color: #e02e24;
  width: 4px;
  height: 30px;
  position: absolute;
  left: 0;
}
.shop-wrapper{
  flex: 1;
  background: #fff;
}
.shops-title{
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  color: #999;
}
/* a{
  text-decoration: none;
  color: #9c9c9c;
  font-size: 14px;
} */
.shops-items{
  display: flex ;
  flex-wrap: wrap;
  align-content: baseline;
}
.shops-items li{
  display: flex;
  flex-direction: column;
  width: 33.3%;
  height: 90px;
  align-items: center;
}
.shops-items li img{
  width: 60%;
  height: 60%;
  margin-bottom: 5px;
}
.shops-items li span{
  color: #151516;
  font-size: 13px;
  display: block;
  width: 54px;
  /* 文本强制不换行 */
  white-space: nowrap;
  /* 文本溢出显示省略号 */
  text-overflow:ellipsis;
  -o-text-overflow: ellipsis;
  /* 溢出的部分隐藏 */
  overflow:hidden;
}
</style>
