<template>
  <div id="app">
    <!-- <router-link to="/first">跳转</router-link> -->
    <div class="content">
      <div class="head" >
        <div @click="clickTab_1" :class="index==1 ? 'active' : 'unactive' ">
          登录
        </div>
        <div @click="clickTab_2" :class="index==0 ? 'active' : 'unactive' " style="margin-left: 80px">
          注册
        </div>
      </div>
      <div class="mid-login">
        <!-- 登录部分 -->
        <div class="item" v-show="index==1">
          <div class="name1">
            <div class="name-item1">用户名/手机号</div>
            <input type="text" v-model="account" placeholder="请输入用户名或手机号">
          </div>
          <div class="name1 name2">
            <div class="name-item1 name-item2">密码</div>
            <input type="text" v-model="password" placeholder="请输入密码">
          </div>
        </div>
        <!-- 注册部分 -->
        <div class="item" v-show="index==0">
          <div class="name1">
            <div class="name-item1">用户名/手机号</div>
            <input type="text" placeholder="请输入用户名或手机号">
          </div>
          <div class="name1 name2" style="position:relative">
            <input type="text" placeholder="手机验证码">
            <div class="captcha">
              <div :class="getcode==1 ? 'getcode' : '' "  v-show="getcode==1" v-on:click="count">获取验证码</div>
              <div :class="wait==1 ? 'wait' : '' "  v-show="wait==1">{{time}}S后重新发送</div>
            </div>
          </div>
          <div class="name1 name2">
            <input class="input2" type="password" placeholder="密码必须为8-16位的数字+字符">
          </div>
        </div>
      </div>
      <div class="login">
        <div v-show="index==1" @click="enter">
          登录
        </div>
        <div v-show="index==0" @click="request">
          注册
        </div>
      </div>
    </div>

    <div>
      <img class="logo02" src="../../assets/bt-logo.jpg"/>
    </div>
  </div>
</template>

<script>
import qs from 'Qs'
export default {
  data () {
    return {
      active: true,
      unactive: false,
      index: 1,
      wait: 0,
      getcode: 1,
      sendnum: null,
      account: 'maple',
      password: '52kumi666',
      time: 0
    }
  },
  methods: {
    clickTab_1 () {
      this.index = 1
    },
    clickTab_2 () {
      this.index = 0
    },
    // 登录 以Post方式请求
    enter () {
      this.$router.push({
        path: '/mine',
        query: {
          userId: 1001
        }
      })
      // let that = this
      // let data = {'account': this.account, 'password': this.password}
      // this.$axios.post(`http://47.98.130.99:9083/sys/login.do`, qs.stringify(
      //   data
      // ))
      //   .then(function (res) {
      //     //  成功获取数据时跳转
      //     console.log(res.data.code)
      //     if (res.data.code === 1) {
      //       that.$router.push({
      //         path: '/mine',
      //         query: {
      //           userId: 1001
      //         }
      //         })
      //     }
      //   })
      //   .catch(function (err) {
      //     //  请求错误
      //     console.log(err)
      //   })
    },
    //  验证码 以get方式请求
    count () {
      this.sendnum = Math.round(Math.random() * 1000000)
      this.getcode = 0
      this.wait = 1
      this.time = 10
      var timer = setInterval(() => {
        this.time--
        if (this.time <= 0) {
          this.getcode = 1
          this.wait = 0
          clearInterval(timer)
        }
      }, 1000)
      this.$axios.get('http://47.98.53.42:18002/send', {
        params: {
          uid: 9621,
          pw: '013533',
          mb: '15854198748',
          ms: '您的验证码是：' + this.sendnum,
          ex: 77
        }
          .then(function (res) {
            //  成功获取数据
            console.log(res)
          })
          .catch(function (err) {
            //  请求错误
            console.log(err)
          })
      })
    },
    request() {
      // this.$axios.get('http://localhost:8088/demo/createBook', {
      //   params:{
      //     name: 199814,
      //     count: 30
      //   }
      //     .then(function (res) {
      //       console.log(res, '8598');
      //     })
      // })
    }
  }
}
</script>

<style>
.head {
  display: flex;
  flex-direction: row;
  margin-bottom: 45px;
}
.content {
  box-shadow: 0px 1px 15px 0px #c2a5a7;
  border-radius: 22px;
  position: relative;
  margin-left: 25px;
  margin-right: 22px;
  margin-top: 100px;
  /* 没有的话底部阴影显示不出来 */
  margin-bottom: 2px;
  padding-left: 34px;
  padding-right: 37.5px;
  padding-top: 70px;
  padding-bottom: 80px;
}
.active {
  font-size: 20px;
  color: #cb313a;
  letter-spacing: 2px;
  border-bottom: 3px solid #e6555d;
  padding-bottom: 10px;
}
.unactive {
  font-size: 20px;
  color: #e5b5b8;
  letter-spacing: 2px;
}
input {
  width: 100%;
  height: 30px;
  border: solid 1px #cccccc;
  border-top: none;
  border-left: none;
  border-right: none;
  font-size: 15px;
  color: #333333;
  background: none;
  outline: none;
  -webkit-appearance: none;
  border-radius: 0;
}
input::-webkit-input-placeholder {
  font-family: "微软雅黑";
  letter-spacing: 1px;
  /* placeholder颜色  */
  color: #cfcfcf;
  /* placeholder字体大小  */
  font-size: 15px;
  /* placeholder位置  */
  text-align: left;
}
input:focus {
  border-bottom: 2px solid #ce343d;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
}
.logo01 {
  width: 110px;
  height: 190px;
  position: absolute;
  right: 40px;
  top: 55px;
  z-index: 1000;
}
.logo01-item {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.name1 {
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  font-family: "微软雅黑";
}
.name2 {
  margin-top: 35px;
}
.name-item1 {
  font-family: MicrosoftYaHei;
  font-size: 10px;
  color: #999999;
}
.login {
  position: absolute;
  width: 150px;
  height: 50px;
  line-height: 50px;
  bottom: 5px;
  right: 35px;
  background-image: linear-gradient(-28deg, #cb313a 0%, #f35f68 100%),
    linear-gradient(#cb313a, #cb313a);
  box-shadow: 0px 1px 5px 0px #931f25;
  border-radius: 25px;
  font-family: "微软雅黑";
  font-size: 17px;
  color: #ffffff;
  text-align: center;
}
.captcha {
  position: absolute;
  width: 85px;
  height: 25px;
  right: 0px;
  bottom: 5px;
  border-radius: 13px;
  border: solid 1px #cc323b;
  font-size: 12px;
  font-family: "微软雅黑";
  display: flex;
  /*实现垂直居中*/
  align-items: center;
  /*实现水平居中*/
  justify-content: center;
  text-align: justify;
}
.getcode {
  color: #ce343d;
}
.wait {
  color: #ce343d;
}
.logo02 {
  width: 150px;
  height: 120px;
  overflow: hidden;
  position: absolute;
  left: -20px;
  bottom: 4px;
}
.logo02-item {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
a {
  /* 清除a标签下划线和颜色 */
    text-decoration: none;
    color: inherit;
}
</style>
