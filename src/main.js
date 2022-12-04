import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'
import axios from 'axios'
//base url failed https://hostelallotment-api.onrender.com/
//localhost api http://localhost:4040/ 

axios.defaults.baseURL='https://hostel-allotment-api.onrender.com/'
Vue.config.productionTip = false
Vue.use(VueRouter);

//student loggedin flag 
var isloggedin=false
// admin loggedin flag
var isadmin=false


const router=new VueRouter({
  mode:'history',
  routes
} 
)
//gourd
router.beforeEach((to,from,next)=>{
  //student auth
  if(to.meta.auth){
    isloggedin=localStorage.getItem("student_status");
    if(isloggedin){
      next();
    }else{
      next('/Student_login');
    }  
  }else{
    next();
  }
//admin authentication
if(to.meta.adminauth){
   isadmin = localStorage.getItem("admin_status");

  if(isadmin){
    next();
  }else{
    next('/Admin_Login');
  }  
}else{
  next();
}

})


new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
