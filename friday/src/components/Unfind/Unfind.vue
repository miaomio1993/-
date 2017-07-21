<template>
  	<div class="g-noFind">
		<div class="g-noFind-top">
			<img src="./images/4.png" alt="" />
			<img src="./images/零.png" alt="" />
			<h1><span>抱歉!</span>您访问的页面不存在</h1>
			<p>您要查看的网址可能已被删除、名称已被更改、或暂时不可用</p>
		</div>
		<div class="g-noFind-bottom">
			<a href="javascript:void(0)">返回上一页面</a>
			<a href="#/">返回网站首页</a>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Unfind',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-noFind{
	margin: 10% auto;
	width: 769px;
	height: 494px;
	text-align: center;
}
.g-noFind>.g-noFind-top{
	position: relative;
	width: 769px;
	height: 354px;
}
.g-noFind>.g-noFind-top>img:nth-child(1){
	width: 514px;
	height: 148px;
}
.g-noFind>.g-noFind-top>img:nth-child(2){
	position: absolute;
	top:0;
	left:312px;
	width: 148px;
	height: 148px;
}
.g-noFind>.g-noFind-top>h1{
	letter-spacing: 16px;
	padding-top: 57px;
	font-size: 40px;
	color:#666;
}
.g-noFind>.g-noFind-top>h1>span{
	padding-right: 24px;
}
.g-noFind>.g-noFind-top>p{
	padding-top: 57px;
	font-size: 18px;
	color:#666;
	font-weight: bolder;
}
.g-noFind>.g-noFind-bottom{
	position: relative;
	margin: 97px auto;
	width: 440px;
	height: 45px;
	font-size: 19px;
}
.g-noFind>.g-noFind-bottom>a{
	display: block;
	width: 170px;
	height: 35px;
	padding-top: 10px;
	color:white;
	border-radius: 5px;
}
.g-noFind>.g-noFind-bottom>a:nth-child(1){
	background: #f08200;
	box-shadow: 3px 0px 3px 0px lightcoral;
}
.g-noFind>.g-noFind-bottom>a:nth-child(2){
	position: absolute;
	right: 0;
	top: 0;
	background: #498e3d;
	box-shadow: 3px 0px 3px 0px green;
}

</style>
