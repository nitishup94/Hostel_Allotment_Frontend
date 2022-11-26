<template>
    <div>
       
      <div class="container">
        <div class="row" style="margin-bottom:15px;">
            <div class="col"><h2 style="text-align:center;color:blue">Allotment Setting</h2></div>
        </div>
        <form class="card-form" id="form"  @submit.prevent="update()">
        <div class="row">
          <div class="col">
            <label for="norooms"><b>Number of Rooms</b></label>
            <input type="text" v-model="norooms" class="inputData" id="norooms">
          </div>
          <div class="col">
            <label for="nostudent"><b>No. of Student (in 1 room)</b></label>
            <input type="text"  v-model="nostudent" class="inputData" id="nostudent">
          </div>
        </div>
        <div class="row">
            <div class="col" style="margin-top:35px;">
                <label for="preference"><b>Allotment Preference : </b></label>
                <select  id="preference" v-model="pref">
                    <option value="1">Random Allotment</option>
                </select>
            </div>
        </div>

        <div class="text-center" style="margin-top:75px;">
          <center>
           <div class="action" style="width:40%;">
            <button class="action-button">Save</button>
          </div></center>
        </div></form>
    </div>
      



    </div>
</template>
<script>
import axios from  'axios'

export default {
    name:'AllotmentSetting',
    data(){
        return{
            norooms:0,
            nostudent:0,
            pref:1
        }
    },
    async mounted() {
     //fetch data for setting
      const adminconfig = {
        headers: {
          "Content-Type": "application/json",
        }, 
      };
      await axios.get(`http://localhost:4040/api/admin/fetchsetting/${this.$route.params.id}`,adminconfig)
        .then((response)=>{
      
          this.norooms=response.data[0].rooms;
          this.nostudent=response.data[0].noofstudent;
          this.pref=response.data[0].prefstudent;
        
        }).catch((err)=>{
          console.log(err);
        });
    },
    
    methods:{
     async update(){
      
       await axios.put(`http://localhost:4040/api/admin/updatesetting/${this.$route.params.id}`,{
        rooms:this.norooms,
        noofstudent: this.nostudent,
        pref:  this.pref
       })
        .then(()=>{
          // console.log(response.data)
          alert('Settings have been updated successfully !')
        }).catch((err)=>{
           console.log(err)
        })
          



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
.inputData,#preference{
    width: 90%;
    padding: 5px 10px;
    font-weight: bold;
    color: blue;
    border: 3px inset #ccc;
    background: #FFFACD;
}
#preference{
    border: 3px outset #ccc;
    background: #FFFACD;
    width: auto;
    padding: 5px 8px;
}
</style>