<template>
<div>
	<div class="z-peopledata">
			<h2>个人资料</h2>
			<ul class="z-cont">
				<li>当前头像：<img :src="images"><a href="javascript:void(0)" class="send"><input type="file" class="spread" @change="change($event)">修改</a></li>
				<li>昵称：<input type="text" v-model="name"/></li>
				<li>性别：<label><input type="radio" name="li" class="boy"/>男</label>
					<label><input type="radio" name="li" class="girl"/>女</label></li>

				<li>生日：<datepicker :date="startTime" :option="option" :limit="limit" @change="date"></datepicker><br /></li>
				<li>手机：<input type="text" v-model="phone"/><a href="#/peopledatabind1">更换手机</a></li>
				<li><button @click="sure">确认提交</button></li>
			</ul>
	</div>
</div>
</template>

<script>
  import Datepicker from '@/components/Users/vue-datepicker/vue-datepicker-es6'
  export default{
      data(){
          return{
            images:require("./img/peopledata1.png"),
            name:"",
            date1:"",
            phone:"",
            gender:"",
            startTime: {
              time: ''
            },
            endtime: {
              time: ''
            },
            option: {
              type: 'day',
              week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
              month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              format: 'YYYY-MM-DD',
              placeholder: '出生年月日',
              inputStyle: {
                'display': 'inline-block',
                'padding': '6px',
                'line-height': '22px',
                'font-size': '16px',
                'border': '2px solid #fff',
                'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
                'border-radius': '2px',
                'color': '#5F5F5F'
              },
              color: {
                header: '#ccc',
                headerText: '#f00'
              },
              buttons: {
                ok: 'Ok',
                cancel: 'Cancel'
              },
              overlayOpacity: 0.5, // 0.5 as default
              dismissible: true // as true as default
            },
            timeoption: {
              type: 'min',
              week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
              month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              format: 'YYYY-MM-DD HH:mm'
            },
            multiOption: {
              type: 'multi-day',
              week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
              month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              format:"YYYY-MM-DD HH:mm"
            },
            limit: [{
              type: 'weekday',
              available: [1, 2, 3, 4, 5]
            },
              {
                type: 'fromto',
                from: '1600-02-01',
                to: '2030-02-20'
              }]
          }
      },
      components:{
      Datepicker:Datepicker

      },
    created:function () {
          var that=this
      $.ajax({
        url:"api/people",
        type:"get",
        data:{
          userPhone:localStorage.userPhone
        },
        success:function (data) {
          that.images=data.image
          that.name=data.name;
          that.gender=data.gender;
          that.option.placeholder=data.birthday;
          that.phone=data.phone;
          if(data.gender=="男"){
            $(".boy").prop("checked",true)
          }else {
            $(".girl").prop("checked",true)
          }


        }
      })
    },
    methods:{
          date:function (data) {
            this.date1=data
          },
          change:function (event) {
            var fileName = event.path[0].files[0].name
            console.log(fileName)
            this.images =require("./images/"+fileName)
          },
          sure:function () {
              var that = this
              if ($(".boy").prop("checked")){
                    this.gender="男"
              }else {
                  this.gender="女"
              }
            $.ajax({
              url:"api/peopledata",
              type:"get",
              data:{
                  image:that.images,
                  name:that.name,
                  gender:that.gender,
                  birthday:that.date1,
                  phone:that.phone,
                  userPhone:localStorage.userPhone
              },
              success:function (data) {
                  if (data.err==1){
                     that.name=""
                      that.gender=""
                     that.data1=""
                     that.phone=""
                    that.option.placeholder="出生年月日";
                    $(".boy").prop("checked",false)
                    $(".girl").prop("checked",false)
                  }
              }
            })
          }
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
  width: 72px;
  height: 72px;
  border-radius: 50%;
}
.z-cont>li:nth-child(1)>a{
	color: #498E3D;
}
.z-cont>li>input{
	width: 146px;
	height: 38px;
	background: #e3e3e3;
	outline: none;
	border: none;
  padding: 0 15px;
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
.send{
  /*border:1px solid red;*/
  position: relative;
  display: inline-block;
  width: 150px;
  height:30px;
  line-height: 30px;

}
  .spread{
    position: absolute;
    top: 5px;
    left: 0;
    opacity:0;
    width: 50px;
  }
</style>
