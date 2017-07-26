<template>
	<div>
		<div class="z-changepassword">
			<h2>修改密码</h2>
			<div class="z-password">
				<input type="number" placeholder="请输入电话号码" v-model="phone" class="userPhone"/>
				<input type="password" placeholder="请输入密码（6-20位号码字符）" v-model="password" class="passWord"/>
				<input type="password" placeholder="请再次输入密码确认" v-model="again" class="repassword"/>
				<div class="z-yanzhengma">
					<input type="text" placeholder="验证码"/>

          <div>
            <span :style="'transform:translate('+num2+'px) rotate('+num1+'deg);color:'+color1+';font-weight:'+randnum1">{{first}}</span><span :style="'transform:translate('+num4+'px) rotate('+num3+'deg);color:'+color2+';font-weight:'+randnum2">{{two}}</span><span :style="'transform:translate('+num6+'px) rotate('+num5+'deg);color:'+color3+';font-weight:'+randnum3">{{three}}</span><span :style="'transform:translate('+num8+'px) rotate('+num7+'deg);color:'+color4+';font-weight:'+randnum4">{{four}}</span>
          </div>
					<!--<img src="./img/changepassword1.png" alt="" />-->
					<span @click="submit1">看不清换一张</span>
				</div>
				<div class="z-gain">
					<input type="text" placeholder="手机验证码"/>
					<button>获取验证码</button>
				</div>
				<button class="z-submit" @click="submit">提交修改</button>
			</div>
      <div class="z-changesuccess" v-if="turn">
        <span class="iconfont icon-duigou"></span>
        <p>恭喜你修改成功</p>
      </div>
		</div>
	</div>
</template>

<script>
  export default{
      data(){
          return{
            turn:false,
            phone:"",
            password:"",
            again:"",
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
    methods: {
      randomNumber: function (a, b) {
        return parseInt(Math.random() * (b - a + 1) + a)
      },
      randomColor: function () {
        return "rgb(" + this.randomNumber(0, 255) + "," + this.randomNumber(0, 255) + "," + this.randomNumber(0, 255) + ")"
      },
      submit1: function () {
        this.first = parseInt(Math.random(0, 1) * 10);
        this.two = parseInt(Math.random(0, 1) * 10);
        this.three = parseInt(Math.random(0, 1) * 10);
        this.four = parseInt(Math.random(0, 1) * 10);
        this.num1 = parseInt(Math.random(0, 1) * 120);
        this.num2 = parseInt(Math.random(0, 1) * 5);
        this.num3 = parseInt(Math.random(0, 1) * 100);
        this.num4 = parseInt(Math.random(0, 1) * 5);
        this.num5 = parseInt(Math.random(0, 1) * 80);
        this.num6 = parseInt(Math.random(0, 1) * 5);
        this.num7 = parseInt(Math.random(0, 1) * 60);
        this.num8 = parseInt(Math.random(0, 1) * 5);
        this.color1 = this.randomColor();
        this.color2 = this.randomColor();
        this.color3 = this.randomColor();
        this.color4 = this.randomColor();
        this.randnum1 = parseInt(Math.random(0, 1) * 900);
        this.randnum2 = parseInt(Math.random(0, 1) * 900);
        this.randnum3 = parseInt(Math.random(0, 1) * 900);
        this.randnum4 = parseInt(Math.random(0, 1) * 900)

      },
      submit: function () {
        var that = this;
        var yanzhengma = this.first + "" + this.two + this.three + this.four
        if (!(/^1[34578]\d{9}$/.test($(".userPhone").val()))) {
          alert("电话号码有误")
        } else {
          if ($(".yanzhengma").val() != yanzhengma) {
            alert("验证码有误")
          } else {
            if (!(/^[a-zA-Z]{6,10}$/.test($(".passWord").val()))) {
              alert("密码格式有误")
            } else {
              if ($(".passWord").val() != $(".repassword").val()) {
                alert("两次密码不一致")
              } else {

                $.ajax({
                  url: "api/changepassword",
                  type: "get",
                  data: {
                    userPhone: that.phone,
                    passWord: that.password
                  },
                  success: function (data) {
                    if (data.err == 1) {
                      that.turn = true
                      setTimeout(function () {
                        that.phone = "";
                        that.password = "";
                        that.again = "";
                        that.turn = false
                      }, 2000)

                    }
                    if (data.err == 2) {
                      alert("不存在此号码")
                      setTimeout(function () {
                        that.phone = "";
                        that.password = "";
                        that.again = "";
                      }, 1000)

                    }
                  }
                })

              }
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
.z-changepassword{
width: 1077px;
border: 1px solid #e3e3e3;
  position: relative;
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
  .z-changesuccess{
    position: absolute;
    top:180px;
    left: 534px;
    width: 453px;
    height: 28px;
    text-align: center;
    border-radius: 10px;
    background: #D9D9D9;
    color: #F78327;
    font-size: 20px;
    padding: 80px 0;

  }
.z-changesuccess>p{
  display: inline-block;
}

.z-yanzhengma>div{
  display: inline-block;
  position: relative;
  height: 43px;
  width: 79px;
  background-image: url("./img/changepassword4.jpg");
  background-size: 100% 100%;
  vertical-align: middle;
}
.z-yanzhengma>div>span{
  color: white;
  padding: 0 5px;
  line-height: 43px;
  opacity: 0.8;
  display: inline-block;
}
</style>
