<template>
  <div class="home">
    <!--头部-->
    <div class="header">
      <div class="header-top">
        <div class="header-address">
          <span>狗狗</span>
          <span>|</span>
          <span>重庆</span>
          <span class="item_icon">
            <i class="iconfont icon-xiala"></i>
         </span>
        </div>
        <div class="header-input">
          <input type="text" placeholder="搜索商品和品牌">
          <span class="item_icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
        </div>
        <div class="header-category">
          <span class="item_icon">
            <i class="iconfont icon-xiaoxi"></i>
          </span>
        </div>
      </div>
      <div class="header-nav">
        <div>
          <span>首页</span>
          <span>狗狗主粮</span>
          <span>服饰城</span>
          <span>医疗保健</span>
          <span>零食玩具</span>
          <span>日用外出</span>
          <span>美容香波</span>
        </div>
      </div>
    </div>
    <div class="content-box">
      <!--内容区-->
      <div class="content">
        <!--轮播-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <img class="swiper-slide" src="./images/swiper/1.jpg" >
            <img class="swiper-slide" src="./images/swiper/2.jpg" >
            <img class="swiper-slide" src="./images/swiper/3.jpg" >
            <img class="swiper-slide" src="./images/swiper/4.jpg" >
            <img class="swiper-slide" src="./images/swiper/5.jpg" >
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="pic-bottom">
          <img src="./images/pic/1.jpg" alt="">
        </div>
        <div class="list">
          <div class="list-top">
            <img src="./images/epetbar/1.jpg" alt="">
            <img src="./images/epetbar/2.jpg" alt="">
            <img src="./images/epetbar/3.jpg" alt="">
            <img src="./images/epetbar/4.jpg" alt="">
            <img src="./images/epetbar/5.jpg" alt="">
          </div>
          <div class="list-bottom">
            <img src="./images/epetbar/6.jpg" alt="">
            <img src="./images/epetbar/7.jpg" alt="">
            <img src="./images/epetbar/8.jpg" alt="">
            <img src="./images/epetbar/9.jpg" alt="">
            <img src="./images/epetbar/10.jpg" alt="">
          </div>
        </div>
        <div class="pic-list">
          <img src="./images/pic/2.jpg" alt="">
        </div>
        <div class="surprise">
          <div class="surprise-top"></div>
          <div class="surprise-bottom"></div>
        </div>
        <!--中间一堆乱七八糟的图片，先放着慢慢弄-->
        <div class="container"></div>
        <!--内容区的底部-->
        <div class="content-footer">
          <div>
            <span>触屏版</span>
            <span>手机客户端</span>
            <span>关于我们</span>
            <span>联系我们</span>
          </div>
          <p>© wap.epet.com 版权：重庆易宠科技有限公司</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted(){
      let scroll = new BScroll('.header-nav',{
        scrollX: true,
        click:true
      })
      let scroll2 = new BScroll('.content-box',{
        scrollY: true,
        click:true
      })
      let swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
      })

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    width 100%
    height 100%
    position relative
    font-size 0
    .header
      height 86px
      width 100%
      background-color white
      position fixed
      top 0
      left 0
      right 0
      overflow hidden
      display flex
      flex-direction column
      justify-content space-between
      z-index 6
      .header-top
        display flex
        height 60px
        align-items center
        justify-content space-around
        color #898989
        .header-address
          width 25%
          margin-left 5px
          display flex
          justify-content space-around
          >span
            font-size 13px
        .header-input
          width 58%
          font-size 13px
          display flex
          >input
            background-color #E9E9E9
            width 100%
            border 0
            height 25px
            border-radius 4px
            color #bcbcbc
            text-indent 10px
          .item_icon
            margin-left -16px
            line-height 25px
            >i
              font-size 12px
      .header-nav
        width 100%
        >div
          width 448px
          display flex
          span
            width 64px
            text-align center
            font-size 14px
            height 36px
            line-height 36px
            color #666666
    .content-box
      width 100%
      position absolute
      left 0
      right 0
      top 86px
      bottom 46px
      .content
        background-color white
        position relative
        .swiper-container
          width 100%
          height 157.86px
          img
            width 100%
        .pic-bottom
          width 100%
          img
            width 100%

        .list
          width 100%
          background-color black
          >div
            width 100%
            display flex
            align-items center
            >img
              flex 1
              width 20%


        .pic-list
          width 100%
          >img
            width 100%
        .content-footer
          width 100%
          height 86px
          font-size 14px
          >div
            display flex
            justify-content space-around
            height 60px
            margin 0 auto
            width 80%
            line-height 60px

          >p
            font-size 12px
            text-align center
</style>
