<template>
  <div>
    <div class="header">
      <div class="logo">
        <a href="#/"><img src="./images/logo.png" alt=""></a>
      </div>


    </div>

    <div class="g-success-box">
      <div class="g-box">
        <img src="./images/total-success.png" alt="" />
        <strong>支付成功</strong>
        <div class="g-btn">
          <button @click="gotoorder">查看订单</button>
          <button @click="gotoindex">返回首页</button>
        </div>
        <span>订单编号：20150901144912894941</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {}
  },
  methods:{
      gotoindex:function () {
        this.$router.push({path:'/'});
      },
      gotoorder:function () {
        this.$router.push({path:'/myorder'});
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    width: 100%;
    height: 130px;
    border-bottom: 2px solid #e4e4e4;
  }
  .logo{
    width: 1280px;
    margin: 0 auto;
    line-height: 130px;
  }
  .logo>a{
    display: inline-block;
  }
  .logo>a>img{
    margin-top: 30px;
  }
.g-success-box{
	position: relative;
	height: 519px;
	width: 1280px;
	margin: 0 auto;
	/*border-bottom:1px solid gray;*/
}
.g-success-box>.g-box{
	padding: 80px 0 100px 0;
	width: 384px;
	height: 340px;
	margin: 0 auto;
	text-align: center;
}
.g-success-box>.g-box>img{
	display:block;
	padding-left: 152px;
	width: 80px;
	height: 80px;
}
.g-success-box>.g-box>strong{
	display:block;
	width: 124px;
	height: 40px;
	margin: 40px auto;
	font-size: 28px;
	line-height: 40px;
	color:#f08200;
}
.g-success-box>.g-box>.g-btn{
	padding-top: 20px;
	width: 384px;
	height: 45px;
}
.g-box>.g-btn>button{
	width: 172px;
	height: 45px;
	font-size: 24px;
	color:white;
	border-radius: 5px;
}
.g-box>.g-btn>button:nth-child(1){
	float: left;
	background: #f08200;
}
.g-box>.g-btn>button:nth-child(2){
	float: left;
	margin-left: 40px;
	background: #498e3d;
}
.g-success-box>.g-box>span{
	display: inline-block;
	margin-top: 55px;
	height: 20px;
	font-size: 16px;
	color:#666;
}
</style>
