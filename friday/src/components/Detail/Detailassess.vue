<template>
  <div class="s-detailassess">
   <div class="s-wrap">
     <div class="s-title">
       <span :class="tab==1?'select':''" @click="change(1)">商品详情</span><span :class="tab==2?'select':''" @click="change(2)">商品评价</span>
     </div>
     <div class="s-detail-assess">
       <div v-if="tab==1" class="s-detail">
         <div class="s-detail1">
           <h4>男士短衬衫</h4>
           <div class="s-text">
             <p>明水礼盒十分优秀，是送朋友，送亲人的不二选择。</p>
             <p>什么，您还不知道明水礼盒，今年过年不收礼，收礼只收明水礼盒，OUT了吧，赶紧买起礼盒送亲朋，送好友吧。</p>
             <p>完成交易，如有剩余库存，从新上架产品</p>
           </div>
           <img src="./img/detail-show.png" alt="">
         </div>
         <div class="s-detail1">
           <h4>男士短衬衫</h4>
           <div class="s-text">
             <p>明水礼盒十分优秀，是送朋友，送亲人的不二选择。</p>
             <p>什么，您还不知道明水礼盒，今年过年不收礼，收礼只收明水礼盒，OUT了吧，赶紧买起礼盒送亲朋，送好友吧。</p>
             <p>完成交易，如有剩余库存，从新上架产品</p>
           </div>
           <img src="./img/detail-show.png" alt="">
         </div>
       </div>
       <div v-if="tab==2" class="s-assess">
         <div class="s-assess1" v-for="(item,index) in assessList">
           <div class="s-user">
             <img :src="item.headimg" alt="" class="s-user-head">
             <p class="s-username">{{item.userName}}</p>
           </div>
           <div class="s-message">
             <div class="s-xing">
               <span class="iconfont icon-xing" :class="num<=item.xing?'xingNum':''" v-for="num in 5"></span>
             </div>
             <p class="s-text">
               {{item.text}}
             </p>
             <div class="s-img">
               <div v-for="(imgItem,indexImg) in item.img" @click="select(index,indexImg)" :class="indexs==index&&indexImgs==indexImg?'select':''">
                 <img :src="imgItem.img" alt="">
               </div>
             </div>
             <div class="s-time">
               2016-09-23  20:55:23
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
    export default {
        name: 'detailassess',
        data () {
            return {
              indexs:100,
              indexImgs:100,
              tab:1,
              assessList:[
                {
                  headimg:require('./img/detail-assess-user.png'),
                  userName:'15890343735',
                  xing:4,
                  text:'其实我并不知道这是什么，这只是一个我创建出来用来测试的假数据而已，但是我还是要任性的给一个差评！',
                  img:[
                    {
                      img:require('./img/detail-img1.jpg')
                    },
                    {
                      img:require('./img/detail-img3.jpg')
                    },
                    {
                      img:require('./img/detail-img2.jpg')
                    }
                  ],
                  time:'2015-2-28 02:59:59'
                },
                {
                  headimg:require('./img/detail-assess-user.png'),
                  userName:'13999189427',
                  xing:3,
                  text:'其实我并不知道这是什么，这只是第二个我创建出来用来测试的假数据而已，但是我还是要任性的给一个差评！',
                  img:[
                    {
                      img:require('./img/detail-img5.jpg')
                    },
                    {
                      img:require('./img/detail-img3.jpg')
                    },
                    {
                      img:require('./img/detail-img2.jpg')
                    },
                    {
                      img:require('./img/detail-img4.jpg')
                    }
                  ],
                  time:'2015-2-28 02:59:59'
                }
              ]
            }
        },
        methods:{
          change:function (num) {
            this.tab=num;
          },
          select:function (index,indexImg) {
            this.indexs=index;
            this.indexImgs=indexImg;
          }
        }
    }
</script>


<style scoped>
  .s-wrap{
    width: 1280px;
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
  }
  .s-title{
    height: 48px;
    background: #f4f4f4;
    border-bottom: 1px solid #e4e4e4;
    line-height: 48px;
    position: relative;
  }
  .s-title>span{
    font-size: 18px;
    line-height: 48px;
    color: #333;
    display: inline-block;
    width: 123px;
    border-right: 1px solid #e4e4e4;
    text-align: center;
    position: absolute;
    top: 0;
  }
  .s-title>span:nth-child(1){
    left: 0;
  }
  .s-title>span:nth-child(2){
    left: 124px;
  }
  .s-title>.select{
    top: -1px;
    border-top: 2px solid #498e3d;
    color: #498e3d;
    background: #fff;
  }
  .s-detail{
    padding: 40px;
    padding-bottom: 0;
  }
  .s-detail1{
    margin-bottom: 40px;
  }
  .s-detail1>h4{
    font-size: 18px;
    line-height: 18px;
    color: #ec6a17;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .s-text>p{
    font-size: 16px;
    line-height: 16px;
    color: #666;
    margin-bottom: 20px;
  }
  .s-assess{
    padding-top: 40px;
    padding-left: 40px;
    padding-bottom: 40px;
  }
  .s-assess1{
    overflow: hidden;
    padding-bottom: 20px;
    border-bottom: 1px solid #e9e9e9;
    width: 1220px;
  }
  .s-user{
    float: left;
    width: 90px;
    margin-right: 20px;
  }
  .s-user>img{
    width: 90px;
    height: 90px;
  }
  .s-user>p{
    line-height: 32px;
    font-size: 14px;
    color: #666;
    text-align: center;
  }
  .s-message{
    float: left;
    width: 1100px;
    position: relative;
  }
  .s-xing>span{
    font-size: 16px;
    color: #d0d0d0;
    line-height: 36px;
  }
  .s-xing>.xingNum{
    color: #ec6a17;
  }
  .s-text{
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 10px;
    color: #666;
  }
  .s-img{
    overflow: hidden;
  }
  .s-img>div{
    float: left;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    border: 2px solid #d3d3d3;
    padding: 1px;
    margin-right: 10px;
  }
  .s-img>.select{
    border: 2px solid #ed6f1f;
  }
  .s-img>div>img{
    width: 54px;
    height: 54px;
  }
  .s-time{
    position: absolute;
    top: 5px;
    right: 55px;
    font-size: 13px;
    color: #777;
  }
</style>
