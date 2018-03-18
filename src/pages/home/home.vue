<template>
  <div class="home">
    <!--头部-->
    <div class="header">
      <div class="header-top">
        <div @click="$router.push('/address')" class="header-address">
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
        <ul v-if="home[19]">
          <li @click="getNavIndex(index)" :class="{on:index===navIndex}" v-for="(h,index) in home[19].menus">
            <router-link to="/dog">
              <span>{{h.menu_name}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="content-box">
      <!--内容区-->
      <div class="content">
        <!--轮播-->
        <div class="swiper-container">
          <!--第一个轮播遍历-->
          <div class="swiper-wrapper" v-if="home[0]">
            <img v-for="(a,index) in home[0].value" :key="index"
                 class="swiper-slide" :src="a.image" >
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="pic-bottom" v-if="home[1]">
          <img :src="home[1].value[0].image" alt="">
        </div>
        <div class="list">
          <!--遍历的小图标导航-->
          <div class="list-top" v-if="home[2]">
            <img v-for="(b,index) in home[2].menus" :key="index"
              :src="b.image" alt="">
          </div>
        </div>
        <div class="pic-list" v-if="home[3]">
          <img :src="home[3].value[0].image" alt="">
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
            <ul class="surprise-list" v-if="home[4]">
              <li v-for="(c,index) in home[4].goods" class="list-item">
                <img :src="c.image.image" alt="">
                <span class="new">￥{{c.sale_price}}</span>
                <span class="old">省￥{{c.little_price}}</span>
              </li>
            </ul>
          </div>
        </div>
        <!--中间一堆乱七八糟的图片，先放着慢慢弄-->
        <div class="container">
          <div class="line-pic" v-if="home[5]">
            <img :src="home[5].value[0].image" alt="">
          </div>
          <div class="line-pic" v-if="home[6]">
            <img :src="home[6].value[0].image" alt="">
          </div>
          <div class="line-pic" v-if="home[7]">
            <img :src="home[7].value[0].image" alt="">
          </div>
          <!--四个图片拼一块-->
          <div class="four-pic" v-if="home[8]">
            <!--第四次遍历-->
            <img v-for="(d,index) in home[8].content_images"
              :src="d.image" alt="">
          </div>
          <div class="line-pic" v-if="home[9]">
            <img :src="home[9].value[0].image" alt="">
          </div>
          <!--第二个轮播-->
          <div class="swiper-container">
            <div class="swiper-wrapper" v-if="home[10]">
              <img v-for="(e,index) in home[10].value" :key="index"
                class="swiper-slide" :src="e.image" >
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <div class="line-pic" v-if="home[11]">
            <img :src="home[11].value[0].image" alt="">
          </div>
          <!--一堆小图-->
          <div class="small-pic" v-if="home[12]">
            <img  v-for="(f,index) in home[12].content_images" :key="index"
              v-lazy="f.image" alt="">
          </div>
          <div class="line-pic" v-if="home[13]">
            <img :src="home[13].value[0].image" alt="">
          </div>
          <div class="line-pic" v-if="home[14]">
            <img :src="home[14].value[0].image" alt="">
          </div>
          <div class="line-pic" v-if="home[15]">
            <img :src="home[15].value[0].image" alt="">
          </div>
          <div class="line-pic-two" v-if="home[16]">
            <img  class="pic-item" :src="home[16].content_images[0].image" alt="">
            <div class="pic-item" >
              <img :src="home[16].content_images[1].image" alt="">
              <img :src="home[16].content_images[2].image" alt="">
            </div>
          </div>
          <div class="line-pic"  v-if="home[17]">
            <img :src="home[17].value[0].image" alt="">
          </div>
          <div class="line-pic-bottom" v-if="home[18]">
            <img v-for="(g,index) in home[18].content_images" :key="index"
              :src="g.image" alt="">
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
    <!--狗头动画-->
    <div class="dog"></div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  import {Lazyload} from 'mint-ui'
  export default {
    data(){
      return {
        navIndex:0
      }
    },
    mounted(){
      this.$store.dispatch('reqHome',()=>{
        this.$nextTick(()=>{
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
              loop: true,
              pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
              },
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              }
            })
          },500)

          let scroll = new BScroll('.header-nav',{
            scrollX: true,
            click:true
          })
        })
      })
    },
    methods:{
      getNavIndex(index){
        this.navIndex = index

      }
    },
    computed:{
      ...mapState(['home'])
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
        >ul
          width 448px
          display flex
          >li
            text-align center
            width 80px
            &.on
              color green
              border-bottom 3px solid green
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
            flex-wrap wrap
            align-items center
            >img
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
              width 1200px
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
          .four-pic
            width 100%
            >img
              width 50%
              height 85px
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
          .line-pic-bottom
            width 100%
            >img
              width 50%
              height 100px
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
    .dog
      width 42px
      height 47px
      background url("./images/gofish.png") no-repeat
      background-size 84px
      //background-position -42px 0
      position absolute
      bottom 50px
      right 0
      animation dog 1s steps(1,end) infinite
      @keyframes dog
        0%
          background-position 0 0
        50%
          background-position -42px 0
        100%
          background-position 0 0

</style>
