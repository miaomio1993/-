<template>
  <div class="s-header-nav-wrap">
    <div class="s-header-nav">
      <div class="s-list">
        <span>全部分类<i class="iconfont icon-xia"></i></span>
        <ul class="s-menu">
          <li v-for="(item,index) in list">
            <a href="javascript:void(0)" :style="{backgroundImage: 'url(' + item.img + ')'}">{{item.title}}</a>
            <ul class="s-secondmenu">
              <li v-for="second in item.arr">
                <a href="javascript:void(0)">{{second}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <nav>
        <a href="#/" class="s-active">
          <span>首页</span>
        </a>
        <a href="#/local">
          <span>同城</span>
        </a>
        <a href="#/about">
          <span>礼拜五</span>
        </a>
        <a href="#/totalcity">
          <span>积分商城</span>
        </a>
        <a href="#/special">
          <span>导航+</span>
        </a>
      </nav>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'headernav',
        data () {
            return {
              list:[
                {
                  title:"新鲜水果",
                  img:require("./img/header-nav1.png"),
                  arr:["草莓","葡萄","香蕉","苹果"],
                },
                {
                  title:"生猛海鲜",
                  img:require("./img/header-nav2.png"),
                  arr:["带鱼","对虾","海鱼","龙虾","牡蛎"],
                },
                {
                  title:"肉类家禽",
                  img:require("./img/header-nav3.png"),
                  arr:["土鸡","牛肉","猪肉","羊肉","驴肉","兔肉"],
                },
                {
                  title:"蛋奶素食",
                  img:require("./img/header-nav4.png"),
                  arr:["牛奶","酸奶","豆奶粉","面包甜点"],
                },
                {
                  title:"田园蔬菜",
                  img:require("./img/header-nav5.png"),
                  arr:["有机蔬菜","蔬菜果篮","地产蔬菜","进口蔬菜"],
                },
                {
                  title:"零食酒水",
                  img:require("./img/header-nav6.png"),
                  arr:["零食","特色果干","休闲冲饮","茶叶","白酒","啤酒","葡萄酒"],
                },
                {
                  title:"粮油杂货",
                  img:require("./img/header-nav7.png"),
                  arr:["优选米面","优选杂粮","粮油调味","其他食材"],
                },
                {
                  title:"礼品卡卷",
                  img:require("./img/header-nav8.png"),
                  arr:["优惠券","打折卷","满就送"],
                },
                {
                  title:"家具用品",
                  img:require("./img/header-nav9.png"),
                  arr:["洗衣液","保健品","洗护用品"],
                }
              ]
            }
        }
    }
</script>


<style scoped>
  .s-header-nav-wrap{
    width: 100%;
    height: 49px;
    border-bottom: 1px solid #e3e3e3;
  }
  .s-header-nav{
    width: 1280px;
    margin: 0 auto;
    height: 49px;
    text-align: center;
    font-size: 16px;
  }
  .s-list{
    float: left;
    width: 170px;
    position: relative;
    line-height: 49px;
    color: #333;
  }
  .s-list>span>i{
    margin-left: 5px;
    font-size: 14px;
  }
  .s-list:hover>.s-menu{
    display: block;
  }
  .s-menu{
    width: 170px;
    height: 498px;
    border-top:1px solid #efeeec;
    border-bottom:1px solid #efeeec;
    position: absolute;
    top: 49px;
    left: 0;
    display: none;
    background: #fff;
    z-index: 50;
  }
  .s-menu>li{
    height: 55.5px;
    border: 1px solid #efeeec;
    border-top: none;
    line-height: 55.5px;
    width: 170px;
    box-sizing: border-box;
  }
  .s-menu>li:hover{
    background: #ebffe7;
    border-right: none;
  }
  .s-menu>li:hover>.s-secondmenu{
    display: block;
  }
  .s-menu>li>a{
    padding-left:33px;
    background: url("./img/header-nav1.png") no-repeat left center;
    background-size: 25px 22px;
    color: #666;
  }
  .s-secondmenu{
    position: absolute;
    top: 0;
    left: 170px;
    height: 498px;
    border:1px solid #efeeec;
    border-left: none;
    width: 450px;
    background: #ebffe7;
    display: none;
  }
  .s-secondmenu>li{
    height: 50px;
    line-height: 50px;
    text-align: left;
    padding-left: 40px;
  }
  nav{
    float: left;
    margin-left: -1px;
  }
  nav>a{
    float: left;
    display: block;
    line-height: 49px;
    color: #333;
  }
  nav>a:hover{
    background: #f08200;
    color: white;
  }
  nav>.s-active{
    background: #f08200;
    color: white;
  }
  nav>a>span{
    display: inline-block;
    font-size: 16px;
    line-height: 18px;
    padding: 0 60px;
    border-left: 1px solid #e8e8e8;
  }

</style>
