import {getUrl} from '../api'
import {RECEIVE_SORT,RECEIVE_BRAND,RECEIVE_HOME,RECEIVE_DOG,RECEIVE_ALLBRAND} from './mutation-types'


export default {
  //获取首页信息
  reqHome({commit} ,callback) {
    getUrl('/api/home')
      .then((response) => {
        const result = response.data
        if (result.code === 0) {
          const home = result.data
          commit(RECEIVE_HOME, {home})
          callback && callback()
        }
      })
  },
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
  },
  //获取狗
  reqDog({commit}){
    getUrl('/api/dog')
      .then((response) =>{
        const result = response.data
        if (result.code === 0) {
          const dog = result.data
          commit(RECEIVE_DOG, {dog})
        }
      })
  },
  //获取品牌
  reqAllBrand({commit}){
    getUrl('/api/allBrand')
      .then((response) =>{
        const result = response.data
        if (result.code === 0) {
          const allBrand = result.data
          commit(RECEIVE_ALLBRAND, {allBrand})
        }
      })
  }
}
