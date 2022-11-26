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
              <button class="action-button">Register Data</button>
            
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
            items:{}
        }
    },
    methods:{
       async data_process(){
       const input=document.getElementById("excelfile");
      

       
      await readXlsxFile(input.files[0]).then((rows)=>{
      this.items=rows;
       })
       
      
        for(let i=1; i<this.items.length;i++){
          
          await axios.post(`http://localhost:4040/api/admin/student`,{
            studentid:this.items[i][0],
            name:this.items[i][1],
            fathername: this.items[i][2],
            email:this.items[i][3],
            branch:this.items[i][4],
            date: this.items[i][5],
            collegeid:this.$route.params.id,
          }
          )
        .then(()=>{
          // console.log("Student data inserted !")
          if(this.items.length-1==i)
          alert("Successfully  student data Saved")
          
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
</style>
