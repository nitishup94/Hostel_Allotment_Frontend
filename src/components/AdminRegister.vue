<template>
    <div>
      <div class="container">
	
        <div class="myform-card">
       <h2 style="color:white;text-align:center;letter-spacing:1px">Admin Registration</h2>
          <form class="card-form" id="form"  @submit.prevent="Reg_data()">
            <div class="input">
              <input type="text" class="input-field"  v-model="admin_register.name" id="name"  autocomplete="off" required/>
              <label class="input-label">Full Name</label>
                      <label id="err_name" style="display: none;"></label>
            </div>
                  <div class="input">
              <input type="text" class="input-field"  v-model="admin_register.email" id="email" autocomplete="off" required/>
              <label class="input-label">Email</label>
                      <label id="err_email" style="display: none;"></label>
            </div>
                  <div class="input">
              <input type="text" class="input-field" v-model="admin_register.mobile" id="mobile" autocomplete="off" required/>
              <label class="input-label">Mobile No</label>
                      <label id="err_mobile" style="display: none;"></label>
            </div>
                  <div class="input">
              <input type="text" class="input-field" v-model="admin_register.college" autocomplete="off" required/>
              <label class="input-label">College Name</label>
                      <label id="err_clgname" style="display: none;"></label>
            </div>
                  <div class="input">
              <input type="password" class="input-field" v-model="admin_register.password" id="pass" autocomplete="off" required/>
              <label class="input-label">Password</label>
                      <label id="err_pass" style="display: none;"></label>
            </div>
            <div class="action">
              <button class="action-button">Register</button>
            </div>
          </form>
          <br/>
          <center><p>Note: Password must be greater or equal to 8 Character.[A-Z,a-z,0-9,symbol].   </p></center>
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
            registerflag:false,
            admin_register:{}
        }
    },
    methods:{
      validate_data(){
    //name validation
var  name=document.getElementById("name").value;
var name_ptrn=/^[A-Za-z ]+$/gi;
if(name_ptrn.test(name)){
    let name_err=document.getElementById("err_name")
name_err.style.display = "block";
name_err.style.color = "yellow";
name_err.innerHTML="Done! You have entered a valid name.";
   
}else{
let name_err=document.getElementById("err_name")
name_err.style.display = "block";
name_err.style.color = "red";
name_err.innerHTML="Please enter a valid name !";
   return false;
}

 //email validation
 var  email=document.getElementById("email").value;
var email_ptrn=/^[A-z0-9._]{3,}@[A-z]{3,5}.[A-z]{3,5}$/gi;
if(email_ptrn.test(email)){
    let email_err=document.getElementById("err_email")
email_err.style.display = "block";
email_err.style.color = "yellow";
email_err.innerHTML="Done! You have entered a valid email.";
  
}else{
let email_err=document.getElementById("err_email")
email_err.style.display = "block";
email_err.style.color = "red";
email_err.innerHTML="Please enter a valid email !";
   return false;
}


 //mobile validation
 var  mobile=document.getElementById("mobile").value;
var mobile_ptrn=/^[0-9]{10,10}$/g;
if(mobile_ptrn.test(mobile)){
    let mobile_err=document.getElementById("err_mobile")
mobile_err.style.display = "block";
mobile_err.style.color = "yellow";
mobile_err.innerHTML="Done! You have entered a valid mobile no.";

}else{
let mobile_err=document.getElementById("err_mobile")
mobile_err.style.display = "block";
mobile_err.style.color = "red";
mobile_err.innerHTML="Please enter a valid mobile no.!";
   return false;
}

 //password validation
 var  pass=document.getElementById("pass").value;
var pass_ptrn=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if(pass_ptrn.test(pass)){
    let pass_err=document.getElementById("err_pass")
pass_err.style.display = "block";
pass_err.style.color = "yellow";
pass_err.innerHTML="Done! You have entered a valid password .";
   return true;
}else{
let pass_err=document.getElementById("err_pass")
pass_err.style.display = "block";
pass_err.style.color = "red";
pass_err.innerHTML="Please enter a valid password .!";
   return false;
}


},




    async  Reg_data(){

if(this.validate_data()){
  console.log('inside')
     await axios.post('api/admin',this.admin_register)
        .then(()=>{
         //without promise send request to the server for registration confirmation mail
         axios.post('api/admin/confirm_mail',{
          name:this.admin_register.name,
          email:this.admin_register.email,
          college:this.admin_register.college,
        })
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