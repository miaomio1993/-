<template>
		<div class="g-content">
			<div class="g-location">
				<span>您的当前位置：</span>
				<a href="">首页</a>
				<span>></span>
				<a href="">专题</a>
			</div>
			<ul class="g-goods-special">
				<li>
					<a href="#/about">
						<img src="./images/礼拜五-special.png" alt="" />
					</a>
				</li>
				<li>
					<a href="#/totalcity">
						<img src="./images/积分商城-special.png" alt="" />
					</a>
				</li>
				<li>
					<a href="#/list">
						<img src="./images/美味-special.png" alt="" />
					</a>
				</li>
			</ul>
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
	width: 1280px;
	margin: 0 auto;
}
.g-content>.g-location{
	margin-top: 20px;
	padding-left: 20px;
	padding-top: 18px;
	height: 36px;
	background-color: #f4f4f4;
}
.g-content>.g-goods-special{
	width: 1280px;
	padding-top: 20px;
}
.g-content>.g-goods-special>li{
	height: 520px;
	width: 1280px;
}
.g-content>.g-goods-special>li>img{
	width: 100%;
	height: 100%;
}

</style>
