/**
 *用户相关请求模块
 */
import request from '../utils/request'
// import store from '../src/store/index.js'
// console.log(store.state.user)
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/api/login',
    data
  })
}
export const register = (data) => {
  return request({
    method: 'POST',
    url: '/api/register',
    data
  })
}

/*获取登录用户信息*/
export const getCurrentUser = () => {
  // console.log(store.state.user.token)
  return request({
    method: 'GET',
    url: '/my/userinfo'
    // headers: {
    //   Authorization: store.state.user
    // }
  })
}

//获取用户个人信息
export const getUserProfile = (target) => {
  // console.log(store.state.user.token)
  return request({
    method: 'GET',
    url: '/my/userinfo'
    // headers: {
    //   Authorization: store.state.user
    // }
  })
}

//更新用户昵称
export const updateUserProfile = (data) => {
  return request({
    method: 'POST',
    url: '/my/userinfo',
    data
  })
}
//更换头像
export const updateUserAvatar = (data) => {
  return request({
    method: 'POST',
    url: '/my/update/avatar',
    data
  })
}
