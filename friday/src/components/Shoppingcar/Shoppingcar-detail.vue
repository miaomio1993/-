<template>
  <div class="s-shoppingcar">
    <div class="s-header">
      <div class="s-tradename">
        <input type="checkbox">爱果果水果店
      </div>
      <div class="kind">规格</div>
      <div class="price">单价</div>
      <div class="number">数量</div>
      <div class="classtotal">金额</div>
      <div class="handle">操作</div>
    </div>
    <div class="s-detail" v-for="(item,index) in list">
      <div class="s-goods">
        <input type="checkbox"><img :src="item.img" alt=""><p>{{item.name}}</p>
      </div>
      <div class="s-kind">{{item.kind}}</div>
      <div class="s-price">￥{{item.price}}</div>
      <div class="s-number">
        <button @click="reduce(index)">-</button><input type="number" v-model="item.num"><button @click="add(index)">+</button>
      </div>
      <div class="s-classtotal">￥{{item.num*item.price}}</div>
      <button class="s-del" @click="del(index)">删除</button>
    </div>
    <div class="s-sum">
      商品金额 <span>￥<i>{{total}}</i></span>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Shoppingcar-head',
        data () {
            return {
              total:0,
            }
        },
        props:{
          list:Array,
        },
        created:function () {
          setTimeout(function () {
            for(var i=0;i<this.list.length;i++){
              this.total+=this.list[i].num*this.list[i].price;
            }
            this.$root.$emit("change",this.total);
          }.bind(this),500)

        },
        methods:{
            add:function (index) {
              this.list[index].num++;
              this.total=0;
              for(var i=0;i<this.list.length;i++){
                this.total+=this.list[i].num*this.list[i].price;
              }
              this.$root.$emit("change",this.total);
            },
            reduce:function (index) {
              if(this.list[index].num>1){
                this.list[index].num--;
              }
              this.total=0;
              for(var i=0;i<this.list.length;i++){
                this.total+=this.list[i].num*this.list[i].price;
              }
              this.$root.$emit("change",this.total);
            },
            del:function (index) {
              var that=this;
              var arr=sessionStorage.shoppingcarId.split("$");
              arr.splice(index,1);
              var str=arr.join("$");
              $.ajax({
                url:'api/shopingcarDel',
                type:'get',
                data:{
                  userPhone:localStorage.userPhone,
                  goods:str,
                },
                success:function (data) {
                  if(data.err==1){
                    sessionStorage.shoppingcarId=str;
//                    console.log(str);
                    that.list.splice(index,1);
                    that.total=0;
                    for(var i=0;i<that.list.length;i++){
                      that.total+=that.list[i].num*that.list[i].price;
                    }
                    that.$root.$emit("change",that.total);
                  }
                }
              })
            },
        }
    }
</script>

<style scoped>
  .s-shoppingcar{
    width: 1278px;
    border: 1px solid #e9e9e9;
  }
  .s-header{
    height: 48px;
    background: #f2f2f2;
    padding-left: 20px;
  }
  .s-header>div{
    float: left;
    text-align: center;
    color: #404040;
    font-size: 18px;
    line-height: 48px;
  }
  .s-header>.s-tradename{
    width: 395px;
    text-align: left;
  }
  .s-header>.s-tradename>input{
    margin-right: 20px;
  }
  .kind{
    width: 150px;
  }
  .price{
    width: 190px;
  }
  .number{
    width: 190px;
  }
  .classtotal{
    width: 170px;
  }
  .handle{
    width: 163px;
  }
  .s-detail{
    padding: 20px;
    padding-right: 0;
    overflow: hidden;
    border-bottom: 1px solid #e9e9e9;
  }
  .s-detail>div{
    float: left;
    text-align: center;
    line-height: 80px;
  }
  .s-detail>.s-goods{
    width: 395px;
    line-height: 80px;
    text-align: left;
    overflow: hidden;
  }
  .s-detail>.s-goods>input{
    margin-right: 20px;
    float: left;
    margin-top: 33px;
  }
  .s-detail>.s-goods>img{
    width: 80px;
    height: 80px;
    float: left;
  }
  .s-detail>.s-goods>p{
    float: left;
    margin-left: 20px;
    color: #666;
  }
  .s-kind{
    width: 150px;
    color: #999;
  }
  .s-price{
    width: 190px;
    color: #999;
  }
  .s-number{
    width: 190px;
  }
  .s-number>button{
    width: 28px;
    background: #f2f2f2;
    height: 28px;
    border: 1px solid #d3d3d3;
    cursor: pointer;
  }
  .s-number>input{
    width: 46px;
    height: 26px;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    text-align: center;
  }
  .s-classtotal{
    width: 170px;
    color: #333;
  }
  .s-del{
    width: 163px;
    margin-top: 30px;
    color: #498e3d;
    cursor: pointer;
  }
  .s-sum{
    line-height: 80px;
    text-align: right;
    padding-right: 40px;
    font-size: 20px;
    color: #666;
  }
  .s-sum>span{
    color: #ff8484;
    font-weight: bold;
    margin-left: 20px;
  }
  .s-sum>span>i{
    font-weight: bold;
  }
</style>
