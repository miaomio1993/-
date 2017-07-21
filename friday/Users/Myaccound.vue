<template>
<div>
	<div class="z-m-head">
		<div class="z-m-l">
			<img src="./img/myaccound2.png"/>
			<p>您好，<span>136****2356</span></p>
			
		</div>
		<ul>
			<li>
				<p>当前积分</p>
				<i>124</i>
			</li>
			<li>
				<p><a href="#/bill">我的钱包</a></p>
				<i>¥1220.0</i>
			</li>
			<li>
				<p><a href="#/mymoney">充值有礼>></a></p>
				<i><a href="#/cardchange">充值卡兑换>></a></i>
			</li>
		</ul>
		
	</div>
	<div class="z-m-food">
		<img src="./img/myaccount.png"/>
		<img src="./img/myaccound4.png"/>
		<img src="./img/myaccound3.png"/>
		<img src="./img/myaccound5.png"/>
		<img src="./img/myaccound7.png"/>
		<img src="./img/myaccound6.png"/>
		<img src="./img/myaccound8.png"/>
	</div>
</div>	
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.z-m-head{
		width: 1014px;
		border: 1px solid #e3e3e3;
		height: 170px;
		padding: 20px 40px 30px 23px;
		overflow:hidden ;
		background-image: url(img/myaccound9.png);
		margin-bottom: 20px;
	}
	.z-m-l{
		float: left;
		width: 340px;
		height: 125px;
		text-align: center;
		vertical-align: middle;
		margin-top: 22.5px;
	}
	.z-m-l>img{
		float: left;
	}
	.z-m-l>p{
		display: inline-block;
		float: right;
		line-height: 125px;
	}
	.z-m-l>p>span{
		color: goldenrod;
	}
	.z-m-head>ul{
		float: right;
		width: 300px;
		height: 80px;
		margin: 30px 0;
		display: inline-block;
		/*overflow: hidden;*/
	}
	.z-m-head>ul>li{
		float:left;
		line-height:80px ;
		margin-right: 20px;
	}
	.z-m-head>ul>li>p{
		height: 30px;
	}
	.z-m-head>ul>li>i{
		color: darkgoldenrod;
		font-size: 14px;
	}
	.z-m-food{
		width: 1079px;
		height: 378px;
		position: relative;
	}
	.z-m-food>img:nth-child(2){
		position: absolute;
		top: 80px;
		left: 270px;
	}
	.z-m-food>img:nth-child(3){
		position: absolute;
		top: 90px;
		left: 280px;
	}
	.z-m-food>img:nth-child(4){
		position: absolute;
		top: 120px;
		left: 330px;
	}
	.z-m-food>img:nth-child(5){
		position: absolute;
		top:200px;
		left: 330px;
	}
	.z-m-food>img:nth-child(6){
		position: absolute;
		top:220px;
		left: 350px;
	}
	.z-m-food>img:nth-child(7){
		position: absolute;
		top:270px;
		left: 330px;
	}
</style>