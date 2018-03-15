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
          <div class="surprise-top">
              <div class="titleImg">
                <img src="./images/pic/3.png">
              </div>
              <div class="titleText">距本场结束</div>
              <div class="time">
                  <span class="time1-1">00</span>
                  <span class="time-zi">:</span>
                  <span class="time1-1">25</span>
                  <span class="time-zi">:</span>
                  <span class="time1-1">02</span>
              </div>
              <div class="more">
                  <img src="./images/pic/4.jpg">
              </div>
          </div>
          <div class="surprise-bottom">
            <ul class="surprise-list">
              <li class="list-item">
                <img src="./images/pic/11.jpg" alt="">
                <span class="new">￥8.88</span>
                <span class="old">省￥28.8</span>
              </li>
              <li class="list-item">
                <img src="./images/pic/12.jpg" alt="">
                <span class="new">￥8.88</span>
                <span class="old">省￥28.8</span>
              </li>
              <li class="list-item">
                <img src="./images/pic/13.jpg" alt="">
                <span class="new">￥8.88</span>
                <span class="old">省￥28.8</span>
              </li>
              <li class="list-item">
                <img src="./images/pic/14.jpg" alt="">
                <span class="new">￥8.88</span>
                <span class="old">省￥28.8</span>
              </li>
              <li class="list-item">
                <img src="./images/pic/15.jpg" alt="">
                <span class="new">￥8.88</span>
                <span class="old">省￥28.8</span>
              </li>
              <li class="list-item">
                <img src="./images/pic/16.jpg" alt="">
                <span class="new">￥8.88</span>
                <span class="old">省￥28.8</span>
              </li>
              <li class="list-item">
                <img src="./images/pic/17.jpg" alt="">
                <span class="new">￥8.88</span>
                <span class="old">省￥28.8</span>
              </li>
              <li class="list-item">
                <img src="./images/pic/18.jpg" alt="">
                <span class="new">￥8.88</span>
                <span class="old">省￥28.8</span>
              </li>


            </ul>

          </div>
        </div>
        <!--中间一堆乱七八糟的图片，先放着慢慢弄-->
        <div class="container">
          <div class="line-pic">
            <img src="./images/pic/19.jpg" alt="">
          </div>
          <div class="line-pic">
            <img src="./images/pic/20.gif" alt="">
          </div>
          <div class="line-pic">
            <img src="./images/pic/21.jpg" alt="">
          </div>
          <!--第二个轮播-->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <img class="swiper-slide" src="./images/swiper/6.jpg" >
              <img class="swiper-slide" src="./images/swiper/7.jpg" >
              <img class="swiper-slide" src="./images/swiper/8.jpg" >
              <img class="swiper-slide" src="./images/swiper/9.jpg" >
              <img class="swiper-slide" src="./images/swiper/10.jpg" >
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <div class="line-pic">
            <img src="./images/pic/22.jpg" alt="">
          </div>
          <!--一堆小图-->
          <div class="small-pic">
            <img src="./images/pic/23.jpg" alt="">
            <img src="./images/pic/24.jpg" alt="">
            <img src="./images/pic/25.jpg" alt="">
            <img src="./images/pic/26.jpg" alt="">
            <img src="./images/pic/27.jpg" alt="">
            <img src="./images/pic/28.jpg" alt="">
            <img src="./images/pic/29.jpg" alt="">
            <img src="./images/pic/30.jpg" alt="">
            <img src="./images/pic/31.jpg" alt="">
            <img src="./images/pic/32.jpg" alt="">
            <img src="./images/pic/33.jpg" alt="">
            <img src="./images/pic/34.jpg" alt="">
            <img src="./images/pic/35.jpg" alt="">
            <img src="./images/pic/36.jpg" alt="">
            <img src="./images/pic/37.jpg" alt="">
            <img src="./images/pic/38.jpg" alt="">
            <img src="./images/pic/39.jpg" alt="">
            <img src="./images/pic/40.jpg" alt="">
            <img src="./images/pic/41.jpg" alt="">
            <img src="./images/pic/42.jpg" alt="">
            <img src="./images/pic/43.jpg" alt="">
            <img src="./images/pic/44.jpg" alt="">
          </div>
          <div class="line-pic">
            <img src="./images/pic/45.jpg" alt="">
          </div>
          <div class="line-pic">
            <img src="./images/pic/46.jpg" alt="">
          </div>
          <div class="line-pic">
            <img src="./images/pic/47.jpg" alt="">
          </div>
          <div class="line-pic-two">
            <img  class="pic-item" src="./images/pic/48.jpg" alt="">
            <div class="pic-item" >
              <img src="./images/pic/49.jpg" alt="">
              <img src="./images/pic/50.jpg" alt="">
            </div>
          </div>
          <div class="line-pic">
            <img src="./images/pic/51.jpg" alt="">
          </div>


        </div>
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
      let scroll3 = new BScroll('.surprise-bottom',{
        scrollX: true,
        click:true
      })
      setTimeout(()=>{
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
      },200)


    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    width 100%
    height 100%
    font-size 0
    .header
      height 86px
      background-color white
      position absolute
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
        background-color black
        position relative
        .swiper-container
          width 100%
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
        .surprise
          background-color white
          width 100%
          .surprise-top
            width 100%
            display flex
            justify-content space-between
            align-items center
            .titleImg
              >img
                width 90px
            .titleText
              font-size 12px
            .time
              font-size 12px
            .more
              >img
                width 50px
          .surprise-bottom
            width 100%
            height 130px
            .surprise-list
              width 960px
              height 120px
              display flex
              .list-item
                margin-right 20px
                display flex
                flex-direction column
                justify-content space-around
                align-items center
                .new
                  color red
                  font-size 14px
                .old
                  color #7e8c8d
                  font-size 14px
                img
                  width 100px
        .container
          width 100%
          .line-pic
            width 100%
            >img
              width 100%
          .small-pic
            width 100%
            >img
              width 50%
          .line-pic-two
            width 100%
            >img
              width 50%
            >div
              float right
              width 50%
              >img
                width 100%
        .content-footer
          width 100%
          height 86px
          font-size 14px
          background-color white
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
