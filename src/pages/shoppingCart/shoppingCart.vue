<!--购物车-->
<template>
  <div class="shoppingCart">
    <div class="shop-header">
      <span class="item_icon" @click="$router.back()">
        <i class="iconfont icon-fanhui"></i>
      </span>
      <span>购物车</span>
      <span class="item_icon">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
      </span>
    </div>
    <div class="shop-content ">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span class="cartText">购物车是空的</span>
      <div>
        <a href="###">去逛逛</a>
        <a href="###">我的收藏</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shoppingCart
    width 100%
    height 100%
    background-color #f5f5f5
    .shop-header
      width 100%
      height 50px
      line-height 50px
      display flex
      justify-content space-between
      background-color white
      >span
        font-size 18px
        i
          color #9A9A9A
          font-size 22px
    .shop-content
      width 100%
      height 300px
      background-color white
      border-top 1px solid #F3F3F3
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      .item_icon
        .iconfont
          font-size 120px
          color #7e8c8d
      .cartText
        font-size 18px
        color #dbdbdb
      >div
        width 60%
        margin 0 auto
        display flex
        justify-content space-around
        >a
          display block
          width 80px
          height 35px
          border 1px solid #9A9A9A
          border-radius 10px
          text-align center
          line-height 35px
</style>
