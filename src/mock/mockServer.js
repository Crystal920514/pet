import Mock from 'mockjs'
import data from './data.json'


Mock.mock('/api/sort',{code:0,data:data.sort}) //监听分类列表
Mock.mock('/api/brand',{code:0,data:data.brand}) //品牌
Mock.mock('/api/home',{code:0,data:data.home}) //首页
