<template>
  <div class="tab2" >
    <div class="brand-list" :class="{on:!isShowAll}">
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
    <div class="all" @click="showAll">全部</div>
    <all :showAll="showAll" :isShowAll="isShowAll" />
  </div>
</template>

<script>
  import all from '../all/all.vue'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        isShowAll:false
      }
    },
    props:{
      brand:Array
    },
    components:{
      all
    },
    mounted(){
      this.$nextTick(()=>{
        let scroll = new BScroll('.tab2',{
          scrollY: true,
          click:true
        })
      })
    },
    methods:{
      showAll(){
        this.isShowAll = !this.isShowAll
      }
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
    display none
    &.on
      display block
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
  .all
    position fixed
    right 10px
    bottom 60px
    width 40px
    font-size 12px
    line-height 40px
    text-align center
    height 40px
    color #fff
    background rgba(0,0,0,.4)
    border-radius 50%
</style>
