<template>
  <div class="login">
    <div class="login-bg">
      <div class="login-header">
        <span class="item_icon" @click="$router.back()">
          <i class="iconfont icon-fanhui"></i>
        </span>
        <span>注册</span>
      </div>
      <div class="login-logo">
        <img src="./images/logo.png" alt="">
      </div>
      <div class="login-bottom"></div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login
    width 100%
    height 100%
    position relative
    .login-bg
      width 100%
      height 175px
      background-image url("./images/bg.png")
      background-size 100%
      .login-header
        width 94%
        margin 0 auto
        color white
        font-size 16px
        display flex
        height 30px
        line-height 30px
        justify-content space-between
      .login-logo
        width 80px
        height 80px
        margin 0 auto
        position absolute
        top 60px
        left 120px
        >img
          width 100%
      .login-bottom
        position absolute
</style>
