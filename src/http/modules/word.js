import axios from '../axios'

//指标体系列表查询
export const page = (query) => {
  //debugger
  return axios({
    method: 'get',
    url: '/word/page',
    params: query
  })
}

export const listAllWords = () => {
  return axios({
    url: '/word/listAllWords',
    method: 'get'
  })
}

export const getOneById = (params) => {
  return axios({
    url: '/word/getOneById/' + params,
    method: 'get'
  })
}
