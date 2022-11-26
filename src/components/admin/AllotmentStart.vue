<template>
    <div>
       
      <div class="container">
        <div class="row" style="margin-bottom:15px;">
            <div class="col"><h2 style="text-align:center;color:blue">Allotment Start</h2></div>
        </div>
        <div class="row">
          <div class="col">
            <table class="table table-bordered">
              
              <tbody>
                <tr class="table-success">
                  <td>Available Rooms</td>
                  <td>{{norooms}}</td>
                </tr>
                <tr class="table-success">
                  <td>Remaining Students</td>
                  <td>{{totalstudent}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
       
        
        <div class="text-center" style="margin-top:75px;">
          <center>
           <div class="action" style="width:40%;">
            <button class="action-button" @click="allotment">Start</button>
          </div></center>
        </div>
    </div>
      



    </div>
</template>
<script>
import axios from  'axios'

export default {
    name:'AllotmentStart',
    data(){
        return{
            norooms:0,
            nostudent:0,
            pref:1,
            totalstudent:0,
             randomemail:[]

        }
    },
    async mounted() {
     //fetch data of settings
      
      await axios.get(`http://localhost:4040/api/admin/fetchsetting/${this.$route.params.id}`)
        .then((response)=>{
      
          this.norooms=response.data[0].rooms;
          this.nostudent=response.data[0].noofstudent;
          this.pref=response.data[0].prefstudent;
        
        }).catch((err)=>{
          console.log(err);
        });
     //total no. of student
     var studentemail=[];
     
      await axios.get(`http://localhost:4040/api/admin/studentinfo/${this.$route.params.id}`)
            .then((res)=>{
                
                 for (var key in res.data) {
                  studentemail.push(res.data[key].email);
                 }
                 
                let datalen=studentemail.length;
                for(let i=0; i<datalen; i++){
                  let random=Math.floor(Math.random() *studentemail.length);
                  let one_email=studentemail.splice(random,1)
                  this.randomemail.push(one_email[0]);
                 }
                 this.totalstudent=this.randomemail.length;
                 })

               



  

    },
    
    methods:{
     async allotment(){
      //initialize all counter for allotment
      
      let inoneroom= this.nostudent;
      let  student_cnt=this.totalstudent;
      let total_iteration=Math.ceil(student_cnt/inoneroom);
    
      for(let i=0; i<total_iteration; i++){
         
       
        // if(this.norooms>=total_iteration){
      
          for(let j=0; j<inoneroom; j++){
            await axios.put(`http://localhost:4040/api/admin/studentroom/${this.randomemail[0]}`,{
                  rooms:i+1,
                  status:1
            }).then(()=>{
              const index = this.randomemail.indexOf(this.randomemail[0]);
               if (index > -1) { 
                this.randomemail.splice(index, 1);
               }
          })
          this.totalstudent--;
          if(this.totalstudent<=0)
          break;
           
          }
          
        // }
        this.norooms--;
        if(this.norooms<=0)
          break;
      }
      await axios.put(`http://localhost:4040/api/admin/updatesetting/${this.$route.params.id}`,{
        rooms:this.norooms
            }).then(()=>{
                alert("Allotment done successfully done!")
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