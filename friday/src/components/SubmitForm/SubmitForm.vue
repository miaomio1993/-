<template>
  <div>
    <shoppingcarhead :num="3"></shoppingcarhead>

	<div class="g-content">
			<div class="g-content-success">
				<img src="./images/total-success.png" alt="" />
				<p>订单已提交，请于24小时内完成支付<span>（逾期订单将被取消）</span></p>
			</div>
			<div class="g-content-address">
				<strong class="iconfont icon-dizhi"></strong>
				<span>送货至：秋天先森&nbsp;河南省&nbsp;郑州市&nbsp;高新区&nbsp;莲花街与牡丹路交叉口&nbsp;手机 15890343735</span>
			</div>
			<div class="g-content-money">
				<div class="g-money-top">
					<p>应付金额：<strong>{{total}}</strong>（在线支付）</p>
					<span class="g-money-num">订单编号：425954156947</span>
					<span class="g-money-way">支付平台</span>
				</div>
        <ul class="g-money-center">
          <li><input id="pay1" type="radio" name="pay">
            <label for="pay1"><img src="./images/支付宝-pay.png" alt="" /></label></li>
          <li>
            <input id="pay2" type="radio" name="pay">
            <label for="pay2"><img src="./images/微信-pay.png" alt="" /></label></li>
          <li>
            <input id="pay3" type="radio" name="pay">
            <label for="pay3"><img src="./images/bank-pay.png" alt="" /></label></li>
          <li>
            <input id="pay4" type="radio" name="pay">
            <label for="pay4"><img src="./images/余额-pay.png" alt="" /></label></li>
        </ul>

				<div class="g-money-bottom1">
					<div class="g-bottom-top">
						<div class="g-left">
							<span>使用电脑支付</span>
							<img src="./images/电脑支付.png" alt="" />
							<button @click="pay">立即支付</button>
						</div>
						<div class="g-right">
							<span>使用支付宝钱包扫一扫付款</span>
							<img src="./images/支付宝二维码.png" alt="" />
						</div>
					</div>
				</div>

				<div class="g-money-bottom2">
					<div class="g-bottom-top">
						<div class="g-left">
							<img src="./images/手机支付.png" alt="" />
						</div>
						<div class="g-right">
							<span>使用微信扫一扫付款</span>
							<img src="./images/支付宝二维码.png" alt="" />
						</div>
					</div>
				</div>
			</div>

		</div>
  </div>
</template>

<script>
  import Shoppingcarhead from "@/components/Shoppingcar/Shoppingcar-head.vue";
export default {
  name: 'submitform',

  data () {
    return {
        total:0,
    }
  },
  components:{
    Shoppingcarhead
  },
  created:function () {
    this.total=sessionStorage.total;
  },
  methods:{
    pay:function () {
      this.$router.push({path:"/paysuccess"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-content{
	width: 100%;
	margin: 0 auto;
	padding-bottom: 60px;
	border-top:1px solid #e4e4e4;
	/*background: red;*/
}
.g-content>.g-content-success{
	width: 1280px;
	margin: 0 auto;
	padding: 80px 0;
	text-align: center;
}
.g-content>.g-content-success>img{
	width: 80px;
	height: 80px;
}
.g-content>.g-content-success>p{
	margin-top: 58px;
	font-size: 24px;
	line-height: 30px;
}
.g-content>.g-content-success>p>span{
	color:#f08200;
}
.g-content>.g-content-address{
	height: 38px;
	width: 1278px;
	margin: 0 auto;
	background-color: #f4fff2;
  border: 1px solid #e5e5e5;
}
.g-content>.g-content-address>strong{
	display: inline-block;
	color: #498e3d;
	font-size:20px;
	padding: 0 10px;
}
.g-content>.g-content-address>span{
	color:#797a79;
	font-size: 16px;
	line-height: 40px;
}
/*支付平台*/
.g-content>.g-content-money{
	width: 1280px;
	margin: 0 auto;
	border-bottom:1px solid #e4e4e4;
}
.g-content-money>.g-money-top{
	position: relative;
	height: 110px;
	padding-top:35px;
	border-bottom:1px solid #e3e3e3;
}
.g-content-money>.g-money-top>p{
	position: absolute;
	text: 35px;
	left: 0;
	font-size: 18px;
	height: 30px;
	color: #707070;
}
.g-content-money>.g-money-top>p>strong{
	color:#d20a11;
	font-size: 24px;
}
.g-content-money>.g-money-top>.g-money-num{
	position: absolute;
	top:45px;
	right: 0;
	font-size: 16px;
	color: #707070;
}
.g-content-money>.g-money-top>.g-money-way{
	position: absolute;
	left: 0;
	bottom: 25px;
	color: #707070;
}
/*支付方式*/
.g-money-center {
  height: 119px;
  width: 1280px;
  /*border-bottom:1px solid gray;*/
}
.g-money-center>li {
  display: inline-block;
  position: relative;
  height: 40px;
  margin: 40px 0;
  width: 160px;
  margin-right: 45px;
}
.g-money-center>li>input {
  position: absolute;
  width: 15px;
  height: 15px;
  top: 50%;
  left: 0;
  margin-top: -7px;
}
.g-money-center>li>label {
  position: absolute;
  left: 30px;
  height: 38px;
  width: 128px;
  margin-left: 10px;
  margin: 0;
  border: 1px solid gray;
}
.g-money-center>li>label>img {
  width: 100%;
  height: 100%;
}

/**/
.g-content>.g-content-money>.g-money-bottom1{
	width: 1278px;
	height: 400px;
	/*margin-top: 40px;*/
	border:1px solid lightgray;

}
.g-content-money>.g-money-bottom1>.g-bottom-top{
	padding: 59px 0;
	height: 280px;
	width: 735px;
	margin: 0 auto;
}
.g-money-bottom1>.g-bottom-top>.g-left{
	float:left;
	width: 165px;
	padding-left: 50px;
}
.g-money-bottom1>.g-bottom-top>.g-left>span{
	display: inline-block;
	padding-left: 35px;
	line-height: 24px;
	font-size: 16px;
}
.g-money-bottom1>.g-bottom-top>.g-left>img{
	margin-top: 35px;
	height: 136px;
}
.g-money-bottom1>.g-bottom-top>.g-left>button{
	margin-top: 40px;
	font-size: 16px;
	width: 165px;
	line-height: 40px;
	color:white;
	background-color: #f08200;
	border-radius: 5px;
}
.g-money-bottom1>.g-bottom-top>.g-right{
	float: right;
	width: 215px;
	text-align: right;
}
.g-money-bottom1>.g-bottom-top>.g-right>span{
	display: inline-block;
	font-size: 16px;
	line-height: 24px;
}
.g-money-bottom1>.g-bottom-top>.g-right>img{
	margin-top: 40px;
	height: 216px;
}

.g-content>.g-content-money>.g-money-bottom2{
	width: 1278px;
	height: 400px;
	margin-top: 40px;
	border:1px solid lightgray;

}
.g-content-money>.g-money-bottom2>.g-bottom-top{
	padding: 59px 0;
	height: 280px;
	width: 735px;
	margin: 0 auto;
}
.g-money-bottom2>.g-bottom-top>.g-left{
	float:left;
	width: 215px;
	height: 280px;
}
.g-money-bottom2>.g-bottom-top>.g-left>img{
	width: 100%;
	height: 100%;
}
.g-money-bottom2>.g-bottom-top>.g-right{
	float: right;
	width: 215px;
	text-align: center;

}
.g-money-bottom2>.g-bottom-top>.g-right>span{
	display: inline-block;
	font-size: 16px;
	line-height: 24px;
}
.g-money-bottom2>.g-bottom-top>.g-right>img{
	margin-top: 40px;
	height: 216px;
}


</style>
