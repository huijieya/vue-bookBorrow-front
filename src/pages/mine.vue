<template>
  <div>
    <div class="head center column">
      <div class="avatar" v-if="userId == undefined">
        <div class="avatar">
          <img @click="login" class="avatar" :src="userInfo.avatar"/>
        </div>
      </div>
      <div class="avatar" v-else>
        <van-uploader class="avatar" :after-read="onRead">
          <div class="avatar">
            <img class="avatar" :src="userInfo.avatar"/>
          </div>
        </van-uploader>
      </div>
      <div id="text" @click="getValue" class="nickname">谁将烟焚散，散了纵横的牵绊。</div>
    </div>
    <div class="mid-mine">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="当前借阅">
          <van-card
            desc="内容主要涉及JavaScript的语言特点、JavaScript与浏览器的交互、更高级的JavaScript技巧"
            title="JavaScript高级程序设计"
            :thumb="require('@/assets/前端01.jpg')"
            class="text"
          >
            <!-- 通过具名插槽插入tags标签 -->
            <div slot="tags" class="card__tags">
              <van-tag plain type="danger">
                (美)(Nicholas C.Zakas)扎卡斯
              </van-tag>
            </div>
            <div slot="footer">
              <van-button round size="mini">还书</van-button>
            </div>
          </van-card>
        </van-collapse-item>
        <van-collapse-item title="借阅历史">
          <van-card
            desc="内容主要涉及JavaScript的语言特点、JavaScript与浏览器的交互、更高级的JavaScript技巧"
            title="JavaScript高级程序设计"
            :thumb="require('@/assets/前端01.jpg')"
          >
          <!-- 通过具名插槽插入tags标签 -->
            <div slot="tags" class="card__tags">
              <van-tag plain type="danger">
                (美)(Nicholas C.Zakas)扎卡斯
              </van-tag>
            </div>
            <div slot="footer">
              <van-button round size="small">再次借阅</van-button>
            </div>
          </van-card>
        </van-collapse-item>
      </van-collapse>
    </div>
    <div>
      <van-tabbar v-model="active3">
        <van-tabbar-item to="/" icon="shop-o">首页</van-tabbar-item>
        <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item to="/note" icon="records">笔记</van-tabbar-item>
        <van-tabbar-item to="/mine" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { mainItems } from '../utils/data.js'
import { Tabbar, TabbarItem, Collapse, CollapseItem, Card, Uploader, Icon, Button, Tag } from 'vant'
import Vue from 'vue'
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Uploader)
Vue.use(Collapse).use(CollapseItem)
Vue.use(Card)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Tag)
export default {
  data () {
    return {
      userId: '',
      active3: 3,
      activeName: '1',
      userInfo: {
        avatar: require('../assets/avatar2.jpg')
      }

    }
  },
  methods: {
    // 点击注册/登录
    login(){
      this.$router.push({ path: '/login' });
    },
    // 点击头像上传图片
    onRead (file) {
      // 获取文件
      console.log(file, 111)
      if (file.type.indexOf('image') === 0) {
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function (e) {
          // 图片base64化
          var newUrl = this.result
          console.log(newUrl, 333)
          // preview.style.backgroundImage = 'url(' + newUrl + ')'
        }
      }
    },
    getValue(){
      var element = document.getElementsByClassName('avatar')
      console.log(element.innerHTML, 999)
    }
  },
  created() {
    this.userId = this.$route.query.userId;
    console.log(this.userId, 9999);
    console.log(this.userId === undefined , 9999);
  }
}
</script>

<style scoped lang="scss">
.head{
  height: 300px;
  // background-color: #87CEFA;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/backgroud2.jpeg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
  }
  .nickname{
    color: #fff;
    margin-top: 10px;
    font-size: 20px;
  }
}
.mid-mine{
  .text{
    overflow: visible !important;
    white-space: normal !important;
  }
}
// common-scss
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.column{
  display: flex;
  flex-direction: column;
}
</style>
