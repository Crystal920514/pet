<template>
  <div class="sort">
    <div class="tab">
        <router-link to="/sort/tab1"><span :class="{on:$route.path ==='/sort/tab1'}">分类</span></router-link>
        <router-link to="/sort/tab2"><span :class="{on:$route.path ==='/sort/tab2'}">品牌</span></router-link>
    </div>
    <router-view :sort="sort" :brand="brand"></router-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$store.dispatch('reqSort')
      this.$store.dispatch('reqBrand')
    },

    computed:{
      ...mapState(['sort','brand']),
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sort
    width 100%
    height 100%
    background-color #F3F4F5
    .tab
      height 40px
      background-color white
      position absolute
      top 0
      left 0
      right 0
      overflow hidden
      display flex
      z-index 6
      line-height 40px
      justify-content center
      span
        display block
        width 80px
        text-align center
        &.on
          color #ED4044




</style>
