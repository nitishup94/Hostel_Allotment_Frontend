<template>
    <div>
       
      <div class="container">
        <div class="row" style="margin-bottom:10px;">
            <div class="col"><h2 style="text-align:center;color:blue">Generate Report</h2></div>
        </div>
       

        <div class="row">
          <div class="col">
            <div class="col"><h2 style="text-align:center;color:black">Alloted Student List</h2></div>
           <p id="btncontainer">
            <button type="button" class="btn btn-success mr-2" @click="alloted_generate">Download</button> 
            <button type="button" class="btn btn-info mr-1" @click="allotment_mail">Send Confirmation Mail</button>
           </p>
            <table class="table table-bordered table-dark" id="allote" >
              <thead>
                <tr>
                  <th scope="col">SNo.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Branch</th>
                  <th scope="col">Room No</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr class="table-success black_text" v-for="(allotment,index) in alloteddata" :key="allotment.email">
                  <td>{{index+1}}</td>
                  <td>{{allotment.name}}</td>
                  <td>{{allotment.branch}}</td>
                  <td>{{allotment.rooms}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col">
            <div class="col"><h2 style="text-align:center;color:black">Not Alloted Student List</h2></div>
           <p id="btncontainer">
            <button type="button" class="btn btn-success mr-2" @click="not_alloted_generate">Download</button> 
            <button type="button" class="btn btn-info mr-1" @click="rejection_mail">Send Rejection Mail</button>
           </p>
            <table class="table table-bordered table-dark" id="notallote">
              <thead>
                <tr>
                  <th scope="col">SNo.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Branch</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-danger black_text" v-for="(notallotment,ind) in notalloteddata" :key="notallotment.email">
                  <td>{{ind+1}}</td>
                  <td>{{notallotment.name}}</td>
                  <td>{{notallotment.branch}}</td>
                  <td v-if="notallotment.rooms==0">Not Alloted</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
       

       
    </div>
      



    </div>
</template>
<script>
import axios from  'axios'
import jsPDF from 'jspdf'
import 'jspdf-autotable';

export default {
    name:'GenerateReport',
    data(){
        return{
           alloteddata:[],
           notalloteddata:[],
        }
    },
    async mounted() {
     //fetch data for alloted table
    
     await axios.get(`api/admin/alloted/${this.$route.params.id}`)
            .then((res)=>{
             this.alloteddata=res.data
            })
            .catch((err)=>{
              console.log(err);
            })
     

     //fetch data for not alloted table
     await axios.get(`api/admin/notalloted/${this.$route.params.id}`)
            .then((response)=>{
             this.notalloteddata=response.data
            })
            .catch((err)=>{
              console.log(err);
            })
    },
    

    methods:{
      //generate list for alloted student
      alloted_generate(){
      const doc = new jsPDF('p', 'pt','A4')
      doc.text('Alloted Student List', 40, 40)
      doc.autoTable({
       html: '#allote',
       startY:50,
       styles:{
       fontSize:10,
       }
     })
     doc.save('Hostel_Allotment_List.pdf')
      },

      not_alloted_generate(){
      const doc = new jsPDF('p', 'pt','A4')
      doc.text('Not Alloted Student List', 40, 40)
      doc.autoTable({
       html: '#notallote',
       startY:50,
       styles:{
       fontSize:10,
       }
     })
     doc.save('Hostel_Rejected_List.pdf')
      },
     //allotment mail
      allotment_mail(){
             for(let i=0; i<this.alloteddata.length; i++){
             axios.post(`api/admin/mail`,{
                  name:this.alloteddata[i].name,
                  room:this.alloteddata[i].rooms,
                  email:this.alloteddata[i].email,
                  pass:this.alloteddata[i].password
              })
               
              if(this.alloteddata.length-1==i)
              alert("Email Successfully send to the all alloted students.")
            
          }
     },
     //rejection mail
     rejection_mail(){
             for(let i=0; i<this.notalloteddata.length; i++){
             axios.post(`api/admin/reject_mail`,{
                  email:this.notalloteddata[i].email,
                  name:this.notalloteddata[i].name,
              })
               
              if(this.notalloteddata.length-1==i)
              alert("Email Successfully send to the all rejected students.")
            
          }
     },
     


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
.black_text{
  color:black;
}
</style>