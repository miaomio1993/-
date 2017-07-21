<template>
	<div class="g-content">
			<div class="g-content-success">
				<img src="images/total-success.png" alt="" />
				<p>订单已提交，请于24小时内完成支付<span>（逾期订单将被取消）</span></p>
			</div>
			<div class="g-content-address">
				<strong class="iconfont icon-dizhi"></strong>
				<span>送货至：但小兵&nbsp;北京&nbsp;北京市&nbsp;昌平区&nbsp;天通苑明天第一城4号楼101&nbsp;固定电话010-12345678</span>
			</div>
			<div class="g-content-money">
				<div class="g-money-top">
					<p>应付金额：<strong>165.90</strong>（在线支付）</p>
					<span class="g-money-num">订单编号：425954156947</span>
					<span class="g-money-way">支付平台</span>
				</div>
				<ul class="g-money-center">
					<li>
						<span ><em class="active"></em></span>
						<div class="g-center-pay">
							<img src="images/支付宝-pay.png" alt="" />
						</div>
					</li>
					<li>
						<span><em></em></span>
						<div class="g-center-pay">
							<img src="images/微信-pay.png" alt="" />
						</div>
					</li>
					<li>
						<span><em></em></span>
						<div class="g-center-pay">
							<img src="images/bank-pay.png" alt="" />
						</div>
					</li>
					<li>
						<span><em></em></span>
						<div class="g-center-pay">
							<img src="images/余额-pay.png" alt="" />
						</div>
					</li>
				</ul>

				<div class="g-money-bottom1">
					<div class="g-bottom-top">
						<div class="g-left">
							<span>使用电脑支付</span>
							<img src="images/电脑支付.png" alt="" />
							<button>立即支付</button>
						</div>
						<div class="g-right">
							<span>使用支付宝钱包扫一扫付款</span>
							<img src="images/支付宝二维码.png" alt="" />
						</div>
					</div>
				</div>

				<div class="g-money-bottom2">
					<div class="g-bottom-top">
						<div class="g-left">
							<img src="images/手机支付.png" alt="" />
						</div>
						<div class="g-right">
							<span>使用微信扫一扫付款</span>
							<img src="images/支付宝二维码.png" alt="" />
						</div>
					</div>
				</div>
			</div>

		</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {}
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
	width: 1280px;
	margin: 0 auto;
	background-color: #f4fff2;
	border-top:1px solid gray;
	border-bottom: 1px solid gray;
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
	border-bottom:1px solid gray;
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
.g-content>.g-content-money>.g-money-center{
	height: 88px;
	width: 1280px;
	/*border-bottom:1px solid gray;*/
}
.g-content-money>.g-money-center>li{
	position: relative;
	display: inline-block;
	margin-top: 40px;
	margin-right: 40px;
	width: 200px;
	background: red;
}
.g-content-money>.g-money-center>li>span{
	position: absolute;
	top: 10px;
	left: 0;
	width: 18px;
	height: 18px;
	border-radius:50%;
	border:1px solid #1d76c7;
}
.g-money-center>li>span>em{
	position: absolute;
	top: 4px;
	left: 5px;
	width: 9px;
	height: 9px;
	border-radius:50%;
	background-color: white;
}
.g-money-center>li>span>.active{
	background-color: #1d76c7;
}
.g-money-center>li>.g-center-pay{
	position: absolute;
	top: 0;
	left: 30px;
	width: 133px;
	height: 40px;
	border:1px solid lightgray;
}
.g-money-center>li>.g-center-pay>img{
	width: 100%;
	height: 100%;
}
.g-money-center>li>.g-center-pay>img:nth-child(4){
	padding: 5px;
	width: 100%;
	height: 100%;
}

/**/
.g-content>.g-content-money>.g-money-bottom1{
	width: 1278px;
	height: 400px;
	margin-top: 40px;
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
