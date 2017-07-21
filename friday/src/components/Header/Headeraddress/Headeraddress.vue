<template>
  <div class="wrap">
    <div class="s-cover">
      <p>请选择您的收货地址:</p>
      <div class="s-select">
        <vdistpicker></vdistpicker>
      </div>
      <button @click="ok()">确定</button>
    </div>
  </div>
</template>

<script>
  import Vdistpicker from  "@/components/Header/Headeraddress/v-distpicker/Distpicker"
  export default {
        name: 'headeraddress',
        data () {
            return {}
        },
        methods:{
            ok:function () {
              this.$emit("close",true);
            }
        },
        components:{
            Vdistpicker
        }
    }
</script>


<style scoped>
  .wrap{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 1024;
  }
  .s-cover{
    width: 632px;
    height: 290px;
    background: url("./img/c_bg.png") no-repeat center center;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -351px;
    margin-top: -177px;
    padding-left: 70px;
    padding-top: 65px;
  }
  .s-select{
    margin-top: 70px;
  }
  button{
    width: 150px;
    height: 35px;
    background: #f08200;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    line-height: 35px;
    margin-top: 60px;
    margin-left: 200px;
  }
</style>
