<template>
	<div>
		<ul class="z-cont">
			<li>
				<span>登录</span>
				<p>
					<i><a href="#/numberpassword" @click="change3">账号密码登录</a></i>
					<i class="iconfont icon-shouji"></i>
				</p>
			</li>
			<li>
				<input type="number" placeholder="请输入手机号" class="userPhone" @blur="change5"/>
				<span class="iconfont icon-duigou" v-if="turn5"></span>
			</li>
			<li>
				<p v-if="turn"><span >！</span>手机号码不正确，请重新输入</p>
			</li>
			<li>
				<input type="text" placeholder="验证码"  class="yanzhengma"/>
        <div>
          <span :style="'transform:translate('+num2+'px) rotate('+num1+'deg);color:'+color1+';font-weight:'+randnum1">{{first}}</span><span :style="'transform:translate('+num4+'px) rotate('+num3+'deg);color:'+color2+';font-weight:'+randnum2">{{two}}</span><span :style="'transform:translate('+num6+'px) rotate('+num5+'deg);color:'+color3+';font-weight:'+randnum3">{{three}}</span><span :style="'transform:translate('+num8+'px) rotate('+num7+'deg);color:'+color4+';font-weight:'+randnum4">{{four}}</span>
        </div>
        <a href="javascript:void(0)" @click="submit1">看不清楚换一张</a>
			</li>
			<li>
				<input type="password" placeholder="手机验证码" />
				<button>获取验证码</button>
			</li>

			<li>
				<p>
					<input type="checkbox"/>
					<span>自动登录</span>
				</p>
				<a href="#/forgetpassword" v-on:click="change2">忘记密码?</a>
			</li>
			<li>
        <a href="#/phoneconfirm" v-on:click="change">会员登录</a>
        <a href="#/applyfor" v-on:click="change1">注册</a>
			</li>
			<li>
				<p>提示：未注册用户将直接注册成为礼拜五用户</p>
				<span></span>
				<i>用合作网站登录</i>
			</li>
			<li>
				<span class="iconfont icon-weixin-"></span>
				<span class="iconfont icon-qq"></span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
	    data(){
	      return{
	          turn:false,
            turn5:false,
          first:parseInt(Math.random(0,1)*10),
          two:parseInt(Math.random(0,1)*10),
          three:parseInt(Math.random(0,1)*10),
          four:parseInt(Math.random(0,1)*10),
          num1:parseInt(Math.random(0,1)*120),
          num2:parseInt(Math.random(0,1)*5),
          num3:parseInt(Math.random(0,1)*100),
          num4:parseInt(Math.random(0,1)*5),
          num5:parseInt(Math.random(0,1)*80),
          num6:parseInt(Math.random(0,1)*5),
          num7:parseInt(Math.random(0,1)*60),
          num8:parseInt(Math.random(0,1)*5),
          color1:"",
          color2:"",
          color3:"",
          color4:"",
          randnum1:parseInt(Math.random(0,1)*900),
          randnum2:parseInt(Math.random(0,1)*900),
          randnum3:parseInt(Math.random(0,1)*900),
          randnum4:parseInt(Math.random(0,1)*900)
        }
      },
    created:function () {
      this.color1=this.randomColor()
      this.color2=this.randomColor()
      this.color3=this.randomColor()
      this.color4=this.randomColor()
    }
    ,
		methods:{
      randomNumber:function (a,b) {
        return parseInt(Math.random()*(b-a+1)+a)
      },
      randomColor:function () {
        return "rgb("+this.randomNumber(0,255)+","+this.randomNumber(0,255)+","+this.randomNumber(0,255)+")"
      },
      submit1:function () {
        this.first=parseInt(Math.random(0,1)*10);
        this.two=parseInt(Math.random(0,1)*10);
        this.three=parseInt(Math.random(0,1)*10);
        this.four=parseInt(Math.random(0,1)*10);
        this.num1=parseInt(Math.random(0,1)*120);
        this.num2=parseInt(Math.random(0,1)*5);
        this.num3=parseInt(Math.random(0,1)*100);
        this.num4=parseInt(Math.random(0,1)*5);
        this.num5=parseInt(Math.random(0,1)*80);
        this.num6=parseInt(Math.random(0,1)*5);
        this.num7=parseInt(Math.random(0,1)*60);
        this.num8=parseInt(Math.random(0,1)*5);
        this.color1=this.randomColor();
        this.color2=this.randomColor();
        this.color3=this.randomColor();
        this.color4=this.randomColor();
        this.randnum1=parseInt(Math.random(0,1)*900);
        this.randnum2=parseInt(Math.random(0,1)*900);
        this.randnum3=parseInt(Math.random(0,1)*900);
        this.randnum4=parseInt(Math.random(0,1)*900)

      },
			change:function(){
          var that=this;
          var yanzhengma=this.first+""+this.two+this.three+this.four
        if (!(/^1[34578]\d{9}$/.test($(".userPhone").val()))) {
          this.turn = true
        }else{
			this.$root.$emit("listen","会员登录")

        $.ajax({
            url:"api/confirm",
            type:"get",
            data:{
              userPhone: $(".userPhone").val()
            },
            success:function (data) {
                if (data.err==1){
                    if($(".yanzhengma").val()==yanzhengma){
                      localStorage.userPhone = $(".userPhone").val();
                      window.location.href = "#/users"
                      that.$root.$emit("userReg","1")
                    }else {
                       alert("验证码有误")
                    }

                }else {
                    alert("不存在此号码")
                }
            }
        })

			}},
			change1:function(){
				this.$root.$emit("listen1","会员注册")
			},
			change2:function(){
				this.$root.$emit("listen2","重置密码")
			},
			change3:function(){
				this.$root.$emit("listen2","会员登录")
			},
/**********************/
      change5:function () {

        if ((/^1[34578]\d{9}$/.test($(".userPhone").val()))) {
          this.turn5 = true
        } else{
          this.turn5 = false
          alert("手机号有误")
      }

      }
/***************************/
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
  position: relative;
}
.z-cont>li:nth-child(3)>	p{
	color: red;
	font-size: 12px;
	line-height: 30px;
  position: absolute;
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
.z-cont>li:nth-child(4){
  margin-top: 30px;
}
.z-cont>li:nth-child(4)>input{
	width: 90px;
}
.z-cont>li:nth-child(5)>input{
	margin-top: 30px;

}
.z-cont>li:nth-child(5){
	position: relative;
}
.z-cont>li:nth-child(5)>button{
	position: absolute;
	right: 10px;
	top: 37px;
	width: 105px;
	height: 34px;
	color: white;
	background: #498E3D;
}
.z-cont>li:nth-child(4)>img{
	vertical-align: middle;
}
.z-cont>li:nth-child(4)>a{
	color: #F78327;
	font-size: 12px;
}
.z-cont>li:nth-child(6){
	margin: 15px 0;
}
.z-cont>li:nth-child(6)>a{
	color: #F78327;
	font-size: 12px;
	float: right;
	text-decoration: underline;
}
.z-cont>li:nth-child(6)>p{
	display: inline-block;
}
.z-cont>li:nth-child(7)>a{
	width: 138px;
	height: 45px;
	color: white;
	border-radius: 4px;
  display: inline-block;
  line-height: 45px;
  text-align: center;
}
.z-cont>li:nth-child(7)>a:nth-child(1){
	background: #F78327;
}
.z-cont>li:nth-child(7)>a:nth-child(2){
	background: #498e3d;
	float: right;
}
.z-cont>li:nth-child(8){
	line-height: 50px;
	font-size: 12px;
	color: #666666;
	text-align: center;
	border-bottom: 1px dotted #666666;
	position: relative;
}
.z-cont>li:nth-child(8)>span{
	position: absolute;
	/*bottom: -25px;*/
	left: 100px;
	background: #FFFFFF;
	display: inline-block;
	width: 130px;
	height: 2px;

}
.z-cont>li:nth-child(8)>i{
	position: absolute;
	bottom: -25px;
	left: 110px;
	font-size: 16px;
	font-weight: 300;
}
.z-cont>li:nth-child(9){
	margin-left: 140px;
	margin-top: 20px;
}
.z-cont>li:nth-child(9)>span{
	font-size: 30px;
}
.z-cont>li:nth-child(9)>span:nth-child(1){
	color:#00CE31 ;
}
.z-cont>li:nth-child(9)>span:nth-child(2){
	color:#3AAEE7;
}
.z-cont>li:nth-child(4)>div{
  display: inline-block;
  position: relative;
  height: 34px;
  width: 79px;
  background-image:url("./img/changepassword4.jpg");
  background-size: 100% 100%;
  vertical-align: middle;
}
.z-cont>li:nth-child(4)>div>span{
  color: white;
  padding: 0 5px;
  line-height: 34px;
  opacity: 0.8;
  display: inline-block;
}
</style>
