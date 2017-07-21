<template>
	<div>
		<ul class="z-cont">
			<li>
				<span>
					重置密码
				</span>
			</li>
			<li>
				<input type="number" placeholder="请输入手机号" />
				<span class="iconfont icon-duigou"></span>
			</li>
			<li>
				<p><span>！</span>手机号码不正确，请重新输入</p>
			</li>
			<li>
				<input type="text" placeholder="验证码" />
				<img src="./img/changepassword1.png"/>
				<a href="">看不清楚换一张</a>
			</li>
			<li>
				<input type="password" placeholder="请输入密码（6-20位号码字符）" />
			</li>
			<li>
				<input type="password" placeholder="请再次输入密码确认" />
			</li>

			<li>
				<input type="password" placeholder="手机验证码" />
				<button>获取验证码</button>
			</li>

			<li>
			</li>
			<li>
			</li>
			<li>
				<a href="#/phoneconfirm" v-on:click="change">登录</a>
				<a href="#/applyfor" v-on:click="change1">会员注册</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		methods:{
			change:function(){
				this.$root.$emit("listen","会员登录")

			},
			change1:function(){
				this.$root.$emit("listen1","会员注册")
			},
			change2:function(){
				this.$root.$emit("listen2","重置密码")
			}
		}
	}
</script>

<style scoped>
.z-cont{
	position: absolute;
	left:1211px;
	top: 0;
	width: 310px;
	height: 469px;
	background: #FFFFFF;
	border: 1px solid #e3e3e3;
	padding:20px 40px 10px 40px;
}
/*.z-cont>li{
	line-height: 50px;
}*/
.z-cont>li:nth-child(1){
	line-height: 45px;
	overflow: hidden;
}
.z-cont>li:nth-child(1)>span{
	font-size:25px;
}
.z-cont>li:nth-child(1)>p>i{
	color: #498E3D;
	display: inline-block;
	font-weight:400;
}
.z-cont>li>input{
	width: 271px;
	height:5px;
	background: #F2F2F2;
	border: 1px solid #e3e3e3;
	padding: 20px;
}
.z-cont>li:nth-child(2){
	position: relative;
}
.z-cont>li:nth-child(2)>span{
	position: absolute;
	right: 20px;
	top: 15px;
	color: #498E3D;
}
.z-cont>li:nth-child(3)>	p{
	color: red;
	font-size: 12px;
	line-height: 30px;
}
.z-cont>li:nth-child(3)>p>span{
	color: white;
	width: 11px;
	height: 15px;
	border-radius: 50%;
	line-height: 15px;
	padding-left: 4px;
	background: red;
	display: inline-block;

}
.z-cont>li:nth-child(5){
	margin-top: 25px;
}
.z-cont>li:nth-child(6){
	margin-top: 25px;
}
.z-cont>li:nth-child(4)>input{
	width: 90px;
}
.z-cont>li:nth-child(4)>img{
	vertical-align: middle;
}
.z-cont>li:nth-child(4)>a{
	color: #F78327;
	font-size: 12px;
}
.z-cont>li:nth-child(7){
	margin-top: 25px;
	position: relative;
}
.z-cont>li:nth-child(7)>button{
	position: absolute;
	right: 10px;
	top: 6px;
	width: 105px;
	height: 34px;
	color: white;
	background: #498E3D;
}
.z-cont>li:nth-child(8){
	margin: 10px 0;
}
.z-cont>li:nth-child(8)>a{
	color: #F78327;
	font-size: 12px;
	float: right;
	text-decoration: underline;
}
.z-cont>li:nth-child(8)>p{
	display: inline-block;
}
.z-cont>li:nth-child(10){
	margin-top:25px;
}
.z-cont>li:nth-child(10)>a{
	width: 138px;
	height: 45px;
	color: white;
	border-radius: 4px;
  display: inline-block;
  line-height: 45px;
  text-align: center;
}
.z-cont>li:nth-child(10)>a:nth-child(1){
	background: #F78327;
}
.z-cont>li:nth-child(10)>a:nth-child(2){
	background: #498e3d;
	float: right;
}
</style>
