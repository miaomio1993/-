<template>
  <div class="wrap">
    <indexswiper :list="imgList"></indexswiper>

    <div class="g-local">
      <indexhot></indexhot>
      <!--商品列表栏-->
      <div class="g-goods-kinds">
        <span>分类：</span>
        <a href="" class="active">全部</a>
        <a href="">餐饮</a>
        <a href="">酒店</a>
        <a href="">休闲</a>
        <a href="">电影</a>
        <a href="">汽车装饰</a>
        <a href="">家政服务</a>
      </div>
      <!--列表选项-->
      <div class="g-goods-order">
        <a href="">评分最高</a>
        <a href="">价格从高到低</a>
        <a href="">价格从高到低</a>
        <a href="" class="active">销量</a>
      </div>

      <!--商品列表-->
      <div class="g-goods">
        <ul>
          <li>
            <a href="">
              <img src="./images/大闸蟹1.png" alt="" />
              <div class="g-goods-details">
                <h6>阳澄湖大闸蟹</h6>
                <div class="g-contents">
                  <div class="g-left">
                    <img class="grayimg" src="./images/五星-gray.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                  </div>
                  <div class="g-right">
                    <span>￥62/人</span>
                  </div>
                </div>
                <div class="g-goods-address">
                  浙江省台州市温岭市人民西路2号
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <img src="./images/大闸蟹2.png" alt="" />
              <div class="g-goods-details">
                <h6>阳澄湖大闸蟹</h6>
                <div class="g-contents">
                  <div class="g-left">
                    <img class="grayimg" src="./images/五星-gray.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                  </div>
                  <div class="g-right">
                    <span>￥62/人</span>
                  </div>
                </div>
                <div class="g-goods-address">
                  浙江省台州市温岭市人民西路2号
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <img src="./images/大闸蟹3.png" alt="" />
              <div class="g-goods-details">
                <h6>阳澄湖大闸蟹</h6>
                <div class="g-contents">
                  <div class="g-left">
                    <img class="grayimg" src="./images/五星-gray.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                  </div>
                  <div class="g-right">
                    <span>￥62/人</span>
                  </div>
                </div>
                <div class="g-goods-address">
                  浙江省台州市温岭市人民西路2号
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <img src="./images/大闸蟹4.png" alt="" />
              <div class="g-goods-details">
                <h6>阳澄湖大闸蟹</h6>
                <div class="g-contents">
                  <div class="g-left">
                    <img class="grayimg" src="./images/五星-gray.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                  </div>
                  <div class="g-right">
                    <span>￥62/人</span>
                  </div>
                </div>
                <div class="g-goods-address">
                  浙江省台州市温岭市人民西路2号
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <img src="./images/大闸蟹1.png" alt="" />

              <div class="g-goods-details">
                <h6>阳澄湖大闸蟹</h6>
                <div class="g-contents">
                  <div class="g-left">
                    <img class="grayimg" src="./images/五星-gray.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                  </div>
                  <div class="g-right">
                    <span>￥62/人</span>
                  </div>
                </div>
                <div class="g-goods-address">
                  浙江省台州市温岭市人民西路2号
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <img src="./images/大闸蟹1.png" alt="" />

              <div class="g-goods-details">
                <h6>阳澄湖大闸蟹</h6>
                <div class="g-contents">
                  <div class="g-left">
                    <img class="grayimg" src="./images/五星-gray.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                  </div>
                  <div class="g-right">
                    <span>￥62/人</span>
                  </div>
                </div>
                <div class="g-goods-address">
                  浙江省台州市温岭市人民西路2号
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <img src="./images/大闸蟹1.png" alt="" />

              <div class="g-goods-details">
                <h6>阳澄湖大闸蟹</h6>
                <div class="g-contents">
                  <div class="g-left">
                    <img class="grayimg" src="./images/五星-gray.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                    <img class="redimg" src="./images/五星.png" alt="" />
                  </div>
                  <div class="g-right">
                    <span>￥62/人</span>
                  </div>
                </div>
                <div class="g-goods-address">
                  浙江省台州市温岭市人民西路2号
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!--页面跳转-->
      <div class="g-pages">
        <div class="g-left">
          <ul class="g-pagination">
            <li class="g-disabled">
              <span>上一页</span>
            </li>
            <li class="g-ctive">
              <span>1</span>
            </li>
            <li>
              <a href="">2</a>
            </li>
            <li>
              <a href="">下一页</a>
            </li>
          </ul>
        </div>
        <div class="g-right">
          <ul class="g-jump">
            <li>
              <span>共2页&nbsp;到第</span>
              <input type="text" class="g-jump-num" value="1" />
              <span>页</span>
              <a href="javascript:void(0)">确定</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Indexswiper from '@/components/Index/Indexswiper'
  import Indexhot from '@/components/Index/Indexhot'
	export default {
		name: 'local',
		data() {
			return {
        imgList:[
          {
            img:require('./images/local-swiper1.png'),
          },
          {
            img:require('./images/local-swiper1.png'),
          },
          {
            img:require('./images/local-swiper1.png'),
          }
        ]
      }
		},
    components:{
      Indexswiper,
      Indexhot
    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-local{
	width: 1280px;
	margin: 0 auto;
}
/*列表选项*/
.g-local>.g-goods-kinds{
	height: 45px;
	padding-top: 14px;
	border-bottom:1px solid #ececec;
}
.g-local>.g-goods-kinds>span{
	float:left;
	display: inline-block;
	padding-top: 5px;
	padding-bottom: 5px;
	font-size: 16px;
	color:#707070;
}
.g-local>.g-goods-kinds>a{
	float:left;
	padding:5px 10px;
	font-size: 16px;
	margin-left: 10px;
}
.g-local>.g-goods-kinds>.active{
	color:white;
	background-color:#498e3d;
}
.g-local>.g-goods-order{
	width: 1280px;
	height: 30px;
	padding: 15px 0 15px 0;
}
.g-local>.g-goods-order>a{
	float:right;
	height: 30px;
	font-size: 16px;
	line-height: 30px;
	padding: 0 10px;
	margin-left:30px;
	border:1px solid gray;
}
.g-local>.g-goods-order>.active{
	color:#498e3d;
	border:1px solid #498e3d;
}
/*商品列表*/
.g-goods{
	position: relative;
	width: 1280px;
	overflow: hidden;
}
.g-goods>ul{
	width: 1500px;
	padding-bottom: 10px;
}
.g-goods>ul>li{
	float:left;
	width: 303px;
	height: 300px;
	margin:0 20px 20px 0px;
	border:1px solid #ececec;
	/*border-radius: 3px;*/
}
.g-goods>ul>li:hover{
	border:1px solid green;
}
.g-goods>ul>li>a{
	height: 170px;
}
.g-goods>ul>li>a>img{
	height: 170px;
	width: 303px;
	vertical-align: top;
	/*border-radius: 3px;	*/
}
.g-goods>ul>li>a>.g-goods-details{
	width: 303px;
	height: 130px;
	background-color: #f8f6f7;
	text-align: center;
}
.g-goods-details>h6{
	display: block;
	padding: 16px 0 14px;
	height: 27px;
	font-size: 18px;
	font-weight: bolder;
	color:#333333;
}
.g-goods-details>.g-contents{
	position: relative;
	height: 30px;
	width: 303px;
}
.g-goods-details>.g-contents>.g-left{
	position: absolute;
	width: 180px;
	height: 24px;
	padding: 3px 0;
}
.g-goods-details>.g-contents>.g-left>.grayimg{
	float:right;
	padding-right:5px;
}
.g-goods-details>.g-contents>.g-left>.redimg{
	float:right;
	padding-right:5px;
}
.g-goods-details>.g-contents>.g-right{
	position: absolute;
	top: 0;
	left: 180px;
	width: 123px;
	height: 24px;
	padding: 3px 0;
}
.g-goods-details>.g-contents>.g-right>span{
	float:left;
	color:#ec6a17;
}
.g-goods-details>.g-goods-address{
	width: 303px;
	line-height: 30px;
	font-size: 16px;
}
/*列表跳转块*/
.g-pages{
	position: relative;
	width: 1280px;
	padding-top: 20px;
	padding-bottom: 20px;
	height: 34px;
	text-align: center;
}
/*左边列表页*/
.g-pages>.g-left,.g-pages>.g-right{
	width: 640px;
}
.g-pages>.g-left>.g-pagination{
	position: absolute;
	top: 20px;
	right:640px;
	/*background: red;*/
}
.g-left>.g-pagination>li{
	display: inline-block;
	font-size: 14px;
	padding: 6px 12px;
	margin: 0px 5px;
	border:1px solid gray;
	border-radius: 5px;
}
.g-pages>.g-right>.g-jump{
	position: absolute;
	top: 15px;
	left: 640px;
}
.g-right>.g-jump>li{
	display: inline-block;
	font-size: 18px;
	padding: 6px 12px;
	margin: 0px 5px;
	border-radius: 5px;
}
.g-right>.g-jump>li>input{
	padding: 6px 5px;
	width: 30px;
	font-size: 16px;
	margin: 0px 5px;
	/*border-radius: 3px;*/
}
.g-right>.g-jump>li>a{
	padding: 6px 12px;
	width: 30px;
	margin-left: 10px;
	border-radius: 5px;
	color:white;
	background-color: green;
}

</style>
