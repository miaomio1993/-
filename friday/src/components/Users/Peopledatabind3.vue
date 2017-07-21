<template>
	<div>
		<div class="z-bind">
			<h2>换绑手机</h2>
			<ul class="z-cont">
				<li>
					<p>验证原手机号<span></span><i></i></p>
					<p>验证原手机号<span></span><i></i></p>
					<p>验证原手机号</p>
				</li>
				<li>
					<span class="iconfont icon-duigou"></span>
					<p>恭喜你成功修改</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
.z-bind{
width: 1077px;
border: 1px solid #e3e3e3;
}	
.z-bind>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
}
.z-cont{
	height: 483px;
	padding: 40px;
}
.z-cont>li:nth-child(1)>p{
	width: 236px;
	height: 42px;
	background: #498E3D;
	color: white;
	text-align: center;
	display: inline-block;
	line-height: 42px;
	position: relative;
}
.z-cont>li:nth-child(1)>p:nth-child(2){
	background:#e3e3e3;
	color: black;
}
.z-cont>li:nth-child(1)>p:nth-child(1){
	background:#e3e3e3;
	color: black;
}
.z-cont>li:nth-child(1)>p:nth-child(3){
	background:#498E3D;
	color: white;
}
.z-cont>li:nth-child(1)>p:nth-child(2)>span{
	border-bottom: 21px solid transparent;
	border-top: 21px solid transparent;
	border-left: 21px solid #e3e3e3;
	border-right: 21px solid transparent;
}
.z-cont>li:nth-child(1)>p:nth-child(1)>span{
	border-bottom: 21px solid transparent;
	border-top: 21px solid transparent;
	border-left: 21px solid #e3e3e3;
	border-right: 21px solid transparent;
}
.z-cont>li:nth-child(1)>p>span{
	display: inline-block;
	width: 0;
	height: 0;
	border-bottom: 21px solid transparent;
	border-top: 21px solid transparent;
	border-left: 21px solid #498E3D;
	border-right: 21px solid transparent;
	position: absolute;
	left: 236px;
	top: 0;
	z-index: 10;
}
.z-cont>li:nth-child(1)>p>i{
	display: inline-block;
	width: 0;
	height: 0;
	border-bottom: 28px solid transparent;
	border-top: 28px solid transparent;
	border-left: 28px solid white;
	border-right: 28px solid transparent;
	position: absolute;
	left: 236px;
	top: -7px;
	z-index: 2;
}
.z-cont>li:nth-child(2){
	color: #F78327;
	margin: 150px;
}
.z-cont>li:nth-child(2) p{
	display: inline-block;
}
</style>