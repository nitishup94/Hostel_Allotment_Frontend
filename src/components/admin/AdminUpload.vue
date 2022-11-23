<template>
    <div>
       
      <div class="container">
        <div class="row" style="margin-bottom:15px;">
            <div class="col"><h2 style="text-align:center;color:blue">Student Data Upload</h2></div>
        </div>
        <div class="row">
          <div class="col">

            <label class="form-label" for="excelfile">Please Select student.xlsx file</label>
            <input type="file" class="form-control"  id="excelfile" @change="data_process()" />
          </div>
          
        </div>
        <div class="text-center" style="margin-top:75px;">
            <center>
             <div class="action" style="width:40%;">
              <button class="action-button">Register Data</button>
            </div></center>
          </div>
        </div>
      



    </div>
</template>
<script>
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
       if(input.files[0]['type']==='xlsx'){

       
      await readXlsxFile(input.files[0]).then((rows)=>{
      this.items=rows;
       })

       console.log(JSON.stringify(this.items))

      }else{
        console.log('not proper format')
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
