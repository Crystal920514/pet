import Vue from 'vue'
import {RECEIVE_SORT ,RECEIVE_BRAND} from './mutation-types'

export default {
  [RECEIVE_SORT](state,{sort}){
    state.sort = sort
  },
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  }
}
