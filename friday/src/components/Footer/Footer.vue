<template>
  <div class="s-footer">
    <div class="s-footer-top">
      <div class="s-top-cont">
        <div>
          <a href="javascript:void (0)">优鲜保障</a>
        </div>
        <div>
          <a href="javascript:void (0)">全程监控</a>
        </div>
        <div>
          <a href="javascript:void (0)">礼拜五特惠</a>
        </div>
        <div>
          <a href="javascript:void (0)">基地直供</a>
        </div>
        <div>
          <a href="javascript:void (0)">准时送达</a>
        </div>
      </div>
    </div>
    <div class="s-footer-center">
      <div class="s-center-logo">
        <img src="./img/logo.png" alt="">
        <p>服务时间：08:00-22:00 <span>400-800-8820</span></p>
      </div>
      <div class="s-center-wechat">
        <div class="s-wechat-left">
          <img src="./img/footer-wechat.png" alt="">
          <p>礼拜五官方微信</p>
        </div>
        <div class="s-wechat-right">
          <img src="./img/footer-wechat.png" alt="">
          <p>礼拜五APP</p>
        </div>
      </div>
      <div class="s-center-about">
        <div>
          <h5>关于礼拜五</h5>
          <a href="javascript:void(0)">新用户注册</a>
          <a href="javascript:void(0)">在线下单</a>
          <a href="javascript:void(0)">支付方式</a>
        </div>
        <div>
          <h5>配送说明</h5>
          <a href="javascript:void(0)">运费说明</a>
          <a href="javascript:void(0)">配送方式</a>
          <a href="javascript:void(0)">发票说明</a>
        </div>
        <div>
          <h5>售后服务</h5>
          <a href="javascript:void(0)">退换货说明</a>
          <a href="javascript:void(0)">服务保障承若</a>
          <a href="javascript:void(0)">支付方式</a>
        </div>
        <div>
          <h5>加盟礼拜五</h5>
          <a href="javascript:void(0)">加盟条款</a>
          <a href="javascript:void(0)">公司简介</a>
          <a href="javascript:void(0)">服务协议</a>
        </div>
      </div>
    </div>
    <div class="s-footer-bottom">
      <p>版权所有 © 礼拜五  保留所有权利 | 沪ICP备12042163</p>
      <p>礼拜五 纵享品质</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'footer',
        data () {
            return {}
        }
    }
</script>


<style scoped>
  .s-footer{
    margin-top: 20px;
    width: 100%;
  }
  .s-footer-top{
    width: calc(100% - 2px) ;
    height: 106px;
    border:1px solid #ddd;
  }
  .s-top-cont{
    width: 1280px;
    margin: 0 auto;
    height:100%;
    overflow: hidden;
  }
  .s-top-cont>div{
    float: left;
    width: 255px;
    height: 60px;
    border-left: 1px solid #ddd;
    margin-top: 20px;
    text-align: center;
    line-height: 60px;
  }
  .s-top-cont>div:nth-child(1){
    margin-left: -1px;
  }
  .s-top-cont>div>a{
    display: inline-block;
    height: 45px;
    padding-left: 65px;
    line-height: 45px;
    font-size: 24px;
    margin-top: 8px;
    background-size: 45px 45px ;
    color: #333;
  }
  .s-top-cont>div:nth-child(1)>a{
    background: url("./img/footer-top1.png") no-repeat left center;
  }
  .s-top-cont>div:nth-child(2)>a{
    background: url("./img/footer-top2.png") no-repeat left center;
  }
  .s-top-cont>div:nth-child(3)>a{
    background: url("./img/footer-top3.png") no-repeat left center;
  }
  .s-top-cont>div:nth-child(4)>a{
    background: url("./img/footer-top4.png") no-repeat left center;
  }
  .s-top-cont>div:nth-child(5)>a{
    background: url("./img/footer-top5.png") no-repeat left center;
  }

  .s-footer-center{
    height: 200px;
    width: 1280px;
    margin: 0 auto;
  }
  .s-footer-center>div{
    float: left;
  }
  .s-center-logo{
    margin-top: 30px;
    margin-left: 30px;
  }
  .s-center-logo>img{
    vertical-align: top;
  }
  .s-center-logo>p{
    line-height: 20px;
    font-size: 18px;
    color: #666;
    margin-top: 35px;
  }
  .s-center-logo>p>span{
    color: #f08200;
    font-weight: bold;
    padding-left: 28px;
    background: url("./img/footer-phone.png") no-repeat left center;
    background-size: 20px 20px;
    margin-left: 10px;
  }
  .s-center-wechat{
    margin-top: 20px;
    margin-left: 40px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin-right: 40px;
  }
  .s-center-wechat>div>img{
    vertical-align: top;
  }
  .s-center-wechat>div>p{
    text-align: center;
    color: #999;
    font-size: 16px;
    line-height: 16px;
    margin-top: 14px;
  }
  .s-center-about{
    margin-top: 30px;
    overflow: hidden;
  }
  .s-center-about>div{
    float: left;
    width: 123px;
  }
  .s-center-about>div>h5{
    color: #333;
    font-size: 16px;
    line-height: 16px;
    font-weight: normal;
    margin-bottom: 28px;
  }
  .s-center-about>div>a{
    display: block;
    font-weight: normal;
    color: #999;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 17px;
  }
  .s-footer-bottom{
    height: 82px;
    border-top: 1px solid #ddd;
    text-align: center;
  }
  .s-footer-bottom>p:nth-child(1){
    font-size: 14px;
    line-height: 14px;
    color: #333;
    margin-top: 20px;
    margin-bottom: 8px;
  }
  .s-footer-bottom>p:nth-child(2){
    color: #f08200;
    font-size: 16px;
    line-height: 16px;
  }

</style>
