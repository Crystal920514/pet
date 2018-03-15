<template>
  <div class="tab1">
    <div class="tab1-left" >
      <ul class="left-list">
        <li v-for="(s,index) in sort" :key="index">{{s.name}}</li>
      </ul>
    </div>
    <div class="tab1-right">
      <ul class="right-list"></ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      sort:Array
    },
    mounted(){
      this.$nextTick(() => {
        let scroll = new BScroll('.tab1-left', {
          scrollY: true,
          click: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab1
    position absolute
    top 50px
    bottom 46px
    left 0
    right 0
    background-color #F3F4F5
    .tab1-left
      position absolute
      background-color white
      top 0
      bottom 0
      width 25%
      overflow hidden
      .left-list
        width 100%
        text-align center
        li
          height 50px
          font-size 13px
          line-height 50px
          border-bottom 1px solid #F3F4F5
    .tab1-right
      position absolute
      background-color white
      width 73%
      right 0
      top 0
      bottom 0


</style>
