<template>
	<div>
		<div class="z-lately">
			<h2>最近浏览</h2>
			<ul>
				<li v-for="n in 10">
					<img src="./img/lately1.png" alt="" />
					<p>新西兰佳沛黄金奇异果</p>
					<p>果肉绵密，花蜜般的甘甜百吃不厌</p>
					<p><span>¥28.8</span><i>¥40.00</i><em class="iconfont icon-gouwuche"></em></p>
					<div class="remove">x</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
.z-lately{
width: 1077px;
border: 1px solid #e3e3e3;
}	
.z-lately>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
}
.z-lately>ul{
	width: 1034px;
	padding: 15px 20px 20px 20px;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
.z-lately>ul>li{
	width: 303px;
	height: 433px;
	border: 1px solid #F2F7F7;
	border-radius: 3px;
	margin-bottom: 20px;
	text-align: center;
	position: relative;
}
.z-lately>ul>li>p{
	text-align: left;
	padding-left: 20px;
	line-height: 50px;
}
.z-lately>ul>li>p:nth-child(3){
	color: gray;
	font-size: 14px;
}
.z-lately>ul>li>p>span{
	color: red;
	padding-right: 15px;
}
.z-lately>ul>li>p>i{
	color: gray;
	font-size: 14px;
	text-decoration: line-through;
}
.z-lately>ul>li>p>em{
	color: #F78327;
	margin-left: 130px;
	font-size: 20px;
}
.z-lately>ul>li>div{
	color: white;
	height: 15px;
	width: 15px;
	border-radius: 50%;
	background: #498E3D;
	position: absolute;
	top: 5px;
	right: 5px;
	line-height: 15px;
	
}

</style>