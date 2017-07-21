<template>
  <div class="s-indexfriday-wrap">
    <div class="s-title">
     <h2>礼拜五 <span>Friday</span></h2>
     <div class="s-title-right">
       <a href="javascript:void(0)">更多 ></a>
       <div class="countdown">
          <countdown endTime="1501171200" :callback="callback"></countdown>
       </div>
     </div>
    </div>
    <div class="s-cont">
      <div class="s-cont-detail" v-for="item in list" :style="{backgroundImage:'url('+item.img+')'}">
        <a href="javascript:void(0)">
          <div class="s-text">
            <p>{{item.title}}</p>
            <p>{{item.num}}个装</p>
            <p>礼拜五价：<span>￥{{item.price}}</span></p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    import Countdown from "./Countdown.vue";
    export default {
        name: 'indexfriday',
        data () {
            return {
                list:[
                  {
                      title:"新西兰佳沛黄金奇异果",
                      num:6,
                      price:28.80,
                      img:require('./img/index-friday1.png'),
                  },
                  {
                    title:"新西兰佳沛黄金奇异果",
                    num:6,
                    price:28.80,
                    img:require('./img/index-friday2.png'),
                  },
                  {
                    title:"新西兰佳沛黄金奇异果",
                    num:6,
                    price:28.80,
                    img:require('./img/index-friday3.png'),
                  },
                  {
                    title:"新西兰佳沛黄金奇异果",
                    num:6,
                    price:28.80,
                    img:require('./img/index-friday4.png'),
                  }
                ]
            }
        },
        components:{
            Countdown
        },
        methods:{
            callback:function () {

            }
        }
    }
</script>


<style scoped>
  .s-indexfriday-wrap{
    width: 100%;
    padding-bottom: 20px;
  }
  .s-title{
    width: 100%;
    height: 100px;
    background: #ebffe8;
    border-bottom: 1px solid #498e3d;
  }
  .s-title>h2{
    font-weight: 500;
    margin-top: 30px;
    float: left;
    margin-left: 30px;
    height: 42px;
    line-height: 42px;
    font-size: 30px;
    color: #498e3d;
    padding-left: 42px;
    background: url("./img/index-friday.png") no-repeat left center;
  }
  .s-title>h2>span{
    margin-left: 10px;
    font-size: 18px;
    color: #afb4ae;
  }
  .s-title-right{
    float: right;
    overflow: hidden;
    margin-right: 30px;
    margin-top: 30px;
    line-height: 40px;
  }
  .s-title-right>a{
    float: right;
  }
  .countdown{
    float: right;
    margin-right: 30px;
  }
  .s-cont{
    margin: 20px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .s-cont-detail{
    width: 305px;
    height: 433px;
    overflow: hidden;
    position: relative;
    background: url("./img/index-friday1.png") no-repeat center center;
    background-color: #f2f2f2;
  }
  .s-cont-detail>a{
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .s-text{
    position: absolute;
    bottom: 30px;
    left: 0;
    text-align: center;
    width: 100%;
  }
  .s-text>p:nth-child(1){
    font-size: 18px;
    line-height: 18px;
    color: #333;
    margin-bottom: 12px;
  }
  .s-text>p:nth-child(2){
    font-size: 18px;
    line-height: 18px;
    color: #666;
    margin-bottom: 20px;
  }
  .s-text>p:nth-child(3){
    font-size: 18px;
    color: #f08200;
    line-height: 20px;
  }
  .s-text>p:nth-child(3)>span{
    color: #ff5757;
    font-size: 20px;
    font-weight: bold;
  }

</style>
