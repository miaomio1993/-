<template>
	<div>
		<div class="z-myscore">
			<h2>我的积分</h2>
			<p class="z-nowscore">当前积分：<span>240分</span></p>
			<ul class="z-myscore-cont">
				<li><span>积分日期</span><span>变动</span><span>来源</span></li>
				<li><span>2015-04-05</span><span>-100</span><span>消费赠送</span></li>
			</ul>
		</div>
		
	</div>
</template>

<script>
</script>

<style scoped="">
.z-myscore{
	width: 1077px;
	border: 1px solid #e3e3e3;
}	
.z-myscore>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
}
.z-nowscore{
	height: 60px;
	line-height: 60px;
	padding-left: 20px;
}
.z-nowscore>span{
	color:  #F78327;
}
.z-myscore-cont{
	margin: 0 20px 20px 20px;
	border: 1px solid#e3e3e3;
}
.z-myscore-cont>li{
	line-height: 50px;
	display: flex;
	line-height: 50px;
	justify-content: space-around;
}
.z-myscore-cont>li>span{
	width: 33%;
	height: 50px;
	text-align: center;
}
.z-myscore-cont>li:nth-child(1){
	background: #F2F7F7;
}
</style>