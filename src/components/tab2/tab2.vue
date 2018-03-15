<template>
  <div class="tab2">
    <div class="brand-list">
      <div class="tab2-container" v-for="(b,index) in brand" :key="index">
        <div class="tab2-title">
          <span>—— {{b.title}} ——</span>
        </div>
        <ul class="tab2-list">
          <li class="tab2-logo" v-for="(l,index) in b.list" :key="index">
            <div>
              <img :src="l.logo" alt="">
            </div>
            <p>{{l.name}}</p>
            <p class="tab2-logo-bottom">{{l.address}}</p>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      brand:Array
    },
    mounted(){
      this.$nextTick(()=>{
        let scroll = new BScroll('.tab2',{
          scrollY: true,
          click:true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.tab2
  position absolute
  top 50px
  bottom 46px
  left 0
  right 0
  background-color #F3F4F5
  .brand-list
    .tab2-container
      width 100%
      background-color white
      .tab2-title
        width 100%
        height 60px
        line-height 60px
        text-align center
        font-size 12px
        color #999
      .tab2-list
        display flex
        flex-wrap wrap
        .tab2-logo
          width 33.3%
          height 110px
          text-align center
          >div
            width 85%
            height 60px
            margin 0 auto
            border 1px solid #E2E2E2
            text-align center
            line-height 50px
            >img
              margin-top 8px
              width 90%
          >p
            font-size 12px
            margin-top 5px
          .tab2-logo-bottom
            color #999
</style>
