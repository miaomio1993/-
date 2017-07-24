<template>
<div>
	<div class="z-feedback">
		<h2>意见反馈</h2>
		<div class="z-advice">
			<textarea name="" v-model="text"></textarea>
			<button class="z-off">取消</button>
			<button class="z-submit" @click="move">提交</button>
		</div>
	</div>
</div>
</template>

<script>
  export default{
      data(){
          return{
             text:""
          }
      },
      methods:{
          move:function () {
            this.text=""
          }
      }
  }
</script>

<style scoped>
.z-feedback{
width: 1077px;
border: 1px solid #e3e3e3;
}
.z-feedback>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
}
 .z-advice{
	height: 524px;
	padding: 20px;
	text-align: center;
}
.z-advice>textarea{
	height: 333px;
	width: 980px;
	resize: none;
  padding: 20px;
  outline: none;
}
.z-advice>button{
	margin-top: 60px;
	height: 50px;
	width: 146px;
	border: none;
	outline: none;
	color: white;
	border-radius: 4px;
	margin-right: 30px;
}
.z-submit{
	background: #F78327;
}
</style>
