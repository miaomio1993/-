<template>
  <div class="g-cover">
    <ul class="z-cont">
      <li>
        <span>登录</span>
        <p>
          <i><a href="#/numberpassword" @click="change3">账号密码登录</a></i>
          <i class="iconfont icon-geren-80-copy"></i>
        </p>
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
        <a href="">看不清换一张</a>
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
        <a href="javascript:void(0)" class="iconfont icon-weixin-"></a>
        <a href="javascript:void(0)" class="iconfont icon-qq"></a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    name: 'Login',
    methods:{
      change:function(){
        this.$root.$emit("listen","会员登录")
        $.ajax({

        })

      },
      change1:function(){
        this.$root.$emit("listen1","会员注册")
      },
      change2:function(){
        this.$root.$emit("listen2","重置密码")
      },
      change3:function(){
        this.$root.$emit("listen2","会员登录")
      }
    }
  }
</script>

<style scoped>
.g-cover{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.5);
  z-index: 200;
}
.z-cont{
  position: absolute;
  left:50%;
  top: 50%;
  width: 320px;
  height: 460px;
  padding: 20px 40px;
  margin-left: -200px;
  margin-top: -250px;
  background: #FFFFFF;
  border: 4px solid #e3e3e3;
}
.z-cont>li:nth-child(1){
  line-height: 54px;
}
.z-cont>li:nth-child(1)>span{
  font-size: 25px;
}
.z-cont>li:nth-child(1)>p{
  float: right;
}
.z-cont>li:nth-child(1)>p>i,
.z-cont>li:nth-child(1)>p>i>a{
  display: inline-block;
  color: #498e3d;
  font-weight:400;
  font-size: 16px;
}
.z-cont>li:nth-child(1)>p>.icon-geren-80-copy{
  font-size: 20px;
  vertical-align: bottom;
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
    color: #72d160;
  }
  .z-cont>li:nth-child(3)>p{
    color: #db2630;
    font-size: 0.6em;
    line-height: 30px;
  }
  .z-cont>li:nth-child(3)>p>span{
    color: white;
    width: 10px;
    height: 13px;
    margin-right: 5px;
    border-radius: 50%;
    line-height: 13px;
    font-size: 12px;
    padding-left: 4px;
    background: #db2630;
    display: inline-block;

  }
  .z-cont>li:nth-child(4)>input{
    width: 90px;
  }
.z-cont>li:nth-child(4)>img{
  margin-left: 10px;
}
.z-cont>li:nth-child(4)>a{
  display: inline-block;
  font-size: 18px;
  line-height: 24px;
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
    border-bottom: 1px dotted #666666;
    position: relative;
  }
.z-cont>li:nth-child(8)>p{
  font-size: 14px;
  color:#999;
}
  .z-cont>li:nth-child(8)>span{
    position: absolute;
    left: 100px;
    font-size: 20px;
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
   text-align: center;
    margin-top: 15px;
  }
  .z-cont>li:nth-child(9)>.icon-weixin-,
  .z-cont>li:nth-child(9)>.icon-qq
  {
    font-size: 40px;
  }
  .z-cont>li:nth-child(9)>a:nth-child(1){
    color:#00CE31 ;
  }
  .z-cont>li:nth-child(9)>a:nth-child(2){
    color:#3AAEE7;
    margin-left: 10px;
  }
</style>
