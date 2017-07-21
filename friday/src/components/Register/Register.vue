<template>
	<div>
		<div class="z-logo">
      <a href="#/"><img src="./img/register-logo.png" alt="" /></a>
			<strong>{{message}}</strong>
		</div>
		<div class="z-cont">

			<img src="./img/register-banner.png"/>
			<!--<ul>
				<li></li>
				<li></li>
			</ul>-->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				message:"会员注册",
			}
		},
		created(){
				this.change(),
				this.change1(),
				this.change2(),
				this.change3()
		},
		methods:{
			change(){
				this.$root.$on("listen",function(data){
					this.message=data

			}.bind(this))
				//或者用箭头函数（data)=>{
//					this.message=data
//				}
		},
		change1(){
				this.$root.$on("listen1",function(data){
					this.message=data

			}.bind(this))
			},
		change2(){
				this.$root.$on("listen2",function(data){
					this.message=data

			}.bind(this))
			},
		change3(){
				this.$root.$on("listen3",function(data){
					this.message=data

			}.bind(this))
			}

	}
		}
</script>

<style scoped>
	.z-logo{
		height: 133px;
		margin-left: 290px;
		margin-top: 30px;
		width: 600px;
	}
	.z-logo>a>img{
		margin-right: 60px;
	}
	.z-logo>strong{
		display: inline-block;
		margin-top: 30px;
		width: 160px;
		text-align: center;
		border-left: 1px solid #e3e3e3;
		font-weight: normal;
		color:#666666;
	}
	.z-cont{
		position: relative;
		height: 501px;
		width: 100%;
	}
	/*.z-cont>ul{
		position: absolute;
		width: 390px;
		height: 501px;
		left: 1211px;
		top: 0;
		background: #FFFFFF;
		border: 1px solid #e3e3e3;
	}*/
</style>
