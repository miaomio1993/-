<template>
	<div>
		<div class="z-bill">
			<h2>我的账单</h2>
			<div class="z-cont">
				<p>
					<span>操作</span>
					<span>充值金额</span>
					<span>账户余额</span>
					<span>时间</span>
				</p>
				<ul>
					<li v-for="n in 5">
						<span>充值</span>
						<span>¥1000.00元</span>
						<span>¥1200.00元</span>
						<span>2017年-04-15 17：25</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
.z-bill{
	width: 1077px;
	border: 1px solid #e3e3e3;
}	
.z-bill>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
}
.z-cont{
	margin: 20px;
	border: 1px solid #e3e3e3;
}
.z-cont>p{
	display: flex;
	justify-content: space-around;
	background: #f2f2f2;
	line-height: 48px;
	text-align: center;
}
.z-cont>p>span{
	width: 250px;
}
.z-cont>ul>li{
	display: flex;
	justify-content: space-around;
	line-height: 48px;
	border-top: 1px solid #e3e3e3;
}
.z-cont>ul>li>span{
	width: 250px;
	text-align: center;
}
.z-cont>ul>li>span:nth-child(3){
	color: #F78327;
}
</style>