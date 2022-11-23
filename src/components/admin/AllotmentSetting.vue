<template>
    <div>
       
      <div class="container">
        <div class="row" style="margin-bottom:15px;">
            <div class="col"><h2 style="text-align:center;color:blue">Allotment Setting</h2></div>
        </div>
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
                    <option value="1">According Fee Submit date</option>
                </select>
            </div>
        </div>

        <div class="text-center" style="margin-top:75px;">
          <center>
           <div class="action" style="width:40%;">
            <button class="action-button">Save</button>
          </div></center>
        </div>
    </div>
      



    </div>
</template>
<script>
export default {
    name:'AllotmentSetting',
    data(){
        return{
            norooms:'100',
            nostudent:'4',
            pref:'1'
        }
    },
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