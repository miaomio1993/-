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
      <h3 class="s-goods-detail">商品信息</h3>
      <div class="s-shoppingcar">
        <div class="s-header">
          <div class="s-tradename">
            商品名称
          </div>
          <div class="kind">规格</div>
          <div class="price">单价</div>
          <div class="number">数量</div>
          <div class="classtotal">金额</div>
        </div>
        <div class="s-detail" v-for="(item,index) in list">
          <div class="s-goods">
            <img :src="item.img" alt=""><p>{{item.name}}</p>
          </div>
          <div class="s-kind">{{item.kind}}</div>
          <div class="s-price">￥{{item.price}}</div>
          <div class="s-number">
            <button @click="reduce(index)">-</button><input type="number" v-model="item.num"><button @click="add(index)">+</button>
          </div>
          <div class="s-classtotal">￥{{item.num*item.price}}</div>
        </div>
        <div class="s-sum">
          运费<span>￥10</span>商品金额<span>￥{{total}}</span>总计<span>￥<i>{{total+10}}</i></span>
        </div>
      </div>
      <div class="g-inform">
        <strong>开票信息</strong>
        <div class="g-radio">
          <input id="no-need" type="radio" name="all">
          <label for="no-need">不需要</label>
          <input id="person" type="radio" name="all">
          <label for="person">个人</label>
          <input id="company" type="radio" name="all">
          <label for="company">单位</label>
        </div>
        <span>发票抬头：<input type="text" /> <strong>※</strong><em>请填写后认真核对发票信息</em></span>
      </div>
      <div class="g-indent">
        <span>添加订单备注</span>
        <input type="text" placeholder="限45个字，请填写有关商品、支付、发票等信息"/>
      </div>
      <ul class="g-paymoney">
        <li>
          <span>实付金额：</span><strong>￥{{total+10}}</strong>
        </li>
        <li>
          <span>订单完成后可获得积分：</span>
          <em>{{total}}积分</em>
        </li>
        <li>
          <a href="javascript:void (0)" @click="submit"><span>提交订单</span></a>
        </li>
      </ul>
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
            return {
              list:[],
              total:0,
              translate:10,
            }
        },
      methods:{
        show:function () {
          $(".g-inform").css("display","block");
        },
        add:function (index) {
          this.list[index].num++;
          this.total=0;
          for(var i=0;i<this.list.length;i++){
            this.total+=this.list[i].num*this.list[i].price;
          }
        },
        reduce:function (index) {
          if(this.list[index].num>1){
            this.list[index].num--;
          }
          this.total=0;
          for(var i=0;i<this.list.length;i++){
            this.total+=this.list[i].num*this.list[i].price;
          }
        },
        submit:function () {
            var sum=this.total+10;
            sessionStorage.total=sum;
            this.$router.push({path:'/submitform'});
        }
      },
      components:{
        Distpicker,
        Shoppingcarhead
      },
      created:function () {
        var that=this;
        $.ajax({
          url:'api/shoppingcar',
          type:'get',
          data:{
            userPhone:localStorage.userPhone,
            act:'num',
          },
          success:function (data) {
            sessionStorage.shoppingcarId=data.goods;
            var arr=data.goods.split('$');
            for(var i=0;i<arr.length;i++){
              $.ajax({
                url:'api/detail',
                type:'get',
                data:{
                  id:arr[i],
                },
                success:function (data) {
                  that.list.push({
                    img:data.imglist[0],
                    name:data.name,
                    kind:"500g",
                    price:data.newPrice,
                    num:1,
                  })
                }
              })
            }
            setTimeout(function () {
              for(var i=0;i<that.list.length;i++){
                that.total+=that.list[i].num*that.list[i].price;
              }
            },500)

          }
        })
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
.s-title,.s-goods-detail{
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

.s-shoppingcar{
  width: 1278px;
  border: 1px solid #e9e9e9;
}
.s-header{
  height: 48px;
  background: #f2f2f2;
  padding-left: 20px;
}
.s-header>div{
  float: left;
  text-align: center;
  color: #404040;
  font-size: 18px;
  line-height: 48px;
}
.s-header>.s-tradename{
  width: 390px;
  text-align: left;
  padding-left: 25px;
}
.kind{
  width: 170px;
}
.price{
  width: 210px;
}
.number{
  width: 210px;
}
.classtotal{
  width: 190px;
}
.s-detail{
  padding: 20px;
  padding-right: 0;
  overflow: hidden;
  border-bottom: 1px solid #e9e9e9;
}
.s-detail>div{
  float: left;
  text-align: center;
  line-height: 80px;
}
.s-detail>.s-goods{
  width: 390px;
  line-height: 80px;
  text-align: left;
  overflow: hidden;
  padding-left: 25px;
}
.s-detail>.s-goods>img{
  width: 80px;
  height: 80px;
  float: left;
}
.s-detail>.s-goods>p{
  float: left;
  margin-left: 20px;
  color: #666;
}
.s-kind{
  width: 170px;
  color: #999;
}
.s-price{
  width: 210px;
  color: #999;
}
.s-number{
  width: 210px;
}
.s-number>button{
  width: 28px;
  background: #f2f2f2;
  height: 28px;
  border: 1px solid #d3d3d3;
  cursor: pointer;
}
.s-number>input{
  width: 46px;
  height: 26px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  text-align: center;
}
.s-classtotal{
  width: 190px;
  color: #333;
}
.s-sum{
  line-height: 80px;
  text-align: right;
  padding-right: 40px;
  font-size: 20px;
  color: #666;
}
.s-sum>span{
  color: #ff8484;
  font-weight: bold;
  margin-left: 15px;
  margin-right: 20px;
}
.s-sum>span>i{
  font-weight: bold;
}

.g-inform{
  height: 128px;
  width: 1280px;
  margin: 0 auto;
  padding-bottom: 20px;
  margin-top: 20px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
}
.g-inform>strong{
  display: block;
  font-size: 20px;
  line-height: 50px;
  color:#666;
  font-weight: normal;
}
.g-inform>.g-radio{
  height: 40px;
}
.g-inform>.g-radio>label{
  margin-right: 30px;
  font-size: 14px;
  color: #666;
}
.g-inform>span{
  display: inline-block;
  font-size: 16px;
  line-height: 35px;
  height: 35px;
  color: #666;
}
.g-inform>span>input{
  height: 33px;
  border: 1px solid #d3d3d3;
  width: 370px;
}
.g-inform>span>strong{
  margin-left: 20px;
  color:#ee7c3d;
}
.g-inform>span>em{
  font-style: normal;
}
.g-indent{
  height: 94px;
  width: 1280px;
  margin: 0 auto;
  padding-bottom: 30px;
  border-bottom: 1px solid #e9e9e9;
}
.g-indent>span{
  display: block;
  font-size: 20px;
  line-height: 60px;
  color: #666;
}
.g-indent>input{
  width: 624px;
  height: 23px;
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #d3d3d3;
}
.g-paymoney{
  position: relative;
  height: 189px;
  width: 1280px;
  margin: 0 auto;
  padding-bottom: 40px;
  /*border-bottom: 1px solid gray;*/
}
.g-paymoney>li:nth-child(1){
  height: 45px;
  position: absolute;
  top: 25px;
  right: 0;
}
.g-paymoney>li:nth-child(1)>span{
  display: inline-block;
  font-size: 20px;
  color:gray;
}
.g-paymoney>li:nth-child(1)>strong{
  display: inline-block;
  color:#ff5757;
  font-size: 30px;
}
.g-paymoney>li:nth-child(2){
  height: 50px;
  position: absolute;
  top: 70px;
  right: 0;
  line-height: 50px;
}
.g-paymoney>li:nth-child(2)>span{
  font-size: 16px;
  color:gray;
}
.g-paymoney>li:nth-child(2)>em{
  font-style: normal;
  color:#f08200;
  margin-left: 10px;
}
.g-paymoney>li:nth-child(3)>a{
  position: absolute;
  bottom: 40px;
  right: 0;
  width: 150px;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  background-color: #f08200;
  border-radius:8px;
  text-align: center;
  color:white;
}

</style>
