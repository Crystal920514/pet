<template>
  <div class="tab1">
    <div class="tab1-left" >
      <ul class="left-list">
        <li v-for="(s,index) in sort" :key="index"
            @click="getIndex(index)" :class="{on:index===leftIndex}">{{s.name}}</li>
      </ul>
    </div>
    <div class="tab1-right">
      <div v-if="sort[leftIndex]">
        <div class="right-list-top" v-for="(c,index) in sort[leftIndex].cate_list" :key="index">
          <div class="type0" v-if="c.type===0">
            <p class="right-title">{{c.title}}</p>
            <ul class="right-pic">
              <li  v-for="(l,index) in c.list" :key="index">
                <img :src="l.photo" alt="">
                <p>{{l.name}}</p>
              </li>
            </ul>
          </div>
          <div class="type2" v-if="c.type===2">
            <p class="type2-title">{{c.title}}</p>
            <ul class="type2-list">
              <li class="type2-item" v-for="(l,index) in c.list" :key="index">
                <img class="type2-pic" :src="l.logo" alt="">
                <p>{{l.name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        leftIndex:0,
        isSelect : false
      }
    },
    props:{
      sort:Array
    },
    methods:{
      getIndex(index){
        this.leftIndex = index
      }
    },
    mounted(){
        this.$nextTick(() => {
          let scroll = new BScroll('.tab1-left', {
            scrollY: true,
            click: true
          })
      })
    },
    watch:{
      leftIndex(){
        this.$nextTick(() => {
          let scroll = new BScroll('.tab1-right', {
            scrollY: true,
            click: true
          })
        })
      }
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
          &.on
            background-color #F3F4F5
            color red
    .tab1-right
      position absolute
      background-color white
      width 73%
      right 0
      top 0
      bottom 0
      overflow hidden
      >div
        .right-list-top
          width 100%
          .type0
            .right-title
              color #7e8c8d
              font-size 12px
              height 30px
              line-height 30px
              margin-top 10px
              margin-left 5px
            .right-pic
              width 100%
              display flex
              flex-wrap wrap
              >li
                width 33%
                text-align center
                >img
                  width 80%
                  border 1px solid #dbe9ea
                >p
                  height 50px
                  font-size 14px
                  line-height 50px
          .type2
            .type2-title
              color #7e8c8d
              font-size 12px
              height 30px
              line-height 30px
              margin-top 10px
              margin-left 5px
            .type2-list
              width 100%
              overflow hidden
              .type2-item
                width 50%
                float left
                text-align center
                .type2-pic
                  width 95px
                  height 50px
                  border 1px solid #dbe9ea
                >p
                  height 50px
                  font-size 14px
                  line-height 50px
</style>
