<template>
	<div>
		<div class="z-mymoney">
			<h2>账户余额：<span>¥20.0</span></h2>
			<div class="z-cont">
				<p>请选择充值金额：</p>
				<span>500元</span><span>1000元</span><span>2000元</span>			
				<i>充值有礼</i>
				<ul>
					<li>
						<p>充500元送：</p>
						<div>
							<img src="./img/mymoney.png" alt="" />
							<p class="z-gua">新疆哈密瓜25kg</p>
							<p class="z-cost">价值：50</p>
						</div>
						
					</li>
				</ul>
				<button class="z-chongzhi">立即充值</button>
			</div>
		</div>	
	</div>
</template>

<script>
</script>

<style scoped>
.z-mymoney{
width: 1077px;
border: 1px solid #e3e3e3;
}	
.z-mymoney>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
}
.z-mymoney>h2>span{
	color: #F78327;
}
.z-cont{
	height: 524px;
	padding: 20px;
}
.z-cont>p{
	margin-bottom: 15px;
}
.z-cont>span{
	width: 24px;
	height: 35px;
	border: 1px solid #e3e3e3;
	margin-right: 50px;
	padding: 0 20px;
}
.z-cont>i{
	display: block;
	font-size: 2;
	color: #FF7F00;
	line-height: 60px;
}
.z-cont>ul>li{
	height: 194px;
	width: 350px;
	border: 1px solid #e3e3e3;
	padding: 15px;
}
.z-cont>ul>li>div>img{
	float: left;
	width: 350px;
}
.z-cont>ul>li>div{
	position: relative;
}
.z-gua{
	position: absolute;
	top: 60px;
	right: 40px;
}
.z-cost{
	position: absolute;
	top: 100px;
	right: 60px;
}
.z-chongzhi{
	width: 155px;
	height: 50px;
	border: none;
	outline: none;
	color: white;
	background: #F78327;
	border-radius: 3px;
	margin-top: 30px;
}

</style>