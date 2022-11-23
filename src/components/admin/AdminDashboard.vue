<template>
    <div>
       
      <div class="container">
        <div class="row" style="margin-bottom:15px;">
          <div class="col"><h2 style="text-align:center;color:blue">Student Data Format</h2></div>
      </div>
        <div class="text-center" style="margin-top:75px;">
          <center>
           <div class="action" style="width:40%;">
            <button class="action-button">Download .xlsx Format</button>
          </div></center>
        </div>
        </div>
      



    </div>
</template>
<script>
export default {
    name:'AdminDashboard',
    methods:{
      login(){
        this.$router.push('/student')
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