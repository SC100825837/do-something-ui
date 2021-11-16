import axios from '../axios'


export const testEx = () => {
  return axios({
    url: '/ex/error1',
    method: 'get'
  })
}

export const testInfArgs = (data) => {
  return axios({
    url: '/test/testInfArgs',
    method: 'post',
    data: data
  })
}

export const testWebSocket = (param) => {
  return axios({
    url: '/test/testWebSocket/' + param,
    method: 'get'
  })
}
