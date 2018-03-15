import axios from 'axios'
//获取信息
export const getUrl = (url) => {
  return axios.get(url)
}
