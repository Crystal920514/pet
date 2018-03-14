<template>
  <div class="footer">
    <span class="item" :class="{on:$route.path ==='/home'}" @click="goto('/home')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="item" :class="{on:$route.path.slice(0,5) ==='/sort'}" @click="goto('/sort')">
      <span class="item_icon">
        <i class="iconfont icon-sousuo1"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="item" :class="{on:$route.path ==='/shoppingCart'}" @click="goto('/shoppingCart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="item" :class="{on:$route.path ==='/userCenter'}" @click="goto('/userCenter')">
      <span class="item_icon">
        <i class="iconfont icon-chongwu"></i>
      </span>
      <span>我的宠物</span>
    </span>
  </div>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        //跳转到指定的路径
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
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

</style>
