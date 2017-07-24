<template>
	<div>
		<div class="z-address">
			<h2>地址管理 <a href="#/addaddress" class="z-addplace">添加新地址</a></h2>
			<ul>
				<li v-for="item in items">
					<span>{{item[0]}}</span>
					<span>{{item[1]}}</span>
					<span>{{item[2]}}</span>
					<span>{{item[3]}}</span>
					<span>{{item[4]}}</span>
					<span>{{item[5]}}</span>
				</li>
			</ul>
			<!--当没有收货地址时-->
			<div class="z-cont">
				<p><span></span><i>暂无收货地址，请点击</i><a href="">添加新地址</a></p>
			</div>
		</div>
	</div>
</template>

<script>
  export default{
      data(){
          return{
             items:[
                [
                  "收货人", "所在区域","街道地址", "联系电话", "备注", "操作"
                ]

             ]
          }
      },
    created:function () {
          var that = this;
      $.ajax({
        url:"api/area",
        type:"get",
        data:{
           userPhone:localStorage.userPhone
        },
        success:function (data) {
            that.items.push(data.data[0].address1.split(":"))
            that.items.push(data.data[0].address2.split(":"))
            that.items.push(data.data[0].address3.split(":"))
            that.items.push(data.data[0].address4.split(":"))
            that.items.push(data.data[0].address5.split(":"))
        }
      })
    }

  }
</script>

<style scoped>
.z-address{
width: 1077px;
border: 1px solid #e3e3e3;
position: relative;
}
.z-address>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
  position: relative;
}
.z-address>h2>a{
	height: 30px;
	width: 90px;
	line-height: 30px;
	font-size: 15px;
	color: white;
	background: #498E3D;
	position: absolute;
	right: 20px;
	top: 20px;
	border-radius: 4px;
	text-align: center;


}
.z-address>ul{
	margin: 20px;
	border: 1px solid #e3e3e3;
	/*display: none;*/
}
.z-address>ul>li{
	/*display: flex;*/
	/*justify-content: space-around;*/
	/*line-height: 50px;*/
	border-bottom: 1px solid #e3e3e3;
}
.z-address>ul>li>span{
  width: 160px;
  text-align: center;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 20px;
  margin: 15px 0;
  vertical-align: middle;
}
.z-address>ul>li:nth-child(1){
	background: #e3e3e3;
}
.z-cont{
	height: 315px;
	text-align: center;
	margin-top: 250px;
	display: none;
}
.z-cont>p>span{
	margin-right: 10px;
	display: inline-block;
	width: 20px;
	height: 20px;
	background-image: url(./img/address1.png);
	background-size: 20px 20px;
}
.z-cont>p>a{
	height: 30px;
	width: 90px;
	line-height: 30px;
	font-size: 15px;
	color: white;
	background: #498E3D;
	border-radius: 4px;
	text-align: center;
	margin-left: 10px;
}
</style>
