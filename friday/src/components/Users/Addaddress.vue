<template>
<div>
	<div class="z-address">
		<a href="#/addaddress" class="z-addplace">添加新地址</a>
		<ul class="z-cont">
			<li>
				<i>*</i>
				<p><em>收货人姓名:</em><span><input type="text" v-model="people"/></span></p>
			</li>
			<li>
				<i>*</i>
				<p><em>所在地区：</em><span><distpicker></distpicker></span></p>
			</li>
			<li>
				<i>*</i>
				<p><em>详细地址：</em> <span><input type="text" v-model="detailarea"/></span></p>

			</li>
			<li>
				<i>*</i>
				<p><em>联系电话：</em><span><input type="text" v-model="phone"/> 或固定电话：<input type="text" />- <input type="text" /></span></p>
			</li>
			<li>
				<input type="checkbox" name="" id="" value="" /><span>设置为常用地址</span>
			</li>
			<li>
				<button @click="save">保存</button>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
	import Distpicker from '@/components/Users/v-distpicker/Distpicker'
	 export default {
        name: 'users',
        data () {
            return {
                people:"",
                detailarea:"",
                phone:"",
                area:"111"
            }
        },
        components:{
        		Distpicker:Distpicker
        },
        created:function () {
          this.$root.$on("selected",this.way)
        },
        methods:{
              way:function (data) {
                  console.log(data)
                  this.area=data.province.value+data.city.value+data.area.value;

              },
              save:function() {
                var that = this;
                console.log(typeof(localStorage.userPhone))
                $.ajax({
                  url:"api/addarea",
                  type:"get",
                  data:{
                    people:that.people,
                    detailarea:that.detailarea,
                    phone:that.phone,
                    area:that.area,
                    userphone:localStorage.userPhone

                  },
                  success:function (data) {
                      if (data.err==1){
                          window.location.href="#/address"
                      }
                  }
                })
              }
          }
       }
</script>

<style scoped>
.z-address{
width: 1077px;
border: 1px solid #e3e3e3;
}
.z-address>a{
	display: inline-block;
	width: 1077px;
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  padding-left: 20px;
  font-weight: 400;
}
.z-cont{
	height: 524px;
	padding: 20px;
}
.z-cont>li{
	line-height: 60px;
}
.z-cont>li>i{
	color: #F78327;
}
.z-cont>li>p{
	display: inline-block;
}
.z-cont>li>p>span{
	float: right;
}
.z-cont>li>p>em{
	display: inline-block;
	width: 100px;
	text-align: right;
}
.z-cont>li:nth-child(1)>p>span>input{
	width: 333px;
	height: 33px;
  border: 1px solid #f5f5f5;
}
.z-cont>li:nth-child(3)>p>span>input{
	width: 493px;
	height: 33px;
  border: 1px solid #f5f5f5;
}
.z-cont>li:nth-child(4)>p>span>input{
	width: 145px;
	height: 33px;
  border: 1px solid #f5f5f5;
}
.z-cont>li:nth-child(4)>p>span>input:nth-child(2){
	width: 80px;
	height: 33px;
}
.z-cont>li:nth-child(5){
	margin-left: 120px;
}
.z-cont>li:nth-child(6){
	margin-left: 120px;
}
.z-cont>li:nth-child(6)>button{
	width: 152px;
	height: 50px;
	background: #F78327;
	border: none;
	outline: none;
	border-radius: 4px;
}
</style>
