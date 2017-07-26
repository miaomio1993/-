import Vue from 'vue'
import Router from 'vue-router'
import Pageindex from '@/components/Pageindex.vue'
import Index from '@/components/Index/Index'
import Local from '@/components/Local/Local'

import Indexmain from '@/components/Indexmain'

import About from '@/components/About/About'

import Users from '@/components/Users/Users'
import Myaccound from '@/components/Users/Myaccound'
import Myorder from '@/components/Users/Myorder'
import Myscore from '@/components/Users/Myscore'
import Scoreorder from '@/components/Users/Scoreorder'
import Mymoney from '@/components/Users/Mymoney'
import Peopledata from '@/components/Users/Peopledata'
import Address from '@/components/Users/Address'
import Myhiddren from '@/components/Users/Myhiddren'
import Lately from '@/components/Users/Lately'
import Changepassword from '@/components/Users/Changepassword'
import Mywords from '@/components/Users/Mywords'
import Feedback from '@/components/Users/Feedback'
import Cardchange from '@/components/Users/Cardchange'
import Addaddress from '@/components/Users/Addaddress'
import Wordsdetail from '@/components/Users/Wordsdetail'


//7月17日加了一个组件(个人中心里面的组件)
import Scoredetail from '@/components/Users/Scoredetail'
import Peopledatabind1 from '@/components/Users/Peopledatabind1'
import Peopledatabind2 from '@/components/Users/Peopledatabind2'
import Peopledatabind3 from '@/components/Users/Peopledatabind3'
import Orderdetail from '@/components/Users/Orderdetail'
import Orderspeak from '@/components/Users/Orderspeak'
import Bill from '@/components/Users/Bill'
/****************************/

//7.18添加的组件
import Detail from '@/components/Detail/Detail.vue'
import Register from '@/components/Register/Register'
import Applyfor from '@/components/Register/Applyfor'
import Phoneconfirm from '@/components/Register/Phoneconfirm'
import Numberpassword from '@/components/Register/Numberpassword'
import Forgetpassword from '@/components/Register/Forgetpassword'
/********************/

//7.19添加的组件
import TotalCity from '@/components/TotalCity/TotalCity'
import List from '@/components/Detail/List'
import Search from '@/components/Search/Search'
import Unfind from '@/components/Unfind/Unfind'
import Special from '@/components/Special/Special'

//7.20添加的组件
import Shoppingcar from '@/components/Shoppingcar/Shoppingcar'

import Firmorder from '@/components/Shoppingcar/Firmorder'
import SubmitForm from '@/components/SubmitForm/SubmitForm'
import TotalSuccess from '@/components/TotalCity/TotalSuccess.vue'
import Searchunfind from '@/components/Search/Searchunfind.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pageindex',
      component: Pageindex,
      children:[
        {
          path: '/',
          name: 'Indexmain',
          component: Indexmain,
          children:[
            {
              path: '/',
              name: 'Index',
              component: Index,
            }
          ]
        }
      ]
    },
    {
      path: '/index',
      name: 'Pageindex',
      component: Pageindex,
      children:[
        {
          path: '/',
          name: 'Indexmain',
          component: Indexmain,
          children:[
            {
              path: '/',
              name: 'Index',
              component: Index,
            },
            {
              path: '/local',
              name: 'Local',
              component: Local,
            },
            {
              path: '/about',
              name: 'About',
              component: About,
            },
            {
              path: '/totalcity',
              name: 'TotalCity',
              component: TotalCity,
            },
            {
              path: '/special',
              name: 'Special',
              component: Special,
            },
            {
              path: '/list',
              name: 'List',
              component: List,
            },
            {
              path: '/detail',
              name: 'Detail',
              component: Detail,
            },
            {
              path: '/search',
              name: 'Search',
              component: Search,
            },
            {
              path: '/searchunfind',
              name: 'Searchunfind',
              component: Searchunfind,
            },
            {
              path: '/users',
              name: 'Users',
              component: Users,
              children:[
                {
                  path: '/',
                  name: 'Myaccound',
                  component:Myaccound,
                },
                {
                  path: '/myaccound',
                  name: 'Myaccound',
                  component:Myaccound,
                },
                {
                  path: '/cardchange',
                  name: 'Cardchange',
                  component:Cardchange,
                },
                {
                  path: '/myorder',
                  name: 'Myorder',
                  component:Myorder,
                },
                {
                  path: '/myscore',
                  name: 'Myscore',
                  component:Myscore,
                },
                {
                  path: '/scoreorder',
                  name: 'Scoreorder',
                  component:Scoreorder,
                },
                {
                  path: '/mymoney',
                  name: 'Mymoney',
                  component:Mymoney,
                },
                {
                  path: '/peopledata',
                  name: 'Peopledata',
                  component:Peopledata,
                },
                {
                  path: '/address',
                  name: 'Address',
                  component:Address,
                },
                {
                  path: '/addaddress',
                  name: 'Addaddress',
                  component:Addaddress,
                },
                {
                  path: '/myhiddren',
                  name: 'Myhiddren',
                  component:Myhiddren,
                },
                {
                  path: '/lately',
                  name: 'Lately',
                  component:Lately,
                },
                {
                  path: '/changepassword',
                  name: 'Changepassword',
                  component:Changepassword,
                },
                {
                  path: '/mywords',
                  name: 'Mywords',
                  component:Mywords,
                },
                {
                  path: '/look',
                  name: 'Wordsdetail',
                  component:Wordsdetail,
                },
                {
                  path: '/feedback',
                  name: 'Feedback',
                  component:Feedback,
                },
                //7月17日注册
                {
                  path: '/scoredetail',
                  name: 'Scoredetail',
                  component:Scoredetail,
                },
                {
                  path: '/peopledatabind1',
                  name: 'Peopledatabind1',
                  component:Peopledatabind1,
                },
                {
                  path: '/peopledatabind2',
                  name: 'Peopledatabind2',
                  component:Peopledatabind2,
                },
                {
                  path: '/peopledatabind3',
                  name: 'Peopledatabind3',
                  component:Peopledatabind3,
                },
                {
                  path: '/orderdetail',
                  name: 'Orderdetail',
                  component:Orderdetail,
                },
                {
                  path: '/orderspeak',
                  name: 'Orderspeak',
                  component:Orderspeak,
                },
                {
                  path: '/bill',
                  name: 'Bill',
                  component:Bill,
                },
                /*****************************/
              ]
            },
          ]
        },
        {
          path: '/shoppingcar',
          name: 'Shoppingcar',
          component: Shoppingcar,
        },
        {
          path: '/firmorder',
          name: 'Firmorder',
          component: Firmorder,
        },
        {
          path: '/submitform',
          name: 'SubmitForm',
          component: SubmitForm,
        },
        {
          path: '/paysuccess',
          name: 'TotalSuccess',
          component: TotalSuccess,
        },
        {
          path: '/register',
          name: 'Register',
          component: Register,
          children:[
            {
              path: '/',
              name: 'Applyfor',
              component: Applyfor,

            },
            {
              path: '/applyfor',
              name: 'Applyfor',
              component: Applyfor,

            },
            {
              path: '/numberpassword',
              name: 'Numberpassword',
              component: Numberpassword,
            },
            {
              path: '/forgetpassword',
              name: 'Forgetpassword',
              component: Forgetpassword,
            },
            {
              path: '/phoneconfirm',
              name: 'Phoneconfirm',
              component: Phoneconfirm,
            }
          ]
        },
        {
          path: '/login',
          name: 'Register',
          component: Register,
          children:[
            {
              path: '/',
              name: 'Phoneconfirm',
              component: Phoneconfirm,
            }
          ]
        }
      ]
    },
    {
      path: '*',
      name: 'Unfind',
      component: Unfind,
    }
  ]
})
