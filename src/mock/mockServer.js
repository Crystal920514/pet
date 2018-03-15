import Mock from 'mockjs'
import data from './data.json'

//监听分类列表
Mock.mock('/api/sort',{code:0,data:data.sort})
Mock.mock('/api/brand',{code:0,data:data.brand})
