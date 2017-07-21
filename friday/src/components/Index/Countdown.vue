<template>
  <div class="s-wrap">
    距离开始<i></i><span>{{day}}天</span><i></i><span>{{hours}}</span><i>:</i><span>{{min}}</span><i>:</i><span>{{sec}}</span>
  </div>
</template>

<script>
    export default {
        name: 'countdown',
        data () {
            return {
                day:"",
                hours:"",
                min:"",
                sec:""
            }
        },
        props:{
          endTime:{
            type: String,
            default :''
          },
          callback : {
            type : Function,
            default :''
          }
        },
      mounted () {
        this.countdowm(this.endTime)
      },
      methods: {
        countdowm(timestamp){
          let self = this;
          let timer = setInterval(function(){
            let nowTime = new Date();
            let endTime = new Date(timestamp * 1000);
            let t = endTime.getTime() - nowTime.getTime();
            if(t>0){
              self.day = Math.floor(t/86400000);
              self.hours=Math.floor((t/3600000)%24);
              self.min=Math.floor((t/60000)%60);
              self.sec=Math.floor((t/1000)%60);
            }else{
              clearInterval(timer);
              self._callback();
            }
          },1000);
        },
        _callback(){
          if(this.callback && this.callback instanceof Function){

          }
        }
      }
    }
</script>


<style scoped>
  .s-wrap{
    line-height: 40px;
    font-size: 22px;
    color: #498e3d;
  }
  .s-wrap>span{
    width: 60px;
    height: 40px;
    display: inline-block;
    background: #f08200;
    color: white;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
    vertical-align: top;
    font-size: 18px;
  }
  .s-wrap>i{
    font-size: 18px;
    width: 22px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    color: #f08200;
    text-align: center;
    font-weight: bold;
    vertical-align: top;
  }

</style>
