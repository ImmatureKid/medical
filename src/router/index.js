import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/Page/Home"
import Login from "@/components/Page/Login"
import Common from "@/components/Page/Common"
import Announcementquery from "@/components/Page/AnnouncementQuery"
import Sickappointment from "@/components/Page/Sickappointment"
import Reimburse from "@/components/Page/Reimburse"
import Informationquery from "@//components/Page/Informationquery"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path:"/",
          name:"Common",
          component:Common,
          exact:true
        },{
          path:"/Announcementquery/",
          name:"Announcementquery",
          component:Announcementquery
        },{
          path:"/Sickappointment/",
          name:"Sickappointment",
          component:Sickappointment
        },{
          path:"/Reimburse/",
          name:"Reimburse",
          component:Reimburse
        },{
          path:"/Informationquery/",
          name:"Informationquery",
          component:Informationquery
        }
      ]
    }, {
      path: '/Login',
      name: 'Login',
      component: Login
    },
  ]
})
