<!--购物车-->
<template>
  <div class="dog">
    <div class="shop-header">
      <span class="item_icon" @click="$router.back()">
        <i class="iconfont icon-fanhui"></i>
      </span>
      <span>狗主粮</span>
      <span class="item_icon" @click="toggleShow">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
      </span>
    </div>
    <div class="container" :class="{on:navShow}">
      <div class="nav">
      <span class="item" @click="goto('/home')">
        <span class="item_icon">
          <i class="iconfont icon-shouye"></i>
        </span>
        <span>首页</span>
      </span>
        <span class="item"  @click="goto('/sort')">
        <span class="item_icon">
          <i class="iconfont icon-sousuo1"></i>
        </span>
        <span>分类</span>
      </span>
        <span class="item" @click="goto('/dog')">
        <span class="item_icon">
          <i class="iconfont icon-gouwuche"></i>
        </span>
        <span>购物车</span>
      </span>
        <span class="item"  @click="goto('/userCenter')">
        <span class="item_icon">
          <i class="iconfont icon-chongwu"></i>
        </span>
        <span>我的宠物</span>
      </span>
      </div>
      <div class="dog-content ">
        汪汪汪
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        navShow:false
      }
    },
    methods: {
      goto(path) {
        //跳转到指定的路径
        this.$router.replace(path)
      },
      toggleShow(){
        this.navShow = !this.navShow
      }
    },
    mounted(){
      this.$store.dispatch('reqDog')
    },
    computed:{
      ...mapState(['dog'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .dog
    width 100%
    height 100%
    background-color #f5f5f5
    .shop-header
      position absolute
      width 100%
      height 50px
      line-height 50px
      display flex
      justify-content space-between
      background-color white
      border-bottom 1px solid #F3F3F3
      z-index 2
      >span
        font-size 18px
        i
          color #9A9A9A
          font-size 22px
    .container
      transform translateY(0px)
      transition-duration 0.5s
      &.on
        transform translateY(50px)
        transition-duration 0.5s
      .nav
        background-color #fff
        width 100%
        height 46px
        display flex
        font-size 12px
        .item
          flex 1
          display flex
          flex-direction column
          align-items center
          justify-content space-around
          color #686868
          &.on
            color #459D36
          .item_icon
            >i
              font-size 26px
      .dog-content
        width 100%
        height 600px
        background-color white
        border-top 1px solid #F3F3F3
        font-size 80px
        line-height 600px
        text-align center
        font-weight bold

</style>
