<template>
  <div class="s-detail-wrap">
    <div class="s-detail-head">
      <p>您当前的位置：<a href="javascript:void(0)">首页</a>&gt;<a href="javascript:void(0)">全部商品</a>&gt;<a href="javascript:void(0)">苹果</a>&gt;<a href="javascript:void(0)">阿克苏</a></p>
    </div>
    <div class="s-detail-show">
      <div class="s-detail-img">
        <div class="s-img" @mousemove="move" @mouseover="over" @mouseout="out">
          <img :src="imglist[num]" alt="">
          <div class="s-img-border"></div>
          <div v-if="show" class="s-img-cover" :style="'left:'+coverLeft+'px;top:'+coverTop+'px'"></div>
          <div v-if="show" class="s-zoom">
            <img :src="imglist[num]" alt="" :style="'left:'+zoomLeft+'px;top:'+zoomTop+'px'">
          </div>
        </div>
        <div class="s-imglist">
          <button class="prev" @click="prev">&lt;</button>
          <div class="s-imglist-wrap">
            <ul :style="'left:'+ulLeft+'px'">
              <li v-for="(item,index) in imglist" :style="{backgroundImage:'url('+item+')'}" @click="tab(index)">
                <div v-show="num==index" class="s-border"></div>
              </li>
            </ul>
          </div>
          <button class="next" @click="next">&gt;</button>
        </div>
      </div>
      <div class="s-detail-choose">
        <h1>{{name}}</h1>
        <div class="s-tag">
          <span>全国</span>
          <span>礼拜五</span>
          <span>次日达</span>
          <span>自营</span>
        </div>
        <div class="s-describe">
          <div class="s-detail-user">
            <img src="./img/detail-user.png" alt="">
            <p>资深买家</p>
          </div>
          <div class="s-detail-describe">
            <p>
              <!--雀斑石榴持续热卖！云南蒙自石榴，原产波斯（今伊朗）一带，公元前二世纪时传-->
              <!--入我国。是中国三大石榴之一，粒大皮薄，汁多味甜爽口。雀斑石榴持续热卖！云-->
              <!--南蒙自石榴，原产波斯（今伊朗）一带，公元前二世纪时传入我国。是中国三大石-->
              <!--榴之一，粒大皮薄，汁多味甜爽口。-->
              {{detail}}
            </p>
          </div>
        </div>
        <div class="s-price">
          <span>现价：￥{{newprice}}</span><i>原价：￥{{oldprice}}</i>
        </div>
        <!--<div class="s-kind1">-->
          <!--请选择规格<span @click="changeKind1(index)" :class="indexs1==index?'s-select1':''" v-for="(item,index) in kind1">{{item}}g</span>-->
        <!--</div>-->
        <!--<div class="s-kind1">-->
          <!--请选择规格<span @click="changeKind2(index)" :class="indexs2==index?'s-select2':''" v-for="(item,index) in kind2">{{item}}g</span>-->
        <!--</div>-->
        <div class="s-choose">
          <div class="s-selectNum">
            数量：<button @click="reduce">-</button><input v-model="buyNum" type="number"><button @click="add">+</button>件
          </div><a href="javascript:void(0)" @click="addshoppingcar">加入购物车</a><a href="javascript:void(0)" class="s-buy">立即购买</a>
        </div>
        <div class="s-collect-share">
          <div class="s-collect" @click="collects">
            <span :class="collect?'collect':''" class="iconfont icon-xing"></span>收藏商品
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: 'detailtop',
        data () {
            return {
              collect:false,
              buyNum:1,
              oldprice:40.00,
              newprice:20.00,
              indexs1:0,
              indexs2:100,
              num:0,
              show:false,
              ulLeft:0,
              coverLeft:0,
              coverTop:0,
              zoomLeft:0,
              zoomTop:0,
              kind1:[500,1000,2000],
              kind2:[500,1000],
              imglist:[require('./img/detail-img1.jpg'),require('./img/detail-img2.jpg'),require('./img/detail-img3.jpg'),require('./img/detail-img4.jpg'),require('./img/detail-img5.jpg')],
              name:"",
              id:0,
              detail:""
            }
        },
        methods:{
          addshoppingcar:function () {
            var that=this;
            if(localStorage.userPhone){
              $.ajax({
                url:'api/addshoppingcar',
                type:'get',
                data:{
                  userPhone:localStorage.userPhone,
                  goodsId:that.id,
                },
                success:function (data) {
                  if(data.err==1){
                    that.$root.$emit("addshoppingcar",1);
                  }else if(data.err==2){
                    var num=data.goods.split("$").length;
                    that.$root.$emit("addshoppingcar",num);
                  }
                },
              });
            }else {
              this.$root.$emit("login",true);
            }
          },
          tab:function (index) {
            this.num=index;
          },
          prev:function () {
            if (this.ulLeft<0){
                this.ulLeft+=110;
            }
          },
          next:function () {
            var limit=-(this.imglist.length-4)*110
            if(this.ulLeft>limit){
              this.ulLeft-=110
            };
          },
          move:function (e) {
            var l=e.layerX-100;
            var t=e.layerY-100;
            if (l<=0){
                l=0;
            }
            if (l>=300){
                l=300;
            }
            if (t<=0){
                t=0;
            }
            if (t>=300){
                t=300;
            }
            this.zoomLeft=-l*1.6;
            this.zoomTop=-t*1.6;
            this.coverLeft=l;
            this.coverTop=t;
          },
          over:function () {
            this.show=true;
          },
          out:function () {
            this.show=false;
          },
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
          },
          collects:function () {
            this.collect=!this.collect;
            var that=this;
            if(localStorage.userPhone){
              $.ajax({
                url:'api/collect',
                type:'get',
                data:{
                  userPhone:localStorage.userPhone,
                  goodsId:that.id,
                },
                success:function (data) {

                },
              });
            }else {
              this.$root.$emit("login",true);
            }
          }
        },
        created:function () {
            var that=this;
          $.ajax({
            url:'api/detail',
            type:"get",
            data:{
              id:sessionStorage.goodsId
            },
            success:function (data) {
              that.imglist=data.imglist;
              that.newprice=data.newPrice;
              that.oldprice=data.oldPrice;
              that.name=data.name;
              that.id=data.id;
              that.detail=data.detail;
            }
          })
        }
    }
</script>


<style scoped>
  .s-detail-wrap{
    width: 1280px;
  }
  .s-detail-head{
    width: 100%;
    height: 50px;
    background: #f4f4f4;
    margin: 20px 0;
  }
  .s-detail-head>p{
    font-size: 16px;
    color: #666;
    line-height: 50px;
    padding-left: 20px;
  }
  .s-detail-head>p>a{
    margin: 0 10px;
  }
  .s-detail-show{
    overflow: hidden;
  }
  .s-detail-img{
    float: left;
  }
  .s-img{
    width: 500px;
    height: 500px;
    position: relative;
  }
  .s-zoom{
    width: 320px;
    height: 320px;
    position: absolute;
    top: 0;
    left: 520px;
    overflow: hidden;
  }
  .s-zoom>img{
    width: 800px;
    height: 800px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .s-img>img{
    width: 500px;
    height: 500px;
  }
  .s-img-border{
    position: absolute;
    left: 0;
    top: 0;
    width: 500px;
    height: 500px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
  .s-img-cover{
    width: 200px;
    height: 200px;
    background: url("./img/detail-cover.png");
    position: absolute;
    left: 0;
    top: 0;
    cursor: move;
  }
  .s-imglist{
    overflow: hidden;
    margin: 40px 0;
  }
  .s-imglist>button{
    float: left;
    display: inline-block;
    width: 25px;
    margin: 0 2.5px;
    line-height: 90px;
    font-size: 50px;
    color: #ccc;
    cursor: pointer;
  }
  .s-imglist-wrap{
    height: 90px;
    width: 440px;
    float: left;
    overflow: hidden;
    position: relative;
  }
  .s-imglist-wrap>ul{
    width: 1000px;
    height: 90px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s;
  }
  .s-imglist-wrap>ul>li{
    width: 90px;
    height: 90px;
    margin: 0 10px;
    background: url("./img/detail-img1.png") no-repeat center center;
    background-size: 90px 90px;
    float: left;
    cursor: pointer;
  }
  .s-border{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 2px solid #f08507;
  }

  .s-detail-choose{
    float: right;
    width: 740px;
    padding-left: 40px;
    padding-top: 15px;
  }
  .s-detail-choose>h1{
    font-size: 24px;
    line-height: 24px;
    color: #333;
    font-weight: bold;
  }
  .s-tag{
    margin: 22px 0;
    color: white;
    height: 26px;
  }
  .s-tag>span{
    line-height: 26px;
    font-size: 16px;
    background: #498e3d;
    padding: 0 16px;
    float: left;
    margin-right: 20px;
  }
  .s-tag>span:nth-child(2){
    background: #f08200;
  }
  .s-describe{
    height: 180px;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
  }
  .s-detail-user{
    float: left;
    width: 120px;
    margin-right: 30px;
    text-align: center;
  }
  .s-detail-user>img{
    margin-top: 20px;
    margin-bottom: 10px;
    width: 96px;
    height: 96px;
    border: 2px solid #ffe313;
    border-radius: 50%;
  }
  .s-detail-user>p{
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: #333;
    width: 100%;
    background: #ffe313;
    border-radius: 30px;
  }
  .s-detail-describe{
    float: left;
    width: 590px;
  }
  .s-detail-describe>p{
    margin-top: 32px;
    line-height: 32px;
    font-size: 16px;
    color: #777;
  }
  .s-price{
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .s-price>span{
    font-size: 28px;
    line-height: 28px;
    color: #ff5757;
    margin-right: 40px;
  }
  .s-price>i{
    line-height: 16px;
    font-size: 16px;
    color: #666;
    text-decoration: line-through;
  }
  .s-kind1{
    height: 34px;
    line-height: 34px;
    font-size: 18px;
    color: #666;
    margin-bottom: 20px;
  }
  .s-kind1>span{
    width: 81px;
    height: 32px;
    border: 1px solid #d4d4d4;
    display: inline-block;
    margin-left: 20px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
  }
  .s-kind1>.s-select1,.s-kind1>.s-select2{
    border-color: #4b943d;
    background: #f4fff2;
  }
  .s-choose{
    padding: 10px;
    height: 50px;
  }
  .s-selectNum{
    display: inline-block;
    line-height: 50px;
    font-size: 18px;
    color: #666;
  }
  .s-selectNum>button{
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
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .s-selectNum>input{
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    height: 32px;
    vertical-align: middle;
    width: 67px;
    font-size: 20px;
    text-align: center;
    -webkit-appearance: none;
  }
  .s-choose>a{
    display: inline-block;
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: white;
    background: #ffae4f;
    border-radius: 5px;
    margin-left: 20px;
  }
  .s-choose>.s-buy{
    background: #f08200;
  }
  .s-collect-share{
    margin-top: 40px;
    font-size: 16px;
    color: #666;
  }
  .s-collect{
    line-height: 20px;
    cursor: pointer;
  }
  .s-collect-share>.s-collect>span{
    margin: 0 5px;
    font-size: 20px;
  }
  .s-collect-share>.s-collect>.collect{
    color: #ec6a17;
  }
</style>
