<template>
    <div>
        <AdminNav/>
        <router-view></router-view>
        <!-- footer -->
        <div class="bg-dark text-white footer">
            <p class="text-center pt-2 m-0">Copyright &copy; {{previousYear}}-{{currentYear}} Design and Developed By</p>
            <p class="text-center pb-3 m-0" style="color:yellow">Nitish Kumar Upadhyay</p>
          </div>
    </div>
</template>

<script>
import AdminNav from './AdminNav.vue'
export default {
name: 'AdminVue',
components:{
    AdminNav
},
data(){
    return{
        currentYear:'',
        previousYear:''
    }
},
created(){
    //year for footer
    this.currentYear= new Date().getFullYear(); 
    this.previousYear = this.currentYear-1;
}
}
</script>
<style scoped>
.footer{
    margin-top:20px;
}
</style>