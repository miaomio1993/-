<template>
	<div>
		<div class="z-changepassword">
			<h2>修改密码</h2>	
			<div class="z-password">
				<input type="text" placeholder="" />
				<input type="text" placeholder="请输入密码（6-20位号码字符）"/>
				<input type="text" placeholder="请再次输入密码确认"/>
				<div class="z-yanzhengma">
					<input type="text" placeholder="验证码"/>
					<img src="./img/changepassword1.png" alt="" />
					<span>看不清换一张</span>
				</div>
				<div class="z-gain">
					<input type="text" placeholder="手机验证码"/>
					<button>获取验证码</button>
				</div>
				<button class="z-submit">提交修改</button>
			</div>
		</div>
		
	</div>
</template>

<script>
</script>

<style scoped>
.z-changepassword{
width: 1077px;
border: 1px solid #e3e3e3;
}	
.z-changepassword>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
}
 .z-password{
	height: 522px;
	margin: 20px;
}
 .z-password>input{
 	height: 45px;
 	width: 308px;
 	display: block;
 	margin-bottom: 20px;
 	padding-left: 15px;
 	background: #e3e3e3;
 	outline: none;
 	border: 1px solid #F2F7F7;
 }
 .z-yanzhengma{
 	height: 45px;
 	width: 308px;
 	display: flex;
 	justify-content: space-between;
 	margin-bottom: 20px;
 }
 .z-yanzhengma>input{
 	width: 100px;
 	height: 45px;
 	padding-left: 15px;
 	background: #e3e3e3;
 	outline: none;
 	border: 1px solid #F2F7F7;
 }
 .z-yanzhengma>img{
 	height: 45px;
 	width: 80px;
 }
 .z-yanzhengma>span{
 	line-height: 45px;
 	color: #498e3d;
 }
 .z-gain{
 	height: 45px;
 	width: 308px;
 	position: relative;
 }
 .z-gain>input{
 	height: 45px;
 	width: 308px;
 	display: block;
 	margin-bottom: 20px;
 	padding-left: 15px;
 	background: #e3e3e3;
 	outline: none;
 	border: 1px solid #F2F7F7;
 }
 .z-gain>button{
 	width: 105px;
 	height: 30px;
 	position: absolute;
 	top: 10px;
 	right: 0;
 	background: #498e3d;
 	border: none;
 	outline: none;
 	color: white;
 }
 .z-submit{
 	width: 150px;
 	height: 50px;
 	border: none;
 	outline: none;
 	color: white;
 	background: #F78327;
 	margin-top: 20px;
 	border-radius: 4px;
 }
</style>