<template>
<div>
  <div>
    <div class="search">
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </div>
    <div class="swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img class="swipe-item" src="../assets/01.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img class="swipe-item" src="../assets/02.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img class="swipe-item" src="../assets/03.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img class="swipe-item" src="../assets/04.jpg" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
  <div class="mid-home">
    <ul>
      <li v-for="(category,index) in items" :key="index">
        <div class="shops-title">
          <h4>{{category.name}}</h4>
        </div>
        <ul class="shops-items">
          <li v-for="(item,index1) in category.items " :key="index1">
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
  <div>
    <van-tabbar v-model="active0">
      <van-tabbar-item to="/" icon="shop-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/note" icon="records">笔记</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</div>
</template>

<script>
import { Search, Swipe, SwipeItem, Tabbar, TabbarItem } from 'vant'
import Vue from 'vue'
Vue.use(Search)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Tabbar).use(TabbarItem)
export default {
  data () {
    return {
      value: '',
      active0: 0,
      items: [
        {
          name: 'Boss荐书',
          items: [
            {
              icon: require('../assets/前端01.jpg'),
              title: 'JavaScript高级程序设计',
              bookId: '101',
              author: '(美)(Nicholas C.Zakas)扎卡斯',
              count: 5,
              price: 85
            },
            {
              icon: require('@/assets/前端02.jpg'),
              title: 'Vue.js实战',
              bookId: '102',
              author: '梁灏',
              count: 8,
              price: 79
            },
            {
              icon: require('@/assets/前端05.jpg'),
              title: '微信小程序',
              author: '李俊',
              bookId: '105',
              count: 3,
              price: 44
            }
          ]
        },
        {
          name: '新书上架',
          items: [
            {
              icon: require('../assets/后端01.jpg'),
              title: '深入理解Java虚拟机',
              bookId: '201',
              author: '梁灏',
              count: 8,
              price: 79
            },
            {
              icon: require('../assets/后端03.jpg'),
              title: '算法基础',
              bookId: '206',
              author: '梁灏',
              count: 8,
              price: 79
            },
            {
              icon: require('../assets/设计01.jpg'),
              title: 'Head First设计模式',
              bookId: '301',
              author: '梁灏',
              count: 8,
              price: 79
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
.swipe{
  width: 345px;
  height: 173px;
  padding: 15px;
}
.swipe-item{
  width: 345px;
  height: 173px;
  border-radius: 10px;
}
.mid-home{
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
