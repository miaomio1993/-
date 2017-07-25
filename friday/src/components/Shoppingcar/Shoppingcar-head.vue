<template>
  <div class="s-shoppingcar-head">
    <div class="s-head">
      <a class="s-logo" href="#/">
        <img src="./img/logo.png" alt="">
      </a>
      <div class="s-flow">
        <span :class="num==1?'select':''">我的购物车</span>&gt;<span :class="num==2?'select':''">确认订单信息</span>&gt;<span :class="num==3?'select':''">订单提交成功</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'shoppingcar-head',
        data () {
            return {

            }
        },
        props:{
            num:Number,
        }
    }
</script>

<style scoped>
  .s-shoppingcar-head{
    width: 100%;
    height: 130px;
    border-bottom: 1px solid #e4e4e4;
  }
  .s-head{
    width: 1280px;
    margin: 0 auto;
    overflow: hidden;
  }
  .s-logo{
    float: left;
    height: 130px;
  }
  .s-logo>img{
    margin-top: 25px;
  }
  .s-flow{
    float: right;
    font-size: 20px;
    line-height: 20px;
    color: #999;
    margin-top: 60px;
  }
  .s-flow>span{
    margin: 0 40px;
    color: #333;
  }
  .s-flow>.select{
    color: #f08200;
  }
  .s-flow>span:nth-child(3){
    margin-right: 0;
  }
</style>
