<template>
  <div>
    这是一个新页面
  </div>
</template>

<script>
import qs from 'Qs'
export default {
  data () {
    return {
    }
  },
  methods: {
    check () {
      console.log('调用了check方法')
      let data = {'page': 1, 'pageSize': 10}
      this.$axios.post(`http://47.98.130.99:9083/sys/customer/gatewayClient/list.do`, qs.stringify(
        data
      ))
        .then(function (res) {
          //  成功获取数据
          console.log(res)
          console.log('check调用成功')
        })
        .catch(function (err) {
          //  请求错误
          console.log(err)
          // alert('wrong')
        })
    },
    userinfo () {
      console.log('调用了userinfo方法')
      this.$axios.get('http://47.98.130.99:9083/sys/userInfo.do')
        .then(function (res) {
          //  成功获取数据
          console.log(res)
          console.log('userinfo调用成功')
        })
        .catch(function (err) {
          //  请求错误
          console.log(err)
        })
    }
  },
  created () {
    this.check()
    this.userinfo()
  }
}
</script>

<style>

</style>
