<template>
	<div>
		<ul class="z-cont">
			<li>

				<p>
					<!--<i><a href="">手机验证登录</a></i>
					<i class="iconfont icon-shouji"></i>-->
				</p>
			</li>
			<li>
				<input type="number" placeholder="请输入手机号" class="userPhone"/>
				<span class="iconfont icon-duigou"></span>
			</li>
			<li>
				<p v-if="turn"><span>！</span>手机号码不正确，请重新输入</p>
			</li>
			<li>
				<input type="password" placeholder="请输入密码（6-20位号码字符）" class="passWord" />
			</li>
			<li>
				<input type="password" placeholder="请再次输入密码确认" class="repassword"/>
			</li>
			<li>
				<input type="text" placeholder="验证码" />
				<img src="./img/changepassword1.png"/>
				<a href="">看不清楚换一张</a>
			</li>
			<li>
				<input type="password" placeholder="手机验证码" />
				<button>获取验证码</button>
			</li>

			<li>
				<!--<p>
					<input type="checkbox"/>
					<span>自动登录</span>
				</p>
				<a href="">忘记密码?</a>-->
			</li>
			<li>
				<input type="checkbox" name="" class="check"/>
				<p>我已阅读并同意《礼拜五用户协议》</p>
				<!--<input type="radio" name="" value="" class="radio"/>-->
			</li>
			<li>
        <a href="#/Applyfor" v-on:click="change1">注册</a>
        <a href="#/Phoneconfirm" v-on:click="change" >登录</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
	    data(){
	       return{
            turn:false
        }
      },
		methods:{
			change:function(){
				this.$root.$emit("listen","会员登录")

			},
			change1:function(){
        if (!(/^1[34578]\d{9}$/.test($(".userPhone").val()))){
           this.turn=true
        }else {
            this.turn=false
            if (!(/^[a-zA-Z]{6,10}$/.test($(".passWord").val()))){
              alert("密码格式有误")
            }else {
                if ($(".passWord").val()!=$(".repassword").val()){
                    alert("两次密码不一致")
                }else {
                    if (!$(".check").prop("checked")){

                        alert("请先阅读礼拜五用户协议")
                    }else {
                      this.$root.$emit("listen1","会员注册")
                      var that = this
                      var userPhone1 = $(".userPhone").val();
                      var passWord1 = $(".passWord").val();
                      $.ajax({
                        url:"api/reg",
                        type:"get",
                        data:{
                          userPhone:userPhone1,
                          passWord:passWord1
                        },
                        success:function (data) {
                            alert()
                            console.log(data.err)
                          if (data.err==1){
                             window.location.href = "#/"
                          }
                        }
                      })
                    }
                }
            }
        }






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
.z-cont>li:nth-child(1)>p{
	float: right;

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
.z-cont>li:nth-child(3){
  position: absolute;
}
.z-cont>li:nth-child(4){
  margin-top: 30px;
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
.z-cont>li:nth-child(6)>input{
	width: 90px;
	margin-top: 25px;
}
.z-cont>li:nth-child(6)>img{
	vertical-align: middle;
}
.z-cont>li:nth-child(6)>a{
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
.z-cont>li:nth-child(9){
	line-height:50px;
	font-size: 14px;
	color: #666666;
	text-align: left;
	overflow: hidden;
}
.z-cont>li:nth-child(9)>input:nth-child(1){
	float: left;
	width:20px;
  height: 20px;
	margin-top:18px;
}
.z-cont>li:nth-child(9)>p{
display: inline-block;
}
.z-cont>li:nth-child(11){
	margin-left: 120px;
	margin-top: 15px;
}
</style>
