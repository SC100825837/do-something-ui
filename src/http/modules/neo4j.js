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

export const findCourseByBook = (bookName) => {
  return axios({
    url: '/neo4j/course/findCourseByBook/' + bookName,
    method: 'get'
  })
}

export const test = () => {
  return axios({
    url: '/course/test/',
    method: 'get'
  })
}
