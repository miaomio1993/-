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
					<input type="text" name="" id="" value="" class="userPhone" placeholder="请输入原手机号"/>
				</li>
				<li>
					<input type="text"  placeholder="验证码" class="yanzhengma"/>
          <div>
            <span :style="'transform:translate('+num2+'px) rotate('+num1+'deg);color:'+color1+';font-weight:'+randnum1">{{first}}</span><span :style="'transform:translate('+num4+'px) rotate('+num3+'deg);color:'+color2+';font-weight:'+randnum2">{{two}}</span><span :style="'transform:translate('+num6+'px) rotate('+num5+'deg);color:'+color3+';font-weight:'+randnum3">{{three}}</span><span :style="'transform:translate('+num8+'px) rotate('+num7+'deg);color:'+color4+';font-weight:'+randnum4">{{four}}</span>
          </div>
					<button  @click="submit">看不清换一张</button>
				</li>
				<li>
					<input type="text" placeholder="输入密码验证身份"/>
				</li>
				<li>
					<a href="javascript:void (0)" @click="change">提交验证</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
  export default{
      data(){
          return{
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
          submit:function () {
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
            alert("输入号码有误")
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
                    window.location.href = "#/peopledatabind2"
                    that.$root.$emit("userReg","1")
                  }else {
                    alert("验证码有误")
                  }

                }else {
                  alert("不存在此号码")
                }
              }
            })

          }}
      }
  }
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
.z-cont>li:nth-child(1)>p:nth-child(3){
	background:#e3e3e3;
	color: black;
}
.z-cont>li:nth-child(1)>p:nth-child(2)>span{
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
/***********************************/
.z-cont>li:nth-child(3)>div{
  display: inline-block;
  position: relative;
  height: 34px;
  width: 79px;
  background-image: url("./img/changepassword4.jpg");
  background-size: 100% 100%;
  vertical-align: middle;
}
.z-cont>li:nth-child(3)>div>span{
  color: white;
  padding: 0 5px;
  line-height: 34px;
  opacity: 0.8;
  display: inline-block;
}
/*.z-cont>li:nth-child(3)>div>span:nth-child(1){*/
  /*display: inline-block;*/
  /*transform:translateY(3px) rotate(-45deg);*/
  /*color: aquamarine;*/
  /*font-weight: 100;*/

/*}*/
/*.z-cont>li:nth-child(3)>div>span:nth-child(2){*/
  /*display: inline-block;*/
  /*transform: translateY(-3px) rotate(45deg);*/
  /*color: red;*/
  /*font-weight: 500;*/
/*}*/
/*.z-cont>li:nth-child(3)>div>span:nth-child(3){*/
  /*display: inline-block;*/
  /*transform: translateY(3px) rotate(45deg);*/
  /*color: yellow;*/
  /*font-weight: bold;*/
  /*font-weight: 200;*/
/*}*/

/*.z-cont>li:nth-child(3)>div>span:nth-child(4){*/
  /*display: inline-block;*/
  /*transform: translateY(1px) ;*/
  /*color: aqua;*/
/*}*/

/************************************/
.z-cont>li>input{
	padding: 10px;
	border: 1px solid #e3e3e3;
	background: #F2F2F2;
	/*height: 42px;*/
	margin-top: 42px;
}
.z-cont>li:nth-child(2) input{
	width: 313px;
}
.z-cont>li:nth-child(3) input{
	width: 115px;
}
.z-cont>li:nth-child(3) img{
	margin-top: 45px;
	margin-left: 15px;
}
.z-cont>li:nth-child(3) button{
	color: #F78327;
}

.z-cont>li:nth-child(4) input{
	width: 313px;
}
.z-cont>li:nth-child(5) a{
	height: 50px;
	width: 152px;
	color: white;
	background: #F78327;
	border-radius: 4px;
	font-size: 18px;
	margin-top: 42px;
	display: inline-block;
	text-align: center;
	line-height: 50px;
}

</style>
