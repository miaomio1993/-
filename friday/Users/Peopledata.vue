<template>
<div>
	<div class="z-peopledata">
			<h2>个人资料</h2>
			<ul class="z-cont">
				<li>当前头像：<img src="./img/peopledata1.png"><a href="">修改</a></li>
				<li>昵称：<input type="text" /></li>
				<li>性别：<label><input type="radio" name="li"/>男</label>
					<label><input type="radio" name="li" checked="checked"/>女</label></li>

				<li>生日：<br /></li>
				<li>手机：<input type="text" /><a href="#/peopledatabind1">更换手机</a></li>
				<li><button>确认提交</button></li>
        <distpicker></distpicker>
			</ul>
	</div>
</div>
</template>

<script>
//  import Date from '@/components/Users/vue-datepicker/vue-datepicker'
  import Distpicker from './Addaddress.vue'
  export default{
      data(){
          return{

          }
      },
    components:{
//          Date:Date,
      Distpicker:Distpicker
    }
  }
</script>

<style scoped>
.z-peopledata{
width: 1077px;
border: 1px solid #e3e3e3;
}
.z-peopledata>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
}
.z-cont{
	height: 504px;
	padding: 30px;
}

.z-cont>li{
	line-height: 50px;
	padding-left: 32px;
}
.z-cont>li:nth-child(1){
	line-height: 60px;
	padding-left: 0px;
}
.z-cont>li:nth-child(1)>img{
	vertical-align: bottom;
	margin-right: 10px;
}
.z-cont>li:nth-child(1)>a{
	color: #498E3D;
}
.z-cont>li>input{
	width: 176px;
	height: 38px;
	background: #e3e3e3;
	outline: none;
	border: none;
}
.z-cont>li:nth-child(5)>a{
	color: #498E3D;
	margin-left: 10px;
}
.z-cont button{
	margin-left: 47px;
	margin-top: 30px;
	height: 50px;
	width: 150px;
	background: #498E3D;
	border: none;
	outline: none;
	border-radius: 4px;
}
</style>
