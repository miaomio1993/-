<template>
  <div class="s-shoppingcar-wrap">
    <shoppingcarhead></shoppingcarhead>
    <div class="s-shoppingcar">
      <div class="s-shoppingcar-title">
        <span class="iconfont icon-gouwuche"></span>购物车
      </div>
      <shoppingcardetail></shoppingcardetail>
    </div>
  </div>
</template>

<script>
    import Shoppingcarhead from "@/components/Shoppingcar/Shoppingcar-head.vue";
    import Shoppingcardetail from "@/components/Shoppingcar/Shoppingcar-detail.vue";
    export default {
        name: 'shoppingcar',
        data () {
          return {}
        },
        components:{
          Shoppingcarhead,
          Shoppingcardetail,
        },
    }
</script>


<style scoped>
  .s-shoppingcar-wrap{
    width: 100%;
  }
  .s-shoppingcar{
    width: 1280px;
    margin: 0 auto;
  }
  .s-shoppingcar-title{
    line-height: 58px;
    font-size: 18px;
    color: #666;
  }
  .s-shoppingcar-title>span{
    color: #f39c36;
    font-size: 20px;
    font-weight: bold;
    margin-right: 15px;
  }
</style>
