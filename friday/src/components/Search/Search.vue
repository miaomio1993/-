<template>
  <div class="g-content">
			<!--您的当前位置-->
			<div class="g-location">
				<span>您的当前位置：</span>
				<a href="">首页</a>
				<span>></span>
				<a href="">全部商品</a>
				<span>></span>
				<a href="">{{title}}</a>
			</div>
			<!--商品排序栏-->
			<div class="g-order">
				<div class="g-left">
					<span>排序：</span>
					<button :class="num==1?'active1':''" @click="tab(1)">销量</button>
					<button :class="num==2?'active1':''" @click="tab(2)">价格从低到高</button>
					<button :class="num==3?'active1':''" @click="tab(3)">价格从高到底</button>
					<button :class="num==4?'active1':''" @click="tab(4)">评分最高</button>
				</div>
				<div class="g-right">
					<span>筛选：</span>
					<button class="active2">全部</button>
					<button>全国</button>
					<button>同城</button>
					<button>次日达</button>
				</div>
			</div>
			<!--商品列表栏-->
			<div class="g-goods">
				<ul v-for="item in itemlist" >
					<li :style="{backgroundImage:'url('+item.img+')'}">
						<a href="#/detail" @click="goto(item.id)">
              <div class="g-text">
                <h6>{{item.title}}</h6>
                <span>{{item.subhead}}</span>
              </div>
						</a>
						<div class="g-goods-price">
							<span class="g-price-now">￥{{item.priceNow}}</span>
							<span class="g-price-old">￥{{item.priceOld}}</span>
							<span class="iconfont icon-gouwuche"  @click="addShoppingcar(item.id)"></span>
						</div>
					</li>
				</ul>
			</div>
			<!--底部页面跳转部分-->
			<!--<div class="g-pages">-->
				<!--左边跳转栏-->
				<!--<div class="g-left">-->
					<!--<ul class="g-pagination">-->
						<!--<li class="g-disabled">-->
							<!--<span>上一页</span>-->
						<!--</li>-->
						<!--<li class="g-ctive">-->
							<!--<span>1</span>-->
						<!--</li>-->
						<!--<li><a href="">2</a></li>-->
						<!--<li><a href="">下一页</a></li>-->
					<!--</ul>-->
				<!--</div>-->
				<!--右边跳转栏-->
				<!--<div class="g-right">-->
					<!--<ul class="g-jump">-->
						<!--<li>-->
							<!--<span>共2页&nbsp;到第</span>-->
							<!--<input type="text" class="g-jump-num" value="1"/>-->
							<!--<span>页</span>-->
							<!--<a href="javascript:void(0)">确定</a>-->
						<!--</li>-->
					<!--</ul>-->
				<!--</div>-->
			<!--</div>-->
		</div>
</template>
<script>
  import Login from './Login.vue'
export default {
  name: 'search',
  data () {
    return {
      itemlist:[

      ],
      title:sessionStorage.search,
      num:1,
    }
  },
  components:{
    Login
  },
  created:function () {
      var that=this;
    $.ajax({
      url:'api/search',
      type:"get",
      data:{
        search:sessionStorage.search,
      },
      success:function (data) {
          if(data.err==1){
            for(var i=0;i<data.list.length;i++){
                  var obj={
                    id:data.list[i].id,
                    title:data.list[i].name,
                    subhead:data.list[i].description,
                    priceNow:data.list[i].newPrice,
                    priceOld:data.list[i].oldPrice,
                    img:data.list[i].showImg,
                  };
                  that.itemlist.push(obj);
            }
          }
      },
    })
  },
  methods:{
    goto:function (id) {
      sessionStorage.goodsId=id;
    },
    addShoppingcar:function (id) {
      var that=this;
      if(localStorage.userPhone){
        $.ajax({
          url:'api/addshoppingcar',
          type:'get',
          data:{
            userPhone:localStorage.userPhone,
            goodsId:id,
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
    tab:function (num) {
      this.num=num;
      var that=this;
      $.ajax({
        url:'api/searchfilter',
        type:'get',
        data:{
          act:that.num,
          search:sessionStorage.search
        },
        success:function (data) {
          if(data.err==1){
            that.itemlist=[];
            for(var i=0;i<data.list.length;i++){
              var obj={
                id:data.list[i].id,
                title:data.list[i].name,
                subhead:data.list[i].description,
                priceNow:data.list[i].newPrice,
                priceOld:data.list[i].oldPrice,
                img:data.list[i].showImg,
              };
              that.itemlist.push(obj);
            }
          }
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*中间内容*/
	.g-content{
	width: 1280px;
	margin: 0 auto;
}
/*您的位置*/
.g-content>.g-location{
  margin-top: 20px;
	padding-left: 20px;
	padding-top: 18px;
	height: 36px;
	background-color: #f4f4f4;
}
/*商品排序栏*/
.g-content>.g-order{
	position: relative;
	padding-top: 20px;
	height: 24px;
	padding-bottom: 20px;
}
/*商品排序栏左*/
.g-order>.g-left{
	position: absolute;
	height: 26px;
	color:#333;
}
.g-order>.g-left>span{
	display: inline-block;
	padding:1px 4px 3px 1px;
}
.g-order>.g-left>button{
	display: inline-block;
	margin-left: 20px;
	padding:2px 14px;
	font-size: 14px;
	background-color: #fff;
	border:1px solid gray;
  cursor: pointer;
}
.g-order>.g-left>.active1{
	border:1px solid #498e3d;
	color:#498e3d;
}
/*商品排序栏右*/
.g-order>.g-right{
	position: absolute;
	top:20px;
	right: 0;
}
.g-order>.g-right>span{
	display: inline-block;
	padding:1px 4px 3px 0px;
}
.g-order>.g-right>button{
	display: inline-block;
	margin-left: 20px;
	padding:2px 4px;
	font-size: 14px;
	background-color: #fff;
	border:1px solid gray;
}
.g-order>.g-right>.active2{
	background-color: #498e3d;
	color:white;
}
/*商品列表栏*/
.g-goods{
	position: relative;
	width: 1280px;
	overflow: hidden;
}
.g-goods>ul{
	width: 1500px;
}
.g-goods>ul>li{
	float:left;
	width: 303px;
	height: 431px;
	margin:0 20px 20px 0;
	border:1px solid gray;
	border-radius: 3px;
  background-size:303px auto ;
  background-repeat: no-repeat;
}
/*利用容器包容器，超出隐藏的原理实现效果
--设置一个小容器，里面包裹一个大容器，超出小容器的隐藏，即可省去下面这组样式*/
/*.g-content-goods>ul>li:nth-child(4n+4){
	margin-right: 0;
	width: 303px;
	height: 431px;
	border:1px solid gray;
}*/
.g-goods>ul>li>a{
  display: block;
  width: 100%;
	height: 365px;
  position: relative;
}
.g-goods>ul>li>a>.g-text{
  position: absolute;
  left: 30px;
  bottom: 0;
}
.g-goods>ul>li>a>.g-text>h6{
	font-size: 18px;
  font-weight: bolder;
}
.g-goods>ul>li>a>.g-text>span{
	display:block;
	padding-top: 10px;
	padding-bottom: 10px;
	font-size: 14px;
	color:#adadad;
}
.g-goods>ul>li>.g-goods-price{
	position: relative;
	height: 34px;
	margin-bottom:20px;
}
/*商品新老价格部分*/
ul>li>.g-goods-price>.g-price-now{
	font-size: 20px;
	color:#ff5757;
	padding-left: 30px;
}
ul>li>.g-goods-price>.g-price-old{
	padding-left: 10px;
	text-decoration: line-through;
}
ul>li>.g-goods-price>.icon-gouwuche{
	position: absolute;
	top: 0;
	right: 20px;
	color:#f08200;
	font-size: 30px;
  cursor: pointer;
}
/*页面跳转部分*/
.g-pages{
	position: relative;
	width: 1280px;
	padding-top: 20px;
	padding-bottom: 40px;
	height: 44px;
	text-align: center;
}
.g-pages>.g-left,.g-pages>.g-right{
	float:left;
	width: 640px;
	height: 44px;
}
.g-pages>.g-left>.g-pagination{
	position: absolute;
	top: 25px;
	right:640px;
}
/*左边列表页*/
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
	top: 20px;
	left: 640px;
}
/*右边列表页*/
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
	border-radius: 3px;
	border:1px solid gray;
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
