import axios from '../axios'


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
