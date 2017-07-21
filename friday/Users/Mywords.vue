<template>
<div>
	<div class="z-mywords">
		<h2>我的消息</h2>
		<ul class="z-words">
			<li>
				<i>标题</i><span>发送时间</span><span>状态</span><span>操作</span>
			</li>
			<li class="z-remove" v-for="(item,index) in items">
				<i>{{item.states}}</i><span>{{item.times}}</span><span>{{items.islook}}</span><span><a href="#/look">查看|</a><a href="javascript:void(0)" @click="remove(index)">删除</a></span>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
  export default{
      data(){
          return{
            items:[
              {
                  states:"您的货物已发货",
                  times:"2015年9月23日",
                  islook:"未查看"

              },
              {
                states:"您的货物已发货",
                times:"2015年9月23日",
                islook:"未查看"

              },
              {
                states:"您的货物已发货",
                times:"2015年9月23日",
                islook:"未查看"

              },
              {
                states:"您的货物已发货",
                times:"2015年9月23日",
                islook:"未查看"

              }
            ]
          }
      },
    methods:{
          remove:function (index) {
            this.items.splice(index,1)
          }
    }

  }
</script>

<style scoped>
	.z-mywords{
width: 1077px;
border: 1px solid #e3e3e3;
}
.z-mywords>h2{
  line-height: 60px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
  text-align: left;
  padding-left: 20px;
  font-weight: 400;
}
 .z-words{
	height: 522px;
	margin: 20px;
	text-align: center;
	border: 1px solid #e3e3e3;
}
.z-words>li{
	line-height: 50px;
	display: flex;
	justify-content: space-around;
	border-bottom: 1px solid #e3e3e3;
}
.z-words>li:nth-child(1){
	background: #e3e3e3;

}
.z-words>li>i{
	width: 200px;
}
.z-words>li>span:nth-child(4) a{
	color: #498e3d;
}


</style>
