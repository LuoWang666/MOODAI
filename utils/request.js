// 请求模块
import axios from 'axios'
import store from '../src/store/index.js'

const request = axios.create({
  baseURL: 'http://47.93.158.144:3000'
})

//请求拦截器
// Add a request interceptor
request.interceptors.request.use(
  function (config) {
    const { user } = store.state
    //如果用户已登录，统一给接口设置 token信息
    if (user) {
      config.headers.Authorization = user
    }

    // Do something before request is sent
    // console.log(config)
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
//响应拦截器

export default request
