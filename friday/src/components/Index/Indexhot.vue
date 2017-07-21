<template>
  <div class="s-indexhot-wrap">
    <div class="s-indexhot-detail" v-for="(item,index) in list">
      <div class="s-hot" :class="item.state=='热卖'?'s-bg1':'s-bg2'">{{item.state}}</div>
      <a href="#/suibiande" :style="{backgroundImage:'url('+item.img+')'}">
        <div class="s-text">
          <p>{{item.title}}</p>
          <p>{{item.text}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'indexhot',
        data () {
            return {
                list:[
                  {
                    state:'热卖',
                    title:'内蒙古草原',
                    text:'羔羊羊肉精',
                    img:require('./img/index-hot1.png')
                  },
                  {
                    state:'新品',
                    title:'新西兰柠檬',
                    text:'鲜橙靓皮 柠香清新',
                    img:require('./img/index-hot2.png')
                  },
                  {
                    state:'热卖',
                    title:'内蒙古草原',
                    text:'羔羊羊肉精',
                    img:require('./img/index-hot3.png')
                  },
                  {
                    state:'新品',
                    title:'新鲜草莓',
                    text:'留住新鲜',
                    img:require('./img/index-hot4.png')
                  },
                ]
            }
        }
    }
</script>


<style scoped>
  .s-indexhot-wrap{
    margin: 20px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .s-indexhot-detail{
    width: 305px;
    height: 140px;
    background: #f2f2f2;
    overflow: hidden;
    position: relative;
  }
  .s-hot{
    width: 80px;
    height: 80px;
    color: white;
    transform: rotate(-45deg);
    transform-origin: left bottom;
    text-align: center;
    line-height: 130px;
    margin-top: -25px;
    font-size: 14px;
  }
  .s-bg1{
    background: #498e3d;
  }
  .s-bg2{
    background: #f08200;
  }
  .s-indexhot-detail>a{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: right center;
    background-size: auto 96px;
    background-image: url("./img/index-hot1.png");
    background-repeat: no-repeat;
  }
  .s-text{
    margin-top: 40px;
    margin-left: 30px;
  }
  .s-text>p{
    margin-bottom: 20px;
  }
  .s-text>p:nth-child(1){
    font-size: 20px;
    line-height: 20px;
    color: #333;
  }
  .s-text>p:nth-child(2){
    font-size: 16px;
    line-height: 16px;
    color: #666;
  }

</style>
