import Vue from 'vue'
import {RECEIVE_HOME,RECEIVE_SORT ,RECEIVE_BRAND,RECEIVE_DOG,RECEIVE_ALLBRAND} from './mutation-types'

export default {
  [RECEIVE_HOME](state,{home}){
    state.home = home
  },
  [RECEIVE_SORT](state,{sort}){
    state.sort = sort
  },
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  },
  [RECEIVE_DOG](state,{dog}){
    state.dog = dog
  },
  [RECEIVE_ALLBRAND](state,{allBrand}){
    state.allBrand = allBrand
  }
}
