<template>
  <div class="wrap">
    <indexswiper :list="imgList"></indexswiper>
    <div class="g-content">
      <ul>
        <li>
          <a href="">
            <img src="./images/total-奇异果.png" alt="" />
          </a>
          <div class="g-goods-details">
            <h4>新西兰佳沛黄金奇异果</h4>
            <h5>花蜜般的甘甜百吃不厌</h5>
            <span>积分：<strong>500</strong></span>
            <span>价值：￥20.0</span>
            <a href="">立即兑换</a>
          </div>
        </li>
        <li>
          <a href="">
            <img src="./images/total-奇异果.png" alt="" />
          </a>
          <div class="g-goods-details">
            <h4>新西兰佳沛黄金奇异果</h4>
            <h5>花蜜般的甘甜百吃不厌</h5>
            <span>积分：<strong>500</strong></span>
            <span>价值：￥20.0</span>
            <a href="">立即兑换</a>
          </div>
        </li>
        <li>
          <a href="">
            <img src="./images/total-奇异果.png" alt="" />
          </a>
          <div class="g-goods-details">
            <h4>新西兰佳沛黄金奇异果</h4>
            <h5>花蜜般的甘甜百吃不厌</h5>
            <span>积分：<strong>500</strong></span>
            <span>价值：￥20.0</span>
            <a href="">立即兑换</a>
          </div>
        </li>
        <li>
          <a href="">
            <img src="./images/total-奇异果.png" alt="" />
          </a>
          <div class="g-goods-details">
            <h4>新西兰佳沛黄金奇异果</h4>
            <h5>花蜜般的甘甜百吃不厌</h5>
            <span>积分：<strong>500</strong></span>
            <span>价值：￥20.0</span>
            <a href="">立即兑换</a>
          </div>
        </li>
        <li>
          <a href="">
            <img src="./images/total-奇异果.png" alt="" />
          </a>
          <div class="g-goods-details">
            <h4>新西兰佳沛黄金奇异果</h4>
            <h5>花蜜般的甘甜百吃不厌</h5>
            <span>积分：<strong>500</strong></span>
            <span>价值：￥20.0</span>
            <a href="">立即兑换</a>
          </div>
        </li>
        <li>
          <a href="">
            <img src="./images/total-奇异果.png" alt="" />
          </a>
          <div class="g-goods-details">
            <h4>新西兰佳沛黄金奇异果</h4>
            <h5>花蜜般的甘甜百吃不厌</h5>
            <span>积分：<strong>500</strong></span>
            <span>价值：￥20.0</span>
            <a href="">立即兑换</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Indexswiper from '@/components/Index/Indexswiper'
export default {
  name: 'totalcity',
  data () {
    return {
        imgList:[
          {
            img:require('./images/totalcity-swiper1.jpg'),
          },
          {
            img:require('./images/totalcity-swiper1.jpg'),
          },
          {
            img:require('./images/totalcity-swiper1.jpg'),
          }
        ]
    }
  },
  components:{
      Indexswiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-content{
	position: relative;
	width: 1280px;
	margin: 0 auto;
	overflow: hidden;
}
.g-content>ul{
	width: 1300px;
}
.g-content>ul>li{
	float:left;
	width: 303px;
	height: 478px;
	margin-right: 20px;
	margin-top: 20px;
	border:1px solid #ececec;
}
.g-content>ul>li>a{
	display: inline-block;
	width: 303px;
	height: 305px;
}
.g-content>ul>li>a>img{
	width: 100%;
	height: 100%;
}
.g-content>ul>li>.g-goods-details{
	width: 303px;
	height: 173px;
	text-align: center;
}
ul>li>.g-goods-details>h4{
	font-size: 18px;
	line-height: 30px;
	font-weight: bolder;
}
ul>li>.g-goods-details>h5{
	font-size: 14px;
	line-height: 30px;
}
ul>li>.g-goods-details>span{
	float:left;
	font-size: 18px;
	line-height: 40px;
	margin-right: 25px;
	margin-left: 25px;
	color:#707070;
}
ul>li>.g-goods-details>span>strong{
	color:#f08200;
	font-size: 20px;
}
ul>li>.g-goods-details>a{
	display: inline-block;
	width: 155px;
	margin: 15px;
	font-size: 18px;
	line-height: 36px;
	font-weight: lighter;
	color:white;
	border-radius: 30px;
	background-color: #f08200;
}
</style>
