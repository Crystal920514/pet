import Mock from 'mockjs'
import data from './data.json'
import dog from './dog.json'
import allBrand from './allbrand.json'


Mock.mock('/api/sort',{code:0,data:data.sort}) //监听分类列表
Mock.mock('/api/brand',{code:0,data:data.brand}) //品牌
Mock.mock('/api/home',{code:0,data:data.home}) //首页
Mock.mock('/api/dog',{code:0,data:dog.dog}) //狗
Mock.mock('/api/allBrand',{code:0,data:allBrand.allBrand}) //全部品牌的排序
