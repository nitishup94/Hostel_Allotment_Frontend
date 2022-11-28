<template>
  <div>
    <div class="d-flex align-items-center" style="min-height:620px;">

      <div class="myform-card">
     <h2 style="color:white;text-align:center;letter-spacing:1px">Student Login</h2>
        <form class="card-form" id="form"  @submit.prevent="Student_login()">
          
                <div class="input">
            <input type="email" class="input-field" v-model="student_reg.email" id="email" required/>
            <label class="input-label">Email</label>
                    <label id="err_email" style="display: none;"></label>
          </div>
                <div class="input">
            <input type="password" class="input-field" v-model="student_reg.password"  id="pass" required/>
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
  name:'StudentLogin',
  data(){
      return{
        student_reg:{}
      }
    } ,
  methods:{
   async Student_login(){
    const adminconfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
     await axios.get(`api/student/login/${this.student_reg.email}`,adminconfig)
      .then((response)=>{
        
        //password validate
         if(response.data[0].password==this.student_reg.password){

         console.log("logged in successfully!");

         //set login status and set value in localstorage for display data
         localStorage.setItem("student_status",true);
         localStorage.setItem("student_name",response.data[0].name);
         localStorage.setItem("student_fathername",response.data[0].fathername);
         localStorage.setItem("student_room",response.data[0].rooms);
         localStorage.setItem("student_college",response.data[0].college);
         

         //goto the dashboard
         this.$router.push('/student/'+response.data[0]._id)
         }else{

          //for reset input after wrong attempt
          const form = document.getElementById('form');
          form.reset();
          alert("Incorrect password !")
         }


      }).catch((err)=>{
        alert("Incorrect Email !");
        const form = document.getElementById('form');
        form.reset();
        console.log(err)
      })


     
    }
  }
}
</script>
