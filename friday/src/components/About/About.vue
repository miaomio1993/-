<template>
  <div>
    <div class="z-wrap">
      <div class="z-header">
          <a>您的当前位置:</a>
          <a href="">首页 <span>></span></a>
          <a href="">礼拜五商城 <span> ></span></a>
         <a href="">新用户注册</a>
      </div>
      <div class="z-middle">
        <div class="z-left">
            <h2>礼拜五商城</h2>
            <ul>
              <li>
                <p>关于礼拜五 <em> ></em></p>
                <a href="">新用户注册</a><a href="">在线下单</a><a href="">支付方式</a>
              </li>
              <li>
                <p>配送说明 <em> ></em></p>
                <a href="">运费说明</a><a href="">配送方式</a><a href="">发票说明</a>
              </li>
              <li>
                <p>售后服务 <em> ></em></p>
                <a href="">退换货原则</a><a href="">服务保障承诺</a><a href="">验货与签收</a><a href="">发票说明</a>
              </li>
              <li>
                <p>加盟礼拜五 <em> ></em></p>
                <a href="">加盟条款</a><a href="">公司简介</a><a href="">服务协议</a>
              </li>
            </ul>
        </div>
        <div class="z-right">
          <h2>关于我们</h2>
          <div class="z-box">
            <h1>新用户注册</h1>
            <h3><span>分类：关于礼拜五</span> <span>日期：2015年9月21日</span></h3>
            <p>
              我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全.
            </p>
            <img src="./img/about-1.png" alt="">
            <p>
              我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全.
            </p>
            <img src="./img/about-2.png" alt="">
            <p>
              我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'about',
        data () {
            return {}
        }
    }
    //可以看做是 new vue 出来的一些属性和参数
</script>


<style scoped>
.z-wrap{
  width: 1280px;
  margin: auto;
  /*border: 1px solid red;*/
}
.z-header{
  background:#e3e3e3 ;
  text-align: left;
  padding-left: 15px;
  line-height: 50px;
  font-size: 18px;
  margin: 15px 0;
}
.z-header>a>span{
  padding: 0 10px;
}
.z-header>a:nth-child(4){
  color: #498e3d;
}
.z-header>a:hover{
  color: #498e3d;
}
  /*中间部分的样式*/
.z-middle{
  overflow: hidden;
}
.z-left{
  width:168px;
  height: 708px;
  border: 1px solid #e3e3e3;
  float: left;

}
.z-left>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
}
.z-left>ul>li>p{
  font-size:16px ;
  text-align: left;
  padding-left: 20px;
  padding-top: 20px;
}
.z-left>ul>li>a{
  font-size: 14px;
  display: block;
  text-align: left;
  padding-left: 20px;
  padding-top: 15px;
}
.z-right{
  width: 1082px;
  height:1149px;
  border: 1px solid #e3e3e3;
  float: right;
  }
.z-right>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
}
.z-box{
  border-top: 1px solid #e3e3e3;
  text-align: center;
  padding: 45px 25px;
}
.z-box>h1{
  font-size: 30px;
  font-weight: 400;
  color: #498e3d;
}
.z-box>h3{
  overflow: hidden;
  font-size: 16px;
  width: 366px;
  line-height: 50px;
  margin: auto;
}
.z-box>h3>span:nth-child(1){
  float: left;
 }
.z-box>h3>span:nth-child(1){
  float: right;
}
.z-box>p{
  font-size: 14px;
  line-height: 30px;
  text-align: left;
}
.z-box>img{
   width: 1008px;
  padding: 29px 0;
 }

</style>
