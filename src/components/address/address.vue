<template>
  <div class="address">
    <headerTop :name="name"/>
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
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
