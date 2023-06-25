import request from '../utils/request'
export const chat = (data) => {
  return request({
    method: 'POST',
    url: '/dia/chat',
    data: data
  })
}
