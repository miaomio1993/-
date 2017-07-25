<template>
  <div class="g-border">
    <div class="g-content">
      <div class="g-address">
        <span>收货人信息</span>
        <button v-on:click="show()">使用新地址</button>
      </div>
      <div class="g-inform">
        <span><strong>*</strong>收货人姓名：<input type="text" placeholder="请输入收货人姓名"></span>
        <span><strong>*</strong>所在地区：<distpicker class="g-region"></distpicker></span>
        <span><strong>*</strong>详细地址：<input type="text" placeholder="用于接收货物的详细地址"></span>
        <span><strong>*</strong>联系电话：<input type="text" placeholder="推荐使用手机号">或固定电话：<input type="text" placeholder="区号">-<input type="text" placeholder="电话号码"></span>
        <button>确认并设为默认地址</button>
      </div>
    </div>
  </div>
</template>

<script>
import Distpicker from '@/components/Header/Headeraddress/v-distpicker/Distpicker.vue'
    export default {
        name: 'Totalform',
        data() {
            return {}
        },
      methods:{
        show:function () {
          $(".g-inform").css("display","block");
        },


      },
      components:{
        Distpicker
      }
    }
</script>


<style scoped>
.g-border{
  margin-top: 40px;
  border-top:1px solid gray;
  width: 100%;
}
.g-border>.g-content{
  width: 1280px;
  margin: 0 auto;
}
.g-border>.g-content>.g-address{
  position: relative;
  height: 58px;
  /*background-color: red;*/
}
.g-border>.g-content>.g-address>span{
  display: inline-block;
  font-size: 20px;
  line-height: 58px;
  color:#666;
}
.g-border>.g-content>.g-address>button{
  position: absolute;
  top: 15px;
  right: 0;
  height: 30px;
  padding: 5px 10px;
  font-size: 16px;
  background-color:#f08200;
  color:white;
  border-radius: 5px;
}
.g-border>.g-content>.g-inform{
  display: none;
  height: 298px;
  border-top:1px solid gray;
  border-bottom: 1px solid gray;
}
.g-content>.g-inform>span{
  display:block;
  margin-top: 20px;
}
.g-content>.g-inform>span:nth-child(n+2){
  text-indent: 10px;
}
.g-content>.g-inform>span:nth-child(3)>input{
  width: 458px;
}
.g-content>.g-inform>span:nth-child(4)>input{
  width: 100px;
  margin-right: 10px;
}
/*input:nth-child(n) n是span下的第n个元素且n还要是input元素标签*/
.g-content>.g-inform>span:nth-child(4)>input:nth-child(2){
  width: 150px;
  margin-right: 10px;
}
.g-content>.g-inform>span:nth-child(4)>input:nth-child(3){
   width: 50px;
}
.g-content>.g-inform>span:nth-child(4)>input:nth-child(4){
  width: 125px;
}

.g-content>.g-inform>span>strong{
  color:red;
  display: inline-block;
  margin-right: 5px;
}
.g-content>.g-inform>span>input{
  border:1px solid gray;
  height: 33px;
  width: 218px;
  margin-left: 10px;
  padding-left: 10px;
}
.g-content>.g-inform>span>.g-region{
  display: inline-block;
}
.g-content>.g-inform>button{
  display: inline-block;
  margin:20px 125px;
  height: 40px;
  font-size: 16px;
  color: white;
  padding: 10px 20px;
  background-color: #f08200;
  border-radius:8px;
}
</style>
