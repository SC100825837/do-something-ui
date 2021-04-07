import axios from "../axios";

export const login = (params) => {
  return axios({
    url: '/login',
    method: 'get',
    params
  })
}
