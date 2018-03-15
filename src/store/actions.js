import {getUrl} from '../api'
import {RECEIVE_SORT,RECEIVE_BRAND} from './mutation-types'


export default {
  //获取分类信息
  reqSort({commit}) {
    getUrl('/api/sort')
      .then((response) => {
        const result = response.data
        if (result.code === 0) {
          const sort = result.data
          commit(RECEIVE_SORT, {sort})
        }
      })
  },
  //获取品牌信息
  reqBrand({commit}){
    getUrl('/api/brand')
      .then((response) =>{
        const result = response.data
        if (result.code === 0) {
          const brand = result.data
          commit(RECEIVE_BRAND, {brand})
        }
      })

  }
}
