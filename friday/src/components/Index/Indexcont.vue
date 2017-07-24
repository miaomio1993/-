<template>
  <div class="s-index-cont">
    <countlist :list="count1"></countlist>
    <countlist :list="count2"></countlist>
    <countlist :list="count3"></countlist>
    <countlist :list="count4"></countlist>
  </div>

</template>

<script>
  import Countlist from './Countlist.vue'
    export default {
        name: 'indexcont',
        data () {
            return {
              count1:{
                title:"新鲜水果",
                titleImg:require('./img/index-cont-title1.png'),
                subhead:"采自新疆优质水果生产基地，品质一流",
                target:'',
                itemlist:[
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('/Users/lanouhn/Desktop/bestTeam/friday/src/components/Index/img/index-cont1-4.png'),
                  },
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('/Users/lanouhn/Desktop/bestTeam/friday/src/components/Index/img/index-cont1-2.png'),
                  },
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('/Users/lanouhn/Desktop/bestTeam/friday/src/components/Index/img/index-cont1-3.png'),
                  },
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('/Users/lanouhn/Desktop/bestTeam/friday/src/components/Index/img/index-cont1-4.png'),
                  }
                ]
              },
              count2:{
                title:"水产海鲜",
                titleImg:require('./img/index-cont-title2.png'),
                subhead:"国内外新鲜到港的鱼虾蟹贝，我们全都有",
                target:'',
                itemlist:[
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('./img/index-cont2-1.png'),
                  },
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('./img/index-cont2-2.png'),
                  },
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('./img/index-cont2-3.png'),
                  },
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('./img/index-cont2-4.png'),
                  }
                ]
              },
              count3:{
                title:"肉类禽蛋",
                titleImg:require('./img/index-cont-title3.png'),
                subhead:"采自新疆优质水果生产基地，品质一流",
                target:'',
                itemlist:[
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('./img/index-cont1-1.png'),
                  },
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('./img/index-cont1-2.png'),
                  },
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('./img/index-cont1-3.png'),
                  },
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('./img/index-cont1-4.png'),
                  }
                ]
              },
              count4:{
                title:"蛋奶速食",
                titleImg:require('./img/index-cont-title4.png'),
                subhead:"国内外新鲜到港的鱼虾蟹贝，我们全都有",
                target:'',
                itemlist:[
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('./img/index-cont2-1.png'),
                  },
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('./img/index-cont2-2.png'),
                  },
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('./img/index-cont2-3.png'),
                  },
                  {
                    id:'',
                    title:'新西兰佳沛黄金奇异果',
                    subhead:'果肉绵密、花蜜般的甘甜百吃不厌',
                    priceNow:28.80,
                    priceOld:40.00,
                    img:require('./img/index-cont2-4.png'),
                  }
                ]
              }
            }
        },
        components:{
            Countlist
        },
        created:function () {
          var that=this;
          $.ajax({
            url:'api/index',
            type:"get",
            data:{
              act:"count1"
            },
            success:function (data) {
              for(var i=0;i<data.length;i++){
                that.count1.itemlist[i].id=data[i].id;
                that.count1.itemlist[i].title=data[i].name;
                that.count1.itemlist[i].subhead=data[i].description;
                that.count1.itemlist[i].priceNow=data[i].newPrice;
                that.count1.itemlist[i].priceOld=data[i].oldPrice;
                that.count1.itemlist[i].img=require("./img/"+data[i].showImg);
              }
            },
          });

          $.ajax({
            url:'api/index',
            type:"get",
            data:{
              act:"count2"
            },
            success:function (data) {
              for(var i=0;i<data.length;i++){
                that.count2.itemlist[i].id=data[i].id;
                that.count2.itemlist[i].title=data[i].name;
                that.count2.itemlist[i].subhead=data[i].description;
                that.count2.itemlist[i].priceNow=data[i].newPrice;
                that.count2.itemlist[i].priceOld=data[i].oldPrice;
                that.count2.itemlist[i].img=data[i].showImg;
              }
            },
          });

          $.ajax({
            url:'api/index',
            type:"get",
            data:{
              act:"count3"
            },
            success:function (data) {
              for(var i=0;i<data.length;i++){
                that.count3.itemlist[i].id=data[i].id;
                that.count3.itemlist[i].title=data[i].name;
                that.count3.itemlist[i].subhead=data[i].description;
                that.count3.itemlist[i].priceNow=data[i].newPrice;
                that.count3.itemlist[i].priceOld=data[i].oldPrice;
                that.count3.itemlist[i].img=data[i].showImg;
              }
            },
          });

          $.ajax({
            url:'api/index',
            type:"get",
            data:{
              act:"count4"
            },
            success:function (data) {
              for(var i=0;i<data.length;i++){
                that.count4.itemlist[i].id=data[i].id;
                that.count4.itemlist[i].title=data[i].name;
                that.count4.itemlist[i].subhead=data[i].description;
                that.count4.itemlist[i].priceNow=data[i].newPrice;
                that.count4.itemlist[i].priceOld=data[i].oldPrice;
                that.count4.itemlist[i].img=data[i].showImg;
              }
            },
          });

        }
    }
</script>


<style scoped>

</style>
