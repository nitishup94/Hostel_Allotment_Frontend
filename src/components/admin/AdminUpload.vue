<template>
    <div>
       
      <div class="container"> <form class="card-form" id="form"  @submit.prevent="data_process()">
        <div class="row" style="margin-bottom:15px;">
            <div class="col"><h2 style="text-align:center;color:blue">Student Data Upload</h2></div>
        </div>
        <div class="row">
          <div class="col">
           
            <label class="form-label" for="excelfile">Please Select student.xlsx file</label>
            <input type="file" class="form-control"  id="excelfile" />
            
          </div>
          
        </div>
        <div class="text-center" style="margin-top:75px;">
            <center>
             <div class="action" style="width:40%;">
              <button class="action-btn">Register Data</button>
            
            </div></center>
          </div>
        </form>
        </div>
      



    </div>
</template>
<script>
import axios from  'axios'
import readXlsxFile from 'read-excel-file'
export default {
    name:'AdminUpload',
    data(){
        return{
            items:[]
        }
    },
    methods:{
       async data_process(){
       const input=document.getElementById("excelfile");
      

       
      await readXlsxFile(input.files[0]).then((rows)=>{
      this.items=rows;
       })
       
         const min = 1000;
         const max = 100000;
         var stop=false;
        for(let i=1; i<this.items.length;i++){
          
          await axios.post(`api/admin/student`,{
            studentid:this.items[i][0],
            name:this.items[i][1],
            fathername: this.items[i][2],
            email:this.items[i][3],
            branch:this.items[i][4],
            date: this.items[i][5],
            collegeid:this.$route.params.id,
            pass:Math.floor(Math.random() * (max - min + 1) + min)
          }
          )
        .then(()=>{
         
          if(this.items.length-1==i){

          alert("Successfully students data Saved")
          //reset form
          const form = document.getElementById('form');
          form.reset();
          }
        })
        .catch((err)=>{
          const isDuplicate= err.response.data.errmsg.keyPattern.email;
          stop=true;
          if(isDuplicate){
          alert('Email is already exists!')
          
          }else{
          alert(err.message);
          }
        })
      
        if(stop)
        break;
       
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
.action-btn{
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
</style>
