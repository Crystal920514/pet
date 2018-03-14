## 技术选型
### 前端数据处理/交互/组件化
- vuex
- vue-router
- 轮播swiper
- 界面滚动better-scroller

## 拆分路由
### 一级路由
- 首页 /home
- 分类页 /sort
- 购物车 /ShoppingCart
- 我的E宠 /userCenter
### 二级路由（分类页下）
- /sort/tab1
- /sort/tab2

## 3-14
### 技术点记录
- footer和首页的header使用绝对定位来模拟固定定位，目的是解决固定定位在移动端的兼容性问题
	- 原理：在内容区外面再多套一个层
- 使用better-scroll插件实现了首页头部导航条的滚动
- 使用swiper插件实现首页内容区轮播

### 遇到问题
- 首页内容区加入better-scroll实现竖向拖动之后，出现了很多bug，最终通过调整布局解决问题

### 项目进度
- 完成主体路由搭建
- 基本完成首页，购物车静态页面