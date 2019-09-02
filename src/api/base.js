import fetch from '@/utils/fetch'

export function discernChar (access_token, image) {
  return fetch({
    url: '/api/rest/2.0/ocr/v1/general_basic',
    method: 'POST',
    data: {
      access_token,
      image
    },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}
// afterRead(file) {
//   console.log(file);
//   this.imageCode = file.content.split(',')[1];
//   let data = {'access_token': this.access_token, 'image': this.imageCode}
//   this.$axios.post(`https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic`,
//     qs.stringify(data),
//     {
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//     })
//     .then(function (res) {
//       //  成功获取数据时跳转
//       console.log(res, '成功调接口');
//     })
//     .catch(function (err) {
//       //  请求错误
//       console.log(err)
//     })
// }
