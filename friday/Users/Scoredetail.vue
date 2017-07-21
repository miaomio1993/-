<template>
	<div>
		<div class="z-scoredetail">
			<div class="z-header"><span>订单编号：{{num}}</span><span>订单状态：<i>待兑换</i></span> <button>立即兑换</button><button>取消订单</button> </div>
			<div class="z-cont">
				<ul class="z-costmath">
					<li><span>支付方式</span><i>{{paymath}}</i></li>
					<li><span>支付流水号</span><i>{{paynum}}</i></li>
					<li><span>下单时间</span><i>{{placetime}}</i></li>
					<li><span>支付时间</span><i>{{paytime}}</i></li>
					<li><span>发货时间</span><i>{{senttime}}</i></li>
					<li><span>收货时间</span><i>{{cometime}}</i></li>
					<li><span>订单备注</span><i>{{ordername}}</i></li>
				</ul>
				<p>收货人信息</p>
				<ul class="z-comemessage">
					<li><span>收货人姓名</span><i>{{comename}}</i></li>
					<li><span>地址</span><i>{{address}}</i></li>
					<li><span>联系方式</span><i>{{contact}}</i></li>
				</ul>
				<p>物流信息</p>
				<ul class="z-flow">
					<li><span>联系人</span><i>{{contactname}}</i></li>
					<li><span>联系方式</span><i>{{contactmath}}</i></li>
				</ul>
				<div class="z-bottom">
					<p>
						<i>爱爱水果店</i>
						<span>规格</span>
						<span>单价</span>
						<span>数量</span>
						<span>金额</span>
					</p>
					<ul class="z-fruit">
						<li v-for="item in items">
								<div>
									<img v-bind:src='item.img'/>
									<em>{{item.yunan}}</em>
									<i>{{item.bag}}</i>
								</div>
								<span>{{item.bage}}</span>
								<span>{{item.price}}</span>
								<span>{{item.num}}</span>
								<span>{{item.score}}</span>
						</li>
					</ul>
				</div>
				<h3>积分：<span>500积分</span></h3>
				<div class="z-btns">
					<button>取消订单</button>
					<button>立即兑换</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				num:15041305000006958388,
				paymath:"积分",
				paynum:4643196461647896166,
				placetime:"2016-04-03 16:11:38",
				paytime:"明天",
				senttime:"下午",
				cometime:"后天",
				ordername:"希望包裹的严实一些，不要有破损情况，谢谢",
				comename:"王敏敏",
				address:4643196461647896166,
				contact:"手机:15575981418  固定电话: 010-12548756",
				contactname:"张小哥",
				contactmath:"15575981481",
				items:[
					{
						img:require("./img/scoredetail1.png"),
						yunan:"云南石榴",
						bag:"八个装",
						bage:"8个装",
						price:"¥569",
						num:1,
						score:"50积分"

					},
					{
						img:require("./img/scoredetail1.png"),
						yunan:"云南石榴",
						bag:"八个装",
						bage:"8个装",
						price:"¥569",
						num:1,
						score:"50积分"

					},
					{
						img:require("./img/scoredetail1.png"),
						yunan:"云南石榴",
						bag:"八个装",
						bage:"8个装",
						price:"¥569",
						num:1,
						score:"50积分"

					}
				]


			}
		}
	}
</script>

<style scoped>
.z-scoredetail{
	width: 1077px;
	border: 1px solid #e3e3e3;
}
.z-header{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding:0  20px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
}
.z-header>span:nth-child(1){
	margin-right: 150px;
}
.z-header>span:nth-child(2){
	margin-right: 50px;
}
.z-header>span>i{
	color: #F78327;
}
.z-header>button{
	width: 95px;
	height: 33px;
	border-radius: 3px;
	display: inline-block;
	margin-top: 13px;
	color: white;
	font-size: 16px;
}
.z-header>button:nth-child(3){
	background: #498E3D;
	margin-left: 130px;
	/*nth-child同级关系*/
}
.z-header>button:nth-child(4){
	background: #e3e3e3;
	margin-left: 20px;
}
.z-cont{
	padding: 20px;
}
.z-cont>ul{
	background:#F2F2F2;
	border: 1px solid #e3e3e3;
	padding: 20px;
	font-size: 16px;
	line-height: 40px;
	border-radius: 3px;
}
.z-cont>ul>li>span{
	margin-right: 30px;
}
.z-cont>p{
	line-height: 60px;
	color: #498E3D;
}
.z-bottom{
	margin-top: 20px;
	border: 1px solid #e3e3e3;
	border-radius: 4px;
}
.z-bottom>p{
	padding: 0 20px;
	background: #F2F2F2;
	display: flex;
	justify-content: space-between;
	line-height: 50px;
}
.z-bottom>p>i{
	margin-right: 150px;
}
.z-bottom>ul>li{
	display: flex;
	justify-content: space-between;
	line-height: 120px;
	border-bottom: 1px solid #e3e3e3;
	padding: 0 20px;
}
.z-bottom>ul>li>div>img{
	vertical-align: middle;
	margin-right: 20px;
}
.z-cont>h3{
	text-align: right;
	line-height: 80px;
}
.z-cont>h3>span{
	color: red;
	font-size: 20px;
	font-weight: 400;
}
.z-btns{
	text-align: right;
}
.z-btns>button:nth-child(1){
	background: #e3e3e3;
	width: 150px;
	height: 50px;
	display: inline-block;
	border-radius: 3px;
	color: white;
	margin-right: 50px;
}
.z-btns>button:nth-child(2){
	background: #F78327;
	width: 150px;
	height: 50px;
	display: inline-block;
	border-radius: 3px;
	color: white;
	/*按钮的字体颜色不会继承*/
}
</style>
