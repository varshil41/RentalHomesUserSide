import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Homepage from './UserComponents/Homepage.vue'
import Menu1 from './UserComponents/menu1.vue'
import login from './UserComponents/Loginpage.vue'
import register from './UserComponents/registerpage.vue'
import addproperty from './UserComponents/AddPropertypage.vue'
import properties from './UserComponents/Propertiespage.vue'
import propertyDetails from './UserComponents/PropertyDetailspage.vue'
import profile from './UserComponents/Profilepage.vue'
import aboutus from './UserComponents/AboutUspage.vue'
import contactus from './UserComponents/ContactUspage.vue'
import sendfeedback from './UserComponents/SendFeedbackpage.vue'
import propertytype from './UserComponents/PropertyTypepage.vue'
import forgetPassword from './UserComponents/Forgetpage.vue'
import buyerproperties from './UserComponents/BuyerProperties.vue'
import modifyproperty from './UserComponents/ModifyProperty.vue'
Vue.use(VueRouter);


Vue.component('menu1',Menu1);

const routes=[
  {path:'/',component:Homepage},
  {path:'/login',component:login},
  {path:'/register',component:register},
  {path:'/addproperty',component:addproperty},
  {path:'/properties/:type',component:properties},
  {path:'/propertyDetails/:propertyId',component:propertyDetails},
  {path:'/profile',component:profile},
  {path:'/aboutus',component:aboutus},
  {path:'/contactus',component:contactus},
  {path:'/sendfeedback',component:sendfeedback},
  {path:'/propertytype',component:propertytype},
  {path:'/forgetpage',component:forgetPassword},
  {path:'/buyerproperties',component:buyerproperties},
  {path:'/modifyproperty/:propertyId',component:modifyproperty},

]

const router = new VueRouter({
  routes:routes,
})

new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
})
