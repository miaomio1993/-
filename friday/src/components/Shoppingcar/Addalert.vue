<template>

    <div class="g-wrap">
      <div class="g-alertCar">
        <span>请选择产品规格</span>
        <div class="g-price">
          <span>现价：￥{{newprice}}</span><i>原价：￥{{oldprice}}</i>
        </div>
        <div class="g-kind1">
          请选择规格<span @click="changeKind1(index)" :class="indexs1==index?'g-select1':''" v-for="(item,index) in kind1">{{item}}g</span>
        </div>
        <div class="g-kind1">
          请选择规格<span @click="changeKind2(index)" :class="indexs2==index?'g-select2':''" v-for="(item,index) in kind2">{{item}}g</span>
        </div>
        <div class="g-choose">
          <div class="g-selectNum">
            数量：<button @click="reduce">-</button><input v-model="buyNum" type="number"><button class="btns" @click="add">+</button>件
          </div>
          <a href="javascript:void(0)">添加到购物车</a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Addalert',
        data() {
            return {
              buyNum:1,
              oldprice:40.00,
              newprice:20.00,
              indexs1:0,
              indexs2:100,
              num:0,
              kind1:[500,1000,2000,3000],
              kind2:[500,1000]
            }
        },
      methods:{
        changeKind1:function (index) {
          this.indexs1=index;
        },
        changeKind2:function (index) {
          this.indexs2=index;
        },
        reduce:function () {
          if (this.buyNum>0){
            this.buyNum--;
          }
        },
        add:function () {
          this.buyNum++;
        }
      }
    }
</script>


<style scoped>
.g-wrap{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0,0,0,0.5);
}
.g-wrap>.g-alertCar{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 680px;
  height: 440px;
  margin-left: -340px;
  margin-top: -220px;
  background-color: white;
  border:5px solid #e2e2e2;
}
.g-wrap>.g-alertCar>span{
  display: block;
  padding: 30px 30px 19px 35px;
  line-height: 20px;
  font-size: 16px;
  color:#6da564;
  border-bottom:1px solid #e2e2e2;
}
.g-alertCar>.g-price{
  margin-top: 30px;
  padding-bottom: 10px;
  margin-left: 40px;
}
.g-price>span{
  font-size: 28px;
  line-height: 28px;
  color: #ff5757;
  margin-right: 40px;
}
.g-price>i{
  line-height: 16px;
  font-size: 16px;
  color: #666;
  text-decoration: line-through;
}
.g-kind1{
  height: 34px;
  line-height: 34px;
  font-size: 18px;
  color: #666;
  margin-top: 20px;
  margin-left: 40px;
}
.g-kind1>span{
  width: 81px;
  height: 32px;
  border: 1px solid #d4d4d4;
  display: inline-block;
  margin-left: 20px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
.g-kind1>.g-select1,.g-kind1>.g-select2{
  border-color: #4b943d;
  background: #f4fff2;
}
.g-choose{
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: 40px;
  height: 40px;
}
.g-selectNum{
  display: inline-block;
  line-height: 50px;
  font-size: 18px;
  color: #666;
}
.g-selectNum>button{
  background: #f2f2f2;
  width: 34px;
  height: 34px;
  border: 1px solid #d3d3d3;
  font-size: 30px;
  line-height: 20px;
  cursor: pointer;
  color: #ccc;
  vertical-align: middle;
}
.g-selectNum >.btns{
  margin-right: 10px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.g-selectNum>input{
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  height: 32px;
  vertical-align: middle;
  width: 67px;
  font-size: 20px;
  text-align: center;
  -webkit-appearance: none;
}
.g-choose>a{
  display:block;
  width: 150px;
  height: 50px;
  line-height: 50px;
  margin-top: 20px;
  color: white;
  background: #f08200;
  border-radius: 5px;
  text-align: center;
}
</style>
