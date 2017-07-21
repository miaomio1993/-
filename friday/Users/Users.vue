
<template>
<div>
      <div class="z-middle">
        <div class="z-left">
            <h2>个人中心</h2>
            <ul>
              <li v-for="(item,index1) in center">
                <p>{{item.title}}<em> ></em></p>
                <a v-bind:href="item.lian" v-bind:class="num1==index1&&num==index?'play':''" v-for="(item,index) in item.list" @click="change(index1,index)">{{item.nav}}</a><!--<a href="#/myorder">我的订单</a><a href="#/myscore">我的积分</a><a href="#/scoreorder">积分订单</a><a href="#/mymoney">我的钱包</a>-->
              </li>
              <!--<li>
                <p>会员资料 <em> ></em></p>
                <a href="#/peopledata">个人资料</a><a href="#/address">地址管理</a><a href="#/myhiddren">我的收藏</a><a href="#/lately">最近浏览</a><a href="#/changepassword">修改密码</a>
              </li>
              <li>
                <p>站内信 <em> ></em></p>
                <a href="#/mywords">我的消息</a><a href="#/feedback">意见反馈</a>
              </li>-->
            </ul>
        </div>
        <div class="z-right">
        		<router-view></router-view>
        		<!--<myaccound></myaccound>-->
        			<!--<myorder></myorder>-->
        				<!--<myscore></myscore>-->
        				<!--<scoreorder></scoreorder>-->
        				<!--<mymoney></mymoney>-->
        				<!--<peopledata></peopledata>-->
        </div>
      </div>
 </div>
</template>

<script>
//	import Myaccound from '@/components/Users/Myaccound'
//	import Myorder from '@/components/Users/Myorder'
//	import Myscore from '@/components/Users/Myscore'
//	import Scoreorder from '@/components/Users/Scoreorder'
//	import Mymoney from '@/components/Users/Mymoney'
//	import Peopledata from '@/components/Users/Peopledata'
	 export default {
        name: 'users',
        data () {
            return {
            		num:"0",
            		num1:"0",
            		center:[
            			{
            				title:"交易管理",
            				list:[
            						{
            							lian:'#/myaccound',
            							nav:'我的账户',
            						},
            						{
            							lian:'#/myorder',
            							nav:'我的订单',
            						},
            						{
            							lian:'#/myscore',
            							nav:'我的积分',
            						},
            						{
            							lian:'#/scoreorder',
            							nav:'积分订单',
            						},
            						{
            							lian:'#/mymoney',
            							nav:'我的钱包',
            						},
            				]
            			},
            			{
            				title:"会员资料",
            				list:[
            						{
            							lian:'#/peopledata',
            							nav:'个人资料',
            						},
            						{
            							lian:'#/address',
            							nav:'地址管理',
            						},
            						{
            							lian:'#/myhiddren',
            							nav:'我的收藏',
            						},
            						{
            							lian:'#/lately',
            							nav:'最近浏览',
            						},
            						{
            							lian:'#/changepassword',
            							nav:'修改密码',
            						},
            				]
            			},
            			{
            					title:"站内信",
            				list:[
            						{
            							lian:'#/mywords',
            							nav:'我的消息',
            						},
            						{
            							lian:'#/feedback',
            							nav:'意见反馈',
            						},
            				]
            			}
            		]
            }
        },
        methods:{
        		change:function(index1,index){
        			this.num1 = index1;
        			this.num = index
        			
        		}
        }
//      components:{
//      		Myaccound:Myaccound,
//      		Myorder:Myorder,
//      		Myscore:Myscore,
//      		Scoreorder:Scoreorder,
//      		Mymoney:Mymoney,
//      		Peopledata:Peopledata
//      		
//      }
    }
</script>

<style scoped>
  /*中间部分的样式*/
.z-middle{
width: 1280px;
  margin: auto;
  overflow: hidden;
  padding-top: 20PX;
}
.z-left{
  width:168px;
  height: 625px;
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
.z-left>ul>li>p>em{
	padding: 0 16px;
}
.z-left>ul>li>a{
  font-size: 14px;
  display: block;
  text-align: left;
  padding-left: 20px;
  padding-top: 15px;
}
.z-left>ul>li>a:hover{
	color:  #498e3d;
	text-decoration: underline;
}
.z-right{
  width: 1079px;
  /*height:625px;*/
  /*border: 1px solid #e3e3e3;*/
  float: right;
  }
  .play{
  	color: #498E3D;
  }
</style>
