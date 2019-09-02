import axios from 'axios'
// import store from '../store';
import qs from 'Qs'

const requestTimeout = 15000

// 创建axios实例
const service = axios.create({
  baseURL: 'https://aip.baidubce.com', // api的base_url
  timeout: requestTimeout // 请求超时时间
})

service.defaults.retry = 4
service.defaults.retryDelay = 5000
service.defaults.shouldRetry = (_error) => true // 重试条件，默认只要是错误都需要重试

// request拦截器
service.interceptors.request.use(
  config => {
    config.headers.TenantId = localStorage.getItem('tenantId')
    config.headers.productPin = localStorage.getItem('productPin')
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    // config.url += '.do'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
         * code为非1是抛错 可结合自己业务进行修改
         */
    const res = response.data
    if (res.code === 1) {
      return res
    } else {
      console.log(res.data)
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('error')
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
