<template>
	<div>
		<div class="z-scoreorder">
			<div class="z-header">
				<h2>积分订单</h2>
				<p class="z-nowscore">当前积分：<span>240分</span></p>
			</div>
			<div class="z-has">
				<p>
					<span> 订单号：150319690000</span>
					<span>下单日期：2015.04.09 18：06：06</span>
					<span>订单状态：<i>已完成</i></span>
				</p>
				<div class="z-hasorder">
					<div class="z-thing">
						<div class="z-img">
							<img src="./img/scoreorder1.png"/>
							<i>云南邵通苹果</i>
						</div>
						<span>6个装</span>
						<span>x1</span>
					</div>
					<div class="z-price">
						<em>积分：58</em>
					</div>
					<div class="z-look">
						<a href="#/scoredetail" class="z-detail">查看详情</a>
						<button class="z-move" @click="move">删除订单</button>
					</div>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
    methods:{
		    move:function () {
            $(".z-move").parents().find(".z-hasorder").remove()
        }
    }
	}
</script>

<style scoped="">
.z-scoreorder{
	width: 1077px;
	border: 1px solid #e3e3e3;
}
.z-header{
	line-height: 60px;
	border-bottom: 1px solid #e3e3e3;
	padding-left: 20px;
	height: 60px;

}
.z-header>h2{
  font-size: 20px;
  font-weight: 400;
  float: left;
}
.z-nowscore{
	padding-right: 20px;
	float: right;
}
.z-nowscore>span{
	color:  #F78327;
}
.z-scoreorder-cont{
	margin:20px;
	border: 1px solid#e3e3e3;
}
.z-scoreorder-cont>li{
	line-height: 50px;
	display: flex;
	line-height: 50px;
	justify-content: space-around;
}
.z-scoreorder-cont>li>span{
	width: 33%;
	height: 50px;
	text-align: center;
}
.z-scoreorder-cont>li:nth-child(1){
	background: #F2F7F7;
}



.z-has{
	margin: 20px;
	border: 1px solid #e3e3e3;
	/*display: none;*/
}
.z-has>p{
	height: 45px;
	background: #ECECEC;
	line-height: 45px;
	font-size: 16px;
	display: flex;
}
.z-has>p>span{
	width: 33%;
	text-align: center;

}
.z-hasorder{
	width: 1040px;
	height:120px;
	display: flex;
}
.z-thing{
	width: 696px;
	height: 120px;
	float: left;
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
.z-thing>span{
	width: 120px;
	text-align: center;
}
.z-price{
	height:70px;
	width: 120px;
	float: left;
	border-left: 1px solid #e3e3e3;
	border-right: 1px solid #e3e3e3;
	text-align: center;
	padding-top: 50px;


}
.z-look{
	height: 80px;
	width: 102px;
	text-align: center;
	padding-top: 40px;
	padding-left: 60px;

}
.z-detail{
	text-decoration: underline;
	color: #498e3d;
	font-size: 14px;
	display:block;
	margin-bottom: 10px;

}
.z-move{
	background: #F78327;
	color: white;
	outline: none;
	border: none;
	border-radius: 3px;

}

</style>
