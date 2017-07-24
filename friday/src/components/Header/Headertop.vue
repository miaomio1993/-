<template>
  <div class="s-top">
    <div class="s-top-cont">
      <div class="s-top-left">
        <p>所在城市：<span v-on:click="select()" >{{city}}{{area}}</span><b class="iconfont icon-xiasanjiao">️</b></p>
      </div>
      <div class="s-top-right">
          <div>400-80-8820</div>
          <div>
            <a href="javascript:void(0)">我是商家</a>
          </div>
          <div>
            <a href="javascript:void(0)">我的消息</a>
          </div>
          <div>
            <a href="javascript:void(0)">我的订单</a>
          </div>
          <div id="s-user" v-if="isLogin">
            <span>您好，</span>
            <a href="javascript:void(0)" class="s-user">{{userPhone}}</a>
            <a href="javascript:void(0)" class="s-quit">退出</a>
          </div>
          <div id="s-login" v-if="!isLogin">
            <a href="#/login" class="s-login">登录</a>
            <a href="#/register" class="s-reg">注册</a>
          </div>
      </div>
    </div>
    <headeraddress v-if="turn" @close="close()"></headeraddress>

  </div>
</template>

<script>
    import Headeraddress from "@/components/Header/Headeraddress/Headeraddress.vue";

    export default {
        name: 'headertop',
        data () {
            return {
                province:"河南省",
                city:"郑州市",
                area:"高新区",
                turn:false,
                isLogin:localStorage.userPhone||false,
                userPhone:localStorage.userPhone||'未知',

            }
        },
        created:function () {
          this.$root.$on("selected",this.getData);
          this.$root.$on("userReg",this.getUser);

        },
        methods:{
            select:function () {
              this.turn=true;
            },
            getData:function (data) {
              this.provinces=data.province.value;
              this.city=data.city.value;
              this.area=data.area.value;
            },
            close:function (data) {
              this.turn=data;
            },
            getUser:function (data) {
              this.isLogin=localStorage.userPhone;
              this.userPhone=localStorage.userPhone;
            },

        },
        components:{
            Headeraddress,
        }
    }
</script>


<style scoped>
  .s-top{
    background: #eee;
  }
  .s-top-cont{
    width: 1280px;
    height: 36px;
    margin: 0 auto;
  }
  .s-top-left{
    float: left;
  }
  .s-top-left>p{
    font-size: 14px;
    color: #666;
    height: 36px;
    line-height: 36px;
  }
  .s-top-left>p>span{
    cursor: pointer;
  }
  .s-top-left>p>b{
    font-size: 12px;
    color: #999;
    transform: scale(0.4);
    margin-left: 5px;
  }
  .s-top-right{
    float: right;
    overflow: hidden;
  }
  .s-top-right>div{
    float: right;
    font-size: 14px;
    line-height: 14px;
    color: #666;
    margin-top: 12px;
    padding: 0 15px;
    border-right: 1px solid #666;
  }
  .s-top-right>div>a:hover{
    color: #4b943d;
  }
  .s-top-right>div:nth-child(1){
    border:none;
    padding: 0 0 0 20px;
    margin-left: 15px;
    margin-top: 10px;
    line-height: 16px;
    background: url("img/header-phone.png") no-repeat left center;
    background-size: 16px 16px ;
  }
  #s-user{
    /*color: #4b943d;*/
    margin-right: 5px;
  }
  .s-user{
    color: #4b943d;
  }
  #s-login{

  }
  .s-login{
    padding-right: 10px;
    border-right: 1px solid #666;
  }
  .s-reg{
    margin-left: 5px;
  }

</style>
