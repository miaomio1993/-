<template>
 	<div class="g-content">
		<!--您的当前位置-->
			<div class="g-location">
					<span>您的当前位置：</span>
					<a href="">全部商品</a>
					<span>></span>
					<a href="">新鲜水果</a>
			</div>
			<!--商品导航栏-->
			<div class="g-nav">
				<div class="g-nav-top">
					<span>一级分类：</span>
					<a href="">全部</a>
					<a href="" class="g-active1">新鲜水果</a>
					<a href="">田园蔬菜</a>
					<a href="">肉类家禽</a>
					<a href="">海鲜水产</a>
					<a href="">优选食材</a>
					<a href="">零食酒水</a>
					<a href="">蛋奶速食</a>
					<a href="">全球代购</a>
				</div>
				<div class="g-nav-bottom">
					<span>二级分类：</span>
					<a href="" class="g-active2">全部</a>
					<a href="">水果礼盒</a>
					<a href="">进口水果</a>
					<a href="">有机水果</a>
					<a href="">国产水果</a>
				</div>
			</div>
			<!--商品排序栏-->
			<div class="g-order">
				<div class="g-left">
					<span>排序：</span>
					<button class="active1">销量</button>
					<button>价格从低到高</button>
					<button>价格从高到底</button>
					<button>评分最高</button>
				</div>
				<div class="g-right">
					<span>筛选：</span>
					<button class="active2">全部</button>
					<button>全国</button>
					<button>同城</button>
					<button>次日达</button>
				</div>
			</div>
			<!--商品列表栏-->
			<div class="g-goods">
				<ul>
					<li >
						<a href="#/detail">
							<img src="./img/水果1.png" alt="" />
							<h6>新西兰佳沛黄金奇异果</h6>
							<span>果肉绵密、花蜜般的甘甜百吃不厌</span>
						</a>
						<div class="g-goods-price">
							<span class="g-price-now">￥28.80</span>
							<span class="g-price-old">￥40.00</span>
							<span class="iconfont icon-gouwuche"></span>
						</div>
					</li>
					<li >
						<a href="#/detail">
							<img src="./img/水果2.png" alt="" />
							<h6>新西兰佳沛黄金奇异果</h6>
							<span>果肉绵密、花蜜般的甘甜百吃不厌</span>
						</a>
						<div class="g-goods-price">
							<span class="g-price-now">￥28.80</span>
							<span class="g-price-old">￥40.00</span>
							<span class="iconfont icon-gouwuche"></span>
						</div>
					</li>
					<li >
						<a href="#/detail">
							<img src="./img/水果3.png" alt="" />
							<h6>新西兰佳沛黄金奇异果</h6>
							<span>果肉绵密、花蜜般的甘甜百吃不厌</span>
						</a>
						<div class="g-goods-price">
							<span class="g-price-now">￥28.80</span>
							<span class="g-price-old">￥40.00</span>
							<span class="iconfont icon-gouwuche"></span>
						</div>
					</li>
					<li >
						<a href="#/detail">
							<img src="./img/水果4.png" alt="" />
							<h6>新西兰佳沛黄金奇异果</h6>
							<span>果肉绵密、花蜜般的甘甜百吃不厌</span>
						</a>
						<div class="g-goods-price">
							<span class="g-price-now">￥28.80</span>
							<span class="g-price-old">￥40.00</span>
							<span class="iconfont icon-gouwuche"></span>
						</div>
					</li>
				</ul>
			</div>
			<!--底部页面跳转部分-->
			<div class="g-pages">
				<!--左边跳转栏-->
				<div class="g-left">
					<ul class="g-pagination">
						<li class="g-disabled">
							<span>上一页</span>
						</li>
						<li class="g-ctive">
							<span>1</span>
						</li>
						<li><a href="">2</a></li>
						<li><a href="">下一页</a></li>
					</ul>
				</div>
				<!--右边跳转栏-->
				<div class="g-right">
					<ul class="g-jump">
						<li>
							<span>共2页&nbsp;到第</span>
							<input type="text" class="g-jump-num" value="1"/>
							<span>页</span>
							<a href="javascript:void(0)">确定</a>
						</li>
					</ul>
				</div>
			</div>
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
/*中间内容*/
.g-content{
	width: 1280px;
	margin: 0 auto;
}
/*您的位置*/
.g-content>.g-location{
  margin-top: 20px;
	padding-left: 20px;
	padding-top: 18px;
	height: 36px;
	background-color: #f4f4f4;
}
/*商品导航栏*/
.g-nav{
	width: 1280px;
	height: 114px;
}
.g-nav>.g-nav-top,.g-nav>.g-nav-bottom{
	height: 56px;
	border-bottom:1px solid gray;
}
.g-nav>.g-nav-top>a,.g-nav>.g-nav-bottom>a{
	display: inline-block;
	margin: 10px 5px;
	padding: 5px 10px;
}
.g-nav>.g-nav-top>a:hover,.g-nav>.g-nav-bottom>a:hover{
	background-color: #498e3d;
	color:white;
}
.g-nav>.g-nav-top>.g-active1,.g-nav>.g-cate-bottom>.g-active2{
	background-color: #498e3d;
	color:white;
}
/*商品排序栏*/
.g-content>.g-order{
	position: relative;
	padding-top: 20px;
	height: 24px;
	padding-bottom: 26px;
}
/*商品排序栏左*/
.g-order>.g-left{
	position: absolute;
	height: 26px;
	color:#333;
}
.g-order>.g-left>span{
	display: inline-block;
	padding:1px 4px 3px 1px;
}
.g-order>.g-left>button{
	display: inline-block;
	margin-left: 20px;
	padding:2px 14px;
	font-size: 14px;
	background-color: #fff;
	border:1px solid gray;
}
.g-order>.g-left>.active1{
	border:1px solid #498e3d;
	color:#498e3d;
}
/*商品排序栏右*/
.g-order>.g-right{
	position: absolute;
	top:20px;
	right: 0;
}
.g-order>.g-right>span{
	display: inline-block;
	padding:1px 4px 3px 0px;
}
.g-order>.g-right>button{
	display: inline-block;
	margin-left: 20px;
	padding:2px 4px;
	font-size: 14px;
	background-color: #fff;
	border:1px solid gray;
}
.g-order>.g-right>.active2{
	background-color: #498e3d;
	color:white;
}
/*商品列表栏*/
.g-goods{
	position: relative;
	width: 1280px;
	overflow: hidden;
}
.g-goods>ul{
	width: 1500px;
}
.g-goods>ul>li{
	float:left;
	width: 303px;
	height: 431px;
	margin:6px 20px 20px 0px;
	border:1px solid gray;
	border-radius: 3px;
}
.g-goods>ul>li>a{
	height: 364px;
}
.g-goods>ul>li>a>img{
	height: 314px;
	width: 303px;
	border-radius: 3px;
}
.g-goods>ul>li>a>h6{
	font-size: 16px;
	color:red;
	padding-left: 30px;
}
.g-goods>ul>li>a>span{
	display:block;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 30px;
	font-size: 12px;
	color:#adadad;
}
.g-goods>ul>li>.g-goods-price{
	position: relative;
	height: 34px;
	margin-bottom:20px;
}
/*商品新老价格部分*/
ul>li>.g-goods-price>.g-price-now{
	font-size: 20px;
	color:#ff5757;
	padding-left: 30px;
}
ul>li>.g-goods-price>.g-price-old{
	padding-left: 10px;
	text-decoration: line-through;
}
ul>li>.g-goods-price>.icon-gouwuche{
	position: absolute;
	top: 0;
	right: 20px;
	color:#f08200;
	font-size: 30px;
}
/*页面跳转部分*/
.g-pages{
	position: relative;
	width: 1280px;
	padding-top: 20px;
	padding-bottom: 20px;
	height: 34px;
	text-align: center;
}
.g-pages>.g-left,.g-pages>.g-right{
	width: 640px;
}
.g-pages>.g-left>.g-pagination{
	position: absolute;
	top: 20px;
	right:640px;
}
/*左边列表页*/
.g-left>.g-pagination>li{
	display: inline-block;
	font-size: 14px;
	padding: 6px 12px;
	margin: 0px 5px;
	border:1px solid gray;
	border-radius: 5px;
}
.g-pages>.g-right>.g-jump{
	position: absolute;
	top: 15px;
	left: 640px;
}
/*右边列表页*/
.g-right>.g-jump>li{
	display: inline-block;
	font-size: 18px;
	padding: 6px 12px;
	margin: 0px 5px;
	border-radius: 5px;
}
.g-right>.g-jump>li>input{
	padding: 6px 5px;
	width: 30px;
	font-size: 16px;
	margin: 0px 5px;
}
.g-right>.g-jump>li>a{
	padding: 6px 12px;
	width: 30px;
	margin-left: 10px;
	border-radius: 5px;
	color:white;
	background-color: green;
}
</style>
