<template>
  <div class="g-wrap">
    <div class="g-pay">
      <span>使用平台支付</span>
      <p>请您在新打开的网上银行页面进行支付，支付完成前请不要关闭该窗口</p>
      <div class="g-pay-btns">
        <a href="javascript:void(0)">
          <span>已经完成支付</span><span>查看订单详情</span>
        </a>
        <a href="javascript:void(0)">
          <span>支付失败</span><span>更换支付方式</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Payalert',
        data() {
            return {}
        }
    }
</script>

<style scoped>
.g-wrap{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}
.g-wrap>.g-pay{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 650px;
  height: 430px;
  margin-left: -325px;
  margin-top: -215px;
  background-color: white;
  border:5px solid #e2e2e2;
  text-align: center;
}
.g-wrap>.g-pay>span{
  display:inline-block;
  margin: 96px 0px 45px;
  font-size: 30px;
  font-weight: 300;
  color:#f08200;
}
.g-wrap>.g-pay>p{
  color:#666;
  font-size: 16px;
  line-height: 35px;
}
.g-wrap>.g-pay>.g-pay-btns{
  height: 72px;
  width: 400px;
  margin: 60px 125px 80px;
}
.g-wrap>.g-pay>.g-pay-btns>a{
  float: left;
  display: inline-block;
  width: 170px;
  height: 72px;
  background-color: #f08200;
  color:white;
  border-radius:8px;
}
.g-wrap>.g-pay>.g-pay-btns>a:nth-child(1){
  margin-right: 60px;
}

.g-pay>.g-pay-btns>a>span:nth-child(1){
  display: block;
  font-size: 16px;
  line-height: 22px;
  margin-top: 15px;
  margin-bottom: 5px;
}
.g-pay>.g-pay-btns>a>span:nth-child(2){
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 10px;
}
</style>
