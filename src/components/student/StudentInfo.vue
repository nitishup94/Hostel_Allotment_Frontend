<template>
    <div>
       
  
        <div class="container">
            <div class="row" style="margin-bottom:10px;">
                <div class="col"><h2 style="text-align:center;color:blue">Student Allotment Status</h2></div>
            </div>
           
    
            <div class="row">
              <div class="col">
               
               
                <table class="table table-bordered table-dark" id="allote" >
                  <thead>
                    <tr>
                      <th scope="col">Name.</th>
                      <th scope="col">Father's Name</th>
                      <th scope="col">Branch</th>
                      <th scope="col">Room No</th>
                    
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-success black_text">
                      <td>{{name}}</td>
                      <td>{{fathername}}</td>
                      <td>{{room}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
        </div>

        </div>
      



    </div>
</template>
<script>
export default {
    name:'studentDashboard',
    data(){
      return{
      
        clgname:localStorage.getItem("student_college"),
        name:localStorage.getItem("student_name"),
        fathername:localStorage.getItem("student_fathername"),
        room:localStorage.getItem("student_room"),

      }
    },
    
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