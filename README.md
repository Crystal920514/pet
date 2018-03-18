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

## 3-15
### 项目进度
- 配置完成vuex
- 使用axios发送请求
- 实现了mock数据
- 首页静态布局完成100%
- 分类页全部实现动态数据，完成度70%，只剩切换列表展示效果
- 购物车页面完成99%，导航显示隐藏没有使用过渡动画，而是v-if/v-else
- 登录页面静态布局完成95% ，还剩一点点小样式需要调节

### 遇到问题
- 分类页写了二级路由之后，点击footer里的分类无法改变样式
  - 原因是:class="{on:$route.path==='/sort'}"中$route.path应该是/sort/tab1或/sort/tab2。
    全等判断为false,无法绑定on
  - 解决，通过截串:class="{on:$route.path.slice(0,5) ==='/sort'}" 之后解决 
- 首页加载完成后立即刷新时会出现轮播区域失效
    - 原因是图片还未完全获取就执行了js代码
    - 解决办法：先给实现轮播的js代码加一个延时执行。后面使用mock数据的话，可以在watch中使用$nextTick()

## 3-16
### 项目进度
- 首页，分类页动态数据展示完成
- 购物车完成
- 登录注册静态完成
- 图片验证码完成
- 按需引入mint-ui，补充完善一些小功能

### 遇到问题
- 分类页中，使用v-for遍历嵌套的层级达到三层时报错，不影响效果
  - 解决办法，在遍历的父元素中加上v-if判定，不抱错
- 分类页右侧内容使用Better-Scroll,滑动效果会在某种特定的操作之后失效
  - 将创建BScroll实例写在watch监视左侧的index中，使用this.$nextTick()后解决
- 首页的mock数据层级太深，数据标识不明显，取到的时候较为费力
  - 将mock数据手动筛选，提取有用部分重做一个json文档，方便获取数据
 
## 3-17 (大半天病休)
### 项目进度
- 将头部抽取为组件，方便复用
- 分类品牌页添加全部品牌的显示

### 遇到问题
- 全部品牌页字母标识对应锚点的跳转
- 全部品牌页右侧字母的变色
- 时间不够，待解决

## 3-18
### 项目进度
- 完成首页导航点击的新页面
- 登录实现简单的前端验证
- 登录页提示信息使用mint-ui的小组件MessageBox
- 将显示全部品牌页设计成一级路由

### 遇到问题
