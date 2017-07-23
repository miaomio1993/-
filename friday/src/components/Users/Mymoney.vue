<template>
	<div>
		<div class="z-mymoney">
			<h2>账户余额：<span>¥{{accountmoney}}</span></h2>
			<div class="z-cont">
				<p>请选择充值金额：</p>
				<span @click="first" :style="'background:'+colors">{{first1}}元</span><span @click="two" :style="'background:'+colors2">{{two1}}元</span><span @click="three" :style="'background:'+colors3">{{three1}}元</span>
				<i>充值有礼</i>
				<ul>
					<li>
						<p>充 <span>{{change}}元</span>送：</p>
						<div>
							<img src="./img/mymoney.png" alt="" />
							<p class="z-gua">新疆哈密瓜 <span>{{weight}}</span></p>
							<p class="z-cost">价值：<span>{{value}}</span></p>
						</div>

					</li>
				</ul>
				<button class="z-chongzhi" @click="full">立即充值</button>
			</div>
		</div>
	</div>
</template>

<script>
  export default{
      data(){
          return{
              accountmoney:20,
              first1:500,
              two1:1000,
              three1:1500,
              change:1000,
              colors:"",
              colors2:"",
              colors3:"",
              weight:25,
              value:20
          }
      },
      created:function () {
          var that = this
          $.ajax({
            url:"api/myaccount",
            type:"get",
            data:{
              userPhone:localStorage.userPhone
            },
            success:function (data) {
              that.accountmoney = data.money
              console.log(data.money)
            }
          })
        },
    methods:{
          first:function () {
            this.change=500;
            this.weight="50kg";
            this.value="50";
            this.colors="#F78327";
            this.colors2="";
            this.colors3=""

          },
          two:function () {
         this.change=1000;
         this.weight="100kg";
            this.value="100";
            this.colors2="#F78327";
            this.colors="";
            this.colors3=""

          },
          three:function () {
            this.change=1500;
            this.weight="150kg";
            this.value="150";
            this.colors3="#F78327";
            this.colors="";
            this.colors2=""

          },
          full:function () {
              var that=this
            $.ajax({
              url:"api/mymoney",
              type:"get",
              data:{
                userPhone:localStorage.userPhone,
                money:that.change+(that.accountmoney-0),

              },
              success:function (data) {
                that.accountmoney = data.money
              }
            })
          }
    }
  }
</script>

<style scoped>
.z-mymoney{
width: 1077px;
border: 1px solid #e3e3e3;
}
.z-mymoney>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
}
.z-mymoney>h2>span{
	color: #F78327;
}
.z-cont{
	height: 524px;
	padding: 20px;
}
.z-cont>p{
	margin-bottom: 15px;
}
.z-cont>span{
	width: 24px;
	height: 35px;
	border: 1px solid #e3e3e3;
	margin-right: 50px;
	padding: 0 20px;
}
.z-cont>i{
	display: block;
	font-size: 2;
	color: #FF7F00;
	line-height: 60px;
}
.z-cont>ul>li{
	height: 194px;
	width: 350px;
	border: 1px solid #e3e3e3;
	padding: 15px;
}
.z-cont>ul>li>div>img{
	float: left;
	width: 350px;
}
.z-cont>ul>li>div{
	position: relative;
}
.z-gua{
	position: absolute;
	top: 60px;
	right: 40px;
}
.z-cost{
	position: absolute;
	top: 100px;
	right: 60px;
}
.z-chongzhi{
	width: 155px;
	height: 50px;
	border: none;
	outline: none;
	color: white;
	background: #F78327;
	border-radius: 3px;
	margin-top: 30px;
}

</style>
