<template>
  <div class="s-shoppingcar-wrap">
    <shoppingcarhead></shoppingcarhead>
    <div class="s-shoppingcar">
      <div class="s-shoppingcar-title">
        <span class="iconfont icon-gouwuche"></span>购物车
      </div>
      <shoppingcardetail :list="carList"></shoppingcardetail>
      <div class="s-total">
        商品总计：<span>￥<i>{{total}}</i></span><a href="javascript:void(0)">立即购买</a>
      </div>
    </div>
  </div>
</template>

<script>
    import Shoppingcarhead from "@/components/Shoppingcar/Shoppingcar-head.vue";
    import Shoppingcardetail from "@/components/Shoppingcar/Shoppingcar-detail.vue";
    export default {
        name: 'shoppingcar',
        data () {
          return {
            total:0,
            carList:[
//              {
//                img:require('./img/shoppingcar-detail1.png'),
//                name:"云南蒙自石榴8个装",
//                kind:"8个装",
//                price:569,
//                num:1,
//              },
//              {
//                img:require('./img/shoppingcar-detail1.png'),
//                name:"云南蒙自石榴8个装",
//                kind:"8个装",
//                price:122,
//                num:2,
//              },
//              {
//                img:require('./img/shoppingcar-detail1.png'),
//                name:"云南蒙自石榴8个装",
//                kind:"8个装",
//                price:233,
//                num:3,
//              }
            ]
          }
        },
        components:{
          Shoppingcarhead,
          Shoppingcardetail,
        },
        created:function () {
          this.$root.$on("change",this.changes);
          var that=this;
          $.ajax({
            url:'api/shoppingcar',
            type:'get',
            data:{
              userPhone:localStorage.userPhone,
              act:'num',
            },
            success:function (data) {
              sessionStorage.shoppingcarId=data.goods;
              var arr=data.goods.split('$');
              for(var i=0;i<arr.length;i++){
                $.ajax({
                  url:'api/detail',
                  type:'get',
                  data:{
                    id:arr[i],
                  },
                  success:function (data) {
                    that.carList.push({
                      img:data.imglist[0],
                      name:data.name,
                      kind:"500g",
                      price:data.newPrice,
                      num:1,
                    })
                  }
                })
              }
            }
          })
        },
        methods:{
          changes:function (data) {
            this.total=data;
          }
        }
    }
</script>


<style scoped>
  .s-shoppingcar-wrap{
    width: 100%;
  }
  .s-shoppingcar{
    width: 1280px;
    margin: 0 auto;
  }
  .s-shoppingcar-title{
    line-height: 58px;
    font-size: 18px;
    color: #666;
  }
  .s-shoppingcar-title>span{
    color: #f39c36;
    font-size: 20px;
    font-weight: bold;
    margin-right: 15px;
  }
  .s-total{
    margin-top: 40px;
    text-align: right;
    line-height: 50px;
    font-size: 18px;
    color: #666;
  }
  .s-total>span,.s-total>span>i{
    color: #ff5757;
    font-size: 20px;
    font-weight: bold;
  }
  .s-total>a{
    width: 150px;
    height: 50px;
    display: inline-block;
    text-align: center;
    font-size: 20px;
    color: white;
    font-weight: normal;
    border-radius: 5px;
    margin-left: 30px;
    background: #f08200;
  }
</style>
