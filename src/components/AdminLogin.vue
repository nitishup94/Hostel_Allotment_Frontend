<template>
    <div>
      <div class="d-flex align-items-center" style="min-height:620px;">
	
        <div class="myform-card">
       <h2 style="color:white;text-align:center;letter-spacing:1px">Admin Login</h2>
          <form class="card-form" id="form"  @submit.prevent="Admin_login()">
            
                  <div class="input">
              <input type="text" class="input-field" v-model="email" id="email" required/>
              <label class="input-label">Email</label>
                      <label id="err_email" style="display: none;"></label>
            </div>
                  <div class="input">
              <input type="text" class="input-field" v-model="pass"  id="pass" required/>
              <label class="input-label">Password</label>
                      <label id="err_password" style="display: none;"></label>
            </div>
                 
            <div class="action">
              <button class="action-button">Login</button>
            </div>
          </form> 
          
        </div>
      </div>

      
    </div>
</template>
<script>
import axios from  'axios'
export default {
    name:'AdminLogin',
    data(){
        return{
          email:'',
          pass:' '
        }
      } ,
    methods:{
     async Admin_login(){
        await axios.get('https://vue-router-36087-default-rtdb.firebaseio.com/posts.json',{
      email:this.email,
      pass:this.pass
        })
        .then((response)=>{
           console.log(response.data);
        }).catch((err)=>{
          console.log(err)
        })
//for reset input after submit
if(this.pass.length>5){
  localStorage.setItem("admin_status",true);
  this.$router.push('/admin')
}
       
      }
    }
}
</script>
