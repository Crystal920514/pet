<!--购物车-->
<template>
  <div class="dog">
    <div class="dog-container">
      <headerTop :name="name"/>
      <div class="dog-pic" v-if="dog[0]">
        <img :src="dog[0].value[0].image" alt="">
      </div>
      <ul class="dog-nav" v-if="dog[1]">
        <li  @click="getIndex(index)"
          v-for="(n,index) in dog[1].categorys" :key="index">
          <img :src="n.image_choose" alt="" v-if="index===picIndex">
          <img :src="n.image" alt="" v-else>
        </li>
      </ul>
      <div class="dog-nav-info" v-if="dog[1]">
        <div v-for="(i,index) in dog[1].categorys[picIndex].menus" :key="index">
          <img :src="i.image" alt="" >
        </div>
      </div>
      <div class="page-line"></div>
      <div class="dog-pics" v-if="dog[2]">
        <img :src="dog[2].content_images[0].image" alt="">
        <div>
          <img :src="dog[2].content_images[1].image" alt="">
          <img :src="dog[2].content_images[2].image" alt="">
        </div>
      </div>
      <div class="dog-promotion" v-if="dog[3]">
        <img :src="dog[3].image" alt="">
      </div>
      <div class="dog-choose">
        <p>全部</p>
        <p>进口狗粮</p>
        <p>国产狗粮</p>
        <p>处方狗粮</p>
      </div>
      <ul class="dog-goods" v-if="dog[4]">
        <li  v-for="(s,index) in dog[4].list">
          <img v-lazy="s.photo" :src="s.photo" alt="">
          <div>
            <span>{{s.subject}}</span>
            <div class="dog-right-center">
              <img v-if="s.activityLabels[0]"  :src="s.activityLabels[0].image" alt="">
            </div>
            <div class="dog-right-content">
              <span class="new">{{s.sale_price}}</span>
              <span class="old">{{s.market_price}}</span>
            </div>
            <div class="dog-right-bottom">
              <span>{{s.comments}} {{s.sold}}</span>
              <img src="https://static.epetbar.com/static_web/wap/src/images/addcart.png" alt="">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {Lazylode} from 'mint-ui';
  import headerTop from '../../components/headerTop/headerTop.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        name:'狗狗主粮',
        picIndex:0
      }
    },
    components:{
      headerTop
    },
    mounted(){
      this.$store.dispatch('reqDog',()=>{
        this.$nextTick(()=>{
          let dogScroll = new BScroll('.dog',{
            scrollY: true,
            click:true
          })
        })
      })
    },
    computed:{
      ...mapState(['dog'])
    },
    methods:{
      getIndex(index){
        this.picIndex = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.dog
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  .dog-container
    .dog-pic
      >img
        width 100%
    .dog-nav
      width 100%
      display flex
      >li
        width 25%
        >img
          width 100%
    .dog-nav-info
      width 100%
      display flex
      flex-wrap wrap
      >div
        width 33.3%
        >img
          width 100%
    .page-line
      width 100%
      height 15px
      background-color #e8e5ef
    .dog-pics
      width 100%
      >img
        width 50%
      >div
        float right
        width 50%
        >img
          width 100%

    .dog-promotion
      width 100%
      display flex
      justify-content center
      align-items center
      >img
        width 50%
    .dog-choose
      display flex
      justify-content space-around
      height 50px
      width 100%
      align-items center
      >p
        width 20%
        text-align center
        font-size 12px
        background-color #cadedf
        border-radius 5px
        height 20px
        line-height 20px
    .dog-goods
      width 100%
      >li
        width 100%
        display flex
        align-items center
        height 120px
        border-bottom 1px solid #bfdaf1
        >img
          width 30%
        >div
          width 65%
          height 80%
          display flex
          flex-direction column
          justify-content space-around
          >span
            font-size 12px
            color #333
          .dog-right-center
            height 20px
            >img
              height 20px
          .dog-right-content
            .new
              font-size 14px
              color red
              font-weight bold
            .old
              font-size 12px
              color #7e8c8d
          .dog-right-bottom
            display flex
            align-items center
            justify-content space-between
            >span
              font-size 12px
              color slategray
            >img
              width 25px
</style>
