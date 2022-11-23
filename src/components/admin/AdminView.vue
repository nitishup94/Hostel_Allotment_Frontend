<template>
    <div>
        <AdminNav/>
        <router-view></router-view>
        <!-- footer -->
        <div class="bg-dark text-white footer">
            <p class="text-center p-4 m-0">Footer Content</p>
          </div>
    </div>
</template>

<script>
import AdminNav from './AdminNav.vue'
export default {
name: 'AdminVue',
components:{
    AdminNav
}
}
</script>
<style scoped>
.footer{
    margin-top:20px;
}
</style>