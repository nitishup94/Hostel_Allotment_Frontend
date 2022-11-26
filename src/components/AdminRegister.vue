<template>
    <div>
      <div class="container">
	
        <div class="myform-card">
       <h2 style="color:white;text-align:center;letter-spacing:1px">Admin Registration</h2>
          <form class="card-form" id="form"  @submit.prevent="Reg_data()">
            <div class="input">
              <input type="text" class="input-field"  v-model="admin_register.name" id="name" required/>
              <label class="input-label">Full Name</label>
                      <label id="err_name" style="display: none;"></label>
            </div>
                  <div class="input">
              <input type="text" class="input-field"  v-model="admin_register.email" id="email" required/>
              <label class="input-label">Email</label>
                      <label id="err_email" style="display: none;"></label>
            </div>
                  <div class="input">
              <input type="text" class="input-field" v-model="admin_register.mobile" id="mobile" required/>
              <label class="input-label">Mobile No</label>
                      <label id="err_mobile" style="display: none;"></label>
            </div>
                  <div class="input">
              <input type="text" class="input-field" v-model="admin_register.college"  required/>
              <label class="input-label">College Name</label>
                      <label id="err_clgname" style="display: none;"></label>
            </div>
                  <div class="input">
              <input type="text" class="input-field" v-model="admin_register.password" id="pass" required/>
              <label class="input-label">Password</label>
                      <label id="err_pass" style="display: none;"></label>
            </div>
            <div class="action">
              <button class="action-button">Register</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
</template>
<script>
import axios from  'axios'
export default {
    name:'AdminRegister',
    data(){
        return{
           
            admin_register:{}
        }
    },
    methods:{
    async  Reg_data(){
     await axios.post('http://localhost:4040/api/admin',this.admin_register)
        .then(()=>{
         //success alert
         alert('Your registration has been successfully done !');
         this.$router.push('/Admin_Login')
          
        }).catch((err)=>{
       const isDuplicate= err.response.data.errmsg.keyPattern.email;
       if(isDuplicate){
        alert('Email is already exist!')
       }else{
        alert(err.message);
       }
        })
//for reset input after submit
const form = document.getElementById('form');
form.reset();
    }
    }
}
</script>
<style>


img {
  max-width: 100%;
  display: block;
}
input {
  appearance: none;
  border-radius: 0;
}
.myform-card {
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 425px;
  background-color: #fff;
  border-radius: 10px;
 background: linear-gradient(to right, #6a7a89, #bdc3c7);
  box-shadow: 0 10px 20px 0 rgba(153, 153, 153, .25);
  padding: 0.75rem;
}
.card-heading {
  position: absolute;
  left: 10%;
  top: 15%;
  right: 10%;
  font-size: 1.75rem;
  font-weight: 700;
  color: #735400;
  line-height: 1.222;
}
.card-heading small {
  display: block;
  font-size: 0.75em;
  font-weight: 400;
  margin-top: 0.25em;
}
.card-form {
  padding: 2rem 1rem 0;
}
.input {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  padding-top: 1.5rem;
}
.input + .input {
  margin-top: 1.5rem;
}
.input-label {
  color: #eff3f6;
  position: absolute;
  top: 1.5rem;
  transition: 0.25s ease;
}
.input-field {
  border: 0;
  z-index: 1;
  background-color: transparent;
  border-bottom: 2px solid #eee;
  font: inherit;
  font-size: 1.125rem;
  padding: 0.25rem 0;
}
.input-field:focus, .input-field:valid {
  outline: 0;
  border-bottom-color: #dcdae8;
}
.input-field:focus + .input-label, .input-field:valid + .input-label {
  color: #dcdbea;
  transform: translateY(-1.5rem);
}
.action {
  margin-top: 2rem;
}
.action-button {
  font: inherit;
  font-size: 1.25rem;
  letter-spacing: 2px;
  padding: 1em;
  width: 100%;
  font-weight: 700;
  background: linear-gradient(to right, #92a2a6, #E6DADA);
 
  border-radius: 6px;
  color: #fff;
  border: 0;
}
.action-button:hover{
  border:2px solid white;
  box-shadow: 0 5px 10px 0 rgba(219, 209, 209, 0.552);
}
.action-button:focus {
  outline: 0;
}
.card-info {
  padding: 1rem 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #e6edf2;
}
.card-info a {
  display: block;
  color: #6658d3;
  text-decoration: none;
}
.err{

 display:none;
}

</style>