<template>
  <div class="container">
    <div class="head center">
      <router-link to="./category">
        <van-icon class="back" name="arrow-left" />
      </router-link>
      <img style="width: auto;height: 330px;" src="../assets/前端01.jpg">
    </div>
    <!-- 书籍详情 -->
    <div class="mid-detail">
      <div class="item row">
        <div class="label">书名</div>
        <div class="detail">JavaScript高级程序设计</div>
      </div>
      <div class="item row">
        <div class="label">作者</div>
        <div class="detail">(美)(Nicholas C.Zakas)扎卡斯</div>
      </div>
      <div class="item row">
        <div class="label">出版社</div>
        <div class="detail">人民邮电出版社</div>
      </div>
      <div class="item row">
        <div class="label">标价</div>
        <div class="detail">￥85</div>
      </div>
      <div class="item row">
        <div class="label">余量</div>
        <div class="detail">3</div>
    </div>
    </div>
    <div class="foot">
      <van-goods-action>
        <van-goods-action-mini-btn
          icon="wap-home"
          text="首页"
          @click="goHome"
        />
        <van-goods-action-mini-btn
          v-if="!isLike"
          icon="like-o"
          text="喜欢"
          @click="like"
        />
        <van-goods-action-mini-btn
          v-if="isLike"
          icon="like"
          text="喜欢"
          @click="like"
          style="color: red"
        />
        <van-goods-action-big-btn
          v-if="borrow"
          primary
          text="我要借"
          @click="onClickBigBtn"
        />
        <van-goods-action-big-btn
          v-else
          disabled
          primary
          text="已借阅"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';
Vue.use(Swipe).use(SwipeItem)
Vue.use(Toast)
Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn);
export default {
  data() {
    return {
      isLike: false,
      borrow: true
    }
  },
  methods: {
    goHome() {
      // Toast('点击图标');
      this.$router.push({ path: './' });
    },
    onClickBigBtn() {
      Toast.success('借阅成功');
      this.borrow = false;
      console.log(this.borrow, 'borrow');
    },
    like() {
      this.isLike = !this.isLike;
    }
  },
  created() {
    var bookId;
    bookId = this.$route.query.bookId;
    console.log(this.$route.query.bookId, 9999);
  }
}
</script>

<style lang="scss">
.container{
  background-color: rgb(206, 205, 205)
}
.head{
  height: 375px;
  width: 100%;
  background-color: #fff;
  .back{
    position: absolute;
    top: 20px;
    left: 15px;
    font-size: 25px;
  }
}
.mid-detail{
  // margin-top: 10px;
  background-color: #eee;
  min-height: 300px;
  padding-top: 20px;
  .item{
    margin-bottom: 5px;
  }
  .label{
    font-size: 18px;
    width: 60px;
    color: #aaa;
    text-align: right;
  }
  .detail{
    color: #000;
    padding-left: 8px;
    font-size: 19px;
  }
}
a{
  text-decoration: none;
  color: #aaa;
}
</style>
