<template>
  <div>
    <van-cell-group>
      <van-field
        v-model="title"
        required
        clearable
        label="标题"
        placeholder="请输入笔记标题"
      />
      <van-field
        v-model="content"
        label="内容"
        placeholder="请输入笔记内容"
        required
      />
    </van-cell-group>
    <div class="upload-btn" v-if="showUpload">
      <van-uploader  :after-read="afterRead">
        <van-button type="primary">选取图片</van-button>
      </van-uploader>
    </div>
    <div class="upload-btn" v-else>
      <router-link :to="{path:'/note',query: {content: content, title:title}}">
        <van-button type="primary">保存</van-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Field, CellGroup } from 'vant';
import { discernChar } from '@/api/base.js';
import axios from "axios";
import Vue from 'vue';
import qs from 'Qs';

Vue.use(Field).use(CellGroup);
export default {
  data() {
    return {
      title: '',
      content: '',
      imageCode: '',
      access_token: '24.9edf276a879a3f19e8a3bc85ab8f02ab.2592000.1562903532.282335-16422598',
      showUpload: true
    }
  },
  methods: {
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
    },
    afterRead(file) {
      console.log(file);
      this.imageCode = file.content.split(',')[1];
      discernChar(this.access_token, this.imageCode).then(res => {
        console.log(res, '成功调接口');
      })
      this.content = '少壮不努力老大徒伤悲';
      this.showUpload = false;
      console.log(this.showUpload, 'showUpload');
      // this.imageCode = file.content.split(',')[1];
      // let data = {'access_token': this.access_token, 'image': this.imageCode}
      // this.$axios.post(`/api/rest/2.0/ocr/v1/general_basic`,
      //   qs.stringify(data),
      //   {
      //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      //   })
      //   .then(function (res) {
      //     //  成功获取数据时跳转
      //     console.log(res, '成功调接口');
      //   })
      //   .catch(function (err) {
      //     //  请求错误
      //     console.log(err)
      //   })
    }
  }
}
</script>

<style lang = "scss">
.upload-btn{
  position: absolute;
  bottom: 80px;
  left: 140px;
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
</style>
