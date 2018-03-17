<!--购物车-->
<template>
  <div class="shoppingCart">
    <headerTop :name="name"/>
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
  import headerTop from '../../components/headerTop/headerTop.vue'
  export default {
    data(){
      return {
        show:false,
        name:'购物车'
      }
    },
    components:{
      headerTop
    },
    methods: {
      goto(path) {
        //跳转到指定的路径
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shoppingCart
    width 100%
    height 100%
    background-color #f5f5f5
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
