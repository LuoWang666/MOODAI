// 文章请求模块
import request from '../utils/request'
// 请求获取文章列表数据
export const getArticles = () => {
  // console.log(id)
  return request({
    method: 'GET',
    url: '/articles'
  })
}
