<template>
  <div class="allShow" >
    <div class="wrap" ref="brandUl">
      <headerTop :name="name"/>
      <div class="content content-hook " v-for="(item,index) in allBrand" :key="index">
        <a :id="item.order">{{item.order}}</a>
        <div v-for="(p,index) in item.list" :key="index">
            <div class="item-pic">
              <img :src="p.logo" alt="">
            </div>
            <div class="item-text">
              <span class="item-name">{{p.name}}</span>
              <span class="item-address">{{p.address}}</span>
            </div>
        </div>
      </div>
    </div>
    <div class="right-word" >
      <a href="javascript:;" :class="{current:index===currentIndex}"
         @click="selectCurrent(index)"
         v-for="(item,index) in allBrand" :key="index">{{item.order}}</a>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import headerTop from '../headerTop/headerTop.vue'
  export default {
    data(){
      return {
        show:false,
        name:'全部品牌',
        scrollY:0,
        tops: [],

      }
    },
    methods: {
      goto(path) {
        //跳转到指定的路径
        this.$router.replace(path)
      },
      _initScroll(){
        this.listScroll = new BScroll('.allShow',{
          scrollY: true,
          click:true,
          probeType:2 //不监视惯性滑动
        })
        this.listScroll.on('scroll',(pos)=>{
          console.log(pos.y)
          this.scrollY = Math.abs(pos.y)
        })
        this.listScroll.on('scrollEnd',(pos)=>{
          console.log('滑动结束'+pos.y)
          this.scrollY = Math.abs(pos.y)
        })
      },
      _initTops(){
        const tops = []
        let top = 0
        //计算每个top,存到tops
        tops.push(top)

        const lis = this.$refs.brandUl.getElementsByClassName('content-hook')
        Array.prototype.slice.call(lis).forEach((item,index)=>{
          top += item.clientHeight
          tops.push(top)
        })
        this.tops = tops
        console.log(this.tops)
      },
      selectCurrent (index) {
        console.log('selectCurrent()')
        // 得到滚动目标坐标
        const top = this.tops[index]
        // 更新目标scrollY值
        this.scrollY = top
        // 平滑滚动到指定位置
        this.listScroll.scrollTo(0, -top, 300)
      },

    },
    components:{
      headerTop
    },
    mounted(){
      this.$store.dispatch('reqAllBrand',()=>{
          this.$nextTick(() => {
            //滚动
            this._initScroll()
            this._initTops()
          })
      })
    },
    computed:{
      ...mapState(['allBrand']),
      currentIndex(){
        const {scrollY,tops} = this
        // scrollY要>=当前的top && 小于下一个top
        return tops.findIndex((top, index) => scrollY>=top && scrollY<tops[index+1])

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .allShow
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color white
    .wrap
      .content
        >a
          display block
          width 100%
          height 20px
          line-height 20px
          background-color #e0f1f2
          color #999
          font-size 12px
          padding-left 10px
        >div
          height 74px
          width 100%
          display flex
          align-items center
          border-bottom 1px solid #d8e8e9
          .item-pic
            width 30%
            height 50px
            line-height 50px
            text-align center
            border 1px solid #cce3e4
            margin-left 10px
            >img
              margin-top 8px
              width 70px
          .item-text
            width 30%
            height 40px
            display flex
            flex-direction column
            align-items flex-start
            justify-content space-around
            margin-left 20px
            .item-address
              color #999
              font-size 12px
    .right-word
      width 20px
      background-color rgba(187, 187, 187, 0.38)
      position fixed
      top 100px
      right 0
      text-align center
      >a
        font-size 12px
        color #7e8c8d
        height 16px
        line-height 16px
        display block
        &.current
          color yellow
</style>
