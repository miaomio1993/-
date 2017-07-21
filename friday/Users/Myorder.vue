<template>
	<div class="z-myorder">
		<h2>我的订单</h2>
		<div class="z-cont">
			<ul class="z-cont-head">
				<li><a href="">全部</a></li>
				<li><a href="">待付款</a></li>
				<li><a href="">待发货</a></li>
				<li><a href="">待收货</a></li>
				<li><a href="">待评价</a></li>
				<li><a href="">退货/售后</a></li>
				<li><a href="">已完成/关闭</a></li>
				<li><a href="">订单回收站</a></li>
			</ul>
			<!--当没有订单的时候-->
			<div class="z-no">
				<div class="z-cont-none">
					<img src="./img/myorder1.png"/>
					<div class="z-noorder">
						<p>你还没有订单哦！</p>
						<button>去首页看看</button>
					</div>
				</div>
			</div>
			<!--当有订单的时候-->
			<div class="z-has">
				<p>
					<span> 订单号：150319690000</span>
					<span>下单日期：2015.04.09 18：06：06</span>
					<span>爱果果水果店</span>
					<span>订单状态：关闭</span>
				</p>
				<div class="z-hasorder">
					<div class="z-thing">
						<div class="z-thing-top">
							<div class="z-img">
								<img src="./img/myorder2.png"/>
								<i>云南邵通苹果</i>
							</div>
							<span>6个装</span>
							<span>¥35.0x1</span>
						</div>
						<div class="z-thing-bottom">

						</div>
					</div>
					<div class="z-price">
						<p>店铺合计：¥105.0</p>
						<em>（含运费：¥8.0）</em>
					</div>
					<div class="z-look">
						<a href="#/orderdetail" class="z-detail">查看详情</a>
						<button class="z-move" @click="move">删除订单</button>
						<a href="#/orderspeak" class="z-detail">订单评价</a>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
  export default{
      methods:{
         move:function () {
           $(".z-move").parents().find(".z-hasorder").remove()
         }
      }
  }
</script>

<style scoped>
.z-myorder{
	width: 1077px;
	border: 1px solid #e3e3e3;
}
.z-myorder>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
}
.z-cont-head{
	padding: 20px;
}
.z-cont-head>li{
	height: 28px;
	padding: 0 15px;
	display: inline-block;
	border-right: 2px solid #e3e3e3;
}
.z-cont-head>li>a{
	display: inline-block;
	text-align: center;
	padding: 0 10px;


}
.z-cont-head>li:nth-child(1) a{
	background: #F78327;
	color: white;
}
.z-cont-head>li:nth-child(8){
	border: none;
	margin-left: 100px;
	color:  #498e3d;
	text-decoration: underline;
}
.z-cont-head>li:nth-child(7){
	border: none;
}
/*当没有订单的时候*/
.z-no{
	height: 495px;
	position: relative;
	display: none;
}
.z-cont-none{
	width: 295px;
	height: 100px;
	position: absolute;
	top: -40px;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}
.z-cont-head>img{
	float: left;
}
.z-noorder{
	float: right;
	line-height: 40px;
	text-align: center;
}
.z-noorder>p{
	height: 40px;
}
.z-noorder>button{
	color: white;
	background: #F78327;
	border: none;
	outline: none;
	border-radius: 3px;
}
.z-has{
	height: 290px;
	margin: 0 20px 20px 20px;
	border: 1px solid #e3e3e3;
	/*display: none;*/
}
.z-has>p{
	height: 45px;
	background: #ECECEC;
	line-height: 45px;
	font-size: 16px;
}
.z-has>p>span{
	margin: 0 25px;

}
.z-has>p>span:nth-child(4){
	margin-left: 200px;
}
.z-hasorder{
	width: 1040px;
	height: 240px;
	display: flex;
}
.z-thing{
	width: 696px;
	height: 240px;
	float: left;
}
.z-thing-top{
	height: 120px;
	border-bottom: 1px solid #e3e3e3;
	display: flex;
	align-items: center;
}
.z-img{
	width:230px;
	height: 78px;
}
.z-img>img{
	display: inline-block;
}
.z-img>i{
	float: right;
	margin-right: 30px;
	margin-top: 30px;
}
.z-thing-top>span{
	width: 230px;
	text-align: center;
}
.z-price{
	height:160px;
	width: 206px;
	float: left;
	border-left: 1px solid #e3e3e3;
	border-right: 1px solid #e3e3e3;
	text-align: center;
	padding-top: 90px;


}
.z-look{
	height: 240px;
	width: 132px;
	float: left;
	text-align: center;
	padding-top: 90px;

}
.z-detail{
	text-decoration: underline;
	color: #498e3d;
	font-size: 14px;
	display: block;
	margin-bottom: 10px;
	margin-top: 15px;
}
.z-move{
	background: #F78327;
	color: white;
	outline: none;
	border: none;
	border-radius: 3px;


}

</style>
