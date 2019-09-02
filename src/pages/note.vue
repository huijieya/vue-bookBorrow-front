<template>
  <div class="container">
    <div class="note-block" v-for="(item,index) in noteList" :key="index">
      <div class="note-title">标题</div>
      <div class="note-content">{{item}}</div>
    </div>
    <van-button class="to-new-btn" type="primary" @click="toNewNote">新建</van-button>
    <div>
      <van-tabbar v-model="active2">
        <van-tabbar-item to="/" icon="shop-o">首页</van-tabbar-item>
        <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item to="/note" icon="records">笔记</van-tabbar-item>
        <van-tabbar-item to="/mine" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import qs from 'Qs'
import { Tabbar, TabbarItem, Uploader, Icon, Button } from 'vant'
import Vue from 'vue'
import { throws } from 'assert';
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Uploader)
Vue.use(Icon)
Vue.use(Button)
export default {
  data() {
    return {
      active2: 2,
      height: 0,
      // title: '',
      noteList: [],
      access_token: '24.9edf276a879a3f19e8a3bc85ab8f02ab.2592000.1562903532.282335-16422598',
      imageCode: '',
      noteAllList: [
        {
          "log_id": 5329572670320709868,
          "words_result_num": 14,
          "words_result": [
            {
              "words": "不足快去赚钱"
            },
            {
              "words": "美好的一天从赚钱开始"
            },
            {
              "words": "存款有五位数了吗"
            },
            {
              "words": "凭什么乱花钱"
            }
          ]
        },
        {
          "log_id": 5329572670320709868,
          "words_result_num": 14,
          "words_result": [
            {
              "words": "看什么看还不快去赚钱,"
            },
            {
              "words": "听说西北风挺好喝的,"
            },
            {
              "words": "你想尝尝吗?"
            },
            {
              "words": "喜欢的东西都很贵!"
            },
            {
              "words": "不存钱怎么买买!"
            }
          ]
        },
        {
          "log_id": 5329572670320709868,
          "words_result_num": 14,
          "words_result": [
            {
              "words": "看什么看还不快去赚钱"
            },
            {
              "words": "听说西北风挺好喝的"
            },
            {
              "words": "你想尝尝吗?"
            },
            {
              "words": "喜欢的东西都很贵"
            },
            {
              "words": "不存钱怎么买买"
            }
          ]
        }
      ]
    }
  },
  methods: {
    toNewNote() {
      this.$router.push({ path: '/newNote' });
    },
    // 将图片中每一行的words连接起来
    transform(){
      for(var i = 0; i < this.noteAllList.length; i++){
        var temp1 = this.noteAllList[i];
        for(var t = 0; t < temp1.words_result.length; t++){
          var temp2 = temp1.words_result[t];
          if(this.noteList[i]){
            this.noteList[i] = this.noteList[i] + temp2.words;
          }else {
            this.noteList[i] = temp2.words;
          }
        }
      }
      console.log(this.noteList, 'noteList');
    },
  },
  created() {
    this.height = document.documentElement.clientHeight || document.body.clientHeight; // 获取屏幕高度
    var newContent = this.$route.query.content;
    this.transform();
    this.noteList.push(newContent);
     console.log(this.noteList, 'noteList');
  }
}
</script>

<style lang = 'scss'>
.container{
  background-color:#cecdcd45;
  width: 100%;
  min-height: 667px;
}
.note-block{
  min-height: 110px;
  padding: 15px;
  background-color: #fff;
  margin-bottom: 1px;
  .note-title{
    font-size: 24px;
    font-weight: bold;
  }
  .note-content{
    font-size: 20px;
    color: #aaa;
  }
}
.to-new-btn{
  position: absolute;
  bottom: 80px;
  left: 140px;
}
</style>
