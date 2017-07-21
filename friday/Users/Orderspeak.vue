<template>
	<div>
		<div class="z-orderspeak">
			<h2>订单评价</h2>
		</div>
		<ul class="z-cont">
			<li v-for="n in 3">
				<div class="z-img">
					<img src="./img/orderspeak1.png" alt="" />
					<p>珍哼 南非进口红心葡萄柚子 西柚柚子</p>
				</div>
				<div class="z-worth">
					<p><span>商品评分</span><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i></p>
					<p><span>评价商品</span>
						<textarea name="" placeholder="商品评价，最少10个字，最多50个字"></textarea>
					</p>
					<p>
						<span>晒图片</span>
						<em>+</em>
						<em>+</em>
						<em>+</em>
						<em>+</em>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
.z-orderspeak{
	width: 1077px;
	border: 1px solid #e3e3e3;
}	
.z-orderspeak>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
}
.z-cont{
	padding: 0 20px 20px 20px;
}
.z-cont>li{
	border-bottom: 1px solid #e3e3e3;
	padding-bottom: 20px;
	overflow: hidden;
	padding-top: 40px;
}
.z-img{
	float: left;
}
.z-img>P{
	line-height: 60px;
}
.z-worth{
	float: right;
	width: 680px;
}
.z-worth>p{
	margin-bottom: 20px;
}
.z-worth>p>span{
	margin-right: 15px;
}
.z-worth>p>i{
	margin-right: 8px;
	color: #e3e3e3;
}
.z-worth>p>i:nth-child(2){
	color: #F78327;
}
.z-worth>p>i:nth-child(3){
	color: #F78327;
}
.z-worth>p>i:nth-child(4){
	color: #F78327;
}
.z-worth>p>textarea{
	width: 568px;
	height: 130px;
	display: inline-block;
	resize: none;
	margin-left:80px;
	padding: 15px;
	margin-top: -20px;
}
.z-worth>p>em{
	width: 60px;
	height: 60px;
	color: white;
	background: #f2f2f2;
	display: inline-block;
	text-align: center;
	line-height: 60px;
	font-size:40px;
	margin-left: 10px;
	
}
</style>