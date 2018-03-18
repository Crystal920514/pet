<template>
  <div class="address">
    <headerTop :name="name"/>
    <div class="cat-dog-fish">
      <p class="cat">猫猫站</p>
      <p class="ao">狗狗站</p>
      <p>水族站</p>
    </div>
    <v-distpicker type="mobile" province="北京市" ></v-distpicker>

  </div>
</template>

<script>
  import headerTop from '../../components/headerTop/headerTop.vue'
  import VDistpicker from 'v-distpicker'
  export default {
    data(){
      return {
        name:'选择收货地区'
      }
    },
    components:{
      headerTop
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .address
    .cat-dog-fish
      width 100%
      height 50px
      background-color whitesmoke
      display flex
      align-items center
      justify-content space-around
      >p
        font-size 16px
        width 25%
        text-align center
        height 30px
        line-height 30px
        border-radius 5px
        background-color #c5dbdc
      .ao
        color white
        background-color red

</style>
