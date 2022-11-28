<template>
    <div>
       
      <div class="container">
        <div class="row" style="margin-bottom:15px;">
          <div class="col mt-4">

            <h2 style="text-align:center;color:blue;font-size:25px">Hello {{name}} ,Welecome to the Dashboard ! </h2>
          
          </div>
      </div>
        <div class="text-center" style="margin-top:75px;">
          <center>
           <div class="action" style="width:40%;">
            <a href="https://docs.google.com/spreadsheets/d/1r8ZuzaUlH7A9TN8zYEUwezDG-HAhnYuy/edit?usp=share_link&ouid=106348607906527594470&rtpof=true&sd=true" target="_blank">
              <button class="download-button" type="button">Download Student.xlsx Format</button>
              </a>
            <br><br><br><br>
            <button class="delete-button" @click="delete_student()">Delete All Student</button>
            
          </div></center>
        </div>
        </div>
      



    </div>
</template>
<script>
import axios from  'axios'
export default {
    name:'AdminDashboard',
    data(){
      return{
        userid:this.$route.params.id,

        //store data in localstorage
        clgname:localStorage.getItem("admin_college"),
        name:localStorage.getItem("admin_name"),
      }
    },
    methods:{

  async delete_student(){
    if(confirm('Are you sure?')){
    axios.delete(`api/admin/delete/${this.$route.params.id}`)
    .then((res)=>{
      alert(res.data.deletedCount+' Students deleted !')
    }).catch((err)=>{
      console.log(err);
    })

  }
  }
    }
   
}
</script>
<style scoped>
.container{
  margin:auto;
  margin-top: 5px;
  min-height:660px;
 
  border:2px solid black;
}

.download-button {
  font: inherit;
  font-size: 1.25rem;
  letter-spacing: 2px;
  padding: 1em;
  width: 100%;
  font-weight: 700;
  background-image: linear-gradient(to right, #166abe 40%,  #5095db  100%);
 word-wrap: break-word;
  border-radius: 6px;
  color: #fff;
  border: 0;
}
.delete-button {
  font: inherit;
  font-size: 1.25rem;
  letter-spacing: 2px;
  padding: 1em;
  width: 100%;
  font-weight: 700;
  background-image: linear-gradient(to right, #ba3232 40%,  #b44752  100%);
 
  border-radius: 6px;
  color: #fff;
  border: 0;
}
     

</style>