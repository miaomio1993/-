<template>
  <div>
    <shoppingcarhead :num="2"></shoppingcarhead>
    <div class="s-cont-wrap">
      <div class="s-address">
        <h3 class="s-title">收货人信息</h3>
        <ul class="address">
          <li>
            <div class="s-address-left">
              <input type="radio"><span>秋天先森</span><span>河南省</span><span>郑州市</span><span>高新区</span><span>莲花街与牡丹路交叉口</span><span>手机 15890343735</span>
            </div>
            <div class="s-address-right">
              <span>删除</span><span>修改</span>
            </div>
          </li>
          <li>
            <div class="s-address-left">
              <input type="radio"><span>秋天先森</span><span>河南省</span><span>郑州市</span><span>高新区</span><span>莲花街与牡丹路交叉口</span><span>手机 15890343735</span>
            </div>
            <div class="s-address-right">
              <span>删除</span><span>修改</span>
            </div>
          </li>
        </ul>
      </div>
    </div>



    <!--<div class="g-border">-->
      <!--<div class="g-content">-->
        <!--<div class="g-address">-->
          <!--<span>收货人信息</span>-->
          <!--<button v-on:click="show()">使用新地址</button>-->
        <!--</div>-->
        <!--<div class="g-inform">-->
          <!--<span><strong>*</strong>收货人姓名：<input type="text" placeholder="请输入收货人姓名"></span>-->
          <!--<span><strong>*</strong>所在地区：<distpicker class="g-region"></distpicker></span>-->
          <!--<span><strong>*</strong>详细地址：<input type="text" placeholder="用于接收货物的详细地址"></span>-->
          <!--<span><strong>*</strong>联系电话：<input type="text" placeholder="推荐使用手机号">或固定电话：<input type="text" placeholder="区号">-<input type="text" placeholder="电话号码"></span>-->
          <!--<button>确认并设为默认地址</button>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import Shoppingcarhead from "@/components/Shoppingcar/Shoppingcar-head.vue";
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
        Distpicker,
        Shoppingcarhead
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


.s-cont-wrap{
  width: 1280px;
  margin: 0 auto;
}
.s-title{
  line-height: 58px;
  font-size: 18px;
  color: #666;
  font-weight: normal;
}
.address{
  padding-bottom: 15px;
  border-bottom: 1px solid #e9e9e9;
}
.address>li{
  border: 1px solid #e5e5e5;
  background: #f4fff2;
  color: #888;
  font-size: 15px;
  padding-left: 16px;
  padding-right: 16px;
  overflow: hidden;
  margin-bottom: 10px;
}
.s-address-left{
  float: left;
  line-height: 36px;
}
.s-address-left>input{
  margin-right: 15px;
  vertical-align: baseline;
}
.s-address-left>span{
  margin-right: 10px;
}
.s-address-right{
  line-height: 36px;
  float: right;
}
.s-address-right>span{
  color: #498e3d;
  margin-left: 25px;
  float: right;
  cursor: pointer;
}




</style>
